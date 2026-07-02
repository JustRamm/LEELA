import React from 'react';

export default function Instructors({ instructorsData }) {
  // Pre-seed if data not passed from state
  const instructors = instructorsData || [
    {
      id: 'inst-1',
      name: 'Sarah Jenkins',
      experience: 10,
      rating: 4.9,
      reviewsCount: 154,
      transmission: 'Both',
      languages: ['English', 'Spanish'],
      bio: 'Sarah is an patient specialist who excels with nervous beginners. She breaks down parallel parking into simple, stress-free steps.',
      avatarInitials: 'SJ',
      vehicle: 'Toyota Corolla / Tesla Model 3',
    },
    {
      id: 'inst-2',
      name: 'David Chen',
      experience: 8,
      rating: 4.8,
      reviewsCount: 120,
      transmission: 'Automatic',
      languages: ['English', 'Mandarin'],
      bio: 'David focuses on defensive driving on highways, lane changes, and prepping students for the exact routes used in DMV practical exams.',
      avatarInitials: 'DC',
      vehicle: 'Honda Civic (Automatic)',
    },
    {
      id: 'inst-3',
      name: 'Marcus Brody',
      experience: 12,
      rating: 4.9,
      reviewsCount: 182,
      transmission: 'Both',
      languages: ['English'],
      bio: 'A former safety auditor, Marcus has a calm and encouraging demeanor. He is highly recommended for adult refresher courses.',
      avatarInitials: 'MB',
      vehicle: 'Subaru Impreza (Manual & Auto)',
    },
    {
      id: 'inst-4',
      name: 'Linda Cooper',
      experience: 6,
      rating: 4.7,
      reviewsCount: 96,
      transmission: 'Automatic',
      languages: ['English', 'Tagalog'],
      bio: 'Linda brings high energy and clear, actionable feedback to each class. She specializes in teen driver safety and hazard awareness.',
      avatarInitials: 'LC',
      vehicle: 'Toyota Prius (Automatic)',
    },
  ];

  return (
    <section className="section instructors-section section-bg-alt">
      <div className="container">
        <div className="section-header">
          <h2>Meet Our Certified Instructors</h2>
          <p>Learn from certified, friendly, and fully insured professionals committed to teaching defensive driving skills that last a lifetime.</p>
        </div>

        <div className="grid-4 instructors-grid">
          {instructors.map((inst) => (
            <div key={inst.id} className="card instructor-card">
              <div className="instructor-card-top">
                <div className="inst-avatar">
                  <span>{inst.avatarInitials}</span>
                </div>
                <div className="inst-rating-badge">
                  <span className="star-icon">★</span>
                  <span>{inst.rating} ({inst.reviewsCount} reviews)</span>
                </div>
              </div>

              <div className="instructor-info">
                <h3>{inst.name}</h3>
                <p className="inst-subtitle">{inst.experience} Years Experience</p>
                <p className="inst-bio">{inst.bio}</p>
              </div>

              <div className="inst-details">
                <div className="inst-detail-row">
                  <span className="inst-lbl">Focus:</span>
                  <span className="inst-val">{inst.transmission}</span>
                </div>
                <div className="inst-detail-row">
                  <span className="inst-lbl">Vehicle:</span>
                  <span className="inst-val text-truncate" title={inst.vehicle}>{inst.vehicle}</span>
                </div>
                <div className="inst-detail-row">
                  <span className="inst-lbl">Languages:</span>
                  <span className="inst-val">{inst.languages.join(', ')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .instructor-card {
          display: flex;
          flex-direction: column;
          text-align: left;
          padding: 1.5rem;
          background-color: var(--bg-card);
          height: 100%;
        }
        .instructor-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }
        .inst-avatar {
          width: 4rem;
          height: 4rem;
          border-radius: var(--radius-md);
          background-color: var(--teal-soft);
          color: var(--teal-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.4rem;
          border: 2px solid var(--teal);
        }
        .inst-rating-badge {
          background-color: var(--accent-soft);
          color: var(--accent-dark);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }
        .star-icon {
          color: var(--accent-dark);
          font-size: 0.85rem;
        }
        .instructor-info {
          flex-grow: 1;
          margin-bottom: 1rem;
        }
        .instructor-info h3 {
          font-size: 1.2rem;
          margin-bottom: 0.2rem;
        }
        .inst-subtitle {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--teal-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
        }
        .inst-bio {
          font-size: 0.85rem;
          color: var(--text-light);
          line-height: 1.4;
        }
        .inst-details {
          border-top: 1px solid var(--border-color);
          padding-top: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.8rem;
        }
        .inst-detail-row {
          display: flex;
          justify-content: space-between;
        }
        .inst-lbl {
          color: var(--text-light);
          font-weight: 500;
        }
        .inst-val {
          color: var(--text-dark);
          font-weight: 600;
        }
        .text-truncate {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 140px;
        }
      `}</style>
    </section>
  );
}
