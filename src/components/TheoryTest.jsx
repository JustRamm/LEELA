import React, { useState } from 'react';

const QUESTIONS = [
  {
    id: 1,
    question: "What does an octagonal (8-sided) red traffic sign indicate?",
    options: [
      { key: 'A', text: "Yield the right-of-way" },
      { key: 'B', text: "Stop completely behind the limit line" },
      { key: 'C', text: "Speed limit reduction zone" },
      { key: 'D', text: "Hospital ahead" }
    ],
    correctAnswer: 'B',
    explanation: "An octagonal (8-sided) shape is reserved exclusively for STOP signs. You must come to a complete stop behind the limit line or crosswalk."
  },
  {
    id: 2,
    question: "When entering a roundabout, who has the right-of-way?",
    options: [
      { key: 'A', text: "Vehicles already inside the roundabout" },
      { key: 'B', text: "Vehicles entering from the right" },
      { key: 'C', text: "The largest vehicle" },
      { key: 'D', text: "Whichever vehicle honks first" }
    ],
    correctAnswer: 'A',
    explanation: "Always yield to traffic already in the roundabout. Enter only when there is a safe gap in traffic flow."
  },
  {
    id: 3,
    question: "What does a flashing yellow traffic signal light mean?",
    options: [
      { key: 'A', text: "Stop and wait for a green light" },
      { key: 'B', text: "Speed up to clear the intersection" },
      { key: 'C', text: "Proceed with caution, slowing down if necessary" },
      { key: 'D', text: "Pedestrian crossing only" }
    ],
    correctAnswer: 'C',
    explanation: "A flashing yellow light warns you to proceed with caution. You do not need to stop, but you must slow down and look for hazards."
  },
  {
    id: 4,
    question: "When parking uphill next to a curb, which way should you turn your front wheels?",
    options: [
      { key: 'A', text: "Parallel, straight ahead" },
      { key: 'B', text: "Towards the curb (right)" },
      { key: 'C', text: "Away from the curb (left)" },
      { key: 'D', text: "It does not matter" }
    ],
    correctAnswer: 'C',
    explanation: "Turn your wheels AWAY from the curb (left) and let your vehicle roll back slightly so the back of the front tire rests against the curb, preventing the car from rolling into traffic."
  },
  {
    id: 5,
    question: "What is the 'two-second rule' used for in driving?",
    options: [
      { key: 'A', text: "The time allowed to cross an intersection" },
      { key: 'B', text: "A safe following distance behind the vehicle ahead" },
      { key: 'C', text: "The time to adjust your rear-view mirror" },
      { key: 'D', text: "The speed adjustment duration on highway ramps" }
    ],
    correctAnswer: 'B',
    explanation: "The two-second rule helps you maintain a safe following distance under normal dry conditions. Double it to four seconds in wet or low-visibility conditions."
  },
  {
    id: 6,
    question: "A solid double yellow line down the center of a two-lane road means:",
    options: [
      { key: 'A', text: "Passing is allowed if the road is clear" },
      { key: 'B', text: "Passing is allowed only on the left side" },
      { key: 'C', text: "Passing is prohibited in both directions" },
      { key: 'D', text: "One-way traffic ahead" }
    ],
    correctAnswer: 'C',
    explanation: "Solid double yellow lines prohibit passing from either side. You may only cross them when making a left turn into a driveway or side street."
  },
  {
    id: 7,
    question: "What is the legal blood alcohol concentration (BAC) limit for adult drivers (21+) in most states?",
    options: [
      { key: 'A', text: "0.05%" },
      { key: 'B', text: "0.08%" },
      { key: 'C', text: "0.10%" },
      { key: 'D', text: "0.02%" }
    ],
    correctAnswer: 'B',
    explanation: "It is illegal to operate a motor vehicle with a BAC of 0.08% or higher if you are 21 years of age or older. Limits for commercial drivers and minors are much lower."
  },
  {
    id: 8,
    question: "When driving in heavy fog at night, you should use your:",
    options: [
      { key: 'A', text: "High-beam headlights for maximum range" },
      { key: 'B', text: "Parking lights only" },
      { key: 'C', text: "Low-beam headlights" },
      { key: 'D', text: "Hazard warning flashers" }
    ],
    correctAnswer: 'C',
    explanation: "High-beams reflect off the water droplets in fog, causing blinding glare. Low-beams cast light downward, illuminating the road surface effectively."
  },
  {
    id: 9,
    question: "If a pedestrian starts crossing a street against signals, what should you do?",
    options: [
      { key: 'A', text: "Honk your horn and proceed" },
      { key: 'B', text: "Yield the right-of-way and let them cross safely" },
      { key: 'C', text: "Drive around them closely" },
      { key: 'D', text: "Report them to law enforcement immediately" }
    ],
    correctAnswer: 'B',
    explanation: "Regardless of who has the legal right-of-way, drivers must yield to pedestrians to avoid collisions. Safety always overrides traffic signals."
  },
  {
    id: 10,
    question: "If your vehicle starts to skid on a slippery road, you should steer:",
    options: [
      { key: 'A', text: "In the opposite direction of the skid" },
      { key: 'B', text: "Straight ahead and apply heavy brakes" },
      { key: 'C', text: "In the direction of the skid" },
      { key: 'D', text: "To the right shoulder immediately" }
    ],
    correctAnswer: 'C',
    explanation: "Steer in the direction the back of your vehicle is skidding to align the wheels and regain traction. Do not slam on the brakes, as this locks the tires."
  }
];

export default function TheoryTest({ onFinishQuiz, currentStudentScore, setCurrentTab }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedKey, setSelectedKey] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [answersLog, setAnswersLog] = useState([]); // tracks correct/incorrect details

  const handleOptionClick = (key) => {
    if (selectedKey !== null) return; // Answer locked
    setSelectedKey(key);
    
    const question = QUESTIONS[currentIdx];
    const isCorrect = key === question.correctAnswer;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    setAnswersLog(prev => [...prev, {
      questionId: question.id,
      questionText: question.question,
      selectedKey: key,
      correctKey: question.correctAnswer,
      isCorrect
    }]);
  };

  const handleNext = () => {
    setSelectedKey(null);
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setQuizFinished(true);
      const finalScorePercentage = Math.round((score / QUESTIONS.length) * 100);
      if (onFinishQuiz) {
        onFinishQuiz(finalScorePercentage);
      }
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedKey(null);
    setScore(0);
    setQuizFinished(false);
    setAnswersLog([]);
  };

  const currentQuestion = QUESTIONS[currentIdx];
  const progressPercent = Math.round(((currentIdx) / QUESTIONS.length) * 100);

  if (quizFinished) {
    const passed = score >= 8; // 80% passing grade
    return (
      <section className="section quiz-section">
        <div className="container quiz-container card">
          <div className="quiz-result-header">
            <div className={`result-badge ${passed ? 'badge-success-circle' : 'badge-danger-circle'}`}>
              {passed ? '✓' : '✗'}
            </div>
            <h2>Exam Results Summary</h2>
            <p className="result-status">
              {passed ? 'Congratulations! You Passed the Mock Exam.' : 'Practice Makes Perfect. Please Study and Try Again.'}
            </p>
          </div>

          <div className="result-stats-grid">
            <div className="result-stat-box">
              <span className="result-stat-lbl">Your Score</span>
              <span className={`result-stat-val ${passed ? 'text-success' : 'text-danger'}`}>{score} / {QUESTIONS.length}</span>
            </div>
            <div className="result-stat-box">
              <span className="result-stat-lbl">Passing Score</span>
              <span className="result-stat-val">80% (8/10)</span>
            </div>
            <div className="result-stat-box">
              <span className="result-stat-lbl">Accuracy</span>
              <span className="result-stat-val">{Math.round((score / QUESTIONS.length) * 100)}%</span>
            </div>
          </div>

          <div className="quiz-answers-review">
            <h3>Question-by-Question Review</h3>
            <div className="review-list">
              {answersLog.map((log, idx) => (
                <div key={idx} className={`review-item ${log.isCorrect ? 'review-item-correct' : 'review-item-incorrect'}`}>
                  <div className="review-item-header">
                    <span className="review-number">Q{idx + 1}</span>
                    <span className="review-text">{log.questionText}</span>
                    <span className={`review-badge-tag ${log.isCorrect ? 'tag-correct' : 'tag-incorrect'}`}>
                      {log.isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                  <p className="review-choices">
                    Your Answer: <strong className={log.isCorrect ? 'text-success' : 'text-danger'}>
                      {log.selectedKey} - {QUESTIONS[idx].options.find(o => o.key === log.selectedKey)?.text}
                    </strong>
                    {!log.isCorrect && (
                      <span className="correct-answer-reveal">
                        {' '}| Correct Answer: <strong className="text-success">{log.correctKey}</strong>
                      </span>
                    )}
                  </p>
                  <p className="review-explanation">
                    <strong>Explanation:</strong> {QUESTIONS[idx].explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="quiz-result-actions">
            <button className="btn btn-primary" onClick={handleRestart}>Retake Practice Test</button>
            <button className="btn btn-outline" onClick={() => setCurrentTab('student-portal')}>
              Back to Student Dashboard
            </button>
          </div>
        </div>

        <style>{`
          .quiz-section {
            background-color: var(--bg-alt);
          }
          .quiz-container {
            max-width: 750px;
            margin: 0 auto;
            background: var(--bg-card);
            padding: 3rem;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
          }
          .quiz-result-header {
            text-align: center;
            margin-bottom: 2rem;
          }
          .result-badge {
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            font-weight: bold;
            margin: 0 auto 1.5rem auto;
            box-shadow: var(--shadow-md);
          }
          .badge-success-circle { background-color: var(--success-soft); color: var(--success); border: 3px solid var(--success); }
          .badge-danger-circle { background-color: var(--danger-soft); color: var(--danger); border: 3px solid var(--danger); }
          .result-status {
            font-family: var(--font-heading);
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--primary-light);
            margin: 0.5rem 0 0 0;
          }
          
          .result-stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin-bottom: 2.5rem;
            background-color: var(--bg-alt);
            padding: 1.25rem;
            border-radius: var(--radius-md);
            border: 1px solid var(--border-color);
          }
          .result-stat-box {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
          }
          .result-stat-lbl {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-light);
            font-weight: 700;
          }
          .result-stat-val {
            font-family: var(--font-heading);
            font-size: 1.6rem;
            font-weight: 800;
            color: var(--primary-dark);
          }
          .text-success { color: var(--success-dark) !important; }
          .text-danger { color: var(--danger-dark) !important; }
          
          .quiz-answers-review {
            text-align: left;
            margin-bottom: 2.5rem;
          }
          .quiz-answers-review h3 {
            font-size: 1.3rem;
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 0.5rem;
            margin-bottom: 1.5rem;
          }
          .review-list {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          .review-item {
            padding: 1.25rem;
            border-radius: var(--radius-md);
            border: 1px solid var(--border-color);
            background-color: var(--bg-card);
          }
          .review-item-correct { border-left: 4px solid var(--success); }
          .review-item-incorrect { border-left: 4px solid var(--danger); }
          .review-item-header {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            margin-bottom: 0.75rem;
          }
          .review-number {
            font-family: var(--font-heading);
            font-weight: 800;
            font-size: 0.9rem;
            background-color: var(--bg-alt);
            padding: 0.2rem 0.5rem;
            border-radius: var(--radius-sm);
            color: var(--primary);
          }
          .review-text {
            font-weight: 700;
            font-size: 0.95rem;
            color: var(--primary-dark);
            flex-grow: 1;
            line-height: 1.4;
          }
          .review-badge-tag {
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            padding: 0.2rem 0.5rem;
            border-radius: var(--radius-sm);
            letter-spacing: 0.05em;
          }
          .tag-correct { background-color: var(--success-soft); color: var(--success-dark); }
          .tag-incorrect { background-color: var(--danger-soft); color: var(--danger-dark); }
          .review-choices {
            font-size: 0.85rem;
            margin: 0 0 0.5rem 0;
            color: var(--text-main);
          }
          .review-explanation {
            font-size: 0.85rem;
            background-color: var(--bg-alt);
            padding: 0.75rem 1rem;
            border-radius: var(--radius-sm);
            margin: 0;
            color: var(--text-light);
            line-height: 1.4;
          }
          .quiz-result-actions {
            display: flex;
            justify-content: center;
            gap: 1rem;
          }
        `}</style>
      </section>
    );
  }

  // Active quiz screen
  return (
    <section className="section quiz-section">
      <div className="container quiz-container card">
        {/* Quiz Progress header */}
        <div className="quiz-progress-wrapper">
          <div className="progress-text">
            <span>Driving Theory Prep Mock Exam</span>
            <span className="progress-counter">Question {currentIdx + 1} of {QUESTIONS.length}</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>

        {/* Question Panel */}
        <div className="quiz-question-box">
          <h2 className="quiz-question-title">{currentQuestion.question}</h2>

          <div className="quiz-options-list">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedKey === option.key;
              const isCorrectAnswer = option.key === currentQuestion.correctAnswer;
              
              let optionClass = '';
              if (selectedKey !== null) {
                if (isCorrectAnswer) {
                  optionClass = 'option-correct';
                } else if (isSelected) {
                  optionClass = 'option-incorrect';
                } else {
                  optionClass = 'option-disabled';
                }
              }

              return (
                <button
                  key={option.key}
                  className={`quiz-option-btn ${optionClass} ${isSelected ? 'option-selected' : ''}`}
                  onClick={() => handleOptionClick(option.key)}
                  disabled={selectedKey !== null}
                >
                  <span className="option-key">{option.key}</span>
                  <span className="option-text">{option.text}</span>
                  {selectedKey !== null && isCorrectAnswer && (
                    <span className="check-indicator">✓</span>
                  )}
                  {selectedKey !== null && isSelected && !isCorrectAnswer && (
                    <span className="check-indicator">✗</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Answer Explanation & Control */}
        {selectedKey !== null && (
          <div className="quiz-explanation-box">
            <div className="explanation-header">
              <span className="explanation-title">
                {selectedKey === currentQuestion.correctAnswer ? '✓ Correct Answer!' : '✗ Incorrect'}
              </span>
            </div>
            <p className="explanation-body">
              {currentQuestion.explanation}
            </p>
            <button className="btn btn-primary next-question-btn" onClick={handleNext}>
              {currentIdx < QUESTIONS.length - 1 ? 'Next Question' : 'Finish Mock Exam'}
            </button>
          </div>
        )}
      </div>

      <style>{`
        .quiz-progress-wrapper {
          margin-bottom: 2.2rem;
          text-align: left;
        }
        .progress-text {
          display: flex;
          justify-content: space-between;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-light);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .progress-counter {
          color: var(--teal-dark);
        }
        .progress-bar-bg {
          height: 6px;
          background-color: var(--bg-alt);
          border-radius: var(--radius-full);
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background-color: var(--teal);
          border-radius: var(--radius-full);
          transition: width 0.3s ease;
        }
        
        .quiz-question-box {
          text-align: left;
        }
        .quiz-question-title {
          font-size: 1.4rem;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 1.75rem;
          color: var(--primary-dark);
        }
        .quiz-options-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 2rem;
        }
        .quiz-option-btn {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 1rem 1.25rem;
          border: 1px solid var(--border-color);
          background-color: var(--bg-card);
          border-radius: var(--radius-md);
          font-family: var(--font-sans);
          font-weight: 600;
          color: var(--text-main);
          text-align: left;
          transition: all var(--transition-fast);
        }
        .quiz-option-btn:hover:not(:disabled) {
          border-color: var(--teal);
          background-color: var(--teal-soft);
          color: var(--teal-dark);
          transform: translateX(4px);
        }
        .option-key {
          font-family: var(--font-heading);
          background-color: var(--bg-alt);
          color: var(--primary-light);
          width: 1.8rem;
          height: 1.8rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          font-weight: 800;
          flex-shrink: 0;
          transition: inherit;
        }
        .quiz-option-btn:hover:not(:disabled) .option-key {
          background-color: var(--teal-light);
          color: var(--text-white);
        }
        .option-text {
          flex-grow: 1;
        }
        
        /* Options Grading States */
        .option-correct {
          border-color: var(--success);
          background-color: var(--success-soft);
          color: var(--success-dark);
        }
        .option-correct .option-key {
          background-color: var(--success);
          color: white;
        }
        .option-incorrect {
          border-color: var(--danger);
          background-color: var(--danger-soft);
          color: var(--danger-dark);
        }
        .option-incorrect .option-key {
          background-color: var(--danger);
          color: white;
        }
        .option-disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }
        .check-indicator {
          font-size: 1.2rem;
          font-weight: bold;
          margin-left: 0.5rem;
        }
        
        .quiz-explanation-box {
          border-top: 1px solid var(--border-color);
          padding-top: 1.5rem;
          text-align: left;
          animation: fadeIn 0.4s ease;
        }
        .explanation-header {
          margin-bottom: 0.5rem;
        }
        .explanation-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .quiz-explanation-box .explanation-title {
          color: var(--primary-dark);
        }
        .explanation-body {
          font-size: 0.9rem;
          line-height: 1.5;
          color: var(--text-light);
          margin-bottom: 1.5rem;
        }
        .next-question-btn {
          float: right;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
