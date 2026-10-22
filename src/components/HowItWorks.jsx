import React from 'react';
import '../styles/HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Theory & Cockpit Setup',
      desc: 'Learn dashboard controls, mirror adjustments, blind spots, and clutch bite-point in a peaceful, zero-pressure residential zone.',
      highlight: false
    },
    {
      num: '02',
      title: 'Maneuvers & Road Skills',
      desc: 'Master parallel parking, roundabouts, 3-point turns, and speed control with our certified, patient instructors beside you.',
      highlight: true
    },
    {
      num: '03',
      title: 'Test Route Simulation',
      desc: 'Practice on actual examiner routes and mock tests around your local test centre until you can drive with complete independence.',
      highlight: false
    },
    {
      num: '04',
      title: 'Test Day & Celebration',
      desc: 'Use your instructor car on test day, pass on your first attempt, and receive your full driver license with pride!',
      highlight: false
    }
  ];

  return (
    <section className="curriculum-section" id="how-it-works">
      <div className="curriculum-header">
        <span className="curriculum-tag">STEP-BY-STEP CURRICULUM</span>
        <h2 className="curriculum-title">From First Turn to Full License</h2>
        <p className="curriculum-desc">We break down driving into simple, enjoyable milestones so you never feel overwhelmed.</p>
      </div>

      <div className="curriculum-grid">
        {steps.map(step => (
          <div key={step.num} className={`curriculum-card ${step.highlight ? 'featured' : ''}`}>
            <div className="curriculum-badge">{step.num}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
