import React from 'react';

export default function CTA({ onOpenModal }) {
  return (
    <section className="cta-section" id="cta">
      <div className="wrap">
        <h2>Want to see your actual project on this board?</h2>
        <p>
          We'll set up a working sprint board for your first two weeks before you commit to anything — so you can judge the process, not just the pitch.
        </p>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <button className="btn-primary" onClick={onOpenModal}>
            Book a call
          </button>
        </div>
      </div>
    </section>
  );
}
