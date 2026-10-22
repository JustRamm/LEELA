import React, { useState, useEffect } from 'react';
import '../styles/ProfileModal.css';

export default function ProfileModal({ 
  isOpen, 
  user, 
  onClose, 
  onSignOut, 
  onUpdateUser,
  onOpenBooking 
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: user?.name || 'Alex Morgan',
    phone: user?.phone || '+44 7123 456789',
    transmission: user?.transmission || 'manual',
  });

  useEffect(() => {
    if (user) {
      setEditData({
        name: user.name || 'Alex Morgan',
        phone: user.phone || '+44 7123 456789',
        transmission: user.transmission || 'manual',
      });
    }
  }, [user]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !user) return null;

  const handleSaveEdit = (e) => {
    e.preventDefault();
    onUpdateUser({
      ...user,
      name: editData.name,
      phone: editData.phone,
      transmission: editData.transmission,
    });
    setIsEditing(false);
  };

  const initial = user.name ? user.name.charAt(0).toUpperCase() : 'U';
  const progressPercent = Math.round(((user.lessonsCompleted || 6) / (user.totalLessons || 20)) * 100);

  return (
    <div className="profile-modal-overlay" role="dialog" aria-modal="true">
      {/* Scenic Backdrop Matching Sign In / Sign Up */}
      <div className="profile-scenic-backdrop" onClick={onClose}>
        <img
          src="/illustrations/auth/auth-bg-paddy-fields.svg"
          alt="Terraced Paddy Fields Backdrop"
          className="profile-paddy-bg-img"
        />
        <div className="profile-frost-blur"></div>
      </div>

      {/* Floating Glassmorphic Card */}
      <div className="profile-floating-card" onClick={(e) => e.stopPropagation()}>
        {/* Top Header Navigation */}
        <div className="profile-top-nav">
          <button
            type="button"
            className="btn-profile-back"
            onClick={onClose}
            aria-label="Back to site"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back to site</span>
          </button>
          <button
            type="button"
            className="btn-profile-close"
            onClick={onClose}
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* User Identity Header */}
        <div className="profile-user-header">
          <div className="profile-avatar-large">
            <span>{initial}</span>
            <span className="profile-online-badge" title="Active Student"></span>
          </div>
          <div className="profile-user-info">
            <div className="profile-name-row">
              <h2>{user.name}</h2>
              <span className="profile-status-pill">🎓 Active Learner</span>
            </div>
            <p className="profile-email-text">{user.email}</p>
            <div className="profile-meta-tags">
              <span className="meta-tag-item">🪪 ID: {user.licenceNumber || 'LEE-84920'}</span>
              <span className="meta-tag-item">⚙️ {user.transmission === 'automatic' ? 'Automatic' : 'Manual'}</span>
            </div>
          </div>
        </div>

        {/* Inline Edit Form or Normal View */}
        {isEditing ? (
          <form className="profile-edit-form" onSubmit={handleSaveEdit}>
            <div className="profile-form-group">
              <label>Full Name</label>
              <input
                type="text"
                required
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              />
            </div>
            <div className="profile-form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                required
                value={editData.phone}
                onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
              />
            </div>
            <div className="profile-form-group">
              <label>Transmission Preference</label>
              <div className="profile-trans-toggle">
                <button
                  type="button"
                  className={`btn-trans-choice ${editData.transmission === 'manual' ? 'active' : ''}`}
                  onClick={() => setEditData({ ...editData, transmission: 'manual' })}
                >
                  ⚙️ Manual
                </button>
                <button
                  type="button"
                  className={`btn-trans-choice ${editData.transmission === 'automatic' ? 'active' : ''}`}
                  onClick={() => setEditData({ ...editData, transmission: 'automatic' })}
                >
                  ⚡ Automatic
                </button>
              </div>
            </div>
            <div className="profile-edit-buttons">
              <button type="submit" className="btn-profile-save">Save Changes</button>
              <button type="button" className="btn-profile-cancel" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </form>
        ) : (
          <>
            {/* Driving Progress Section */}
            <div className="profile-progress-box">
              <div className="progress-header-row">
                <span className="progress-label">Driving Course Progress</span>
                <span className="progress-count">{user.lessonsCompleted || 6} / {user.totalLessons || 20} hrs ({progressPercent}%)</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill-bar" style={{ width: `${progressPercent}%` }}></div>
              </div>
            </div>

            {/* Next Scheduled Lesson Card */}
            <div className="profile-lesson-card">
              <div className="lesson-card-icon">🚗</div>
              <div className="lesson-card-details">
                <h4>Next Scheduled Lesson</h4>
                <p className="lesson-time">{user.nextLesson || 'Saturday at 10:30 AM (2 hours)'}</p>
                <p className="lesson-instructor">Instructor: <strong>{user.instructor || 'Rajesh K. (DVSA Grade A)'}</strong></p>
              </div>
              <button 
                type="button" 
                className="btn-lesson-manage"
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
              >
                Reschedule
              </button>
            </div>

            {/* Driving Syllabus Checklist Badges */}
            <div className="profile-skills-section">
              <h5>Curriculum Milestones</h5>
              <div className="skills-badge-grid">
                <span className="skill-badge passed">✓ Cockpit Drill</span>
                <span className="skill-badge passed">✓ Clutch Control</span>
                <span className="skill-badge passed">✓ Roundabouts</span>
                <span className="skill-badge current">🔄 Parallel Parking</span>
                <span className="skill-badge pending">⏳ Mock Driving Test</span>
              </div>
            </div>

            {/* Quick Actions Footer */}
            <div className="profile-actions-row">
              <button 
                type="button" 
                className="btn-profile-book"
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
              >
                📅 Book Next Lesson
              </button>
              <button 
                type="button" 
                className="btn-profile-edit"
                onClick={() => setIsEditing(true)}
              >
                ✏️ Edit Profile
              </button>
              <button 
                type="button" 
                className="btn-profile-signout"
                onClick={onSignOut}
              >
                Sign Out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
