import React, { useState } from 'react';
import '../styles/Contact.css';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    postcode: '',
    transmission: 'manual',
    package: 'complete-pass'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onShowToast(`Inquiry sent, ${formData.name}! A local instructor will message your WhatsApp shortly.`);
    setFormData({
      name: '',
      phone: '',
      postcode: '',
      transmission: 'manual',
      package: 'complete-pass'
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <span className="contact-tag">START DRIVING TODAY</span>
        <h2 className="contact-title">Ready to Get Behind the Wheel?</h2>
        <p className="contact-desc">Schedule your first lesson or ask our friendly team any question.</p>
      </div>

      <div className="contact-split-card">
        {/* Left: Schedule Graphic */}
        <div className="contact-graphic-side">
          <img 
            src="/illustrations/home/feature-schedule.svg" 
            alt="Flexible Booking Calendar and Key" 
            width="460" 
            height="380" 
          />
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form-side">
          <h3>Send a Lesson Inquiry</h3>
          <p>Enter your details and an instructor in your postal code will message you within 1 hour.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid-row">
              <div className="form-field-wrap">
                <label htmlFor="contact-name">Your Full Name</label>
                <input 
                  type="text" 
                  id="contact-name" 
                  required 
                  placeholder="Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-field-wrap">
                <label htmlFor="contact-phone">Phone / WhatsApp</label>
                <input 
                  type="tel" 
                  id="contact-phone" 
                  required 
                  placeholder="+44 7123 456789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="form-grid-row">
              <div className="form-field-wrap">
                <label htmlFor="contact-postcode">Pickup Postal Code</label>
                <input 
                  type="text" 
                  id="contact-postcode" 
                  required 
                  placeholder="e.g. SW1A 1AA"
                  value={formData.postcode}
                  onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                />
              </div>
              <div className="form-field-wrap">
                <label htmlFor="contact-trans">Transmission</label>
                <select 
                  id="contact-trans"
                  value={formData.transmission}
                  onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
                >
                  <option value="manual">Manual Transmission</option>
                  <option value="automatic">Automatic Transmission</option>
                </select>
              </div>
            </div>

            <div className="form-field-wrap">
              <label htmlFor="contact-pkg">Interested Package</label>
              <select 
                id="contact-pkg"
                value={formData.package}
                onChange={(e) => setFormData({ ...formData, package: e.target.value })}
              >
                <option value="complete-pass">Complete Pass (20 Hours - Pass Guarantee)</option>
                <option value="starter">Starter Package (5 Hours)</option>
                <option value="intensive">Fast-Track Intensive (30 Hours)</option>
                <option value="single">Single 2-Hour Trial Lesson</option>
              </select>
            </div>

            <button type="submit" className="btn-contact-submit">
              Request Lesson Availability
            </button>

            <div className="whatsapp-direct">
              Or chat with us immediately on WhatsApp: <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">Chat with LEELA Team</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
