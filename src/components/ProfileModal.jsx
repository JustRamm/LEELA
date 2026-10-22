import React, { useState, useEffect } from 'react';
import { 
  IdCardIcon, 
  CarIcon, 
  CheckIcon, 
  RefreshCwIcon, 
  ClockIcon, 
  CalendarIcon, 
  EditIcon,
  MapPinIcon,
  NavigationIcon
} from './Icons';
import { playButtonTap, playSuccessChime } from '../utils/audio';
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
    phone: user?.phone || '+91 98765 43210',
    vehicleType: user?.vehicleType || '4 Wheeler (Car)',
    address: user?.address || '42 Lakeview Promenade, Central City',
    pickupPoint: user?.pickupPoint || 'Home Doorstep (Main Gate)',
    dropPoint: user?.dropPoint || 'Same as Pickup (or Metro Station)',
  });

  useEffect(() => {
    if (user) {
      setEditData({
        name: user.name || 'Alex Morgan',
        phone: user.phone || '+91 98765 43210',
        vehicleType: user.vehicleType || '4 Wheeler (Car)',
        address: user.address || '42 Lakeview Promenade, Central City',
        pickupPoint: user.pickupPoint || 'Home Doorstep (Main Gate)',
        dropPoint: user.dropPoint || 'Same as Pickup (or Metro Station)',
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
    playSuccessChime();
    onUpdateUser({
      ...user,
      name: editData.name,
      phone: editData.phone,
      vehicleType: editData.vehicleType,
      address: editData.address,
      pickupPoint: editData.pickupPoint,
      dropPoint: editData.dropPoint,
    });
    setIsEditing(false);
  };

  const initial = user.name ? user.name.charAt(0).toUpperCase() : 'U';
  const progressPercent = Math.round(((user.lessonsCompleted || 6) / (user.totalLessons || 20)) * 100);

  return (
    <div className="profile-modal-overlay" role="dialog" aria-modal="true">
      {/* Scenic Backdrop Matching Sign In / Sign Up */}
      <div 
        className="profile-scenic-backdrop" 
        onClick={() => {
          playButtonTap();
          onClose();
        }}
      >
        <img
          src="/illustrations/auth/auth-bg-paddy-fields.svg"
          alt="Terraced Paddy Fields Backdrop"
          className="profile-paddy-bg-img"
        />
        <div className="profile-frost-blur"></div>
      </div>

      {/* Floating Glassmorphic Card — Extra Spacious Dashboard */}
      <div className="profile-floating-card profile-card-large" onClick={(e) => e.stopPropagation()}>
        {/* Top Header Navigation */}
        <div className="profile-top-nav">
          <button
            type="button"
            className="btn-profile-back"
            onClick={() => {
              playButtonTap();
              onClose();
            }}
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
            onClick={() => {
              playButtonTap();
              onClose();
            }}
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
            </div>
            <p className="profile-email-text">{user.email}</p>
            <div className="profile-meta-tags">
              <span className="meta-tag-item">
                <IdCardIcon size={13} color="#475569" style={{ marginRight: 5, verticalAlign: -2 }} />
                ID: {user.licenceNumber || 'LEE-84920'}
              </span>
              <span className="meta-tag-item meta-tag-vehicle">
                <CarIcon size={13} color="#78350F" style={{ marginRight: 5, verticalAlign: -2 }} />
                Course: <strong>{user.vehicleType || '4 Wheeler (Car)'}</strong>
              </span>
              {user.phone && (
                <span className="meta-tag-item">
                  {user.phone}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Inline Edit Form or Normal View */}
        {isEditing ? (
          <form className="profile-edit-form" onSubmit={handleSaveEdit}>
            <div className="profile-form-grid-two">
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
            </div>

            <div className="profile-form-group">
              <label htmlFor="profile-vehicle-type">Vehicle to Learn (Course Category)</label>
              <select
                id="profile-vehicle-type"
                value={editData.vehicleType}
                onChange={(e) => setEditData({ ...editData, vehicleType: e.target.value })}
              >
                <option value="4 Wheeler (Car)">4 Wheeler (Car / Sedan / SUV)</option>
                <option value="2 Wheeler (Motorcycle / Scooter)">2 Wheeler (Motorcycle / Scooter / Bike)</option>
                <option value="3 Wheeler (Auto Rickshaw)">3 Wheeler (Auto Rickshaw / Passenger)</option>
                <option value="Heavy Vehicle (Truck / Commercial)">Heavy Vehicle (Commercial Truck / Bus)</option>
              </select>
            </div>

            <div className="profile-form-group">
              <label>Residential / Street Address</label>
              <input
                type="text"
                required
                placeholder="e.g. 42 Lakeview Promenade, Flat 4B"
                value={editData.address}
                onChange={(e) => setEditData({ ...editData, address: e.target.value })}
              />
            </div>

            <div className="profile-form-grid-two">
              <div className="profile-form-group">
                <label>Preferred Pickup Point</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Home Doorstep (Main Gate)"
                  value={editData.pickupPoint}
                  onChange={(e) => setEditData({ ...editData, pickupPoint: e.target.value })}
                />
              </div>
              <div className="profile-form-group">
                <label>Preferred Drop Point</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Same as Pickup, Office, Metro"
                  value={editData.dropPoint}
                  onChange={(e) => setEditData({ ...editData, dropPoint: e.target.value })}
                />
              </div>
            </div>

            <div className="profile-edit-buttons">
              <button type="submit" className="btn-profile-save">Save Profile &amp; Preferences</button>
              <button 
                type="button" 
                className="btn-profile-cancel" 
                onClick={() => {
                  playButtonTap();
                  setIsEditing(false);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            {/* Doorstep Pickup & Service Locations Card */}
            <div className="profile-location-card">
              <div className="location-card-header">
                <div className="location-title-wrap">
                  <div className="location-icon-badge">
                    <MapPinIcon size={16} color="#201A42" />
                  </div>
                  <div>
                    <h4>Doorstep Pickup &amp; Drop Locations</h4>
                    <p className="location-subtext">Where your instructor meets and drops you for each session</p>
                  </div>
                </div>
                <button 
                  type="button" 
                  className="btn-location-edit-mini"
                  onClick={() => {
                    playButtonTap();
                    setIsEditing(true);
                  }}
                >
                  Edit Locations
                </button>
              </div>

              <div className="location-grid-layout">
                <div className="location-detail-box">
                  <span className="location-detail-label">Home Address</span>
                  <p className="location-detail-val">{user.address || '42 Lakeview Promenade, Central City'}</p>
                </div>
                <div className="location-route-row">
                  <div className="location-point-box">
                    <span className="location-chip pickup">Pickup Point</span>
                    <p className="location-point-text">
                      <MapPinIcon size={14} color="#059669" style={{ marginRight: 6, flexShrink: 0 }} />
                      <span>{user.pickupPoint || 'Home Doorstep (Main Gate)'}</span>
                    </p>
                  </div>
                  <div className="location-arrow-connector">→</div>
                  <div className="location-point-box">
                    <span className="location-chip drop">Drop Point</span>
                    <p className="location-point-text">
                      <NavigationIcon size={14} color="#2563EB" style={{ marginRight: 6, flexShrink: 0 }} />
                      <span>{user.dropPoint || 'Same as Pickup (or Metro Station)'}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
              <div className="lesson-card-icon">
                <CarIcon size={22} color="#7C3AED" />
              </div>
              <div className="lesson-card-details">
                <h4>Next Scheduled Lesson</h4>
                <p className="lesson-time">{user.nextLesson || 'Saturday at 10:30 AM (2 hours)'}</p>
                <p className="lesson-instructor">Instructor: <strong>{user.instructor || 'Rajesh K. (DVSA Grade A)'}</strong></p>
              </div>
              <button 
                type="button" 
                className="btn-lesson-manage"
                onClick={() => {
                  playButtonTap();
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
                <span className="skill-badge passed">
                  <CheckIcon size={12} color="#065F46" style={{ marginRight: 5 }} />
                  Cockpit Drill
                </span>
                <span className="skill-badge passed">
                  <CheckIcon size={12} color="#065F46" style={{ marginRight: 5 }} />
                  Clutch Control
                </span>
                <span className="skill-badge passed">
                  <CheckIcon size={12} color="#065F46" style={{ marginRight: 5 }} />
                  Roundabouts
                </span>
                <span className="skill-badge current">
                  <RefreshCwIcon size={12} color="#92400E" style={{ marginRight: 5 }} />
                  Parallel Parking
                </span>
                <span className="skill-badge pending">
                  <ClockIcon size={12} color="#94A3B8" style={{ marginRight: 5 }} />
                  Mock Driving Test
                </span>
              </div>
            </div>

            {/* Quick Actions Footer */}
            <div className="profile-actions-row">
              <button 
                type="button" 
                className="btn-profile-book"
                onClick={() => {
                  playButtonTap();
                  onClose();
                  onOpenBooking();
                }}
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
              >
                <CalendarIcon size={15} color="#201A42" />
                <span>Book Next Lesson</span>
              </button>
              <button 
                type="button" 
                className="btn-profile-edit"
                onClick={() => {
                  playButtonTap();
                  setIsEditing(true);
                }}
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
              >
                <EditIcon size={14} color="#475569" />
                <span>Edit Profile &amp; Addresses</span>
              </button>
              <button 
                type="button" 
                className="btn-profile-signout"
                onClick={() => {
                  playButtonTap();
                  onSignOut();
                }}
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
