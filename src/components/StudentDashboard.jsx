import React, { useState } from 'react';

export default function StudentDashboard({ 
  studentState, 
  instructors, 
  onAddLesson, 
  onCancelLesson, 
  onToggleSkill,
  setCurrentTab 
}) {
  const { name, enrolledPackage, hoursCompleted, totalHours, theoryScore, skillsChecklist, lessons } = studentState;

  // Local booking state
  const [instructorId, setInstructorId] = useState(instructors[0]?.id || '');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('09:00 AM - 11:00 AM');
  const [transmission, setTransmission] = useState('automatic');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!date) return;
    
    const instructor = instructors.find(i => i.id === instructorId) || instructors[0];
    
    // Create new lesson object
    const newLesson = {
      id: `ls-${Date.now()}`,
      studentName: name,
      instructorId: instructor.id,
      instructorName: instructor.name,
      date,
      timeSlot,
      vehicle: transmission === 'automatic' ? 'Tesla Model 3 (Auto)' : 'Honda Civic (Manual)',
      status: 'Scheduled'
    };

    onAddLesson(newLesson);
    setBookingSuccess(true);
    
    // Reset booking state
    setDate('');
    setTimeout(() => setBookingSuccess(false), 4000);
  };

  const progressPercent = Math.round((hoursCompleted / totalHours) * 100);

  return (
    <section className="section dashboard-section">
      <div className="container">
        {/* Welcome Banner */}
        <div className="dashboard-welcome card">
          <div className="welcome-info">
            <span className="badge badge-teal">Student Dashboard</span>
            <h2>Welcome back, {name}!</h2>
            <p>You have logged <strong>{hoursCompleted} of {totalHours} hours</strong> of behind-the-wheel driving instruction. Keep it up!</p>
          </div>
          <div className="welcome-stats">
            <div className="welcome-stat">
              <span className="stat-lbl">Primary Course</span>
              <span className="stat-val">{enrolledPackage}</span>
            </div>
            <div className="welcome-stat">
              <span className="stat-lbl">Gearbox Preference</span>
              <span className="stat-val" style={{textTransform: 'capitalize'}}>{transmission}</span>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="dashboard-grid">
          {/* LEFT COLUMN: Progress & Skills Checklist */}
          <div className="dash-col flex-col">
            {/* Visual Progress Card */}
            <div className="card stat-card-full">
              <h3>Training Progress Summary</h3>
              <div className="progress-radial-wrapper">
                <div className="radial-progress-bar">
                  <div className="radial-inner">
                    <span className="radial-percent">{progressPercent}%</span>
                    <span className="radial-lbl">Hours Completed</span>
                  </div>
                </div>
                <div className="progress-details-list">
                  <div className="prog-detail">
                    <span>Driving Practice Hours</span>
                    <strong>{hoursCompleted} / {totalHours} hrs</strong>
                  </div>
                  <div className="prog-detail">
                    <span>Theory Test Grade</span>
                    {theoryScore !== null ? (
                      <span className={`badge ${theoryScore >= 80 ? 'badge-success' : 'badge-danger'}`}>
                        {theoryScore}% {theoryScore >= 80 ? 'Passed' : 'Failed'}
                      </span>
                    ) : (
                      <button className="btn btn-sm btn-outline text-teal-btn" onClick={() => setCurrentTab('quiz')}>
                        Take Quiz Now
                      </button>
                    )}
                  </div>
                  <div className="prog-detail">
                    <span>Learner permit verification</span>
                    <span className="badge badge-success">Verified ✓</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist Card */}
            <div className="card skills-checklist-card">
              <h3>Behind-the-Wheel Skills Checklist</h3>
              <p className="card-subtitle">Mark off skills as you practice and master them with your driving coach.</p>
              <div className="skills-list">
                {skillsChecklist.map((skill) => (
                  <label key={skill.id} className="skill-item-label">
                    <input 
                      type="checkbox" 
                      checked={skill.completed}
                      onChange={() => onToggleSkill(skill.id)}
                    />
                    <div className="custom-check-box"></div>
                    <div className="skill-text-info">
                      <span className={`skill-name-txt ${skill.completed ? 'skill-completed-line' : ''}`}>
                        {skill.name}
                      </span>
                      <span className="skill-category">{skill.category}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Bookings & Scheduler */}
          <div className="dash-col flex-col">
            {/* Booking Wizard */}
            <div className="card booking-wizard-card">
              <h3>Book a Driving Lesson</h3>
              <p className="card-subtitle">Select your preferred instructor and time slot to reserve a training vehicle.</p>
              
              {bookingSuccess && (
                <div className="toast toast-success" style={{position: 'static', maxWidth: 'none', marginBottom: '1.5rem'}}>
                  <span>Lesson scheduled successfully! Check your schedule below.</span>
                </div>
              )}

              <form onSubmit={handleBookingSubmit} className="booking-form">
                <div className="form-group">
                  <label className="form-label">Select Driving Coach</label>
                  <select 
                    className="form-control" 
                    value={instructorId} 
                    onChange={(e) => setInstructorId(e.target.value)}
                    required
                  >
                    {instructors.map(inst => (
                      <option key={inst.id} value={inst.id}>
                        {inst.name} ({inst.transmission} - Rating: {inst.rating}★)
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Transmission Focus</label>
                    <select 
                      className="form-control"
                      value={transmission}
                      onChange={(e) => setTransmission(e.target.value)}
                    >
                      <option value="automatic">Automatic EV/Hybrid</option>
                      <option value="manual">Manual Transmission</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Lesson Date</label>
                    <input 
                      type="date" 
                      className="form-control" 
                      value={date} 
                      onChange={(e) => setDate(e.target.value)} 
                      min={new Date().toISOString().split('T')[0]} 
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Select Time Slot</label>
                  <select 
                    className="form-control" 
                    value={timeSlot} 
                    onChange={(e) => setTimeSlot(e.target.value)}
                  >
                    <option value="09:00 AM - 11:00 AM">Morning (09:00 AM - 11:00 AM)</option>
                    <option value="11:30 AM - 01:30 PM">Midday (11:30 AM - 01:30 PM)</option>
                    <option value="02:00 PM - 04:00 PM">Afternoon (02:00 PM - 04:00 PM)</option>
                    <option value="04:30 PM - 06:30 PM">Evening (04:30 PM - 06:30 PM)</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                  Confirm Driving Lesson
                </button>
              </form>
            </div>

            {/* Upcoming Lessons Card */}
            <div className="card lessons-list-card">
              <h3>Upcoming Scheduled Lessons</h3>
              {lessons.length === 0 ? (
                <div className="empty-lessons-state">
                  <p>No driving lessons scheduled. Use the booking form above to schedule your first behind-the-wheel practice.</p>
                </div>
              ) : (
                <div className="lessons-roster">
                  {lessons.map((lesson) => (
                    <div key={lesson.id} className="lesson-item-card">
                      <div className="lesson-badge-col">
                        <div className="lesson-date-badge">
                          <span className="badge-month">{new Date(lesson.date).toLocaleString('default', { month: 'short' })}</span>
                          <span className="badge-day">{new Date(lesson.date).getDate() + 1 || '--'}</span>
                        </div>
                      </div>
                      <div className="lesson-details-col">
                        <h4>Class with Instructor {lesson.instructorName}</h4>
                        <p className="lesson-time-txt">{lesson.timeSlot}</p>
                        <p className="lesson-vehicle-txt">Car: {lesson.vehicle}</p>
                      </div>
                      <div className="lesson-actions-col">
                        <button 
                          className="btn btn-sm btn-outline btn-danger-hover"
                          onClick={() => onCancelLesson(lesson.id)}
                          title="Cancel Lesson"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .dashboard-section {
          background-color: var(--bg-main);
          padding-top: 3rem;
        }
        .dashboard-welcome {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: var(--text-white);
          padding: 2.5rem;
          margin-bottom: 2.5rem;
          text-align: left;
        }
        .welcome-info h2 {
          color: var(--text-white);
          font-size: 1.8rem;
          margin: 0.5rem 0;
        }
        .welcome-info p {
          color: #94a3b8;
          margin: 0;
        }
        .welcome-stats {
          display: flex;
          gap: 2rem;
        }
        .welcome-stat {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          border-left: 2px solid var(--teal);
          padding-left: 1rem;
        }
        .welcome-stat .stat-lbl {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: #64748b;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .welcome-stat .stat-val {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-white);
        }
        
        .dashboard-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 2rem;
        }
        .dash-col {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .card-subtitle {
          color: var(--text-light);
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
          text-align: left;
        }

        /* Radial Progress Simulator */
        .progress-radial-wrapper {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          margin-top: 1rem;
        }
        .radial-progress-bar {
          width: 8rem;
          height: 8rem;
          border-radius: 50%;
          background: conic-gradient(var(--teal) ${progressPercent}%, var(--bg-alt) ${progressPercent}%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
        }
        .radial-inner {
          width: 6.8rem;
          height: 6.8rem;
          border-radius: 50%;
          background-color: var(--bg-card);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .radial-percent {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--primary-dark);
          line-height: 1;
        }
        .radial-lbl {
          font-size: 0.65rem;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 700;
          margin-top: 0.2rem;
        }
        .progress-details-list {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .prog-detail {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .prog-detail span {
          color: var(--text-light);
          font-weight: 500;
        }
        .prog-detail strong {
          color: var(--primary-dark);
        }
        .text-teal-btn {
          border-color: var(--teal);
          color: var(--teal);
          font-weight: bold;
        }
        .text-teal-btn:hover {
          background-color: var(--teal-soft);
        }

        /* Skills Checklist UI */
        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .skill-item-label {
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          padding: 0.75rem 1rem;
          background-color: var(--bg-alt);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          transition: all var(--transition-fast);
        }
        .skill-item-label:hover {
          border-color: rgba(13, 148, 136, 0.4);
          background-color: var(--teal-soft);
        }
        .skill-item-label input {
          display: none;
        }
        .custom-check-box {
          width: 1.25rem;
          height: 1.25rem;
          border: 2px solid var(--text-light);
          border-radius: 4px;
          position: relative;
          background-color: white;
          flex-shrink: 0;
          transition: all var(--transition-fast);
        }
        .skill-item-label input:checked + .custom-check-box {
          background-color: var(--teal);
          border-color: var(--teal);
        }
        .skill-item-label input:checked + .custom-check-box::after {
          content: '✓';
          position: absolute;
          top: -2px;
          left: 2px;
          color: white;
          font-size: 0.9rem;
          font-weight: bold;
        }
        .skill-text-info {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
        }
        .skill-name-txt {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--primary-dark);
        }
        .skill-completed-line {
          text-decoration: line-through;
          color: var(--text-light);
          font-weight: 500;
        }
        .skill-category {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-light);
          background-color: var(--bg-card);
          padding: 0.15rem 0.4rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
        }

        /* Lessons Roster UI */
        .lessons-roster {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-height: 380px;
          overflow-y: auto;
          padding-right: 0.25rem;
        }
        .lesson-item-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background-color: var(--bg-alt);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          text-align: left;
        }
        .lesson-date-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          background-color: var(--primary);
          color: white;
          border-radius: var(--radius-md);
          font-family: var(--font-heading);
          font-weight: bold;
          line-height: 1.1;
        }
        .badge-month {
          font-size: 0.65rem;
          text-transform: uppercase;
          color: #94a3b8;
        }
        .badge-day {
          font-size: 1.25rem;
          font-weight: 800;
        }
        .lesson-details-col {
          flex-grow: 1;
        }
        .lesson-details-col h4 {
          margin: 0 0 0.2rem 0;
          font-size: 0.9rem;
          font-weight: 700;
        }
        .lesson-time-txt {
          margin: 0;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--teal-dark);
        }
        .lesson-vehicle-txt {
          margin: 0;
          font-size: 0.75rem;
          color: var(--text-light);
        }
        .btn-danger-hover:hover {
          background-color: var(--danger-soft);
          color: var(--danger-dark);
          border-color: var(--danger);
        }
        .empty-lessons-state {
          padding: 2.5rem;
          text-align: center;
          color: var(--text-light);
          font-size: 0.9rem;
          background-color: var(--bg-alt);
          border-radius: var(--radius-md);
          border: 1px dashed var(--border-color);
        }

        @media (max-width: 900px) {
          .dashboard-welcome {
            flex-direction: column;
            gap: 1.5rem;
          }
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
