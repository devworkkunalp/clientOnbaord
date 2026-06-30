import React from 'react';

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="wrap">
        <div className="team-strip reveal">
          <div className="team-copy">
            <h3>A small team that already knows how to work together.</h3>
            <p>
              5 to 10 engineers, not a rotating freelance pool. We've shipped multiple projects side by side, so there's no ramp-up time spent learning each other's habits — that time goes straight into your product.
            </p>
          </div>
          <div className="team-stats">
            <div className="tstat">
              <div className="num">5–10</div>
              <div className="lbl">Engineers</div>
            </div>
            <div className="tstat">
              <div className="num">2wk</div>
              <div className="lbl">Sprint length</div>
            </div>
            <div className="tstat">
              <div className="num">100%</div>
              <div className="lbl">Board visibility</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
