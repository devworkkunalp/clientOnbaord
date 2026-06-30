import React from 'react';

export default function Hero({ onOpenModal }) {
  const handleScrollToBoard = () => {
    const boardEl = document.getElementById('board');
    if (boardEl) {
      boardEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero">
      <div className="wrap">
        <div className="eyebrow">
          <span className="dot"></span>
          Agile Software Delivery
        </div>
        <h1>
          We run agile the way it's <span className="accent">meant</span> to be run.
        </h1>
        <p className="lede">
          Sprint planning, daily stand-ups, mid-sprint check-ins, retros — every ceremony, every sprint, no shortcuts. And a board you have access to throughout, so you always have full visibility into what the team is doing and why.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={onOpenModal}>
            Book a call
          </button>
          <button className="btn-ghost" onClick={handleScrollToBoard}>
            See the board in action
          </button>
        </div>
      </div>
    </header>
  );
}
