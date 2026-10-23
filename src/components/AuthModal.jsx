import React, { useState, useEffect } from 'react';
import { AlertTriangleIcon, EyeIcon, EyeOffIcon } from './Icons';
import { playButtonTap, playSuccessChime } from '../utils/audio';
import '../styles/AuthModal.css';

export default function AuthModal({ isOpen, initialMode = 'signin', onClose, onSuccess }) {
  const [mode, setMode] = useState(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setMode(initialMode);
    setPasswordError('');
    setConfirmPassword('');
  }, [initialMode, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // In signup mode, verify that password and confirm password match
    if (mode === 'signup') {
      if (formData.password !== confirmPassword) {
        setPasswordError('Passwords do not match. Please check and try again.');
        return;
      }
      if (formData.password.length < 6) {
        setPasswordError('Password should be at least 6 characters.');
        return;
      }
    }

    setPasswordError('');
    playSuccessChime();
    const actionText = mode === 'signin' ? 'Welcome back to LEELA!' : 'Account created! Welcome to LEELA Driving School.';
    const user = {
      name: formData.name || (formData.email ? formData.email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Alex Morgan'),
      email: formData.email || 'alex@example.com',
      phone: formData.phone || '+91 98765 43210',
      address: '42 Lakeview Promenade, Central City',
      pickupPoint: 'Home Doorstep (Main Gate)',
      dropPoint: 'Same as Pickup (or Metro Station)',
      vehicleType: '4 Wheeler (Car)',
      licenceNumber: 'LEE-84920',
      lessonsCompleted: 6,
      totalLessons: 20,
      instructor: 'Rajesh K. (Kerala MVD Certified)',
      nextLesson: 'Saturday at 10:30 AM (2 hours)',
      joinedDate: 'October 2026',
    };
    onSuccess(actionText, user);
    onClose();
  };

  return (
    <div className="auth-modal-overlay" role="dialog" aria-modal="true">
      {/* Scenic Backdrop: Terraced Paddy Fields */}
      <div 
        className="auth-scenic-backdrop" 
        onClick={() => {
          playButtonTap();
          onClose();
        }}
      >
        <img
          src="/illustrations/auth/auth-bg-paddy-fields.svg"
          alt="Terraced Paddy Fields Backdrop"
          className="auth-paddy-bg-img"
        />
        <div className="auth-frost-blur"></div>
      </div>

      {/* Floating Glassmorphic Card */}
      <div className="auth-floating-card" onClick={(e) => e.stopPropagation()}>
        <div className="auth-top-nav">
          <button
            type="button"
            className="btn-auth-back-arrow"
            onClick={() => {
              playButtonTap();
              onClose();
            }}
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back to site</span>
          </button>
          <button
            type="button"
            className="btn-auth-menu-dots"
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

        <div className="auth-center-mark">
          <img src="/brand/logo-mark.svg" alt="LEELA Mark" style={{ width: 44, height: 44, borderRadius: 10 }} />
        </div>

        <div className="auth-heading-group">
          <h2>{mode === 'signin' ? 'Welcome Back' : 'Join LEELA School'}</h2>
          <p>{mode === 'signin' ? 'Sign in to track your driving progress & lessons' : 'Start your driving journey with top-rated instructors'}</p>
        </div>

        {passwordError && (
          <div className="auth-error-message">
            <AlertTriangleIcon size={16} color="#DC2626" />
            <span>{passwordError}</span>
          </div>
        )}

        <form className="auth-form-fields" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div className="auth-form-group">
              <label htmlFor="auth-name">Full Name</label>
              <input
                id="auth-name"
                type="text"
                placeholder="Jane Doe"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          )}

          <div className="auth-form-group">
            <label htmlFor="auth-email">Email Address</label>
            <input
              id="auth-email"
              type="email"
              placeholder="jane@example.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="auth-form-group">
            <div className="label-with-forgot">
              <label htmlFor="auth-pass">Password</label>
              {mode === 'signin' && (
                <button
                  type="button"
                  className="forgot-pass-link"
                  onClick={() => alert('Password reset link sent to registered email!')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  Forgot password?
                </button>
              )}
            </div>
            <div className="password-wrap-relative">
              <input
                id="auth-pass"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                required
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  if (passwordError) setPasswordError('');
                }}
              />
              <button
                type="button"
                className="btn-eye-toggle"
                onClick={() => {
                  playButtonTap();
                  setShowPassword(!showPassword);
                }}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOffIcon size={16} color="#64748B" /> : <EyeIcon size={16} color="#64748B" />}
              </button>
            </div>
          </div>

          {mode === 'signup' && (
            <div className="auth-form-group">
              <label htmlFor="auth-confirm-pass">Confirm Password</label>
              <div className="password-wrap-relative">
                <input
                  id="auth-confirm-pass"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  required
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (passwordError) setPasswordError('');
                  }}
                />
                <button
                  type="button"
                  className="btn-eye-toggle"
                  onClick={() => {
                    playButtonTap();
                    setShowConfirmPassword(!showConfirmPassword);
                  }}
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? <EyeOffIcon size={16} color="#64748B" /> : <EyeIcon size={16} color="#64748B" />}
                </button>
              </div>
            </div>
          )}

          <button type="submit" className="btn-auth-primary-submit">
            {mode === 'signin' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="auth-footer-toggle">
          <span>{mode === 'signin' ? "Don't have an account?" : 'Already have an account?'}</span>
          <button
            type="button"
            className="btn-auth-toggle-mode"
            onClick={() => {
              playButtonTap();
              setMode(mode === 'signin' ? 'signup' : 'signin');
              setPasswordError('');
            }}
          >
            {mode === 'signin' ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}
