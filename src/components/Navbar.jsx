import React, { useState } from 'react';
import { UserIcon, Volume2Icon, VolumeXIcon } from './Icons';
import { playButtonTap, toggleSound, isSoundEnabled } from '../utils/audio';
import '../styles/Navbar.css';

export default function Navbar({ onOpenSignIn, onOpenSignUp, currentUser, onOpenProfile }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(isSoundEnabled());

  const handleNavClick = (cb) => {
    playButtonTap();
    if (cb) cb();
  };

  return (
    <>
      <nav className="hero-navbar" aria-label="Main Navigation">
        {/* Brand Logo / Wordmark */}
        <a href="#scene-home" className="brand-wordmark" aria-label="LEELA Home" onClick={() => playButtonTap()}>
          <img src="/brand/logo.svg" alt="LEELA" className="brand-logo-img" />
        </a>

        {/* Center Nav Links */}
        <div className="nav-menu">
          <a href="#scene-how-it-works" className="nav-item" onClick={() => playButtonTap()}>How it works</a>
          <a href="#scene-instructors" className="nav-item" onClick={() => playButtonTap()}>Instructors</a>
          <a href="#scene-why-leela" className="nav-item" onClick={() => playButtonTap()}>Why LEELA</a>
          <a href="#scene-gallery" className="nav-item" onClick={() => playButtonTap()}>Gallery</a>
          <a href="#scene-contact" className="nav-item" onClick={() => playButtonTap()}>Contact</a>
        </div>

        {/* Header Action Buttons / Profile Icon */}
        <div className="nav-actions">
          {/* Tactile Sound FX Toggle */}
          <button
            type="button"
            className="btn-nav-sound"
            onClick={() => {
              const next = toggleSound();
              setSoundOn(next);
            }}
            aria-label={soundOn ? 'Mute sounds' : 'Enable sounds'}
            title={soundOn ? 'Sound FX On (Click to Mute)' : 'Sound FX Off (Click to Enable)'}
          >
            {soundOn ? <Volume2Icon size={16} /> : <VolumeXIcon size={16} />}
          </button>

          {currentUser ? (
            <button
              type="button"
              className="btn-nav-profile"
              onClick={() => handleNavClick(onOpenProfile)}
              aria-label="View Profile"
              title={`${currentUser.name} — My Profile`}
            >
              <span className="profile-icon-avatar">
                {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : <UserIcon size={14} color="#201A42" />}
              </span>
              <span className="profile-icon-label">
                {currentUser.name ? currentUser.name.split(' ')[0] : 'Profile'}
              </span>
            </button>
          ) : (
            <>
              <button 
                type="button" 
                className="btn-nav-signup" 
                onClick={() => handleNavClick(onOpenSignUp)}
              >
                Sign up
              </button>
              <button 
                type="button" 
                className="btn-nav-signin" 
                onClick={() => handleNavClick(onOpenSignIn)}
              >
                Sign in
              </button>
            </>
          )}

          {/* Mobile Menu Hamburger */}
          <button 
            type="button" 
            className="nav-mobile-toggle" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="mobile-drawer">
            <a href="#scene-how-it-works" className="nav-item" onClick={() => setMobileOpen(false)}>How it works</a>
            <a href="#scene-instructors" className="nav-item" onClick={() => setMobileOpen(false)}>Instructors</a>
            <a href="#scene-why-leela" className="nav-item" onClick={() => setMobileOpen(false)}>Why LEELA</a>
            <a href="#scene-gallery" className="nav-item" onClick={() => setMobileOpen(false)}>Gallery</a>
            <a href="#scene-contact" className="nav-item" onClick={() => setMobileOpen(false)}>Contact</a>
            
            {currentUser ? (
              <div className="mobile-drawer-profile-box">
                <button 
                  type="button" 
                  className="btn-mobile-profile" 
                  onClick={() => { setMobileOpen(false); onOpenProfile(); }}
                >
                  <span className="profile-icon-avatar">
                    {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : <UserIcon size={14} color="#201A42" />}
                  </span>
                  <span>My Profile ({currentUser.name ? currentUser.name.split(' ')[0] : 'Account'})</span>
                </button>
              </div>
            ) : (
              <div className="mobile-drawer-actions">
                <button type="button" className="btn-nav-signup" onClick={() => { setMobileOpen(false); onOpenSignUp(); }}>Sign up</button>
                <button type="button" className="btn-nav-signin" onClick={() => { setMobileOpen(false); onOpenSignIn(); }}>Sign in</button>
              </div>
            )}
          </div>
        )}
      </nav>
    </>
  );
}
