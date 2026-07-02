import React, { useState } from 'react';

export default function Courses({ onSelectPackage }) {
  const [transmission, setTransmission] = useState('automatic'); // 'automatic' or 'manual'

  const packages = [
    {
      id: 'starter',
      name: 'Starter Package',
      hours: 5,
      description: 'Ideal for beginners needing to learn basic vehicle operations, steering controls, and simple parking rules.',
      manualPrice: 249,
      autoPrice: 279,
      features: [
        '5 Hours of Behind-the-Wheel training',
        'Certified Instructor supervision',
        'Free Doorstep pickup & drop-off',
        'Basic road maneuver mastery',
        'Theory test guidance resources',
      ],
      popular: false,
      tag: 'Beginner Friendly',
    },
    {
      id: 'standard',
      name: 'Standard Package',
      hours: 10,
      description: 'Our most popular course. Prepares you for highway driving, parallel parking, and critical defensive driving procedures.',
      manualPrice: 479,
      autoPrice: 519,
      features: [
        '10 Hours of Behind-the-Wheel training',
        'Parallel parking & highway merging prep',
        'Free Doorstep pickup & drop-off',
        '1 Mock practical road test',
        'Includes DMV road test preparation',
      ],
      popular: true,
      tag: 'Best Value',
    },
    {
      id: 'expert',
      name: 'Pass Guarantee Package',
      hours: 20,
      description: 'Comprehensive curriculum that includes mock exams and using our dual-controlled training car during your DMV road test.',
      manualPrice: 899,
      autoPrice: 979,
      features: [
        '20 Hours of Behind-the-Wheel training',
        'Dual-controlled car rental for DMV test',
        'Priority booking and flexible hours',
        'Unlimited mock driving exams',
        'Pass Guarantee: Free extra class if you fail',
      ],
      popular: false,
      tag: 'Total Confidence',
    },
  ];

  return (
    <section className="section courses-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Driving Packages & Pricing</h2>
          <p>Choose the perfect training program that fits your experience level and goals. Toggle transmission options to update local rates.</p>
        </div>

        {/* Transmission Toggler */}
        <div className="transmission-toggle-wrapper">
          <div className="transmission-toggle">
            <button 
              className={`toggle-btn ${transmission === 'manual' ? 'toggle-active' : ''}`}
              onClick={() => setTransmission('manual')}
            >
              Manual Gearbox
            </button>
            <button 
              className={`toggle-btn ${transmission === 'automatic' ? 'toggle-active' : ''}`}
              onClick={() => setTransmission('automatic')}
            >
              Automatic (Recommended)
            </button>
          </div>
          <span className="transmission-badge">
            {transmission === 'automatic' ? 'Auto rates include EV & hybrid upgrades' : 'Save with manual transmission'}
          </span>
        </div>

        {/* Packages Grid */}
        <div className="grid-3 packages-grid">
          {packages.map((pkg) => {
            const price = transmission === 'automatic' ? pkg.autoPrice : pkg.manualPrice;
            return (
              <div key={pkg.id} className={`card package-card ${pkg.popular ? 'package-popular-card' : ''}`}>
                {pkg.popular && <span className="popular-badge">Most Popular</span>}
                <div className="package-header">
                  <span className="package-tag">{pkg.tag}</span>
                  <h3>{pkg.name}</h3>
                  <p className="package-hours">{pkg.hours} Hours Training</p>
                </div>
                
                <div className="package-price-box">
                  <span className="price-currency">$</span>
                  <span className="price-val">{price}</span>
                  <span className="price-suffix">/ course</span>
                </div>

                <p className="package-desc">{pkg.description}</p>
                
                <hr className="package-divider" />

                <ul className="package-features">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="var(--teal)" strokeWidth="3" fill="none">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'} package-btn`}
                  onClick={() => onSelectPackage({ ...pkg, selectedPrice: price, selectedTransmission: transmission })}
                >
                  Enroll In Course
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .courses-section {
          background-color: var(--bg-main);
        }
        .transmission-toggle-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 3.5rem;
        }
        .transmission-toggle {
          display: flex;
          background-color: var(--bg-alt);
          padding: 0.35rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
        }
        .toggle-btn {
          padding: 0.5rem 1.5rem;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-light);
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          transition: all var(--transition-fast);
        }
        .toggle-btn:hover {
          color: var(--teal);
        }
        .toggle-active {
          background-color: var(--bg-card);
          color: var(--teal-dark) !important;
          box-shadow: var(--shadow-sm);
        }
        .transmission-badge {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-light);
        }

        .packages-grid {
          align-items: stretch;
        }
        .package-card {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          text-align: left;
          padding: 2.5rem 2rem;
          background: var(--bg-card);
        }
        .package-popular-card {
          border: 2px solid var(--teal);
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }
        .package-popular-card:hover {
          transform: translateY(-12px);
          box-shadow: var(--shadow-xl);
          border-color: var(--teal-dark);
        }
        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--teal);
          color: var(--text-white);
          padding: 0.25rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: var(--shadow-md);
        }
        .package-header h3 {
          margin: 0.5rem 0 0.25rem 0;
          font-size: 1.4rem;
        }
        .package-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--teal);
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }
        .package-hours {
          font-size: 0.9rem;
          color: var(--text-light);
          margin: 0;
        }
        .package-price-box {
          margin: 1.5rem 0 1rem 0;
          display: flex;
          align-items: baseline;
        }
        .price-currency {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-dark);
          align-self: flex-start;
          margin-top: 0.2rem;
        }
        .price-val {
          font-size: 3.2rem;
          font-weight: 800;
          font-family: var(--font-heading);
          color: var(--primary-dark);
          line-height: 1;
        }
        .price-suffix {
          font-size: 0.9rem;
          color: var(--text-light);
          margin-left: 0.25rem;
        }
        .package-desc {
          font-size: 0.9rem;
          color: var(--text-light);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          min-height: 4rem;
        }
        .package-divider {
          border: 0;
          border-top: 1px solid var(--border-color);
          margin-bottom: 1.5rem;
        }
        .package-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex-grow: 1;
        }
        .package-features li {
          display: flex;
          gap: 0.75rem;
          font-size: 0.9rem;
          line-height: 1.4;
          align-items: flex-start;
        }
        .package-features svg {
          margin-top: 0.15rem;
          flex-shrink: 0;
        }
        .package-btn {
          width: 100%;
          font-size: 0.95rem;
          padding: 0.8rem;
        }

        @media (max-width: 1024px) {
          .package-popular-card {
            transform: none;
          }
          .package-popular-card:hover {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </section>
  );
}
