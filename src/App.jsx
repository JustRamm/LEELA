import React, { useState, useEffect } from 'react';
import './styles/global.css';

import Hero from './components/Hero';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import BookingModal from './components/BookingModal';

// Each zone advances the driving stage.
// The hero shows the correct sky-slide and cockpit for each stage.
const SCROLL_ZONES = [
  { id: 'scene-home',         stage: 1 },
  { id: 'scene-how-it-works', stage: 2 },
  { id: 'scene-why-leela',    stage: 3 },
  { id: 'scene-contact',      stage: 4 },
];

export default function App() {
  const [drivingStage, setDrivingStage] = useState(1);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('signin');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPackage, setBookingPackage] = useState('Complete Pass (20h)');
  const [toastMessage, setToastMessage] = useState(null);

  // Auto-clear toast
  useEffect(() => {
    if (toastMessage) {
      const t = setTimeout(() => setToastMessage(null), 4500);
      return () => clearTimeout(t);
    }
  }, [toastMessage]);

  // Robust, instant scroll-to-stage calculation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      // 4 zones (100vh each)
      const stage = Math.min(4, Math.max(1, Math.floor((scrollY + vh * 0.4) / vh) + 1));
      setDrivingStage(stage);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openSignIn  = () => { setAuthModalMode('signin');  setAuthModalOpen(true); };
  const openSignUp  = () => { setAuthModalMode('signup');  setAuthModalOpen(true); };
  const showToast   = (msg) => setToastMessage(msg);

  const selectStage = (stage) => {
    window.scrollTo({
      top: (stage - 1) * window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="leela-root">

      {/* ── Fixed full-screen hero stage — content in sky space changes with stage ── */}
      <div className="hero-fixed-layer">
        <Hero
          drivingStage={drivingStage}
          onOpenSignIn={openSignIn}
          onOpenSignUp={openSignUp}
          onShowToast={showToast}
          onSelectStage={selectStage}
        />
      </div>

      {/* ── Scroll rail — invisible spacers that drive stage transitions ── */}
      <div className="scroll-rail">
        {SCROLL_ZONES.map(({ id }) => (
          <div key={id} id={id} className="scroll-zone" />
        ))}
        <div className="scroll-footer-spacer">
          <Footer isVisible={drivingStage === 4} />
        </div>
      </div>

      {/* Modals */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authModalMode}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={showToast}
      />
      <BookingModal
        isOpen={bookingModalOpen}
        initialPackage={bookingPackage}
        onClose={() => setBookingModalOpen(false)}
        onSuccess={showToast}
      />

      {/* Toast */}
      {toastMessage && (
        <div className="toast-notification">
          <span>🚗</span>
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage(null)}>✕</button>
        </div>
      )}
    </div>
  );
}
