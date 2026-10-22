import React, { useState } from 'react';
import { UserIcon } from './Icons';
import '../styles/Navbar.css';

export default function Navbar({ onOpenSignIn, onOpenSignUp, currentUser, onOpenProfile }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="hero-navbar" aria-label="Main Navigation">
        {/* Brand Logo / Wordmark */}
        <a href="#scene-home" className="brand-wordmark" aria-label="LEELA Home">
          <img src="/brand/logo.svg" alt="LEELA" className="brand-logo-img" />
        </a>

        {/* Center Nav Links */}
        <div className="nav-menu">
          <a href="#scene-how-it-works" className="nav-item">How it works</a>
          <a href="#scene-why-leela" className="nav-item">Why LEELA</a>
          <a href="#" className="nav-item" onClick={(e) => e.preventDefault()}>Gallery</a>
          <a href="#" className="nav-item" onClick={(e) => e.preventDefault()}>Demo Test</a>
          <a href="#scene-contact" className="nav-item">Contact</a>
        </div>

        {/* Header Action Buttons / Profile Icon */}
        <div className="nav-actions">
          {currentUser ? (
            <button
              type="button"
              className="btn-nav-profile"
              onClick={onOpenProfile}
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
                onClick={onOpenSignUp}
              >
                Sign up
              </button>
              <button 
                type="button" 
                className="btn-nav-signin" 
                onClick={onOpenSignIn}
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
            <a href="#scene-why-leela" className="nav-item" onClick={() => setMobileOpen(false)}>Why LEELA</a>
            <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); setMobileOpen(false); }}>Gallery</a>
            <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); setMobileOpen(false); }}>Demo Test</a>
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
