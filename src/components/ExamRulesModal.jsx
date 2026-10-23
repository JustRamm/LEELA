import React, { useState, useEffect } from 'react';
import { 
  CheckIcon, 
  ClockIcon, 
  IdCardIcon, 
  CloseIcon,
  CarIcon,
  ShieldCheckIcon,
  GraduationCapIcon
} from './Icons';
import { playButtonTap } from '../utils/audio';
import { useFocusTrap } from '../utils/focusTrap';
import '../styles/ExamRulesModal.css';

export default function ExamRulesModal({ 
  isOpen, 
  onClose, 
  onProceed, 
  initialLang = 'ml',
  currentUser 
}) {
  const [selectedLang, setSelectedLang] = useState(initialLang);
  const modalRef = useFocusTrap(isOpen, onClose);

  if (!isOpen) return null;

  const handleStartExam = () => {
    playButtonTap();
    onProceed(selectedLang);
  };

  return (
    <div className="exam-rules-overlay" role="dialog" aria-modal="true" aria-labelledby="exam-rules-title">
      <div className="exam-rules-backdrop" onClick={onClose} />
      
      <div 
        ref={modalRef} 
        tabIndex={-1} 
        className="exam-rules-card" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          type="button" 
          className="btn-exam-rules-close" 
          onClick={() => {
            playButtonTap();
            onClose();
          }}
          aria-label="Close dialog"
        >
          <CloseIcon size={16} />
        </button>

        {/* Modal Header */}
        <div className="exam-rules-header">
          <div className="exam-emblem-badge">
            <GraduationCapIcon size={24} color="#D97706" />
          </div>
          <span className="exam-gov-tag">KERALA RTO / MVD COMPUTER TEST SIMULATION</span>
          <h2 id="exam-rules-title" className="exam-rules-title">
            Learner's Licence Mock Test
          </h2>
          <p className="exam-rules-subtitle">
            Authentic computer-based test simulation following the official Motor Driving School Operators Association Kerala curriculum.
          </p>
        </div>

        {/* Language Selection Row */}
        <div className="exam-lang-selector-box">
          <label className="exam-lang-label">
            Choose Preferred Language / ഭാഷ തെരഞ്ഞെടുക്കുക:
          </label>
          <div className="exam-lang-options">
            <button
              type="button"
              className={`btn-lang-choice ${selectedLang === 'ml' ? 'active' : ''}`}
              onClick={() => {
                playButtonTap();
                setSelectedLang('ml');
              }}
            >
              <span className="lang-icon">🇮🇳</span>
              <span className="lang-text">മലയാളം (Malayalam)</span>
              {selectedLang === 'ml' && <CheckIcon size={14} color="#D97706" style={{ marginLeft: 6 }} />}
            </button>
            <button
              type="button"
              className={`btn-lang-choice ${selectedLang === 'en' ? 'active' : ''}`}
              onClick={() => {
                playButtonTap();
                setSelectedLang('en');
              }}
            >
              <span className="lang-icon">🇬🇧</span>
              <span className="lang-text">English</span>
              {selectedLang === 'en' && <CheckIcon size={14} color="#D97706" style={{ marginLeft: 6 }} />}
            </button>
          </div>
          <span className="exam-lang-hint">
            * You can also switch languages on any question during the exam.
          </span>
        </div>

        {/* Rules Summary Grid */}
        <div className="exam-rules-grid">
          <div className="rule-item">
            <div className="rule-icon-circle">
              <IdCardIcon size={16} color="#2563EB" />
            </div>
            <div className="rule-text-wrap">
              <h4>20 Questions Total</h4>
              <p>Randomly selected from official Kerala RTO traffic signs, road rules, and MV regulations.</p>
            </div>
          </div>

          <div className="rule-item">
            <div className="rule-icon-circle">
              <ClockIcon size={16} color="#DC2626" />
            </div>
            <div className="rule-text-wrap">
              <h4>30 Seconds Per Question</h4>
              <p>Automated countdown timer. Questions auto-submit if time expires.</p>
            </div>
          </div>

          <div className="rule-item">
            <div className="rule-icon-circle">
              <CheckIcon size={16} color="#059669" />
            </div>
            <div className="rule-text-wrap">
              <h4>Passing Score: 12 / 20 (60%)</h4>
              <p>Exactly matches the Kerala Motor Vehicles Department passing requirement.</p>
            </div>
          </div>

          <div className="rule-item">
            <div className="rule-icon-circle">
              <ShieldCheckIcon size={16} color="#7C3AED" />
            </div>
            <div className="rule-text-wrap">
              <h4>Saved in Profile</h4>
              <p>
                {currentUser 
                  ? `Your score and history will be saved directly to ${currentUser.name}'s profile.` 
                  : 'Scores will be saved to your local session history so you can track your progress.'}
              </p>
            </div>
          </div>
        </div>

        {/* Instructions Alert Box */}
        <div className="exam-rules-alert">
          <p>
            <strong>Tip:</strong> You can use your keyboard numbers <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code> to select answers, and press <code>Enter</code> to confirm.
          </p>
        </div>

        {/* Action Footer */}
        <div className="exam-rules-footer">
          <button
            type="button"
            className="btn-exam-cancel"
            onClick={() => {
              playButtonTap();
              onClose();
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn-exam-proceed"
            onClick={handleStartExam}
          >
            <span>Proceed to Exam</span>
            <span className="arrow-icon">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
