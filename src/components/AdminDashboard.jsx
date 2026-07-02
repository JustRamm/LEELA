import React, { useState } from 'react';

export default function AdminDashboard({ 
  studentState, 
  instructors, 
  allLessons, 
  onCancelLesson, 
  onAdminAddLesson,
  vehiclesList,
  studentsList
}) {
  const [activeSubTab, setActiveSubTab] = useState('overview'); // 'overview', 'students', 'instructors', 'fleet', 'bookings'

  // Local admin booking helper state
  const [selectedStudentName, setSelectedStudentName] = useState(studentsList[0]?.name || 'Jane Doe');
  const [selectedInstructorId, setSelectedInstructorId] = useState(instructors[0]?.id || '');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('11:30 AM - 01:30 PM');
  const [adminBookingMsg, setAdminBookingMsg] = useState('');

  const handleAdminBooking = (e) => {
    e.preventDefault();
    if (!bookingDate) return;

    const inst = instructors.find(i => i.id === selectedInstructorId) || instructors[0];
    const newLesson = {
      id: `ls-admin-${Date.now()}`,
      studentName: selectedStudentName,
      instructorId: inst.id,
      instructorName: inst.name,
      date: bookingDate,
      timeSlot: bookingTime,
      vehicle: inst.transmission === 'Automatic' ? 'Tesla Model 3 (Auto)' : 'Honda Civic (Manual)',
      status: 'Scheduled'
    };

    onAdminAddLesson(newLesson);
    setAdminBookingMsg('Admin manual booking successfully placed!');
    setBookingDate('');
    setTimeout(() => setAdminBookingMsg(''), 4000);
  };

  // Calculations for stats
  const totalRevenue = allLessons.length * 95 + 12450; // Dynamic mock baseline
  const activeBookings = allLessons.filter(l => l.status === 'Scheduled').length;
  
  return (
    <section className="section admin-section">
      <div className="container">
        
        {/* Admin Header */}
        <div className="admin-header-panel">
          <div className="admin-title-col">
            <span className="badge badge-warning">Administration Console</span>
            <h2>School Management Portal</h2>
            <p>Monitor registrations, driving hours, training fleet maintenance, and resolve booking schedules.</p>
          </div>
          
          {/* Sub Navigation Tabs */}
          <div className="admin-subnav">
            <button 
              className={`subnav-btn ${activeSubTab === 'overview' ? 'active-btn' : ''}`}
              onClick={() => setActiveSubTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`subnav-btn ${activeSubTab === 'students' ? 'active-btn' : ''}`}
              onClick={() => setActiveSubTab('students')}
            >
              Students ({studentsList.length})
            </button>
            <button 
              className={`subnav-btn ${activeSubTab === 'instructors' ? 'active-btn' : ''}`}
              onClick={() => setActiveSubTab('instructors')}
            >
              Instructors
            </button>
            <button 
              className={`subnav-btn ${activeSubTab === 'fleet' ? 'active-btn' : ''}`}
              onClick={() => setActiveSubTab('fleet')}
            >
              Fleet Manager ({vehiclesList.length})
            </button>
            <button 
              className={`subnav-btn ${activeSubTab === 'bookings' ? 'active-btn' : ''}`}
              onClick={() => setActiveSubTab('bookings')}
            >
              Bookings Queue ({allLessons.length})
            </button>
          </div>
        </div>

        {/* SUBTAB CONTENT: OVERVIEW */}
        {activeSubTab === 'overview' && (
          <div className="admin-tab-content">
            {/* Stat Counters */}
            <div className="grid-4 admin-stats-grid">
              <div className="card admin-stat-card">
                <span className="stat-icon-bg bg-blue">👤</span>
                <div className="stat-text-group">
                  <span className="admin-lbl">Active Students</span>
                  <span className="admin-val">{studentsList.length} Learners</span>
                </div>
              </div>
              <div className="card admin-stat-card">
                <span className="stat-icon-bg bg-teal">⏱</span>
                <div className="stat-text-group">
                  <span className="admin-lbl">Hours Practiced</span>
                  <span className="admin-val">346.5 hrs</span>
                </div>
              </div>
              <div className="card admin-stat-card">
                <span className="stat-icon-bg bg-emerald">💰</span>
                <div className="stat-text-group">
                  <span className="admin-lbl">Monthly Revenue</span>
                  <span className="admin-val">${totalRevenue.toLocaleString()}</span>
                </div>
              </div>
              <div className="card admin-stat-card">
                <span className="stat-icon-bg bg-orange">🚗</span>
                <div className="stat-text-group">
                  <span className="admin-lbl">Fleet Status</span>
                  <span className="admin-val">6 Active Cars</span>
                </div>
              </div>
            </div>

            {/* Quick Actions & Quick Roster */}
            <div className="grid-2 admin-overview-split">
              {/* Quick Booking override */}
              <div className="card admin-quick-card">
                <h3>Manual Scheduler Override</h3>
                <p className="card-subtitle">Manually schedule lessons on behalf of students.</p>
                {adminBookingMsg && <div className="badge badge-success" style={{marginBottom: '1rem', width: '100%', padding: '0.5rem'}}>{adminBookingMsg}</div>}
                
                <form onSubmit={handleAdminBooking} className="admin-form">
                  <div className="form-group">
                    <label className="form-label">Student Name</label>
                    <select 
                      className="form-control"
                      value={selectedStudentName}
                      onChange={(e) => setSelectedStudentName(e.target.value)}
                    >
                      {studentsList.map((stu, i) => (
                        <option key={i} value={stu.name}>{stu.name} ({stu.enrolledPackage})</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Instructor & Gearbox</label>
                    <select 
                      className="form-control"
                      value={selectedInstructorId}
                      onChange={(e) => setSelectedInstructorId(e.target.value)}
                    >
                      {instructors.map(inst => (
                        <option key={inst.id} value={inst.id}>{inst.name} ({inst.transmission})</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Date</label>
                      <input 
                        type="date" 
                        className="form-control" 
                        value={bookingDate} 
                        onChange={(e) => setBookingDate(e.target.value)} 
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Time</label>
                      <select 
                        className="form-control"
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                      >
                        <option value="09:00 AM - 11:00 AM">Morning Slot</option>
                        <option value="11:30 AM - 01:30 PM">Midday Slot</option>
                        <option value="02:00 PM - 04:00 PM">Afternoon Slot</option>
                        <option value="04:30 PM - 06:30 PM">Evening Slot</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-secondary" style={{width: '100%'}}>Schedule Lesson</button>
                </form>
              </div>

              {/* General Admin Quick Reminders */}
              <div className="card admin-quick-card">
                <h3>Admin Reminders & Alerts</h3>
                <div className="admin-reminders-list">
                  <div className="reminder-item warning-border">
                    <h5>Vehicle Maintenance Due</h5>
                    <p>Subaru Impreza (Plate: SV-8871) has exceeded 3,000 miles since last oil check. Maintenance scheduled for Friday.</p>
                  </div>
                  <div className="reminder-item success-border">
                    <h5>DMV Audit Passed</h5>
                    <p>Leela Driving Academy certification has been renewed for the current year. Accreditation values verified.</p>
                  </div>
                  <div className="reminder-item teal-border">
                    <h5>Instructor High Rating</h5>
                    <p>Coach Sarah Jenkins received five straight 5-star ratings this week. Pass-rate verified at 99.1%.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB CONTENT: STUDENTS */}
        {activeSubTab === 'students' && (
          <div className="admin-tab-content card">
            <h3>Registered Student Logs</h3>
            <p className="card-subtitle" style={{marginBottom: '1.5rem'}}>Full progress overview including license status, theory scores, and completed course hours.</p>
            <div className="custom-table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Enrolled Package</th>
                    <th>Behind-Wheel Progress</th>
                    <th>Theory Exam Status</th>
                    <th>DMV Permit</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {studentsList.map((stu, i) => (
                    <tr key={i}>
                      <td><strong>{stu.name}</strong></td>
                      <td>{stu.enrolledPackage}</td>
                      <td>
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                          <div className="progress-bar-mini-bg" style={{width: '60px', height: '6px', backgroundColor: '#e2e8f0', borderRadius: '3px', overflow: 'hidden'}}>
                            <div className="progress-fill" style={{height: '100%', backgroundColor: 'var(--teal)', width: `${Math.round((stu.hoursCompleted/stu.totalHours)*100)}%`}}></div>
                          </div>
                          <span style={{fontSize: '0.8rem', fontWeight: 'bold'}}>{stu.hoursCompleted} / {stu.totalHours} hrs</span>
                        </div>
                      </td>
                      <td>
                        {stu.theoryScore !== null ? (
                          <span className={`badge ${stu.theoryScore >= 80 ? 'badge-success' : 'badge-danger'}`}>
                            {stu.theoryScore}% Score
                          </span>
                        ) : (
                          <span className="badge badge-primary">Not Attempted</span>
                        )}
                      </td>
                      <td><span className="badge badge-success">Verified ✓</span></td>
                      <td>
                        <span className={`badge ${stu.hoursCompleted === stu.totalHours ? 'badge-success' : 'badge-teal'}`}>
                          {stu.hoursCompleted === stu.totalHours ? 'Graduate' : 'In Training'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SUBTAB CONTENT: INSTRUCTORS */}
        {activeSubTab === 'instructors' && (
          <div className="admin-tab-content card">
            <h3>Instructor Deployment & Analytics</h3>
            <p className="card-subtitle" style={{marginBottom: '1.5rem'}}>Instructors active in our school, tracking overall student feedback ratings and gear alignment.</p>
            <div className="custom-table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Instructor Name</th>
                    <th>License Rating</th>
                    <th>Gearbox Specialty</th>
                    <th>Target Vehicles</th>
                    <th>Languages</th>
                    <th>Pass Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {instructors.map((inst) => (
                    <tr key={inst.id}>
                      <td>
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                          <div className="avatar-mini">{inst.avatarInitials}</div>
                          <strong>{inst.name}</strong>
                        </div>
                      </td>
                      <td>
                        <span style={{color: 'var(--accent-dark)', fontWeight: 'bold'}}>★ {inst.rating}</span>
                        <span style={{fontSize: '0.75rem', color: 'var(--text-light)'}}> ({inst.reviewsCount} reviews)</span>
                      </td>
                      <td><span className="badge badge-primary">{inst.transmission}</span></td>
                      <td style={{fontSize: '0.85rem'}}>{inst.vehicle}</td>
                      <td style={{fontSize: '0.85rem'}}>{inst.languages.join(', ')}</td>
                      <td><strong style={{color: 'var(--success-dark)'}}>98.4%</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SUBTAB CONTENT: VEHICLE FLEET */}
        {activeSubTab === 'fleet' && (
          <div className="admin-tab-content card">
            <h3>Training Vehicle Roster</h3>
            <p className="card-subtitle" style={{marginBottom: '1.5rem'}}>Real-time deployment and maintenance diagnostics for our vehicles.</p>
            <div className="custom-table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Vehicle Model</th>
                    <th>License Plate</th>
                    <th>Gearbox</th>
                    <th>Fuel / Battery Level</th>
                    <th>DMV Certification</th>
                    <th>Diagnostic Status</th>
                  </tr>
                </thead>
                <tbody>
                  {vehiclesList.map((veh) => (
                    <tr key={veh.id}>
                      <td><strong>{veh.model}</strong></td>
                      <td><code>{veh.plate}</code></td>
                      <td><span className="badge badge-teal">{veh.transmission}</span></td>
                      <td>
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                          <div style={{width: '60px', height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden'}}>
                            <div style={{height: '100%', width: `${veh.fuel}%`, backgroundColor: veh.fuel > 30 ? 'var(--success)' : 'var(--danger)'}}></div>
                          </div>
                          <span style={{fontSize: '0.8rem', fontWeight: 'bold'}}>{veh.fuel}%</span>
                        </div>
                      </td>
                      <td><span className="badge badge-success">Verified Active</span></td>
                      <td>
                        <span className={`badge ${
                          veh.status === 'Good' ? 'badge-success' : 
                          veh.status === 'Service Scheduled' ? 'badge-warning' : 'badge-danger'
                        }`}>
                          {veh.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SUBTAB CONTENT: BOOKINGS QUEUE */}
        {activeSubTab === 'bookings' && (
          <div className="admin-tab-content card">
            <h3>Global Booking Queue</h3>
            <p className="card-subtitle" style={{marginBottom: '1.5rem'}}>A master record of all scheduled driver lessons, including diagnostic cancellation actions.</p>
            
            {allLessons.length === 0 ? (
              <p style={{padding: '2rem', textAlign: 'center', color: 'var(--text-light)'}}>No lessons scheduled in the queue.</p>
            ) : (
              <div className="custom-table-container">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Time Slot</th>
                      <th>Student</th>
                      <th>Instructor</th>
                      <th>Training Car</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allLessons.map((lesson) => (
                      <tr key={lesson.id}>
                        <td><strong>{new Date(lesson.date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</strong></td>
                        <td><span className="badge badge-teal">{lesson.timeSlot}</span></td>
                        <td><strong>{lesson.studentName}</strong></td>
                        <td>{lesson.instructorName}</td>
                        <td style={{fontSize: '0.85rem'}}>{lesson.vehicle}</td>
                        <td>
                          <button 
                            className="btn btn-sm btn-outline btn-danger-hover"
                            onClick={() => onCancelLesson(lesson.id)}
                          >
                            Cancel Override
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </div>

      <style>{`
        .admin-section {
          background-color: var(--bg-alt);
          padding-top: 3rem;
        }
        .admin-header-panel {
          text-align: left;
          background-color: var(--bg-card);
          padding: 2rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
          margin-bottom: 2.5rem;
        }
        .admin-title-col h2 {
          margin: 0.5rem 0;
          font-size: 1.8rem;
        }
        .admin-title-col p {
          color: var(--text-light);
          margin: 0 0 1.5rem 0;
        }
        
        .admin-subnav {
          display: flex;
          gap: 0.5rem;
          border-top: 1px solid var(--border-color);
          padding-top: 1.25rem;
          flex-wrap: wrap;
        }
        .subnav-btn {
          padding: 0.5rem 1.25rem;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-light);
          border-radius: var(--radius-sm);
          font-family: var(--font-heading);
          transition: all var(--transition-fast);
        }
        .subnav-btn:hover {
          background-color: var(--bg-alt);
          color: var(--primary-dark);
        }
        .subnav-btn.active-btn {
          background-color: var(--primary);
          color: var(--text-white) !important;
        }

        /* Stats Grid */
        .admin-stats-grid {
          margin-bottom: 2.5rem;
        }
        .admin-stat-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem;
          text-align: left;
        }
        .stat-icon-bg {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          box-shadow: var(--shadow-sm);
        }
        .bg-blue { background-color: #eff6ff; color: #1d4ed8; }
        .bg-teal { background-color: var(--teal-soft); color: var(--teal-dark); }
        .bg-emerald { background-color: var(--success-soft); color: var(--success-dark); }
        .bg-orange { background-color: var(--accent-soft); color: var(--accent-dark); }
        
        .stat-text-group {
          display: flex;
          flex-direction: column;
        }
        .admin-lbl {
          font-size: 0.75rem;
          color: var(--text-light);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .admin-val {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--primary-dark);
        }

        /* Admin Overview Layout */
        .admin-overview-split {
          align-items: start;
        }
        .admin-quick-card {
          text-align: left;
        }
        .admin-form {
          margin-top: 1rem;
        }
        
        /* Reminders list */
        .admin-reminders-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;
        }
        .reminder-item {
          padding: 1rem;
          background-color: var(--bg-alt);
          border-radius: var(--radius-md);
          border-left: 4px solid var(--border-color);
        }
        .reminder-item h5 {
          margin: 0 0 0.25rem 0;
          font-size: 0.9rem;
        }
        .reminder-item p {
          margin: 0;
          font-size: 0.8rem;
          color: var(--text-light);
          line-height: 1.4;
        }
        .warning-border { border-left-color: var(--accent); }
        .success-border { border-left-color: var(--success); }
        .teal-border { border-left-color: var(--teal); }

        .avatar-mini {
          width: 2rem;
          height: 2rem;
          border-radius: var(--radius-sm);
          background-color: var(--teal-soft);
          color: var(--teal-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.8rem;
          border: 1px solid var(--teal);
        }
        
        .progress-bar-mini-bg .progress-fill {
          transition: width 0.4s ease;
        }
      `}</style>
    </section>
  );
}
