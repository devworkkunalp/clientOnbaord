import React, { useState } from 'react';

const SEED_DATA = {
  backlog: [
    { id: 't1', label: 'Design payment retry flow', tag: 'fe', pts: '3 pts' },
    { id: 't2', label: 'Spec multi-tenant auth', tag: 'be', pts: '5 pts' },
    { id: 't3', label: 'Set up staging environment', tag: 'infra', pts: '2 pts' },
  ],
  progress: [
    { id: 't4', label: 'Build checkout API endpoint', tag: 'be', pts: '5 pts' },
    { id: 't5', label: 'Implement dashboard charts', tag: 'fe', pts: '3 pts' },
    { id: 't6', label: 'Write integration test suite', tag: 'qa', pts: '3 pts' },
  ],
  review: [
    { id: 't7', label: 'User onboarding redesign', tag: 'fe', pts: '4 pts' },
    { id: 't8', label: 'Rate-limiting middleware', tag: 'be', pts: '2 pts' },
  ],
  done: [
    { id: 't9', label: 'CI pipeline for preview deploys', tag: 'infra', pts: '3 pts' },
    { id: 't10', label: 'Login page accessibility pass', tag: 'qa', pts: '2 pts' },
  ]
};

const TAG_NAMES = { fe: 'Frontend', be: 'Backend', qa: 'QA', infra: 'Infra' };

export default function Board() {
  const [boardData, setBoardData] = useState(SEED_DATA);
  const [draggedItem, setDraggedItem] = useState(null); // { task, sourceCol }
  const [dragOverCol, setDragOverCol] = useState(null); // column key currently dragged over

  // Calculate progress
  const totalTasks = Object.values(boardData).reduce((sum, list) => sum + list.length, 0);
  const doneTasks = boardData.done.length;
  const progressPct = totalTasks ? Math.round((doneTasks / totalTasks) * 100) : 0;

  // Drag handlers for task cards
  const handleDragStart = (e, task, sourceCol) => {
    setDraggedItem({ task, sourceCol });
    // Use dataTransfer for HTML5 standard (needed for some browsers)
    e.dataTransfer.setData('text/plain', task.id);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverCol(null);
  };

  // Dragover handler for columns
  const handleDragOver = (e, colKey) => {
    e.preventDefault();
    if (dragOverCol !== colKey) {
      setDragOverCol(colKey);
    }
  };

  // Drop handler
  const handleDrop = (e, targetColKey) => {
    e.preventDefault();
    setDragOverCol(null);

    if (!draggedItem) return;

    const { task, sourceCol } = draggedItem;

    // Do nothing if dropped in the same column
    if (sourceCol === targetColKey) return;

    // Move task
    setBoardData((prev) => {
      // Remove from source
      const updatedSource = prev[sourceCol].filter((t) => t.id !== task.id);
      // Add to target
      const updatedTarget = [...prev[targetColKey], task];

      return {
        ...prev,
        [sourceCol]: updatedSource,
        [targetColKey]: updatedTarget,
      };
    });
  };

  const columnsConfig = [
    { key: 'backlog', label: 'Backlog', dotClass: 'dot-backlog' },
    { key: 'progress', label: 'In Progress', dotClass: 'dot-progress' },
    { key: 'review', label: 'In Review', dotClass: 'dot-review' },
    { key: 'done', label: 'Done', dotClass: 'dot-done' }
  ];

  return (
    <section className="section" id="board">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-label">Live workflow</div>
          <h2>This is what your project board looks like.</h2>
          <p>
            Every engagement runs on a real Kanban board, broken into two-week sprints, backed by the full set of agile ceremonies. Drag a card below — this is the exact view you'd get access to from day one.
          </p>
        </div>

        <div className="board-frame reveal">
          <div className="board-topbar">
            <div className="board-title">
              Client Project — Sprint Board <span className="sprint-tag">SPR-14</span>
            </div>
            <div className="burndown-mini">
              Sprint progress
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${progressPct}%` }}
                ></div>
              </div>
              <span>{progressPct}%</span>
            </div>
          </div>

          <div className="board-columns">
            {columnsConfig.map((col) => (
              <div
                key={col.key}
                className={`col ${dragOverCol === col.key ? 'dragover' : ''}`}
                onDragOver={(e) => handleDragOver(e, col.key)}
                onDragLeave={() => setDragOverCol(null)}
                onDrop={(e) => handleDrop(e, col.key)}
              >
                <div className="col-head">
                  <span>
                    <span className={`col-dot ${col.dotClass}`}></span>
                    {col.label}
                  </span>
                  <span className="count">{boardData[col.key].length}</span>
                </div>

                {boardData[col.key].map((task) => {
                  const isDraggingThis = draggedItem?.task?.id === task.id;
                  return (
                    <div
                      key={task.id}
                      className="task"
                      draggable
                      onDragStart={(e) => handleDragStart(e, task, col.key)}
                      onDragEnd={handleDragEnd}
                      style={{ opacity: isDraggingThis ? 0.35 : 1 }}
                    >
                      <span className="tlabel">{task.label}</span>
                      <div className="tmeta">
                        <span className={`tag tag-${task.tag}`}>
                          {TAG_NAMES[task.tag]}
                        </span>
                        <span className="pts mono">{task.pts}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <p className="board-hint">↕ Drag any card between columns — try moving something to "Done"</p>
        </div>
      </div>
    </section>
  );
}
