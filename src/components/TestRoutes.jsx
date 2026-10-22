import React, { useState } from 'react';
import '../styles/TestRoutes.css';

export default function TestRoutes() {
  const [activeCheckpoint, setActiveCheckpoint] = useState(1);

  const checkpoints = [
    {
      id: 1,
      title: 'Test Centre Departure & Eyebrow Check',
      desc: 'Smooth cockpit drill, 360-degree observation before moving off, and mirror checks.'
    },
    {
      id: 2,
      title: 'Multi-Lane Roundabout Lane Discipline',
      desc: 'Master spiral roundabouts, signalling timing, and lane positioning without hesitation.'
    },
    {
      id: 3,
      title: 'Parallel Parking & Reverse Bay Maneuver',
      desc: 'Foolproof reference points that guarantee you park accurately within two car lengths.'
    },
    {
      id: 4,
      title: 'Independent Driving & SatNav Navigation',
      desc: 'Follow satellite navigation guidance autonomously for 20 minutes with zero examiner intervention.'
    }
  ];

  return (
    <section className="routes-section" id="routes">
      <div className="routes-header">
        <span className="routes-tag">TEST ROUTE MASTERY</span>
        <h2 className="routes-title">Know Your Exam Routes Before Test Day</h2>
        <p className="routes-desc">Examiners use specific local routes. We train you directly on the roundabouts and parking spots you will encounter.</p>
      </div>

      <div className="routes-card-split">
        <div className="routes-map-container">
          <img 
            src="/illustrations/home/map-route.svg" 
            alt="Interactive Local Driving Test Route Map" 
            width="500" 
            height="400" 
          />
        </div>

        <div className="routes-details">
          <h3>Official Test Checkpoints</h3>
          <p>Click any checkpoint to see how our instructors prepare you for tricky exam spots:</p>

          {checkpoints.map(cp => (
            <div 
              key={cp.id}
              className={`checkpoint-row ${activeCheckpoint === cp.id ? 'active' : ''}`}
              onClick={() => setActiveCheckpoint(cp.id)}
            >
              <div className="cp-badge">0{cp.id}</div>
              <div>
                <h4>{cp.title}</h4>
                <p>{cp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
