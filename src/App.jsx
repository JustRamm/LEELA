import React, { useState, useEffect, useRef } from 'react';
import './styles/global.css';

import Hero from './components/Hero';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import BookingModal from './components/BookingModal';
import ProfileModal from './components/ProfileModal';
import ExamRulesModal from './components/ExamRulesModal';
import ExamSimulationPage from './components/ExamSimulationPage';
import { CarIcon, CloseIcon } from './components/Icons';
import { playStageTransition } from './utils/audio';

// Each zone advances the driving stage.
// The hero shows the correct sky-slide and cockpit for each stage.
const SCROLL_ZONES = [
  { id: 'scene-home',         stage: 1 },
  { id: 'scene-how-it-works', stage: 2 },
  { id: 'scene-instructors',  stage: 3 },
  { id: 'scene-why-leela',    stage: 4 },
  { id: 'scene-gallery',      stage: 5 },
  { id: 'scene-contact',      stage: 6 },
];

export default function App() {
  const [activeView, setActiveView] = useState('home'); // 'home' | 'exam'
  const [drivingStage, setDrivingStage] = useState(1);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('signin');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPackage, setBookingPackage] = useState('Complete Pass (20h)');
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [examRulesOpen, setExamRulesOpen] = useState(false);
  const [examLang, setExamLang] = useState('ml');
  const [toastMessage, setToastMessage] = useState(null);

  // Initialize or persist current logged-in user
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('leela_current_user');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge with guest exam history if present
        const guestHistory = JSON.parse(localStorage.getItem('leela_guest_exam_history') || '[]');
        if (guestHistory.length > 0 && !parsed.examHistory) {
          parsed.examHistory = guestHistory;
        }
        return parsed;
      }
      return null;
    } catch {
      return null;
    }
  });

  // Auto-clear toast
  useEffect(() => {
    if (toastMessage) {
      const t = setTimeout(() => setToastMessage(null), 4500);
      return () => clearTimeout(t);
    }
  }, [toastMessage]);

  // Robust, instant scroll-to-stage calculation across all 6 journey stages
  useEffect(() => {
    if (activeView === 'exam') return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      // 6 zones (100vh each)
      const stage = Math.min(6, Math.max(1, Math.floor((scrollY + vh * 0.4) / vh) + 1));
      setDrivingStage((prev) => {
        if (prev !== stage) {
          playStageTransition();
          return stage;
        }
        return prev;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeView]);

  const openSignIn  = () => { setAuthModalMode('signin');  setAuthModalOpen(true); };
  const openSignUp  = () => { setAuthModalMode('signup');  setAuthModalOpen(true); };
  const openBooking = (pkg) => {
    if (pkg && typeof pkg === 'string') setBookingPackage(pkg);
    setBookingModalOpen(true);
  };
  const openProfile = () => { setProfileModalOpen(true); };
  const openDemoTest = () => { setExamRulesOpen(true); };
  const showToast   = (msg) => setToastMessage(msg);

  // Authentication success handler
  const handleAuthSuccess = (msg, user) => {
    if (user) {
      // Inherit any guest test history
      try {
        const guestHistory = JSON.parse(localStorage.getItem('leela_guest_exam_history') || '[]');
        if (guestHistory.length > 0) {
          user.examHistory = [...(user.examHistory || []), ...guestHistory];
        }
      } catch (e) {}

      setCurrentUser(user);
      try {
        localStorage.setItem('leela_current_user', JSON.stringify(user));
      } catch (e) {}
    }
    showToast(msg);
  };

  // Sign out handler
  const handleSignOut = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('leela_current_user');
    } catch (e) {}
    setProfileModalOpen(false);
    showToast('Signed out successfully.');
  };

  // Profile update handler
  const handleUpdateUser = (updatedUser) => {
    setCurrentUser(updatedUser);
    try {
      localStorage.setItem('leela_current_user', JSON.stringify(updatedUser));
    } catch (e) {}
    showToast('Profile updated successfully!');
  };

  // Exam Routing Handlers
  const handleProceedToExam = (chosenLang) => {
    setExamLang(chosenLang);
    setExamRulesOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveView('exam');
  };

  const handleExitExam = () => {
    setActiveView('home');
  };

  // Save exam results to profile
  const handleSaveExamResult = (record) => {
    // 1. Update current user state and persistence
    if (currentUser) {
      const updatedUser = {
        ...currentUser,
        examHistory: [record, ...(currentUser.examHistory || [])],
      };
      setCurrentUser(updatedUser);
      try {
        localStorage.setItem('leela_current_user', JSON.stringify(updatedUser));
      } catch (e) {}
    } else {
      // Guest user persistence
      try {
        const existing = JSON.parse(localStorage.getItem('leela_guest_exam_history') || '[]');
        localStorage.setItem('leela_guest_exam_history', JSON.stringify([record, ...existing]));
      } catch (e) {}
    }

    const verdict = record.passed ? 'PASSED 🎉' : 'Needs Practice';
    showToast(`Mock Test Complete: ${record.score}/${record.total} (${verdict})`);
  };

  const selectStage = (stage) => {
    window.scrollTo({
      top: (stage - 1) * window.innerHeight,
      behavior: 'smooth',
    });
  };

  // ── Dedicated Exam Simulation Route ──
  if (activeView === 'exam') {
    return (
      <ExamSimulationPage
        initialLang={examLang}
        currentUser={currentUser}
        onExit={handleExitExam}
        onSaveResult={handleSaveExamResult}
      />
    );
  }

  // ── Standard Hero / Driving School Journey Route ──
  return (
    <div className="leela-root">

      {/* ── Fixed full-screen hero stage — content in sky space changes with stage ── */}
      <div className="hero-fixed-layer">
        <Hero
          drivingStage={drivingStage}
          onOpenSignIn={openSignIn}
          onOpenSignUp={openSignUp}
          onOpenBooking={openBooking}
          onShowToast={showToast}
          onSelectStage={selectStage}
          currentUser={currentUser}
          onOpenProfile={openProfile}
          onOpenDemoTest={openDemoTest}
        />
      </div>

      {/* ── Scroll rail — invisible spacers that drive stage transitions ── */}
      <div className="scroll-rail">
        {SCROLL_ZONES.map(({ id }) => (
          <div key={id} id={id} className="scroll-zone" />
        ))}
        <div className="scroll-footer-spacer">
          <Footer isVisible={drivingStage === 6} />
        </div>
      </div>

      {/* Modals */}
      <ExamRulesModal
        isOpen={examRulesOpen}
        onClose={() => setExamRulesOpen(false)}
        onProceed={handleProceedToExam}
        initialLang={examLang}
        currentUser={currentUser}
      />

      <AuthModal
        isOpen={authModalOpen}
        initialMode={authModalMode}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        initialPackage={bookingPackage}
        onClose={() => setBookingModalOpen(false)}
        onSuccess={showToast}
        currentUser={currentUser}
      />

      <ProfileModal
        isOpen={profileModalOpen}
        user={currentUser}
        onClose={() => setProfileModalOpen(false)}
        onSignOut={handleSignOut}
        onUpdateUser={handleUpdateUser}
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenDemoTest={openDemoTest}
      />

      {/* Toast */}
      {toastMessage && (
        <div className="toast-notification">
          <CarIcon size={18} color="#FFE638" />
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} aria-label="Dismiss toast">
            <CloseIcon size={13} />
          </button>
        </div>
      )}
    </div>
  );
}
