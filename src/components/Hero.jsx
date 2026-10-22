import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/Hero.css';

// ─── Inline contact form (lives in the yellow sky area on stage 4) ───────────
function ContactSlide({ onShowToast }) {
  const [form, setForm] = useState({ name: '', phone: '', transmission: 'manual' });
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onShowToast) onShowToast(`Inquiry sent, ${form.name}! We'll WhatsApp you shortly. 👍`);
    setForm({ name: '', phone: '', transmission: 'manual' });
  };

  return (
    <div className="sky-slide-contact">
      <span className="sky-tag">START DRIVING TODAY</span>
      <h2 className="sky-heading">Ready to Get Behind the Wheel?</h2>
      <p className="sky-sub">Schedule your first lesson — an instructor in your area will reply within 1 hour.</p>

      <form className="sky-contact-form" onSubmit={handleSubmit}>
        <div className="sky-form-row">
          <div className="sky-field">
            <label>Your Name</label>
            <input type="text" required placeholder="Alex Morgan"
              value={form.name} onChange={(e) => set('name', e.target.value)} />
          </div>
          <div className="sky-field">
            <label>Phone / WhatsApp</label>
            <input type="tel" required placeholder="+44 7123 456789"
              value={form.phone} onChange={(e) => set('phone', e.target.value)} />
          </div>
          <div className="sky-field">
            <label>Transmission</label>
            <select value={form.transmission} onChange={(e) => set('transmission', e.target.value)}>
              <option value="manual">Manual</option>
              <option value="automatic">Automatic</option>
            </select>
          </div>
        </div>
        <button type="submit" className="sky-submit-btn">Request My First Lesson →</button>
        <p className="sky-whatsapp">
          Or message us directly on <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </p>
      </form>
    </div>
  );
}

// ─── Stage progress dots ──────────────────────────────────────────────────────
const STAGES = [
  { stage: 1, emoji: '🌲', label: 'Home'         },
  { stage: 2, emoji: '🔄', label: 'How it works' },
  { stage: 3, emoji: '🛡️', label: 'Why LEELA'   },
  { stage: 4, emoji: '👍', label: 'Contact'      },
];

// ─── Main Hero ────────────────────────────────────────────────────────────────
export default function Hero({ drivingStage, onOpenSignIn, onOpenSignUp, onShowToast, onSelectStage }) {
  const meta = STAGES.find((s) => s.stage === drivingStage) || STAGES[0];

  return (
    <section className="hero-main-card" aria-label="Driving journey hero">

      {/* ── Navbar ── */}
      <Navbar onOpenSignIn={onOpenSignIn} onOpenSignUp={onOpenSignUp} />

      {/* ── Yellow Sky — content lives here, slides change with scroll ── */}
      <div className="hero-sky-zone" aria-live="polite">

        {/* ── SLIDE 1: Home intro ── */}
        <div className={`sky-slide ${drivingStage === 1 ? 'active' : drivingStage > 1 ? 'exit-up' : ''}`}>
          <div className="sky-slide-home">
            <span className="sky-tag">DVSA CERTIFIED DRIVING SCHOOL</span>
            <h1 className="sky-heading sky-heading-xl">Driving with LEELA is easy</h1>
            <p className="sky-sub">
              Learn to drive with patience, confidence, and zero stress.
              Dual-control vehicles &amp; 98.4% first-time pass guarantee.
            </p>
            <div className="sky-cta-row">
              <button className="sky-btn-primary" onClick={onOpenSignUp}>Book a Lesson</button>
              <button className="sky-btn-ghost" onClick={onOpenSignIn}>Sign In</button>
            </div>
            <div className="sky-stats-row">
              <div className="sky-stat"><span className="sky-stat-num">98.4%</span><span className="sky-stat-label">Pass Rate</span></div>
              <div className="sky-stat-div" />
              <div className="sky-stat"><span className="sky-stat-num">2,400+</span><span className="sky-stat-label">Students Passed</span></div>
              <div className="sky-stat-div" />
              <div className="sky-stat"><span className="sky-stat-num">5★</span><span className="sky-stat-label">Google Rating</span></div>
            </div>
          </div>
        </div>

        {/* ── SLIDE 2: How it works ── */}
        <div className={`sky-slide ${drivingStage === 2 ? 'active' : drivingStage > 2 ? 'exit-up' : ''}`}>
          <div className="sky-slide-steps">
            <span className="sky-tag">STEP-BY-STEP CURRICULUM</span>
            <h2 className="sky-heading">From First Turn to Full Licence</h2>
            <div className="sky-steps-grid">
              {[
                { num: '01', title: 'Theory & Cockpit Setup',    desc: 'Controls, mirrors, clutch bite-point in a stress-free zone.' },
                { num: '02', title: 'Maneuvers & Road Skills',   desc: 'Roundabouts, parallel parking, 3-point turns with patience.' },
                { num: '03', title: 'Test Route Simulation',     desc: 'Practice real examiner routes until you drive independently.' },
                { num: '04', title: 'Test Day & Celebration',    desc: "Use your instructor's car, pass first time, celebrate! 🎉"  },
              ].map((step) => (
                <div key={step.num} className="sky-step-card">
                  <span className="sky-step-num">{step.num}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SLIDE 3: Why LEELA ── */}
        <div className={`sky-slide ${drivingStage === 3 ? 'active' : drivingStage > 3 ? 'exit-up' : ''}`}>
          <div className="sky-slide-why">
            <span className="sky-tag">SAFETY &amp; EXCELLENCE</span>
            <h2 className="sky-heading">Why Students Love LEELA</h2>
            <div className="sky-why-grid">
              {[
                { icon: '🎓', title: 'DVSA Certified Instructors',  desc: 'Fully background-checked, specially trained for nervous learners.' },
                { icon: '🛡️', title: 'Dual-Control Safety Fleet',   desc: 'Instructor can brake at any time. 5-star Euro NCAP vehicles.'     },
                { icon: '📅', title: 'Flexible Scheduling',         desc: 'Morning, evening &amp; weekend slots. Doorstep pickup included.'  },
                { icon: '✅', title: '1st Pass Guarantee',           desc: 'Free re-test mock &amp; car if you don\'t pass on first attempt.' },
              ].map((f) => (
                <div key={f.title} className="sky-why-card">
                  <span className="sky-why-icon">{f.icon}</span>
                  <div>
                    <h3>{f.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: f.desc }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SLIDE 4: Contact ── */}
        <div className={`sky-slide ${drivingStage === 4 ? 'active' : ''}`}>
          <ContactSlide onShowToast={onShowToast} />
        </div>

      </div>{/* /hero-sky-zone */}

      {/* ── Car Cockpit — always at the bottom, image changes with stage ── */}
      <div className="hero-windshield-stage">
        {/* Driver & cockpit stage */}
        <div className="stage-cockpit-wrap">
          <img src="/illustrations/scroll/cockpit-stage1-start.svg"     alt="Driver starting lesson"        className={`stage-cockpit-img ${drivingStage === 1 ? 'active' : ''}`} />
          <img src="/illustrations/scroll/cockpit-stage2-turning.svg"   alt="Driver turning"                className={`stage-cockpit-img ${drivingStage === 2 ? 'active' : ''}`} />
          <img src="/illustrations/scroll/cockpit-stage3-cruising.svg"  alt="Driver cruising"               className={`stage-cockpit-img ${drivingStage === 3 ? 'active' : ''}`} />
          <img src="/illustrations/scroll/cockpit-stage4-celebrate.svg" alt="Driver celebrating thumbs-up"  className={`stage-cockpit-img ${drivingStage === 4 ? 'active' : ''}`} />
        </div>

        {/* Progress dots — bottom centre of the windshield */}
        <div className={`hero-stage-dots ${drivingStage === 4 ? 'with-footer' : ''}`} aria-label="Journey progress">
          {STAGES.map((s) => (
            <span
              key={s.stage}
              className={`stage-dot ${s.stage === drivingStage ? 'active' : ''} ${s.stage < drivingStage ? 'done' : ''}`}
              title={s.label}
              onClick={() => onSelectStage && onSelectStage(s.stage)}
            />
          ))}
        </div>

        {/* Scroll hint (stage 1 only) */}
        {drivingStage === 1 && (
          <div 
            className="hero-scroll-hint" 
            aria-hidden="true"
            onClick={() => onSelectStage && onSelectStage(2)}
            style={{ cursor: 'pointer' }}
          >
            <span>Scroll to continue</span>
            <div className="scroll-arrow">↓</div>
          </div>
        )}
      </div>

    </section>
  );
}
