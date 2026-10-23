import React, { useState, useEffect, useRef } from 'react';
import { getRandomizedExam } from '../data/examQuestions';
import TrafficSignGraphic from './TrafficSignGraphic';
import { 
  CheckIcon, 
  CloseIcon, 
  ClockIcon, 
  CarIcon, 
  ShieldCheckIcon,
  RefreshCwIcon,
  GraduationCapIcon
} from './Icons';
import { 
  playButtonTap, 
  playExamTick, 
  playExamAlert, 
  playExamPass, 
  playExamFail,
  playSuccessChime
} from '../utils/audio';
import '../styles/ExamSimulation.css';

const QUESTION_TIME_LIMIT = 30; // 30 seconds per question (official Kerala RTO standard)
const PASS_SCORE = 12; // 12 out of 20 (60%)

export default function ExamSimulationPage({ 
  initialLang = 'ml', 
  currentUser, 
  onExit, 
  onSaveResult 
}) {
  // Test state
  const [questions, setQuestions] = useState(() => getRandomizedExam(20));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]); // { questionId, selectedIndex, isCorrect, timeSpent }
  const [lang, setLang] = useState(initialLang);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);
  const [isExamCompleted, setIsExamCompleted] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [startTime] = useState(Date.now());
  const [totalTimeSpent, setTotalTimeSpent] = useState(0);
  const [reviewFilter, setReviewFilter] = useState('all'); // 'all' | 'mistakes' | 'correct'

  const timerRef = useRef(null);
  const questionStartTimeRef = useRef(Date.now());

  const currentQ = questions[currentIndex] || questions[0];

  // Roll number & session ID
  const [candidateSession] = useState(() => {
    const num = Math.floor(1000 + Math.random() * 9000);
    return `KL-MVD-2026-${num}`;
  });

  // Countdown timer effect
  useEffect(() => {
    if (isExamCompleted) return;

    setTimeLeft(QUESTION_TIME_LIMIT);
    questionStartTimeRef.current = Date.now();

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleTimeExpired();
          return 0;
        }
        if (prev <= 6 && prev > 1) {
          playExamTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isExamCompleted]);

  // Handle auto-advance on timeout
  const handleTimeExpired = () => {
    playExamAlert();
    advanceQuestion(null);
  };

  // Keyboard navigation (1, 2, 3, 4, and Enter)
  useEffect(() => {
    if (isExamCompleted) return;

    const handleKeyDown = (e) => {
      if (['1', '2', '3', '4'].includes(e.key)) {
        const idx = parseInt(e.key, 10) - 1;
        playButtonTap();
        setSelectedOption(idx);
      } else if (e.key === 'Enter' && selectedOption !== null) {
        handleConfirmAnswer();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedOption, currentIndex, isExamCompleted]);

  // Advance to next question or finalize
  const advanceQuestion = (chosenIdx) => {
    const timeSpent = Math.min(QUESTION_TIME_LIMIT, Math.round((Date.now() - questionStartTimeRef.current) / 1000));
    const isCorrect = chosenIdx !== null && chosenIdx === currentQ.correctAnswer;

    const updatedAnswers = [
      ...userAnswers,
      {
        question: currentQ,
        selectedOption: chosenIdx,
        correctAnswer: currentQ.correctAnswer,
        isCorrect,
        timeSpent,
        questionIndex: currentIndex,
      },
    ];

    setUserAnswers(updatedAnswers);
    setSelectedOption(null);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      finishExam(updatedAnswers);
    }
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null) return;
    playButtonTap();
    if (timerRef.current) clearInterval(timerRef.current);
    advanceQuestion(selectedOption);
  };

  // Finalize exam results
  const finishExam = (finalAnswers) => {
    if (timerRef.current) clearInterval(timerRef.current);
    const score = finalAnswers.filter((a) => a.isCorrect).length;
    const passed = score >= PASS_SCORE;
    const totalSecs = Math.round((Date.now() - startTime) / 1000);
    setTotalTimeSpent(totalSecs);
    setIsExamCompleted(true);

    if (passed) {
      playExamPass();
    } else {
      playExamFail();
    }

    // Save record to profile / local storage
    const examRecord = {
      id: Date.now(),
      sessionId: candidateSession,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
      score,
      total: questions.length,
      percentage: Math.round((score / questions.length) * 100),
      passed,
      timeSpentSeconds: totalSecs,
      language: lang,
    };

    if (onSaveResult) {
      onSaveResult(examRecord);
    }
  };

  // Restart exam with fresh 20 randomized questions
  const handleRetakeExam = () => {
    playSuccessChime();
    setQuestions(getRandomizedExam(20));
    setCurrentIndex(0);
    setSelectedOption(null);
    setUserAnswers([]);
    setTimeLeft(QUESTION_TIME_LIMIT);
    setReviewFilter('all');
    setIsExamCompleted(false);
  };

  const score = userAnswers.filter((a) => a.isCorrect).length;
  const isPassed = score >= PASS_SCORE;
  const percentage = Math.round((score / (questions.length || 1)) * 100);

  return (
    <div className="exam-viewport">
      {/* ── Top Bar: Government/RTO Header ── */}
      <header className="exam-top-bar">
        <div className="exam-brand-cell">
          <div className="exam-emblem-small">
            <GraduationCapIcon size={18} color="#D97706" />
          </div>
          <div className="exam-brand-titles">
            <span className="exam-kerala-govt">MOTOR VEHICLES DEPARTMENT • KERALA</span>
            <h1 className="exam-portal-title">Learner's Licence Test Simulation</h1>
          </div>
        </div>

        {/* Center: Live Timer (During Exam) */}
        {!isExamCompleted && (
          <div className={`exam-timer-widget ${timeLeft <= 5 ? 'critical' : timeLeft <= 10 ? 'warning' : ''}`}>
            <div className="timer-icon-wrap">
              <ClockIcon size={16} />
            </div>
            <div className="timer-digits">
              <span className="timer-sec">{String(timeLeft).padStart(2, '0')}</span>
              <span className="timer-unit">s</span>
            </div>
            <div className="timer-bar-wrap">
              <div 
                className="timer-bar-fill" 
                style={{ width: `${(timeLeft / QUESTION_TIME_LIMIT) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Right: Language Switcher & Exit */}
        <div className="exam-top-controls">
          <div className="exam-lang-toggle-pill" role="radiogroup" aria-label="Exam Language">
            <button
              type="button"
              className={`lang-btn ${lang === 'ml' ? 'active' : ''}`}
              onClick={() => {
                playButtonTap();
                setLang('ml');
              }}
            >
              മലയാളം
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => {
                playButtonTap();
                setLang('en');
              }}
            >
              English
            </button>
          </div>

          <button
            type="button"
            className="btn-exit-exam"
            onClick={() => {
              playButtonTap();
              if (isExamCompleted) {
                onExit();
              } else {
                setShowExitConfirm(true);
              }
            }}
            title="Exit Exam"
          >
            <CloseIcon size={14} />
            <span className="exit-label">Exit</span>
          </button>
        </div>
      </header>

      {/* ── Candidate & Exam Sub-Bar ── */}
      <div className="exam-sub-bar">
        <div className="candidate-info-chip">
          <span className="candidate-label">Candidate:</span>
          <strong>{currentUser?.name || 'Guest Learner'}</strong>
          <span className="candidate-roll">({candidateSession})</span>
        </div>

        <div className="exam-progress-counter">
          {!isExamCompleted ? (
            <>
              <span className="counter-label">Question:</span>
              <strong className="counter-val">{currentIndex + 1}</strong>
              <span className="counter-total">/ {questions.length}</span>
            </>
          ) : (
            <span className="counter-finished">Exam Completed</span>
          )}
        </div>
      </div>

      {/* ── Main Exam Container ── */}
      <main className="exam-content-area">
        {!isExamCompleted ? (
          /* ── Question & Options Screen ── */
          <div className="exam-question-card">
            {/* Question Header & Tracker */}
            <div className="question-header-row">
              <span className="q-badge">Question {currentIndex + 1}</span>
              <span className="q-marks">1 Mark • No Negative Marks</span>
            </div>

            {/* Question Text */}
            <h2 className="question-title-text">
              {currentQ.question[lang]}
            </h2>

            {/* Question Visual Image / Sign Diagram (if applicable) */}
            {currentQ.signType && (
              <div className="question-graphic-container">
                <TrafficSignGraphic signType={currentQ.signType} size={150} />
              </div>
            )}

            {/* Multiple Choice Options */}
            <div className="exam-options-list" role="radiogroup">
              {currentQ.options[lang].map((optText, optIdx) => {
                const isSelected = selectedOption === optIdx;
                const keyLetter = ['A', 'B', 'C', 'D'][optIdx];
                const keyNum = optIdx + 1;

                return (
                  <button
                    key={optIdx}
                    type="button"
                    className={`exam-option-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => {
                      playButtonTap();
                      setSelectedOption(optIdx);
                    }}
                    role="radio"
                    aria-checked={isSelected}
                  >
                    <span className="opt-key-badge">{keyLetter}</span>
                    <span className="opt-text">{optText}</span>
                    <span className="opt-num-hint">Key {keyNum}</span>
                    <div className="opt-radio-circle">
                      {isSelected && <div className="radio-inner-dot" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Actions Row */}
            <div className="exam-card-footer">
              <div className="footer-tip">
                <span>Select an option and click Confirm, or press Enter.</span>
              </div>

              <button
                type="button"
                className={`btn-confirm-next ${selectedOption !== null ? 'ready' : ''}`}
                onClick={handleConfirmAnswer}
                disabled={selectedOption === null}
              >
                <span>{currentIndex + 1 === questions.length ? 'Submit Exam' : 'Confirm & Next'}</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        ) : (
          /* ── Results & Detailed Review Screen ── */
          <div className="exam-results-card">
            {/* Result Header Banner */}
            <div className={`result-status-banner ${isPassed ? 'passed' : 'failed'}`}>
              <div className="banner-icon-bubble">
                {isPassed ? <CheckIcon size={32} color="#065F46" /> : <CloseIcon size={28} color="#991B1B" />}
              </div>
              <div className="banner-text-details">
                <span className="result-kicker">KERALA RTO LEARNER'S TEST RESULT</span>
                <h2>{isPassed ? 'Congratulations! You Passed' : 'Test Not Cleared — Keep Practicing'}</h2>
                <p>
                  {isPassed
                    ? `You scored ${score} out of ${questions.length} (${percentage}%). You meet the official Kerala MVD requirement (12 marks required).`
                    : `You scored ${score} out of ${questions.length} (${percentage}%). Minimum 12 marks required to pass. Practice again to gain confidence!`}
                </p>
              </div>
            </div>

            {/* Scorecard Quick Statistics */}
            <div className="result-stats-row">
              <div className="stat-card">
                <span className="stat-label">Final Score</span>
                <strong className="stat-number">{score} / {questions.length}</strong>
              </div>
              <div className="stat-card">
                <span className="stat-label">Percentage</span>
                <strong className="stat-number">{percentage}%</strong>
              </div>
              <div className="stat-card">
                <span className="stat-label">Passing Standard</span>
                <strong className="stat-number">12 / 20 (60%)</strong>
              </div>
              <div className="stat-card">
                <span className="stat-label">Time Taken</span>
                <strong className="stat-number">
                  {Math.floor(totalTimeSpent / 60)}m {totalTimeSpent % 60}s
                </strong>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="result-actions-bar">
              <button
                type="button"
                className="btn-retake-exam"
                onClick={handleRetakeExam}
              >
                <RefreshCwIcon size={16} />
                <span>Retake Test (New Questions)</span>
              </button>
              <button
                type="button"
                className="btn-exit-to-home"
                onClick={onExit}
              >
                <span>Back to LEELA Home</span>
              </button>
            </div>

            {/* Comprehensive Question Review Accordion & Filter Pills */}
            <div className="review-section">
              <div className="review-header-flex">
                <div>
                  <h3 className="review-title">Detailed Question Review &amp; Explanations</h3>
                  <p className="review-sub">Review your answers against the official Kerala Driving School answer key:</p>
                </div>

                {/* Filter Pills ("All", "Mistakes Only", "Correct") */}
                <div className="review-filter-pills" role="tablist" aria-label="Filter review questions">
                  <button
                    type="button"
                    className={`review-filter-pill ${reviewFilter === 'all' ? 'active' : ''}`}
                    onClick={() => {
                      playButtonTap();
                      setReviewFilter('all');
                    }}
                    role="tab"
                    aria-selected={reviewFilter === 'all'}
                  >
                    <span>All</span>
                    <span className="filter-count-badge count-all">{userAnswers.length}</span>
                  </button>

                  <button
                    type="button"
                    className={`review-filter-pill mistakes ${reviewFilter === 'mistakes' ? 'active' : ''}`}
                    onClick={() => {
                      playButtonTap();
                      setReviewFilter('mistakes');
                    }}
                    role="tab"
                    aria-selected={reviewFilter === 'mistakes'}
                  >
                    <CloseIcon size={12} />
                    <span>Mistakes Only</span>
                    <span className="filter-count-badge count-mistakes">
                      {userAnswers.filter((a) => !a.isCorrect).length}
                    </span>
                  </button>

                  <button
                    type="button"
                    className={`review-filter-pill correct ${reviewFilter === 'correct' ? 'active' : ''}`}
                    onClick={() => {
                      playButtonTap();
                      setReviewFilter('correct');
                    }}
                    role="tab"
                    aria-selected={reviewFilter === 'correct'}
                  >
                    <CheckIcon size={12} />
                    <span>Correct</span>
                    <span className="filter-count-badge count-correct">
                      {userAnswers.filter((a) => a.isCorrect).length}
                    </span>
                  </button>
                </div>
              </div>

              <div className="review-items-list">
                {userAnswers
                  .filter((item) => {
                    if (reviewFilter === 'mistakes') return !item.isCorrect;
                    if (reviewFilter === 'correct') return item.isCorrect;
                    return true;
                  })
                  .map((item) => {
                    const q = item.question;
                    const isCorrect = item.isCorrect;
                    const qNum = (item.questionIndex !== undefined ? item.questionIndex : userAnswers.indexOf(item)) + 1;
                    const chosenText = item.selectedOption !== null 
                      ? q.options[lang][item.selectedOption] 
                      : '(Timed Out / No Answer)';
                    const correctText = q.options[lang][q.correctAnswer];

                    return (
                      <div key={q.id || qNum} className={`review-card ${isCorrect ? 'correct' : 'incorrect'}`}>
                        <div className="review-card-head">
                          <span className={`status-pill ${isCorrect ? 'correct' : 'incorrect'}`}>
                            {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                          </span>
                          <span className="review-q-num">Question {qNum} of {questions.length}</span>
                        </div>

                        <h4 className="review-q-text">{q.question[lang]}</h4>

                        {q.signType && (
                          <div className="review-graphic-thumb">
                            <TrafficSignGraphic signType={q.signType} size={100} />
                          </div>
                        )}

                        <div className="review-answers-grid">
                          <div className="answer-box chosen">
                            <span className="ans-label">Your Answer:</span>
                            <p className={`ans-val ${isCorrect ? 'text-green' : 'text-red'}`}>{chosenText}</p>
                          </div>
                          {!isCorrect && (
                            <div className="answer-box correct-ans">
                              <span className="ans-label">Correct Answer:</span>
                              <p className="ans-val text-green">{correctText}</p>
                            </div>
                          )}
                        </div>

                        <div className="review-explanation-box">
                          <strong>Explanation:</strong> {q.explanation[lang]}
                        </div>
                      </div>
                    );
                  })}

                {/* Empty State when filter yields 0 questions */}
                {userAnswers.filter((item) => {
                  if (reviewFilter === 'mistakes') return !item.isCorrect;
                  if (reviewFilter === 'correct') return item.isCorrect;
                  return true;
                }).length === 0 && (
                  <div className="review-empty-state">
                    <div className={`empty-state-bubble ${reviewFilter === 'mistakes' ? 'perfect' : 'zero'}`}>
                      {reviewFilter === 'mistakes' ? (
                        <CheckIcon size={26} color="#059669" />
                      ) : (
                        <CloseIcon size={26} color="#DC2626" />
                      )}
                    </div>
                    <h4>{reviewFilter === 'mistakes' ? 'Flawless! No Mistakes Made' : 'No Correct Answers'}</h4>
                    <p>
                      {reviewFilter === 'mistakes'
                        ? 'You answered every question correctly! Great mastery of the Kerala RTO curriculum.'
                        : 'None of the questions in this session were answered correctly. Retake to practice again!'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ── Exit Confirmation Dialog ── */}
      {showExitConfirm && (
        <div className="exit-confirm-dialog-overlay" role="dialog" aria-modal="true">
          <div className="exit-confirm-card">
            <h3>Exit Mock Test?</h3>
            <p>Your current test progress will be lost if you exit before finishing. Are you sure you want to return to the home screen?</p>
            <div className="exit-confirm-actions">
              <button
                type="button"
                className="btn-cancel-exit"
                onClick={() => {
                  playButtonTap();
                  setShowExitConfirm(false);
                }}
              >
                Resume Test
              </button>
              <button
                type="button"
                className="btn-confirm-exit"
                onClick={() => {
                  playButtonTap();
                  setShowExitConfirm(false);
                  onExit();
                }}
              >
                Yes, Exit Test
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
