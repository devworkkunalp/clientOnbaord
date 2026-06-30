import React from 'react';

export default function Navbar({ onOpenModal }) {
  return (
    <nav>
      <div className="wrap">
        <div className="brand">
          <span className="brand-mark"></span>
          Sprintline
        </div>
        <div className="nav-links">
          <a href="#board">The Board</a>
          <a href="#cadence">How We Work</a>
          <a href="#skills">Expertise</a>
          <a href="#team">The Team</a>
        </div>
        <button className="nav-cta" onClick={onOpenModal}>Book a call</button>
      </div>
    </nav>
  );
}
