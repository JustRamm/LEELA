import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Instructors from './components/Instructors';
import StudentDashboard from './components/StudentDashboard';
import AdminDashboard from './components/AdminDashboard';
import TheoryTest from './components/TheoryTest';
import ContactCoverage from './components/ContactCoverage';
import Footer from './components/Footer';

// Seed Instructors Data
const INITIAL_INSTRUCTORS = [
  {
    id: 'inst-1',
    name: 'Sarah Jenkins',
    experience: 10,
    rating: 4.9,
    reviewsCount: 154,
    transmission: 'Both',
    languages: ['English', 'Spanish'],
    bio: 'Sarah is an patient specialist who excels with nervous beginners. She breaks down parallel parking into simple, stress-free steps.',
    avatarInitials: 'SJ',
    vehicle: 'Toyota Corolla / Tesla Model 3',
  },
  {
    id: 'inst-2',
    name: 'David Chen',
    experience: 8,
    rating: 4.8,
    reviewsCount: 120,
    transmission: 'Automatic',
    languages: ['English', 'Mandarin'],
    bio: 'David focuses on defensive driving on highways, lane changes, and prepping students for the exact routes used in DMV practical exams.',
    avatarInitials: 'DC',
    vehicle: 'Honda Civic (Automatic)',
  },
  {
    id: 'inst-3',
    name: 'Marcus Brody',
    experience: 12,
    rating: 4.9,
    reviewsCount: 182,
    transmission: 'Both',
    languages: ['English'],
    bio: 'A former safety auditor, Marcus has a calm and encouraging demeanor. He is highly recommended for adult refresher courses.',
    avatarInitials: 'MB',
    vehicle: 'Subaru Impreza (Manual & Auto)',
  },
  {
    id: 'inst-4',
    name: 'Linda Cooper',
    experience: 6,
    rating: 4.7,
    reviewsCount: 96,
    transmission: 'Automatic',
    languages: ['English', 'Tagalog'],
    bio: 'Linda brings high energy and clear, actionable feedback to each class. She specializes in teen driver safety and hazard awareness.',
    avatarInitials: 'LC',
    vehicle: 'Toyota Prius (Automatic)',
  },
];

// Seed Vehicles Fleet Data
const INITIAL_VEHICLES = [
  { id: 'v-1', model: 'Tesla Model 3 (Automatic)', plate: 'L-EV-9901', transmission: 'Auto (EV)', fuel: 98, status: 'Good' },
  { id: 'v-2', model: 'Toyota Corolla (Automatic)', plate: 'L-TR-1082', transmission: 'Auto (Hybrid)', fuel: 85, status: 'Good' },
  { id: 'v-3', model: 'Honda Civic (Manual)', plate: 'L-MN-7734', transmission: 'Manual', fuel: 90, status: 'Good' },
  { id: 'v-4', model: 'Subaru Impreza (Manual)', plate: 'L-WD-8871', transmission: 'Manual', fuel: 45, status: 'Service Scheduled' },
  { id: 'v-5', model: 'Toyota Prius (Automatic)', plate: 'L-HB-4452', transmission: 'Auto (Hybrid)', fuel: 15, status: 'Service Scheduled' },
  { id: 'v-6', model: 'Chevrolet Bolt (Automatic)', plate: 'L-EV-5509', transmission: 'Auto (EV)', fuel: 75, status: 'Good' },
];

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Toast Notification System
  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // State: Driving Lessons (Starts with two pre-seeded user lessons + other student logs)
  const [lessons, setLessons] = useState([
    {
      id: 'ls-user-1',
      studentName: 'Abiram',
      instructorId: 'inst-1',
      instructorName: 'Sarah Jenkins',
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow
      timeSlot: '10:00 AM - 12:00 PM',
      vehicle: 'Tesla Model 3 (Auto)',
      status: 'Scheduled'
    },
    {
      id: 'ls-user-2',
      studentName: 'Abiram',
      instructorId: 'inst-2',
      instructorName: 'David Chen',
      date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0], // 3 days from now
      timeSlot: '02:00 PM - 04:00 PM',
      vehicle: 'Honda Civic (Manual)',
      status: 'Scheduled'
    },
    {
      id: 'ls-other-1',
      studentName: 'Jane Doe',
      instructorId: 'inst-3',
      instructorName: 'Marcus Brody',
      date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      timeSlot: '11:30 AM - 01:30 PM',
      vehicle: 'Subaru Impreza (Manual)',
      status: 'Scheduled'
    },
    {
      id: 'ls-other-2',
      studentName: 'Bob Smith',
      instructorId: 'inst-4',
      instructorName: 'Linda Cooper',
      date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      timeSlot: '04:30 PM - 06:30 PM',
      vehicle: 'Toyota Prius (Auto)',
      status: 'Scheduled'
    }
  ]);

  // State: Student specific details (The active user perspective)
  const [studentState, setStudentState] = useState({
    name: 'Abiram',
    enrolledPackage: 'Standard Package (10 hours)',
    hoursCompleted: 6,
    totalHours: 10,
    theoryScore: null, // starts as unattempted
    skillsChecklist: [
      { id: 1, name: 'Pre-drive cockpit safety checks', category: 'Basics', completed: true },
      { id: 2, name: 'Steering hand-over-hand control', category: 'Basics', completed: true },
      { id: 3, name: 'Intersection navigation & turn signals', category: 'Controls', completed: true },
      { id: 4, name: 'Parallel parking maneuvers', category: 'Maneuvers', completed: false },
      { id: 5, name: 'Highway lane changes & speed match', category: 'Advanced', completed: false },
      { id: 6, name: 'Emergency brake responses & halts', category: 'Safety', completed: false },
      { id: 7, name: 'Night driving light adjustments', category: 'Advanced', completed: false },
    ]
  });

  // State: Roster of all students in school (Admin View)
  const [studentsRoster, setStudentsRoster] = useState([
    { name: 'Abiram', enrolledPackage: 'Standard Pack (10h)', hoursCompleted: 6, totalHours: 10, theoryScore: null, status: 'In Training' },
    { name: 'Jane Doe', enrolledPackage: 'Starter Pack (5h)', hoursCompleted: 2, totalHours: 5, theoryScore: 85, status: 'In Training' },
    { name: 'Bob Smith', enrolledPackage: 'Standard Pack (10h)', hoursCompleted: 8, totalHours: 10, theoryScore: 90, status: 'In Training' },
    { name: 'Emily Watson', enrolledPackage: 'Pass Guarantee (20h)', hoursCompleted: 15, totalHours: 20, theoryScore: 95, status: 'In Training' },
    { name: 'John Miller', enrolledPackage: 'Standard Pack (10h)', hoursCompleted: 10, totalHours: 10, theoryScore: 100, status: 'Graduate' },
  ]);

  // Lessons filters for student view vs admin list
  const studentLessons = lessons.filter(l => l.studentName === 'Abiram');

  // Callback: Book a lesson from Student Dashboard
  const handleBookLesson = (newLesson) => {
    setLessons(prev => [newLesson, ...prev]);
    // Increment hours completed for mock tracking in dashboard
    setStudentState(prev => {
      const nextHours = Math.min(prev.hoursCompleted + 2, prev.totalHours);
      return {
        ...prev,
        hoursCompleted: nextHours
      };
    });
    // Sync with roster
    setStudentsRoster(prev => prev.map(stu => {
      if (stu.name === 'Abiram') {
        const nextHours = Math.min(stu.hoursCompleted + 2, stu.totalHours);
        return { ...stu, hoursCompleted: nextHours, status: nextHours === stu.totalHours ? 'Graduate' : 'In Training' };
      }
      return stu;
    }));
    addToast(`Driving class with Instructor ${newLesson.instructorName} booked!`, 'success');
  };

  // Callback: Book a lesson from Admin Portal (Manual override)
  const handleAdminBookLesson = (newLesson) => {
    setLessons(prev => [newLesson, ...prev]);
    
    // If the booking is for the logged in student (Abiram), update student dashboard state
    if (newLesson.studentName === 'Abiram') {
      setStudentState(prev => {
        const nextHours = Math.min(prev.hoursCompleted + 2, prev.totalHours);
        return {
          ...prev,
          hoursCompleted: nextHours
        };
      });
    }

    // Update roster hours
    setStudentsRoster(prev => prev.map(stu => {
      if (stu.name === newLesson.studentName) {
        const nextHours = Math.min(stu.hoursCompleted + 2, stu.totalHours);
        return { ...stu, hoursCompleted: nextHours, status: nextHours === stu.totalHours ? 'Graduate' : 'In Training' };
      }
      return stu;
    }));

    addToast(`Manual appointment for ${newLesson.studentName} scheduled.`, 'warning');
  };

  // Callback: Cancel a lesson (either student or admin override)
  const handleCancelLesson = (lessonId) => {
    const target = lessons.find(l => l.id === lessonId);
    if (!target) return;

    setLessons(prev => prev.filter(l => l.id !== lessonId));
    
    // Decrement hours completed for mock synchronization
    if (target.studentName === 'Abiram') {
      setStudentState(prev => ({
        ...prev,
        hoursCompleted: Math.max(prev.hoursCompleted - 2, 0)
      }));
    }

    setStudentsRoster(prev => prev.map(stu => {
      if (stu.name === target.studentName) {
        const nextHours = Math.max(stu.hoursCompleted - 2, 0);
        return { ...stu, hoursCompleted: nextHours, status: nextHours === stu.totalHours ? 'Graduate' : 'In Training' };
      }
      return stu;
    }));

    addToast(`Driving lesson scheduled for ${target.date} has been cancelled.`, 'danger');
  };

  // Callback: Toggle skills checklists from Student dashboard
  const handleToggleSkill = (skillId) => {
    setStudentState(prev => {
      const updatedChecklist = prev.skillsChecklist.map(skill => {
        if (skill.id === skillId) {
          const newState = !skill.completed;
          addToast(`Skill "${skill.name}" marked as ${newState ? 'Mastered' : 'Needs Practice'}.`, 'success');
          return { ...skill, completed: newState };
        }
        return skill;
      });
      return {
        ...prev,
        skillsChecklist: updatedChecklist
      };
    });
  };

  // Callback: Finish theory quiz
  const handleFinishQuiz = (scorePercent) => {
    // Update student's score
    setStudentState(prev => ({
      ...prev,
      theoryScore: scorePercent
    }));

    // Update roster database
    setStudentsRoster(prev => prev.map(stu => {
      if (stu.name === 'Abiram') {
        return { ...stu, theoryScore: scorePercent };
      }
      return stu;
    }));

    addToast(`Mock Theory test score updated: ${scorePercent}%!`, 'success');
  };

  // Callback: Select package from pricing page
  const handleSelectPackage = (pkg) => {
    setStudentState(prev => ({
      ...prev,
      enrolledPackage: `${pkg.name} (${pkg.hours} hours)`,
      hoursCompleted: 0,
      totalHours: pkg.hours
    }));

    setStudentsRoster(prev => prev.map(stu => {
      if (stu.name === 'Abiram') {
        return { 
          ...stu, 
          enrolledPackage: `${pkg.name.split(' ')[0]} Pack (${pkg.hours}h)`, 
          hoursCompleted: 0, 
          totalHours: pkg.hours,
          status: 'In Training'
        };
      }
      return stu;
    }));

    addToast(`Successfully enrolled in ${pkg.name}! Welcome aboard.`, 'success');
    setCurrentTab('student-portal');
  };

  return (
    <div className="app-container">
      {/* Global Header */}
      <Header 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        isAdmin={isAdmin} 
        setIsAdmin={setIsAdmin} 
      />

      {/* Main View Router */}
      <main className="main-content">
        {currentTab === 'home' && (
          <>
            <Hero setCurrentTab={setCurrentTab} isAdmin={isAdmin} />
            <TestimonialsSection />
          </>
        )}
        
        {currentTab === 'packages' && (
          <Courses onSelectPackage={handleSelectPackage} />
        )}
        
        {currentTab === 'instructors' && (
          <Instructors instructorsData={INITIAL_INSTRUCTORS} />
        )}
        
        {currentTab === 'quiz' && (
          <TheoryTest 
            onFinishQuiz={handleFinishQuiz} 
            currentStudentScore={studentState.theoryScore}
            setCurrentTab={setCurrentTab}
          />
        )}
        
        {currentTab === 'contact' && (
          <ContactCoverage onAddToast={addToast} />
        )}
        
        {currentTab === 'student-portal' && (
          <StudentDashboard 
            studentState={{ ...studentState, lessons: studentLessons }} 
            instructors={INITIAL_INSTRUCTORS} 
            onAddLesson={handleBookLesson} 
            onCancelLesson={handleCancelLesson}
            onToggleSkill={handleToggleSkill}
            setCurrentTab={setCurrentTab}
          />
        )}
        
        {currentTab === 'admin-portal' && (
          <AdminDashboard 
            studentState={{ ...studentState, lessons: studentLessons }} 
            instructors={INITIAL_INSTRUCTORS} 
            allLessons={lessons}
            onCancelLesson={handleCancelLesson}
            onAdminAddLesson={handleAdminBookLesson}
            vehiclesList={INITIAL_VEHICLES}
            studentsList={studentsRoster}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* Toast Overlay Container */}
      <div className="toast-container">
        {toasts.map(toast => (
          <div key={toast.id} className={`toast toast-${toast.type}`}>
            <span>{toast.message}</span>
            <button className="toast-close" onClick={() => removeToast(toast.id)}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Inline Sub-component for Home Testimonials
function TestimonialsSection() {
  const reviews = [
    {
      name: 'Abishek Kumar',
      role: 'First-Time Passer (June 2026)',
      review: "Absolutely fantastic experience at Leela! My instructor Sarah made me feel so calm during parallel parking lessons. The mock theory test tool on their dashboard was also a huge help.",
      rating: 5
    },
    {
      name: 'Jessica Williams',
      role: 'Refresher Student (May 2026)',
      review: "I hadn't driven in 5 years since moving to the city. Marcus gave me refresher lessons on highway safety and defensive measures. Excellent rates, highly recommended school!",
      rating: 5
    },
    {
      name: 'Brian Thorne',
      role: 'Teen Student Graduate (April 2026)',
      review: "Enrolled in the Pass Guarantee package and it was worth every penny. Used their dual-controlled Tesla for the DMV road test and passed on my first attempt. Excellent teachers.",
      rating: 5
    }
  ];

  return (
    <section className="section testimonials-section section-bg-alt" style={{borderTop: '1px solid var(--border-color)'}}>
      <div className="container">
        <div className="section-header" style={{marginBottom: '3rem'}}>
          <h2>What Our Graduate Students Say</h2>
          <p>Read honest feedback from real graduates who completed their behind-the-wheel driver training courses at Leela.</p>
        </div>

        <div className="grid-3">
          {reviews.map((rev, idx) => (
            <div key={idx} className="card testimonial-card">
              <div className="review-stars">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <span key={i} className="review-star" style={{color: 'var(--accent-dark)', marginRight: '0.2rem'}}>★</span>
                ))}
              </div>
              <p className="review-body-text">"{rev.review}"</p>
              <hr style={{border: 0, borderTop: '1px solid var(--border-color)', margin: '1.25rem 0'}} />
              <div className="review-author">
                <h4>{rev.name}</h4>
                <p style={{fontSize: '0.8rem', color: 'var(--text-light)', margin: 0, fontWeight: 600}}>{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .testimonial-card {
          text-align: left;
          display: flex;
          flex-direction: column;
          background-color: var(--bg-card);
        }
        .review-stars {
          margin-bottom: 0.75rem;
          font-size: 1.1rem;
        }
        .review-body-text {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-main);
          font-style: italic;
          flex-grow: 1;
        }
        .review-author h4 {
          margin: 0 0 0.15rem 0;
          font-size: 1rem;
        }
      `}</style>
    </section>
  );
}
