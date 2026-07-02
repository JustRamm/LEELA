import React from 'react';

export default function Hero({ setCurrentTab, isAdmin }) {
  const stats = [
    { value: '98%', label: 'First-time Pass Rate' },
    { value: '12+', label: 'Certified Instructors' },
    { value: '15,000+', label: 'Successful Graduates' },
    { value: '4.9★', label: 'Google Rating (600+)' },
  ];

  return (
    <>
      <section className="hero-section">
        <div className="container hero-container">
          {/* Left Column: Headings & Buttons */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge badge-teal">Accredited Driving School</span>
              <span className="badge badge-yellow">Kerala State Licensing Partner</span>
            </div>
            
            <h1>
              Drive with Confidence,<br />
              Master the Roads with <span className="highlight-text">LEELA</span>
            </h1>
            
            <div className="hero-subtitle-group">
              <p className="hero-subtitle-en">
                Experience world-class driving education tailored for Kerala's unique terrains.
              </p>
              <p className="hero-subtitle-ml">
                കേരളത്തിലെ ഏറ്റവും മികച്ച ഡ്രൈവിംഗ് പരിശീലനം ഇപ്പോൾ നിങ്ങളുടെ കൈകളിൽ.
              </p>
            </div>

            <div className="hero-actions">
              <button 
                className="btn hero-btn-trial pulse-on-hover"
                onClick={() => setCurrentTab(isAdmin ? 'admin-portal' : 'student-portal')}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" className="btn-icon">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 2v7M12 15v7M2 12h7M15 12h7"/>
                </svg>
                Book a Trial Lesson
              </button>
              
              <button 
                className="btn hero-btn-courses"
                onClick={() => setCurrentTab('packages')}
              >
                View Courses
              </button>
            </div>
          </div>

          {/* Right Column: Custom Steering & Palm tree Emblem */}
          <div className="hero-visual">
            <div className="stitch-badge-container">
              <div className="circle-logo-badge">
                <svg className="stitch-logo-svg" viewBox="0 0 100 100">
                  {/* Steering Wheel Outer */}
                  <circle cx="50" cy="50" r="38" fill="none" stroke="var(--primary)" strokeWidth="6" />
                  <circle cx="50" cy="50" r="12" fill="none" stroke="var(--primary)" strokeWidth="4" />
                  {/* Steering Wheel Spokes */}
                  <line x1="50" y1="12" x2="50" y2="38" stroke="var(--primary)" strokeWidth="5" />
                  <line x1="12" y1="50" x2="38" y2="50" stroke="var(--primary)" strokeWidth="5" />
                  <line x1="62" y1="50" x2="88" y2="50" stroke="var(--primary)" strokeWidth="5" />
                  <line x1="50" y1="62" x2="50" y2="88" stroke="var(--primary)" strokeWidth="5" />
                  
                  {/* Palm Leaves growing out of the steering center */}
                  <path d="M50,30 Q42,16 26,14 Q40,8 50,20 Q60,8 74,14 Q58,16 50,30" fill="#2d7a69" />
                  <path d="M50,25 Q44,14 32,12 Q42,6 50,16 Q58,6 68,12 Q56,14 50,25" fill="var(--teal)" />
                  {/* Coconuts details */}
                  <circle cx="46" cy="20" r="2.5" fill="var(--accent)" />
                  <circle cx="54" cy="20" r="2.5" fill="var(--accent)" />
                </svg>
              </div>
            </div>
            
            {/* Visual stats mini tag overlay */}
            <div className="tag-overlay-box card">
              <span className="tag-status-indicator">● Live Tracker</span>
              <h4>LEELA Smart Cars</h4>
              <p>Dual-Control Safety Fleet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Yellow Dotted Divider */}
      <hr className="dashed-yellow-divider" />

      {/* Stats Bar */}
      <div className="hero-stats-bar">
        <div className="container stats-bar-inner">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-section {
          background: linear-gradient(rgba(17, 50, 43, 0.75), rgba(17, 50, 43, 0.85)), 
                      url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80');
          background-size: cover;
          background-position: center;
          position: relative;
          padding: 6.5rem 0 4.5rem 0;
          overflow: hidden;
        }
        
        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .hero-content {
          text-align: left;
        }
        
        .hero-badge {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        
        .hero-content h1 {
          font-size: 3.2rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text-white);
          line-height: 1.15;
          margin-bottom: 1.5rem;
        }
        
        .highlight-text {
          color: var(--teal);
        }
        
        .hero-subtitle-group {
          margin-bottom: 2.2rem;
          border-left: 3px solid var(--teal);
          padding-left: 1.25rem;
        }
        
        .hero-subtitle-en {
          font-size: 1.15rem;
          line-height: 1.6;
          color: #e2e8f0;
          margin: 0 0 0.5rem 0;
        }
        
        .hero-subtitle-ml {
          font-size: 1rem;
          font-weight: 500;
          color: #a5f3fc;
          margin: 0;
          line-height: 1.5;
        }
        
        .hero-actions {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
        }
        
        .hero-btn-trial {
          background-color: var(--teal);
          color: var(--primary-dark);
          font-weight: 700;
          border-radius: var(--radius-full);
          padding: 0.85rem 1.8rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: var(--shadow-md);
        }
        
        .hero-btn-trial:hover {
          background-color: var(--teal-light);
          box-shadow: var(--shadow-lg);
        }
        
        .btn-icon {
          flex-shrink: 0;
        }
        
        .hero-btn-courses {
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--text-white);
          font-weight: 700;
          border-radius: var(--radius-full);
          border: 2px dashed var(--accent);
          padding: 0.85rem 1.8rem;
        }
        
        .hero-btn-courses:hover {
          background-color: rgba(251, 191, 36, 0.1);
          border-color: var(--text-white);
        }

        /* Right visual components */
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 300px;
        }
        
        .stitch-badge-container {
          position: relative;
          animation: floatAnimation 6s ease-in-out infinite;
        }
        
        .circle-logo-badge {
          width: 11rem;
          height: 11rem;
          border-radius: 50%;
          background-color: var(--bg-card);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          box-shadow: var(--shadow-xl);
          border: 3px solid rgba(255, 255, 255, 0.2);
        }
        
        .stitch-logo-svg {
          width: 100%;
          height: 100%;
        }
        
        .tag-overlay-box {
          position: absolute;
          bottom: 2rem;
          left: 1.5rem;
          padding: 1rem 1.5rem;
          background-color: var(--bg-card);
          box-shadow: var(--shadow-lg);
          border-left: 4px solid var(--primary);
          text-align: left;
          animation: slideInBox 1s ease-out;
        }
        
        .tag-status-indicator {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--success-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 0.25rem;
        }
        
        .tag-overlay-box h4 {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--primary-dark);
        }
        
        .tag-overlay-box p {
          margin: 0;
          font-size: 0.75rem;
          color: var(--text-light);
        }

        /* Stats Bar */
        .hero-stats-bar {
          background-color: var(--primary);
          color: var(--text-white);
          padding: 2rem 0;
        }
        
        .stats-bar-inner {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 2rem;
        }
        
        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .stat-value {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--teal);
          line-height: 1;
        }
        
        .stat-label {
          font-size: 0.85rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        @keyframes floatAnimation {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1.5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes slideInBox {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          .hero-content {
            text-align: center;
          }
          .hero-content h1 {
            font-size: 2.5rem;
          }
          .hero-badge {
            justify-content: center;
          }
          .hero-subtitle-group {
            border-left: none;
            padding-left: 0;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-visual {
            height: 250px;
          }
        }
      `}</style>
    </>
  );
}
