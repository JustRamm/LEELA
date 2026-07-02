import React from 'react';

export default function Footer({ setCurrentTab }) {
  return (
    <footer className="main-footer">
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <div className="logo footer-logo">
            <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v7M12 15v7M2 12h7M15 12h7" />
            </svg>
            <span className="logo-text">LEELA <span className="logo-subtext" style={{color: '#94a3b8'}}>Driving School</span></span>
          </div>
          <p className="brand-description">
            Empowering drivers with confidence and safety since 2011. Certified instructors, high pass-rates, and professional schedules tailored to you.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><button onClick={() => setCurrentTab('home')}>Home Base</button></li>
            <li><button onClick={() => setCurrentTab('packages')}>Pricing & Courses</button></li>
            <li><button onClick={() => setCurrentTab('instructors')}>Our Instructors</button></li>
            <li><button onClick={() => setCurrentTab('quiz')}>Theory Prep Quiz</button></li>
            <li><button onClick={() => setCurrentTab('contact')}>Contact & Zones</button></li>
          </ul>
        </div>

        {/* Operating Hours Column */}
        <div className="footer-col">
          <h3>School Hours</h3>
          <ul className="footer-hours">
            <li><span>Monday - Friday</span> <span>8:00 AM - 7:00 PM</span></li>
            <li><span>Saturday</span> <span>9:00 AM - 5:00 PM</span></li>
            <li><span>Sunday</span> <span>10:00 AM - 3:00 PM</span></li>
            <li className="hours-note">Behind-the-wheel classes run 24/7 on demand.</li>
          </ul>
        </div>

        {/* Contacts Column */}
        <div className="footer-col">
          <h3>Get In Touch</h3>
          <ul className="footer-contact">
            <li>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+1 (555) 762-6887</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>office@leeladriving.com</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>104 Motorway Ave, Suite B, Cityville</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>&copy; {new Date().getFullYear()} Leela Driving School. All rights reserved.</span>
          <div className="footer-socials">
            <a href="#facebook" aria-label="Facebook">FB</a>
            <a href="#twitter" aria-label="Twitter">TW</a>
            <a href="#instagram" aria-label="Instagram">IG</a>
          </div>
        </div>
      </div>

      <style>{`
        .main-footer {
          background-color: var(--primary-dark);
          color: #cbd5e1;
          padding: 4rem 0 0 0;
          font-size: 0.9rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1.5fr 1.5fr;
          gap: 3rem;
          padding-bottom: 3.5rem;
        }
        .footer-col h3 {
          color: var(--text-white);
          font-size: 1.15rem;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        .footer-col h3::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 30px;
          height: 2px;
          background-color: var(--teal);
        }
        .brand-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-logo .logo-text {
          color: var(--text-white);
        }
        .footer-logo .logo-icon {
          color: var(--teal-light);
        }
        .brand-description {
          line-height: 1.6;
          color: #94a3b8;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links button {
          color: #cbd5e1;
          text-align: left;
          font-size: 0.9rem;
          font-weight: 500;
          padding: 0;
        }
        .footer-links button:hover {
          color: var(--teal-light);
          transform: translateX(3px);
        }
        .footer-hours, .footer-contact {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-hours li {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
          padding-bottom: 0.35rem;
        }
        .hours-note {
          font-size: 0.8rem;
          color: var(--teal-light);
          border-bottom: none !important;
          padding-top: 0.25rem;
        }
        .footer-contact li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .footer-contact svg {
          color: var(--teal-light);
          flex-shrink: 0;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem 0;
          color: #64748b;
          font-size: 0.8rem;
        }
        .footer-bottom-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-socials {
          display: flex;
          gap: 1rem;
        }
        .footer-socials a {
          color: #64748b;
          font-weight: bold;
        }
        .footer-socials a:hover {
          color: var(--text-white);
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }
        @media (max-width: 550px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom-inner {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
