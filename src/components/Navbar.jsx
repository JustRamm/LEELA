import React, { useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar({ onOpenSignIn, onOpenSignUp }) {
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

        {/* Header Action Buttons */}
        <div className="nav-actions">
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
            <div className="mobile-drawer-actions">
              <button type="button" className="btn-nav-signup" onClick={() => { setMobileOpen(false); onOpenSignUp(); }}>Sign up</button>
              <button type="button" className="btn-nav-signin" onClick={() => { setMobileOpen(false); onOpenSignIn(); }}>Sign in</button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
