import React from 'react';

export default function Header({ currentTab, setCurrentTab, isAdmin, setIsAdmin }) {
  const navItems = [
    { id: 'home', label: 'About' },
    { id: 'packages', label: 'Courses' },
    { id: 'quiz', label: 'Road Symbols' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="main-header">
      <div className="container header-inner">
        {/* Brand Logo */}
        <div className="logo" onClick={() => setCurrentTab('home')} style={{ cursor: 'pointer' }}>
          <span className="logo-text">LEELA</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${currentTab === item.id ? 'active' : ''}`}
              onClick={() => setCurrentTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Dual Portal Switch / CTAs */}
        <div className="header-actions">
          <div className="role-switch-container">
            <span className={`role-label ${!isAdmin ? 'role-active-label' : ''}`}>Student</span>
            <button 
              className={`role-switch-toggle ${isAdmin ? 'admin-toggled' : ''}`}
              onClick={() => {
                const newIsAdmin = !isAdmin;
                setIsAdmin(newIsAdmin);
                if (newIsAdmin) {
                  setCurrentTab('admin-portal');
                } else {
                  setCurrentTab('student-portal');
                }
              }}
              aria-label="Switch User Portal Role"
            >
              <span className="role-switch-dot"></span>
            </button>
            <span className={`role-label ${isAdmin ? 'role-active-label' : ''}`}>Admin</span>
          </div>

          <button 
            className="btn btn-sm portal-btn"
            style={{
              backgroundColor: 'var(--teal)',
              color: 'var(--primary-dark)',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              padding: '0.5rem 1.25rem',
              fontWeight: '700',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem'
            }}
            onClick={() => setCurrentTab(isAdmin ? 'admin-portal' : 'student-portal')}
          >
            {isAdmin ? 'Admin Panel' : 'Enrol Now'}
          </button>
        </div>
      </div>

      <style>{`
        .main-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 4.5rem;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .logo-icon {
          width: 2.2rem;
          height: 2.2rem;
          color: var(--primary);
        }
        .logo-text {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.8rem;
          letter-spacing: 0.02em;
          color: var(--primary);
          line-height: 1;
        }
        .nav-menu {
          display: flex;
          gap: 1.5rem;
        }
        .nav-link {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-light);
          padding: 0.5rem 0;
          position: relative;
        }
        .nav-link:hover {
          color: var(--teal);
        }
        .nav-link.active {
          color: var(--primary-dark);
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: var(--teal);
          border-radius: var(--radius-full);
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        /* Role Switch Toggler */
        .role-switch-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: var(--bg-alt);
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
        }
        .role-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.02em;
          transition: color var(--transition-fast);
        }
        .role-active-label {
          color: var(--teal-dark);
        }
        .role-switch-toggle {
          position: relative;
          width: 2.2rem;
          height: 1.2rem;
          background-color: var(--text-light);
          border-radius: var(--radius-full);
          transition: background-color var(--transition-normal);
        }
        .role-switch-toggle.admin-toggled {
          background-color: var(--teal);
        }
        .role-switch-dot {
          position: absolute;
          top: 0.125rem;
          left: 0.125rem;
          width: 0.95rem;
          height: 0.95rem;
          background-color: white;
          border-radius: 50%;
          transition: transform var(--transition-normal);
          box-shadow: var(--shadow-sm);
        }
        .role-switch-toggle.admin-toggled .role-switch-dot {
          transform: translateX(1rem);
        }
        .portal-btn {
          animation: float 3s ease-in-out infinite;
        }

        @media (max-width: 900px) {
          .nav-menu {
            display: none; /* In a real app we'd have a hamburger, but for demo focus we keep layouts compact */
          }
        }
      `}</style>
    </header>
  );
}
