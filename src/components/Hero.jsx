import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { 
  GraduationCapIcon, 
  ShieldCheckIcon, 
  CalendarIcon, 
  CheckBadgeIcon, 
  ChevronDownIcon,
  MapPinIcon,
  ExternalLinkIcon,
  NavigationIcon,
  PhoneIcon,
  ClockIcon
} from './Icons';
import { playButtonTap, playSuccessChime, playStageTransition } from '../utils/audio';
import '../styles/Hero.css';

// ─── Contact Slide & Office Location Map (Connected to Google Maps) ───────────
function ContactSlide({ onShowToast, currentUser }) {
  const [form, setForm] = useState({ 
    name: currentUser?.name || '', 
    email: currentUser?.email || '' 
  });
  const [mobileTab, setMobileTab] = useState('map'); // 'map' | 'form' on small devices

  useEffect(() => {
    if (currentUser) {
      setForm({
        name: currentUser.name || '',
        email: currentUser.email || '',
      });
    }
  }, [currentUser]);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    playSuccessChime();
    const nameStr = form.name.trim() || currentUser?.name || 'Learner';
    const emailStr = form.email.trim() || currentUser?.email || '';

    // Pre-drafted WhatsApp message
    const message = `Hi LEELA Driving School,\n\nI would like to request my first driving lesson.\n\nName: ${nameStr}${emailStr ? `\nEmail: ${emailStr}` : ''}\n\nPlease let me know your available slots and lesson packages. Thank you!`;

    const waUrl = `https://wa.me/918129005453?text=${encodeURIComponent(message)}`;

    if (onShowToast) {
      onShowToast(`Routing to WhatsApp for ${nameStr}...`);
    }

    // Direct routing to WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  // Office Location (Dummy location connected directly to Google Maps)
  const officeLocation = {
    name: 'LEELA Driving Academy & Testing Grounds',
    address: 'Metro Pillar 542, Banerji Road, Kaloor, Kochi, Kerala 682017',
    hours: 'Mon - Sat: 7:00 AM - 7:30 PM | Sun: 8:00 AM - 1:00 PM',
    phone: '+91 81290 05453',
    // Public embed iframe without billing keys
    mapsEmbedUrl: 'https://maps.google.com/maps?q=Kaloor%20Metro%20Station%2C%20Kochi%2C%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed',
    // Universal Google Maps search & view link
    mapsDirectUrl: 'https://www.google.com/maps/search/?api=1&query=Kaloor+Metro+Station+Kochi+Kerala',
    // Turn-by-turn navigation / directions link
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Kaloor+Metro+Station,+Kochi,+Kerala',
  };

  return (
    <div className="sky-slide-contact">
      <h2 className="sky-heading">Visit Our Office or Connect Today</h2>
      <p className="sky-sub">Dual-control practice grounds &amp; air-conditioned lecture facility in Central Kochi.</p>

      {/* Mobile Screen Segmented Switcher */}
      <div className="contact-mobile-tabs" role="tablist">
        <button
          type="button"
          className={`contact-tab-btn ${mobileTab === 'map' ? 'active' : ''}`}
          onClick={() => {
            playButtonTap();
            setMobileTab('map');
          }}
          aria-selected={mobileTab === 'map'}
        >
          <MapPinIcon size={13} color={mobileTab === 'map' ? '#201A42' : '#64748B'} />
          <span>Office &amp; Map</span>
        </button>
        <button
          type="button"
          className={`contact-tab-btn ${mobileTab === 'form' ? 'active' : ''}`}
          onClick={() => {
            playButtonTap();
            setMobileTab('form');
          }}
          aria-selected={mobileTab === 'form'}
        >
          <span>Quick Inquiry</span>
        </button>
      </div>

      <div className="contact-hub-grid">
        {/* Left Column: Inquiry Form */}
        <div className={`contact-hub-col contact-col-form ${mobileTab === 'form' ? 'mobile-visible' : ''}`}>
          <form className="sky-contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-header">
              <span className="contact-form-title">Request First Lesson</span>
              <span className="contact-reply-time">Replies in &lt;1 hr</span>
            </div>
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
                <label>Email Address</label>
                <input 
                  type="email" 
                  required 
                  placeholder="alex@example.com"
                  value={form.email} 
                  onChange={(e) => set('email', e.target.value)} 
                />
              </div>
            </div>
            <button type="submit" className="sky-submit-btn">Request My First Lesson →</button>
            <div className="contact-quick-info">
              <span title="Operating Hours">
                <ClockIcon size={12} color="#D97706" /> {officeLocation.hours.split('|')[0].trim()}
              </span>
              <a href={`tel:${officeLocation.phone.replace(/[^0-9+]/g, '')}`} className="contact-phone-link" title="Call Office">
                <PhoneIcon size={12} color="#D97706" /> {officeLocation.phone}
              </a>
            </div>
          </form>
        </div>

        {/* Right Column: Interactive Google Map */}
        <div className={`contact-hub-col contact-col-map ${mobileTab === 'map' ? 'mobile-visible' : ''}`}>
          <div className="contact-map-card">
            <div className="contact-map-card-header">
              <div className="map-badge-pin">
                <MapPinIcon size={15} color="#D97706" />
              </div>
              <div className="map-address-meta">
                <strong>{officeLocation.name}</strong>
                <span>{officeLocation.address}</span>
              </div>
            </div>

            <div className="contact-map-iframe-wrap">
              <iframe
                title="LEELA Driving School Office Location"
                src={officeLocation.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-overlay-tag">
                <span>Google Maps · Central Kochi</span>
              </div>
            </div>

            <div className="contact-map-card-footer">
              <a
                href={officeLocation.mapsDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-open-google-maps"
                onClick={() => playButtonTap()}
                title="Open and view office location in Google Maps"
              >
                <span>View on Google Maps</span>
                <ExternalLinkIcon size={12} />
              </a>
              <a
                href={officeLocation.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-get-directions"
                onClick={() => playButtonTap()}
                title="Open navigation directions in Google Maps"
              >
                <NavigationIcon size={12} />
                <span>Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Gallery Images for Edge-to-Edge Automatic Horizontal Scroll (No Texts) ─
const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&auto=format&fit=crop&q=80', // modern dual-control car fleet
  'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&auto=format&fit=crop&q=80', // cockpit & mirror controls
  'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&auto=format&fit=crop&q=80', // open road driving session
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80', // pass certificate celebration
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=80', // steering wheel road perspective
  'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&auto=format&fit=crop&q=80', // training hatchback
  'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&auto=format&fit=crop&q=80', // open cruising road
  'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&auto=format&fit=crop&q=80', // calm coaching on street
];

// ─── Stage progress dots (6 stages across the entire driving journey) ─────────
const STAGES = [
  { stage: 1, label: 'Home'         },
  { stage: 2, label: 'How it works' },
  { stage: 3, label: 'Instructors'  },
  { stage: 4, label: 'Why LEELA'    },
  { stage: 5, label: 'Gallery'      },
  { stage: 6, label: 'Contact'      },
];

// ─── Subtle Scenery Landscape Backdrop (Embedded Vector Pattern) ─────────────
function SubtleSceneryBackdrop({ drivingStage = 1 }) {
  return (
    <div 
      className={`hero-scenery-backdrop stage-${drivingStage}`} 
      data-stage={drivingStage} 
      aria-hidden="true"
    >
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
        <circle className="scenery-sun" cx="720" cy="380" r="320" fill="url(#scenerySunGlow)" />

        {/* 2. Soft Floating Clouds in Sky */}
        <g fill="#FFFFFF" opacity="0.32" className="scenery-clouds">
          <path d="M180 140 C195 125 230 125 245 140 C258 135 280 142 285 155 C295 160 295 180 280 185 L160 185 C145 180 145 160 155 150 C160 140 170 140 180 140 Z" />
          <path d="M1120 120 C1135 105 1170 105 1185 120 C1198 115 1220 122 1225 135 C1235 140 1235 160 1220 165 L1100 165 C1085 160 1085 140 1095 130 C1100 120 1110 120 1120 120 Z" />
          <path d="M680 90 C692 78 720 78 732 90 C742 86 760 92 764 102 C772 106 772 122 760 126 L664 126 C652 122 652 106 660 98 C664 90 672 90 680 90 Z" opacity="0.6" />
        </g>

        {/* 3. Subtle Distant Birds */}
        <g className="scenery-birds" stroke="#7D5800" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.35">
          <path d="M340 165 Q 348 158 356 165 Q 364 158 372 165" />
          <path d="M380 172 Q 386 167 392 172 Q 398 167 404 172" />
          <path d="M1020 155 Q 1028 148 1036 155 Q 1044 148 1052 155" />
        </g>

        {/* 4. Distant Mountain & Hill Ridge (Layer 1 — Parallax Horizon) */}
        <path
          className="scenery-far-mountains"
          d="M0 450 Q 180 390 360 425 T 720 405 T 1080 430 T 1440 395 L 1440 650 L 0 650 Z"
          fill="url(#sceneryFarMountains)"
        />

        {/* Distant Hilltop Wind Turbines / Pines */}
        <g className="scenery-turbines" stroke="#A67300" strokeWidth="1.4" opacity="0.4">
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

        {/* 5. Midground Rolling Countryside Hills (Layer 2 — Mid Parallax) */}
        <path
          className="scenery-mid-hills"
          d="M0 480 C 220 440 420 500 600 485 C 780 470 960 520 1200 475 C 1320 450 1390 460 1440 470 L 1440 750 L 0 750 Z"
          fill="url(#sceneryMidHills)"
        />

        {/* Subtle Tree Silhouettes on Mid Ridge */}
        <g className="scenery-mid-trees" fill="#A86F00" opacity="0.32">
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
          className="scenery-verge-left"
          d="M0 520 C 250 490 480 540 620 530 L 0 850 Z"
          fill="url(#sceneryForeground)"
        />
        <path
          className="scenery-verge-right"
          d="M1440 515 C 1200 485 960 540 820 530 L 1440 850 Z"
          fill="url(#sceneryForeground)"
        />

        {/* Subtle Topographic Elevation Contour Lines */}
        <g className="scenery-contour-lines" stroke="#E59900" strokeWidth="1.5" strokeOpacity="0.4" fill="none">
          <path d="M0 545 Q 260 515 560 550" />
          <path d="M0 575 Q 280 545 520 585" />
          <path d="M1440 540 Q 1180 510 880 550" />
          <path d="M1440 570 Q 1160 540 920 585" />
        </g>

        {/* 7. Scenic Perspective Highway Surface */}
        <polygon className="scenery-road-surface" points="695,490 745,490 1080,900 360,900" fill="url(#sceneryRoadSurface)" />

        {/* Road Edge Lines */}
        <g className="scenery-road-edges">
          <line className="scenery-edge-left" x1="697" y1="490" x2="385" y2="900" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.35" />
          <line className="scenery-edge-right" x1="743" y1="490" x2="1055" y2="900" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.35" />
        </g>

        {/* ── Center Dashed Highway Markings Group (Streams with Perspective Motion) ── */}
        <g className="scenery-centerlines-group">
          <line className="road-dash road-dash-0" x1="720" y1="490" x2="720" y2="496" stroke="#FFE638" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.55" />
          <line className="road-dash road-dash-1" x1="720" y1="500" x2="720" y2="520" stroke="#FFE638" strokeWidth="2.8" strokeLinecap="round" strokeOpacity="0.65" />
          <line className="road-dash road-dash-2" x1="720" y1="535" x2="720" y2="565" stroke="#FFE638" strokeWidth="3.8" strokeLinecap="round" strokeOpacity="0.7" />
          <line className="road-dash road-dash-3" x1="720" y1="585" x2="720" y2="625" stroke="#FFE638" strokeWidth="5.5" strokeLinecap="round" strokeOpacity="0.75" />
          <line className="road-dash road-dash-4" x1="720" y1="652" x2="720" y2="706" stroke="#FFE638" strokeWidth="7.5" strokeLinecap="round" strokeOpacity="0.8" />
          <line className="road-dash road-dash-5" x1="720" y1="738" x2="720" y2="810" stroke="#FFE638" strokeWidth="10" strokeLinecap="round" strokeOpacity="0.85" />
          <line className="road-dash road-dash-6" x1="720" y1="848" x2="720" y2="915" stroke="#FFE638" strokeWidth="13" strokeLinecap="round" strokeOpacity="0.9" />
        </g>

        {/* ── Roadside Palm Silhouettes (Left Verge — Expands Outward in 3D) ── */}
        <g className="scenery-roadside-left" fill="#945F00" opacity="0.36">
          <path d="M540 560 Q 550 535 565 520 L 567 520 Q 552 535 544 560 Z" stroke="#945F00" strokeWidth="3" />
          <ellipse cx="568" cy="518" rx="14" ry="7" transform="rotate(-20 568 518)" />
          <ellipse cx="568" cy="518" rx="14" ry="7" transform="rotate(30 568 518)" />
          <ellipse cx="568" cy="518" rx="12" ry="6" transform="rotate(80 568 518)" />
          {/* Distant palm on curve */}
          <path d="M625 522 Q 632 506 642 497 L 643 497 Q 633 506 627 522 Z" stroke="#945F00" strokeWidth="1.8" />
          <ellipse cx="643" cy="496" rx="8" ry="4" transform="rotate(-25 643 496)" />
          <ellipse cx="643" cy="496" rx="8" ry="4" transform="rotate(25 643 496)" />
        </g>

        {/* ── Roadside Grove Silhouettes (Right Verge — Expands Outward in 3D) ── */}
        <g className="scenery-roadside-right" fill="#945F00" opacity="0.36">
          <circle cx="890" cy="540" r="22" />
          <circle cx="910" cy="550" r="18" />
          <rect x="898" y="555" width="8" height="25" rx="3" />
          {/* Distant Verge Tree */}
          <circle cx="795" cy="512" r="10" />
          <circle cx="808" cy="518" r="8" />
          <rect x="799" y="520" width="3.5" height="12" rx="1.5" />
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
  onOpenBooking,
  onShowToast, 
  onSelectStage,
  currentUser,
  onOpenProfile,
  onOpenDemoTest
}) {
  const meta = STAGES.find((s) => s.stage === drivingStage) || STAGES[0];
  const [headlight, setHeadlight] = useState({ x: 50, y: 55, active: false });

  const handleWindshieldMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(8, Math.min(92, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(10, Math.min(90, ((e.clientY - rect.top) / rect.height) * 100));
    setHeadlight({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10, active: true });
  };

  const handleWindshieldMouseLeave = () => {
    setHeadlight((prev) => ({ ...prev, active: false }));
  };

  return (
    <section className={`hero-main-card stage-${drivingStage}`} aria-label="Driving journey hero">

      {/* ── Day-to-Dusk Atmospheric Sky Layers (Smooth Optical Gradient Shift) ── */}
      <div className="hero-sky-atmosphere" aria-hidden="true">
        <div className="sky-layer sky-layer-morning" />
        <div className="sky-layer sky-layer-midday" />
        <div className="sky-layer sky-layer-golden" />
        <div className="sky-layer sky-layer-dusk" />
      </div>

      {/* ── Subtle Scenery Landscape Pattern in Background with Road Parallax ── */}
      <SubtleSceneryBackdrop drivingStage={drivingStage} />

      {/* ── Navbar ── */}
      <Navbar 
        onOpenSignIn={onOpenSignIn} 
        onOpenSignUp={onOpenSignUp} 
        currentUser={currentUser} 
        onOpenProfile={onOpenProfile} 
        onOpenDemoTest={onOpenDemoTest}
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
              <button 
                className="sky-btn-primary" 
                onClick={() => {
                  playButtonTap();
                  onOpenBooking();
                }}
              >
                Book a Lesson
              </button>
              {!currentUser && (
                <button 
                  className="sky-btn-ghost" 
                  onClick={() => {
                    playButtonTap();
                    onOpenSignIn();
                  }}
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── SLIDE 2: How it works ── */}
        <div className={`sky-slide ${drivingStage === 2 ? 'active' : drivingStage > 2 ? 'exit-up' : ''}`}>
          <div className="sky-slide-steps">
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

        {/* ── SLIDE 3: Our Instructors ── */}
        <div className={`sky-slide ${drivingStage === 3 ? 'active' : drivingStage > 3 ? 'exit-up' : ''}`}>
          <div className="sky-slide-instructors">
            <h2 className="sky-heading">Meet Your Patient Driving Mentors</h2>
            <div className="sky-instructors-grid">
              {[
                {
                  name: 'Rajesh Kumar',
                  img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&auto=format&fit=crop&q=80',
                },
                {
                  name: 'Priya Sharma',
                  img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=320&auto=format&fit=crop&q=80',
                },
                {
                  name: 'Vikram Patel',
                  img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=320&auto=format&fit=crop&q=80',
                },
                {
                  name: 'Sneha Roy',
                  img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=320&auto=format&fit=crop&q=80',
                },
              ].map((inst) => (
                <div key={inst.name} className="sky-instructor-card">
                  <div className="instructor-photo-wrap">
                    <img src={inst.img} alt={inst.name} className="instructor-photo-img" />
                  </div>
                  <h3 className="instructor-name-text">{inst.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SLIDE 4: Why LEELA ── */}
        <div className={`sky-slide ${drivingStage === 4 ? 'active' : drivingStage > 4 ? 'exit-up' : ''}`}>
          <div className="sky-slide-why">
            <h2 className="sky-heading">Why Students Love LEELA</h2>
            <div className="sky-why-grid">
              {[
                { Icon: GraduationCapIcon, title: 'Kerala MVD Certified Coaches',  desc: 'Govt. approved instructors, specially trained for nervous beginners &amp; first-time drivers.' },
                { Icon: ShieldCheckIcon,   title: 'Dual-Control Safety Fleet',   desc: 'Instructor dual pedals (brake &amp; clutch) with 5-star Bharat safety certified fleet.' },
                { Icon: CalendarIcon,      title: 'Flexible Scheduling',         desc: 'Morning, evening &amp; weekend slots. Doorstep pickup included.'  },
                { Icon: CheckBadgeIcon,    title: '1st Pass Guarantee',           desc: 'Free re-test mock &amp; car if you don\'t pass on first attempt.' },
              ].map((f) => (
                <div key={f.title} className="sky-why-card">
                  <span className="sky-why-icon">
                    <f.Icon size={18} color="#D97706" />
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

        {/* ── SLIDE 5: Gallery (Edge-to-Edge Automatic Horizontal Scroll, No Texts) ── */}
        <div className={`sky-slide sky-slide-gallery-full ${drivingStage === 5 ? 'active' : drivingStage > 5 ? 'exit-up' : ''}`}>
          <div className="sky-gallery-marquee-wrap">
            <div className="sky-gallery-marquee-track">
              {/* Loop duplicated twice for seamless infinite automatic scrolling */}
              {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((imgSrc, idx) => (
                <div key={idx} className="sky-gallery-item">
                  <div className="gallery-card-image-wrap">
                    <img src={imgSrc} alt="LEELA Driving School" className="gallery-slide-img" loading="lazy" />
                    <div className="gallery-card-overlay" />
                  </div>
                  <div className="gallery-card-accent-bar" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SLIDE 6: Contact Us ── */}
        <div className={`sky-slide ${drivingStage === 6 ? 'active' : ''}`}>
          <ContactSlide onShowToast={onShowToast} currentUser={currentUser} />
        </div>

      </div>{/* /hero-sky-zone */}

      {/* ── Car Cockpit — always at the bottom, image changes with stage ── */}
      <div 
        className="hero-windshield-stage"
        onMouseMove={handleWindshieldMouseMove}
        onMouseLeave={handleWindshieldMouseLeave}
      >

        {/* ── Headlight Beam Glow (Tracks cursor scanning across windscreen & road) ── */}
        <div 
          className={`hero-headlight-beam ${headlight.active ? 'active' : ''}`}
          style={{
            '--headlight-x': `${headlight.x}%`,
            '--headlight-y': `${headlight.y}%`,
          }}
          aria-hidden="true"
        />

        {/* Driver & cockpit stage (6 distinct SVG illustrations in proper sequence) */}
        <div className="stage-cockpit-wrap">
          <img src="/illustrations/scroll/cockpit-stage1-start.svg?v=lplate"       alt="Learner and instructor starting lesson"                           className={`stage-cockpit-img ${drivingStage === 1 ? 'active' : ''}`} />
          <img src="/illustrations/scroll/cockpit-stage2-turning.svg?v=lplate"     alt="Instructor coaching learner through turns"                        className={`stage-cockpit-img ${drivingStage === 2 ? 'active' : ''}`} />
          <img src="/illustrations/scroll/cockpit-stage3-instructors.svg?v=lplate" alt="Instructor with Kerala MVD assessment clipboard coaching learner" className={`stage-cockpit-img ${drivingStage === 3 ? 'active' : ''}`} />
          <img src="/illustrations/scroll/cockpit-stage4-cruising.svg?v=lplate"    alt="Instructor giving thumbs up while cruising"                       className={`stage-cockpit-img ${drivingStage === 4 ? 'active' : ''}`} />
          <img src="/illustrations/scroll/cockpit-stage5-gallery.svg?v=lplate"     alt="Learner executing reverse bay parking maneuver with radar assist" className={`stage-cockpit-img ${drivingStage === 5 ? 'active' : ''}`} />
          <img src="/illustrations/scroll/cockpit-stage6-celebrate.svg?v=lplate"   alt="Instructor and learner celebrating test passed"                   className={`stage-cockpit-img ${drivingStage === 6 ? 'active' : ''}`} />
        </div>

        {/* Progress dots — bottom centre of the windshield */}
        <div className={`hero-stage-dots ${drivingStage === 6 ? 'with-footer' : ''}`} aria-label="Journey progress">
          {STAGES.map((s) => (
            <span
              key={s.stage}
              className={`stage-dot ${s.stage === drivingStage ? 'active' : ''} ${s.stage < drivingStage ? 'done' : ''}`}
              title={s.label}
              onClick={() => {
                playStageTransition();
                onSelectStage && onSelectStage(s.stage);
              }}
            />
          ))}
        </div>

        {/* Scroll hint (stage 1 only) */}
        {drivingStage === 1 && (
          <div 
            className="hero-scroll-hint" 
            aria-hidden="true"
            onClick={() => {
              playStageTransition();
              onSelectStage && onSelectStage(2);
            }}
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
