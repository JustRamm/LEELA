import React, { useState } from 'react';
import Navbar from './Navbar';
import { 
  GraduationCapIcon, 
  ShieldCheckIcon, 
  CalendarIcon, 
  CheckBadgeIcon, 
  ChevronDownIcon 
} from './Icons';
import '../styles/Hero.css';

// ─── Inline contact form (lives in the yellow sky area on stage 4) ───────────
function ContactSlide({ onShowToast }) {
  const [form, setForm] = useState({ name: '', phone: '' });
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameStr = form.name.trim() || 'Learner';
    const phoneStr = form.phone.trim();

    // Pre-drafted WhatsApp message
    const message = `Hi LEELA Driving School,\n\nI would like to request my first driving lesson.\n\nName: ${nameStr}${phoneStr ? `\nPhone: ${phoneStr}` : ''}\n\nPlease let me know your available slots and lesson packages. Thank you!`;

    const waUrl = `https://wa.me/918129005452?text=${encodeURIComponent(message)}`;

    if (onShowToast) {
      onShowToast(`Routing to WhatsApp for ${nameStr}...`);
    }

    // Direct routing to WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
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
            <input 
              type="text" 
              required 
              placeholder="Alex Morgan"
              value={form.name} 
              onChange={(e) => set('name', e.target.value)} 
            />
          </div>
          <div className="sky-field">
            <label>Phone / WhatsApp</label>
            <input 
              type="tel" 
              required 
              placeholder="+91 81290 05452"
              value={form.phone} 
              onChange={(e) => set('phone', e.target.value)} 
            />
          </div>
        </div>
        <button type="submit" className="sky-submit-btn">Request My First Lesson →</button>
      </form>
    </div>
  );
}

// ─── Stage progress dots ──────────────────────────────────────────────────────
const STAGES = [
  { stage: 1, label: 'Home'         },
  { stage: 2, label: 'How it works' },
  { stage: 3, label: 'Why LEELA'   },
  { stage: 4, label: 'Contact'      },
];

// ─── Subtle Scenery Landscape Backdrop (Embedded Vector Pattern) ─────────────
function SubtleSceneryBackdrop() {
  return (
    <div className="hero-scenery-backdrop" aria-hidden="true">
      <svg
        className="hero-scenery-svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Sun Radial Glow */}
          <radialGradient id="scenerySunGlow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
            <stop offset="40%" stopColor="#FFF38A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FEDC2A" stopOpacity="0" />
          </radialGradient>

          {/* Distant Mountains Gradient */}
          <linearGradient id="sceneryFarMountains" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EAA800" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#C78700" stopOpacity="0.32" />
          </linearGradient>

          {/* Rolling Hills Gradient */}
          <linearGradient id="sceneryMidHills" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DF9B00" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#B87600" stopOpacity="0.38" />
          </linearGradient>

          {/* Foreground Landscape Verge */}
          <linearGradient id="sceneryForeground" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D48E00" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#A56400" stopOpacity="0.45" />
          </linearGradient>

          {/* Road Surface Perspective */}
          <linearGradient id="sceneryRoadSurface" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#55448C" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#3D2E73" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#241B4A" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* 1. Subtle Morning Sun Glow */}
        <circle cx="720" cy="380" r="320" fill="url(#scenerySunGlow)" />

        {/* 2. Soft Floating Clouds in Sky */}
        <g fill="#FFFFFF" opacity="0.32" className="scenery-clouds">
          <path d="M180 140 C195 125 230 125 245 140 C258 135 280 142 285 155 C295 160 295 180 280 185 L160 185 C145 180 145 160 155 150 C160 140 170 140 180 140 Z" />
          <path d="M1120 120 C1135 105 1170 105 1185 120 C1198 115 1220 122 1225 135 C1235 140 1235 160 1220 165 L1100 165 C1085 160 1085 140 1095 130 C1100 120 1110 120 1120 120 Z" />
          <path d="M680 90 C692 78 720 78 732 90 C742 86 760 92 764 102 C772 106 772 122 760 126 L664 126 C652 122 652 106 660 98 C664 90 672 90 680 90 Z" opacity="0.6" />
        </g>

        {/* 3. Subtle Distant Birds */}
        <g stroke="#7D5800" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.35">
          <path d="M340 165 Q 348 158 356 165 Q 364 158 372 165" />
          <path d="M380 172 Q 386 167 392 172 Q 398 167 404 172" />
          <path d="M1020 155 Q 1028 148 1036 155 Q 1044 148 1052 155" />
        </g>

        {/* 4. Distant Mountain & Hill Ridge (Layer 1) */}
        <path
          d="M0 450 Q 180 390 360 425 T 720 405 T 1080 430 T 1440 395 L 1440 650 L 0 650 Z"
          fill="url(#sceneryFarMountains)"
        />

        {/* Distant Hilltop Wind Turbines / Pines */}
        <g stroke="#A67300" strokeWidth="1.4" opacity="0.4">
          <line x1="260" y1="412" x2="260" y2="435" />
          <circle cx="260" cy="412" r="2" fill="#A67300" />
          <line x1="260" y1="412" x2="252" y2="402" />
          <line x1="260" y1="412" x2="268" y2="406" />

          <line x1="300" y1="416" x2="300" y2="438" />
          <circle cx="300" cy="416" r="1.8" fill="#A67300" />
          <line x1="300" y1="416" x2="294" y2="408" />
          <line x1="300" y1="416" x2="306" y2="411" />

          <line x1="1180" y1="418" x2="1180" y2="440" />
          <circle cx="1180" cy="418" r="2" fill="#A67300" />
          <line x1="1180" y1="418" x2="1172" y2="409" />
          <line x1="1180" y1="418" x2="1188" y2="413" />
        </g>

        {/* 5. Midground Rolling Countryside Hills (Layer 2) */}
        <path
          d="M0 480 C 220 440 420 500 600 485 C 780 470 960 520 1200 475 C 1320 450 1390 460 1440 470 L 1440 750 L 0 750 Z"
          fill="url(#sceneryMidHills)"
        />

        {/* Subtle Tree Silhouettes on Mid Ridge */}
        <g fill="#A86F00" opacity="0.32">
          <ellipse cx="140" cy="460" rx="36" ry="24" />
          <ellipse cx="170" cy="455" rx="28" ry="20" />
          <ellipse cx="205" cy="465" rx="32" ry="22" />
          <ellipse cx="440" cy="485" rx="30" ry="18" />
          <ellipse cx="475" cy="480" rx="24" ry="16" />

          <ellipse cx="980" cy="495" rx="34" ry="22" />
          <ellipse cx="1015" cy="490" rx="28" ry="18" />
          <ellipse cx="1280" cy="465" rx="38" ry="24" />
          <ellipse cx="1320" cy="460" rx="32" ry="20" />
        </g>

        {/* 6. Foreground Landscape Contours (Flanking Road) */}
        <path
          d="M0 520 C 250 490 480 540 620 530 L 0 850 Z"
          fill="url(#sceneryForeground)"
        />
        <path
          d="M1440 515 C 1200 485 960 540 820 530 L 1440 850 Z"
          fill="url(#sceneryForeground)"
        />

        {/* Subtle Topographic Elevation Contour Lines */}
        <g stroke="#E59900" strokeWidth="1.5" strokeOpacity="0.4" fill="none">
          <path d="M0 545 Q 260 515 560 550" />
          <path d="M0 575 Q 280 545 520 585" />
          <path d="M1440 540 Q 1180 510 880 550" />
          <path d="M1440 570 Q 1160 540 920 585" />
        </g>

        {/* 7. Scenic Perspective Highway (Runs straight into horizon right through windshield) */}
        <polygon points="695,490 745,490 1080,900 360,900" fill="url(#sceneryRoadSurface)" />

        {/* Subtle Road Edge Lines */}
        <line x1="697" y1="490" x2="385" y2="900" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.35" />
        <line x1="743" y1="490" x2="1055" y2="900" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.35" />

        {/* Center Dashed Markings */}
        <line x1="720" y1="495" x2="720" y2="515" stroke="#FFE638" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.65" />
        <line x1="720" y1="530" x2="720" y2="558" stroke="#FFE638" strokeWidth="3.5" strokeLinecap="round" strokeOpacity="0.7" />
        <line x1="720" y1="580" x2="720" y2="618" stroke="#FFE638" strokeWidth="5" strokeLinecap="round" strokeOpacity="0.75" />
        <line x1="720" y1="645" x2="720" y2="695" stroke="#FFE638" strokeWidth="7" strokeLinecap="round" strokeOpacity="0.8" />
        <line x1="720" y1="730" x2="720" y2="800" stroke="#FFE638" strokeWidth="9.5" strokeLinecap="round" strokeOpacity="0.85" />
        <line x1="720" y1="840" x2="720" y2="900" stroke="#FFE638" strokeWidth="12" strokeLinecap="round" strokeOpacity="0.9" />

        {/* Roadside Palm & Trees */}
        <g fill="#945F00" opacity="0.35">
          <path d="M540 560 Q 550 535 565 520 L 567 520 Q 552 535 544 560 Z" stroke="#945F00" strokeWidth="3" />
          <ellipse cx="568" cy="518" rx="14" ry="7" transform="rotate(-20 568 518)" />
          <ellipse cx="568" cy="518" rx="14" ry="7" transform="rotate(30 568 518)" />
          <ellipse cx="568" cy="518" rx="12" ry="6" transform="rotate(80 568 518)" />

          <circle cx="890" cy="540" r="22" />
          <circle cx="910" cy="550" r="18" />
          <rect x="898" y="555" width="8" height="25" rx="3" />
        </g>
      </svg>
    </div>
  );
}

// ─── Main Hero ────────────────────────────────────────────────────────────────
export default function Hero({ 
  drivingStage, 
  onOpenSignIn, 
  onOpenSignUp, 
  onShowToast, 
  onSelectStage,
  currentUser,
  onOpenProfile
}) {
  const meta = STAGES.find((s) => s.stage === drivingStage) || STAGES[0];

  return (
    <section className="hero-main-card" aria-label="Driving journey hero">

      {/* ── Subtle Scenery Landscape Pattern in Background ── */}
      <SubtleSceneryBackdrop />

      {/* ── Navbar ── */}
      <Navbar 
        onOpenSignIn={onOpenSignIn} 
        onOpenSignUp={onOpenSignUp} 
        currentUser={currentUser} 
        onOpenProfile={onOpenProfile} 
      />

      {/* ── Yellow Sky — content lives here, slides change with scroll ── */}
      <div className="hero-sky-zone" aria-live="polite">

        {/* ── SLIDE 1: Home intro ── */}
        <div className={`sky-slide ${drivingStage === 1 ? 'active' : drivingStage > 1 ? 'exit-up' : ''}`}>
          <div className="sky-slide-home">
            <h1 className="sky-heading sky-heading-xl">Driving with LEELA is easy</h1>
            <p className="sky-sub">
              Learn to drive with patience, confidence, and zero stress.
              Dual-control vehicles &amp; 98.4% first-time pass guarantee.
            </p>
            <div className="sky-cta-row">
              <button className="sky-btn-primary" onClick={onOpenSignUp}>Book a Lesson</button>
              {currentUser ? (
                <button className="sky-btn-ghost" onClick={onOpenProfile}>My Profile</button>
              ) : (
                <button className="sky-btn-ghost" onClick={onOpenSignIn}>Sign In</button>
              )}
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
                { num: '04', title: 'Test Day & Celebration',    desc: "Use your instructor's car, pass first time, celebrate!"  },
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
                { Icon: GraduationCapIcon, title: 'DVSA Certified Instructors',  desc: 'Fully background-checked, specially trained for nervous learners.' },
                { Icon: ShieldCheckIcon,   title: 'Dual-Control Safety Fleet',   desc: 'Instructor can brake at any time. 5-star Euro NCAP vehicles.'     },
                { Icon: CalendarIcon,      title: 'Flexible Scheduling',         desc: 'Morning, evening &amp; weekend slots. Doorstep pickup included.'  },
                { Icon: CheckBadgeIcon,    title: '1st Pass Guarantee',           desc: 'Free re-test mock &amp; car if you don\'t pass on first attempt.' },
              ].map((f) => (
                <div key={f.title} className="sky-why-card">
                  <span className="sky-why-icon">
                    <f.Icon size={18} color="#FFE638" />
                  </span>
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
          <img src="/illustrations/scroll/cockpit-stage1-start.svg?v=lplate"     alt="Learner and Indian instructor starting lesson"       className={`stage-cockpit-img ${drivingStage === 1 ? 'active' : ''}`} />
          <img src="/illustrations/scroll/cockpit-stage2-turning.svg?v=lplate"   alt="Instructor coaching learner through turns"            className={`stage-cockpit-img ${drivingStage === 2 ? 'active' : ''}`} />
          <img src="/illustrations/scroll/cockpit-stage3-cruising.svg?v=lplate"  alt="Instructor giving thumbs up while cruising"           className={`stage-cockpit-img ${drivingStage === 3 ? 'active' : ''}`} />
          <img src="/illustrations/scroll/cockpit-stage4-celebrate.svg?v=lplate" alt="Instructor and learner celebrating test passed"       className={`stage-cockpit-img ${drivingStage === 4 ? 'active' : ''}`} />
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
            <div className="scroll-arrow">
              <ChevronDownIcon size={14} color="#201A42" />
            </div>
          </div>
        )}
      </div>

    </section>
  );
}
