import React from 'react';

const SKILLS_DATA = [
  {
    icon: '🖥️',
    iconBg: '#EAF1FF',
    title: 'Frontend Engineering',
    description: 'React, Vue, and accessible, performant interfaces — built to match real designs pixel for pixel.',
    percentage: '92%'
  },
  {
    icon: '⚙️',
    iconBg: '#E9F8F1',
    title: 'Backend & APIs',
    description: '.NET, Node.js, and Python services, architected for scalability, security, and long-term maintainability.',
    percentage: '90%'
  },
  {
    icon: '☁️',
    iconBg: '#F1EBFC',
    title: 'Cloud & Infrastructure',
    description: 'AWS / GCP deployment pipelines, CI/CD, and infrastructure-as-code so releases are routine, not risky.',
    percentage: '85%'
  },
  {
    icon: '🧪',
    iconBg: '#FFF2E4',
    title: 'QA & Test Automation',
    description: 'Automated and manual test coverage built into every sprint, ensuring quality is verified before release, not after.',
    percentage: '88%'
  },
  {
    icon: '📱',
    iconBg: '#EAF1FF',
    title: 'Mobile',
    description: 'React Native and native iOS/Android builds, kept in lockstep with the same sprint cadence.',
    percentage: '80%'
  },
  {
    icon: '🗺️',
    iconBg: '#E9F8F1',
    title: 'Delivery & Product',
    description: 'A dedicated delivery lead manages planning, board maintenance, and client reporting throughout the engagement.',
    percentage: '95%'
  }
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-label">Bench strength</div>
          <h2>One team, every layer of the stack covered.</h2>
          <p>
            5–10 engineers who've shipped together for years — not a bench of strangers assembled per-project.
          </p>
        </div>

        <div className="skill-grid">
          {SKILLS_DATA.map((skill, idx) => (
            <div className="skill-card reveal" key={idx}>
              <div
                className="skill-icon"
                style={{ background: skill.iconBg }}
              >
                {skill.icon}
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{ width: skill.percentage }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
