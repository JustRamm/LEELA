import React, { useState, useEffect } from 'react';
import '../styles/AuthModal.css';

export default function AuthModal({ isOpen, initialMode = 'signin', onClose, onSuccess }) {
  const [mode, setMode] = useState(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [transmission, setTransmission] = useState('manual');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  useEffect(() => {
    setMode(initialMode);
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
    const actionText = mode === 'signin' ? 'Welcome back to LEELA!' : 'Account created! Welcome to LEELA Driving School.';
    onSuccess(actionText);
    onClose();
  };

  return (
    <div className="auth-modal-overlay" role="dialog" aria-modal="true">
      {/* Scenic Backdrop: Terraced Paddy Fields */}
      <div className="auth-scenic-backdrop" onClick={onClose}>
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
            onClick={onClose}
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
            onClick={onClose}
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

          {mode === 'signup' && (
            <div className="auth-form-group">
              <label>Preferred Transmission</label>
              <div className="transmission-auth-row">
                <button
                  type="button"
                  className={`btn-trans-auth ${transmission === 'manual' ? 'active' : ''}`}
                  onClick={() => setTransmission('manual')}
                >
                  ⚙️ Manual
                </button>
                <button
                  type="button"
                  className={`btn-trans-auth ${transmission === 'automatic' ? 'active' : ''}`}
                  onClick={() => setTransmission('automatic')}
                >
                  ⚡ Automatic
                </button>
              </div>
            </div>
          )}

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
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                className="btn-eye-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <button type="submit" className="btn-auth-primary-submit">
            {mode === 'signin' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="auth-footer-toggle">
          <span>{mode === 'signin' ? "Don't have an account?" : 'Already have an account?'}</span>
          <button
            type="button"
            className="btn-auth-toggle-mode"
            onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
          >
            {mode === 'signin' ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}
