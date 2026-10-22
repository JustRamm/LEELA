import React from 'react';
import '../styles/WhyLeela.css';

export default function WhyLeela() {
  return (
    <section className="why-section" id="why-leela">
      <div className="why-header">
        <span className="why-tag">SAFETY & EXCELLENCE</span>
        <h2 className="why-title">Why Students Love LEELA</h2>
        <p className="why-desc">We eliminate driving anxiety with exceptionally patient instructors and top safety standards.</p>
      </div>

      <div className="why-features-wrap">
        {/* Feature 1: Certified Instructors */}
        <div className="why-feature-card">
          <div className="card-visual">
            <img 
              src="/illustrations/home/feature-instructors.svg" 
              alt="Certified Patient Driving Instructor with Tablet" 
              width="460" 
              height="340" 
            />
          </div>
          <div className="card-info">
            <span className="feature-tag-mini">CERTIFIED INSTRUCTORS</span>
            <h3>Patient, Calm & Positive Teaching</h3>
            <p>
              No shouting, no stress. All LEELA instructors are fully background-checked, top-grade DVSA certified, and specially trained to teach nervous and first-time learners with empathy.
            </p>
            <ul className="feature-bullet-list">
              <li>100% Patience Guarantee on every lesson</li>
              <li>Digital progress card tracking every skill after each session</li>
              <li>Free instructor switch anytime if requested</li>
            </ul>
          </div>
        </div>

        {/* Feature 2: Dual Control Safety Fleet */}
        <div className="why-feature-card reverse">
          <div className="card-visual">
            <img 
              src="/illustrations/home/feature-safety.svg" 
              alt="Dual Control Safety System and Shield" 
              width="460" 
              height="340" 
            />
          </div>
          <div className="card-info">
            <span className="feature-tag-mini">SAFETY FIRST</span>
            <h3>Dual-Control Peace of Mind</h3>
            <p>
              Every vehicle in our modern fleet is equipped with dual pedals (clutch and brake) on the instructor side, forward obstacle radar, and 5-star Euro NCAP safety ratings.
            </p>
            <ul className="feature-bullet-list">
              <li>Instructor can safely stop the car at any moment</li>
              <li>Modern hatchback models with high visibility and parking sensors</li>
              <li>Spotlessly clean, air-conditioned cabins</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
