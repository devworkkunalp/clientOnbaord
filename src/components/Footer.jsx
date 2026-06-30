import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div
        className="wrap"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          flexWrap: 'wrap',
          gap: '10px'
        }}
      >
        <span>Sprintline — agile delivery, made visible.</span>
        <span>Built to demonstrate process, not just promise it.</span>
      </div>
    </footer>
  );
}
