import React, { useState, useEffect } from 'react';
import '../styles/BookingModal.css';

export default function BookingModal({ isOpen, initialPackage, onClose, onSuccess }) {
  const [selectedPackage, setSelectedPackage] = useState(initialPackage || 'Complete Pass Guarantee');
  const [transmission, setTransmission] = useState('Manual');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: 'Morning (09:00 - 11:00)',
    notes: '',
  });

  useEffect(() => {
    if (initialPackage) {
      setSelectedPackage(initialPackage);
    }
  }, [initialPackage, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess(`Lesson booked successfully for ${formData.name}! Instructor confirmation sent to ${formData.email}.`);
    onClose();
  };

  return (
    <div className="booking-modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="booking-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="booking-modal-header">
          <div>
            <h2>Schedule Your Driving Lesson</h2>
            <p>Pick your slot and our certified instructor will come to your door.</p>
          </div>
          <button
            type="button"
            className="btn-booking-close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="package-highlight-badge">
          <span>🚗 Selected Package: <strong>{selectedPackage}</strong></span>
        </div>

        <form className="booking-form-fields" onSubmit={handleSubmit}>
          <div className="booking-two-col">
            <div className="booking-form-group">
              <label htmlFor="book-package">Course Package</label>
              <select
                id="book-package"
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
              >
                <option value="First-Time Taster (2h)">First-Time Taster (2h) — $65</option>
                <option value="Complete Pass Guarantee (20h)">Complete Pass Guarantee (20h) — $699</option>
                <option value="Fast-Track Intensive (10h)">Fast-Track Intensive (10h) — $390</option>
                <option value="Test-Ready Mock Session (2h)">Test-Ready Mock Session (2h) — $75</option>
              </select>
            </div>

            <div className="booking-form-group">
              <label htmlFor="book-trans">Transmission</label>
              <select
                id="book-trans"
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
              >
                <option value="Manual">Manual Transmission</option>
                <option value="Automatic">Automatic Transmission</option>
              </select>
            </div>
          </div>

          <div className="booking-two-col">
            <div className="booking-form-group">
              <label htmlFor="book-name">Your Full Name</label>
              <input
                id="book-name"
                type="text"
                placeholder="Jane Doe"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="booking-form-group">
              <label htmlFor="book-phone">Phone Number</label>
              <input
                id="book-phone"
                type="tel"
                placeholder="+1 (555) 019-2834"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="booking-form-group">
            <label htmlFor="book-email">Email Address</label>
            <input
              id="book-email"
              type="email"
              placeholder="jane@example.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="booking-two-col">
            <div className="booking-form-group">
              <label htmlFor="book-date">Preferred Date</label>
              <input
                id="book-date"
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            <div className="booking-form-group">
              <label htmlFor="book-time">Preferred Time Window</label>
              <select
                id="book-time"
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
              >
                <option value="Morning (09:00 - 11:00)">Morning (09:00 - 11:00)</option>
                <option value="Midday (11:30 - 13:30)">Midday (11:30 - 13:30)</option>
                <option value="Afternoon (14:00 - 16:00)">Afternoon (14:00 - 16:00)</option>
                <option value="Evening (16:30 - 18:30)">Evening (16:30 - 18:30)</option>
                <option value="Weekend Special">Weekend Special</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn-booking-confirm">
            Confirm & Reserve Lesson ➔
          </button>
        </form>
      </div>
    </div>
  );
}
