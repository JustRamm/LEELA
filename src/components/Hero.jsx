import React from 'react';

export default function Hero({ setCurrentTab, isAdmin }) {
  const stats = [
    { value: '98%', label: 'First-time Pass Rate' },
    { value: '12+', label: 'Local Instructors' },
    { value: '15,000+', label: 'Successful Graduates' },
    { value: '4.9★', label: 'Google Rating (600+)' },
  ];

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge badge-teal">Official Licensing Partner</span>
            <span className="badge badge-primary">Ranked #1 in Region</span>
          </div>
          
          <h1>Drive Safely, Drive Confidently with Leela</h1>
          
          <p className="hero-subtitle">
            Your gateway to becoming an independent, defensive driver. We offer structured training packages, certified local instructors, custom progress tracking portals, and interactive mock theory tests.
          </p>

          <div className="hero-actions">
            <button 
              className="btn btn-primary btn-lg pulse-on-hover"
              onClick={() => setCurrentTab(isAdmin ? 'admin-portal' : 'student-portal')}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" style={{marginRight: '0.25rem'}}>
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8l4 4-4 4M8 12h8"/>
              </svg>
              {isAdmin ? 'Access Admin Console' : 'Access Student Dashboard'}
            </button>
            <button 
              className="btn btn-outline btn-lg"
              onClick={() => setCurrentTab('packages')}
            >
              View Lesson Packages
            </button>
          </div>

          <div className="hero-features">
            <div className="hero-feature-item">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="var(--teal)" strokeWidth="2.5" fill="none">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Manual & Automatic vehicles</span>
            </div>
            <div className="hero-feature-item">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="var(--teal)" strokeWidth="2.5" fill="none">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Dual-controlled training fleet</span>
            </div>
            <div className="hero-feature-item">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="var(--teal)" strokeWidth="2.5" fill="none">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Doorstep pickup & drop-off</span>
            </div>
          </div>
        </div>

        {/* Visual Graphic Panel */}
        <div className="hero-visual">
          <div className="card hero-overlay-card">
            <div className="overlay-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="overlay-title">Next Scheduled Driving Lesson</span>
            </div>
            <div className="overlay-body">
              <div className="overlay-instructor">
                <div className="instructor-avatar-placeholder">
                  <span>JD</span>
                </div>
                <div>
                  <h4>Instructor John Doe</h4>
                  <p>Certified Master Coach (12 yrs exp)</p>
                </div>
              </div>
              <div className="overlay-details">
                <div className="detail-item">
                  <span className="detail-label">Vehicle</span>
                  <span className="detail-val">Tesla Model 3 (Automatic)</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Time</span>
                  <span className="detail-val">Tomorrow, 10:00 AM - 12:00 PM</span>
                </div>
              </div>
              <button 
                className="btn btn-secondary btn-sm" 
                style={{width: '100%', marginTop: '1rem'}}
                onClick={() => setCurrentTab('student-portal')}
              >
                Track Lesson Progress
              </button>
            </div>
          </div>

          <div className="badge-card-container">
            <div className="mini-badge-card card">
              <div className="mini-icon text-teal">✓</div>
              <div>
                <h5>Defensive Driving</h5>
                <p>Accredited Course</p>
              </div>
            </div>
            <div className="mini-badge-card card">
              <div className="mini-icon text-orange">★</div>
              <div>
                <h5>High Pass-Rate</h5>
                <p>98% Success</p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
          padding: 6rem 0 3rem 0;
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
        }
        .hero-content h1 {
          font-size: 3.2rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--primary-dark);
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        .hero-subtitle {
          font-size: 1.15rem;
          line-height: 1.6;
          color: var(--text-light);
          margin-bottom: 2.2rem;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .btn-lg {
          padding: 0.9rem 1.8rem;
          font-size: 1.05rem;
        }
        .hero-features {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .hero-feature-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary-light);
        }

        /* Hero Graphic Panel */
        .hero-visual {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .hero-overlay-card {
          padding: 0;
          overflow: hidden;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-top: 4px solid var(--teal);
          box-shadow: var(--shadow-xl);
          transform: rotate(1deg);
          animation: float 6s ease-in-out infinite;
        }
        .overlay-header {
          background-color: var(--bg-alt);
          padding: 0.75rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          border-bottom: 1px solid var(--border-color);
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .dot-red { background-color: var(--danger); }
        .dot-yellow { background-color: var(--accent); }
        .dot-green { background-color: var(--success); }
        .overlay-title {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-light);
          margin-left: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .overlay-body {
          padding: 1.5rem;
          text-align: left;
        }
        .overlay-instructor {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }
        .instructor-avatar-placeholder {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background-color: var(--teal-soft);
          color: var(--teal-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          border: 2px solid var(--teal);
        }
        .overlay-instructor h4 {
          margin: 0 0 0.2rem 0;
          font-size: 1rem;
        }
        .overlay-instructor p {
          margin: 0;
          font-size: 0.8rem;
          color: var(--text-light);
        }
        .overlay-details {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .detail-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
        }
        .detail-label {
          color: var(--text-light);
          font-weight: 500;
        }
        .detail-val {
          color: var(--text-dark);
          font-weight: 600;
        }

        .badge-card-container {
          display: flex;
          gap: 1rem;
          transform: rotate(-1deg);
        }
        .mini-badge-card {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          box-shadow: var(--shadow-md);
        }
        .mini-badge-card:hover {
          transform: translateY(-2px);
        }
        .mini-icon {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background-color: var(--bg-alt);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.1rem;
        }
        .text-teal { color: var(--teal); background-color: var(--teal-soft) !important;}
        .text-orange { color: var(--accent-dark); background-color: var(--accent-soft) !important;}
        .mini-badge-card h5 {
          margin: 0 0 0.15rem 0;
          font-size: 0.9rem;
        }
        .mini-badge-card p {
          margin: 0;
          font-size: 0.75rem;
          color: var(--text-light);
        }

        /* Stats Bar */
        .hero-stats-bar {
          background-color: var(--primary);
          color: var(--text-white);
          padding: 2rem 0;
          margin-top: 4rem;
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
          gap: 0.25rem;
        }
        .stat-value {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--teal-light);
          line-height: 1;
        }
        .stat-label {
          font-size: 0.85rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        @keyframes float {
          0% { transform: translateY(0px) rotate(1deg); }
          50% { transform: translateY(-10px) rotate(1.5deg); }
          100% { transform: translateY(0px) rotate(1deg); }
        }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .hero-content h1 {
            font-size: 2.5rem;
          }
          .hero-overlay-card {
            transform: none;
            animation: none;
          }
          .badge-card-container {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
