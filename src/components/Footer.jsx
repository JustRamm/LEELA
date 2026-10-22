import React from 'react';
import '../styles/Footer.css';

export default function Footer({ isVisible }) {
  return (
    <footer className={`footer-minimal ${isVisible ? 'visible' : ''}`} aria-label="Footer">
      <img src="/brand/logo.svg" alt="LEELA" className="footer-logo" />
      <div className="footer-links">
        <a href="#scene-how-it-works">How it works</a>
        <span>·</span>
        <a href="#scene-why-leela">Why LEELA</a>
        <span>·</span>
        <a href="#scene-contact">Contact</a>
      </div>
      <p className="footer-copy">© 2026 LEELA Driving School · DVSA Certified · Drive with confidence.</p>
    </footer>
  );
}
