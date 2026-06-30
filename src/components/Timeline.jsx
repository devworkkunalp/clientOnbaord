import React from 'react';

const CADENCE_STEPS = [
  {
    day: 'Day 1',
    title: 'Sprint planning',
    description: 'We size the backlog together, agree scope for the next two weeks, and you see exactly what\'s committed — nothing vague, nothing "we\'ll see."'
  },
  {
    day: 'Daily',
    title: '15-minute stand-up',
    description: 'The team aligns on progress and blockers. Updates are logged directly on the board, giving you a running record without needing to ask.'
  },
  {
    day: 'Day 5 / 10',
    title: 'Mid-sprint demo',
    description: 'You see working software, not slides. If direction needs to shift, we catch it at the midpoint, not at delivery.'
  },
  {
    day: 'Day 10',
    title: 'Review & retro',
    description: 'We walk through what shipped, what didn\'t, and why — then adjust the next sprint based on what we learned, openly.'
  }
];

export default function Timeline() {
  return (
    <section className="section" id="cadence">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-label">The rhythm</div>
          <h2>A two-week sprint, run by the book.</h2>
          <p>
            Sprint planning, daily stand-ups, a mid-sprint check-in, and a closing retro — every cycle, without exception. You're invited into as much of it as you want to see.
          </p>
        </div>

        <div className="cadence reveal">
          {CADENCE_STEPS.map((step, idx) => (
            <div className="cad-row" key={idx}>
              <div className="cad-day">{step.day}</div>
              <div className="cad-body">
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
