import React, { useState } from 'react';

const COVERAGE_ZONES = [
  {
    id: 'zone-central',
    name: 'Central Downtown',
    availability: 'High Availability',
    statusClass: 'badge-success',
    pickupTime: 'Within 10 mins',
    instructors: ['Sarah Jenkins', 'David Chen', 'Marcus Brody'],
    coordinates: 'M90,70 L150,70 L170,120 L110,130 Z',
    labelX: 130,
    labelY: 100
  },
  {
    id: 'zone-west',
    name: 'West Valley',
    availability: 'High Availability',
    statusClass: 'badge-success',
    pickupTime: 'Within 15 mins',
    instructors: ['Sarah Jenkins', 'Linda Cooper'],
    coordinates: 'M30,50 L90,70 L110,130 L40,110 Z',
    labelX: 70,
    labelY: 90
  },
  {
    id: 'zone-north',
    name: 'North District',
    availability: 'Moderate Availability',
    statusClass: 'badge-warning',
    pickupTime: 'Within 20 mins',
    instructors: ['Marcus Brody', 'David Chen'],
    coordinates: 'M60,10 L140,15 L150,70 L90,70 Z',
    labelX: 110,
    labelY: 45
  },
  {
    id: 'zone-east',
    name: 'East Heights',
    availability: 'Moderate Availability',
    statusClass: 'badge-warning',
    pickupTime: 'Within 25 mins',
    instructors: ['David Chen', 'Linda Cooper'],
    coordinates: 'M150,70 L210,60 L220,110 L170,120 Z',
    labelX: 185,
    labelY: 95
  },
  {
    id: 'zone-south',
    name: 'South Shore',
    availability: 'Limited Availability',
    statusClass: 'badge-danger',
    pickupTime: 'Within 30 mins',
    instructors: ['Marcus Brody'],
    coordinates: 'M40,110 L110,130 L170,120 L150,170 L50,160 Z',
    labelX: 110,
    labelY: 145
  }
];

const FAQS = [
  {
    question: "How do I obtain my initial learner's permit?",
    answer: "You must study your state's driving handbook, pass a written rules exam at your local DMV, and pass a vision test. Once you have your learner's permit, you can log in to our Student Portal and begin scheduling behind-the-wheel lessons!"
  },
  {
    question: "Do you offer door-to-door pickup and drop-off?",
    answer: "Yes! Free door-to-door pickup and drop-off is included in all our lesson packages. Your instructor will pick you up from home, school, or work and drop you off at your preferred location within our coverage zones."
  },
  {
    question: "What is your lesson cancellation policy?",
    answer: "We require a 24-hour notice to cancel or reschedule a driving lesson. Cancellations made less than 24 hours in advance may be subject to a rescheduling fee to compensate our instructors' reserved time."
  },
  {
    question: "Can I use a Leela Driving School vehicle for my DMV road test?",
    answer: "Absolutely. Our 'Pass Guarantee Package' includes renting a school vehicle for your official DMV practical test, plus a 1-hour warm-up lesson immediately before the exam."
  },
  {
    question: "What safety features do your training vehicles have?",
    answer: "All vehicles in our fleet are equipped with dual brake controls (allowing instructors to take over at any moment), high-visibility signage, dash cams, and premium safety ratings."
  }
];

export default function ContactCoverage({ onAddToast }) {
  const [selectedZone, setSelectedZone] = useState(COVERAGE_ZONES[0]);
  const [hoveredZoneId, setHoveredZoneId] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    transmission: 'automatic',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    // Simulate submit
    setSubmitted(true);
    if (onAddToast) {
      onAddToast('Message sent! Our enrollment coordinator will call you shortly.', 'success');
    }
    
    // Reset Form
    setFormData({ name: '', email: '', phone: '', transmission: 'automatic', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  // FAQ Accordion Toggle state
  const [expandedFaqIdx, setExpandedFaqIdx] = useState(0);

  return (
    <section className="section contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2>Contact Us & Coverage Area</h2>
          <p>Have questions or want to check availability in your area? Use the interactive map to explore our pickup zones, or send us a message below.</p>
        </div>

        {/* Top Half: Contact Form & Interactive Map */}
        <div className="grid-2 contact-map-wrapper">
          {/* Map Column */}
          <div className="card map-card">
            <h3>Interactive Coverage Zones</h3>
            <p className="card-subtitle">Hover or click on the map sectors to view local instructor availability and door-to-door pickup times.</p>
            
            <div className="map-interaction-container">
              {/* SVG Map Graphic */}
              <div className="svg-map-wrapper">
                <svg className="coverage-svg-map" viewBox="0 0 250 180" width="100%" height="100%">
                  {/* Map grid lines background */}
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" rx="6" />

                  {/* Zone paths */}
                  {COVERAGE_ZONES.map((zone) => {
                    const isSelected = selectedZone.id === zone.id;
                    const isHovered = hoveredZoneId === zone.id;
                    
                    return (
                      <g key={zone.id}>
                        <path
                          className={`map-zone-path ${isSelected ? 'zone-selected' : ''} ${isHovered ? 'zone-hovered' : ''}`}
                          d={zone.coordinates}
                          onClick={() => setSelectedZone(zone)}
                          onMouseEnter={() => setHoveredZoneId(zone.id)}
                          onMouseLeave={() => setHoveredZoneId(null)}
                        />
                        <text
                          x={zone.labelX}
                          y={zone.labelY}
                          className="map-zone-label"
                          pointerEvents="none"
                        >
                          {zone.name.split(' ')[0]}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Live Info Box for Selected Zone */}
              <div className="zone-info-card">
                <div className="zone-info-header">
                  <h4>{selectedZone.name}</h4>
                  <span className={`badge ${selectedZone.statusClass}`}>{selectedZone.availability}</span>
                </div>
                <div className="zone-info-details">
                  <div className="info-detail-row">
                    <span className="info-lbl">Average Pickup Time:</span>
                    <strong className="info-val">{selectedZone.pickupTime}</strong>
                  </div>
                  <div className="info-detail-row" style={{flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-start'}}>
                    <span className="info-lbl">Instructors Active Here:</span>
                    <div className="active-inst-pills">
                      {selectedZone.instructors.map((inst, idx) => (
                        <span key={idx} className="inst-pill">{inst}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="card contact-form-card">
            <h3>Get in Touch</h3>
            <p className="card-subtitle">Request a callback or enquire about booking space. Our representative will reply within 2 hours.</p>
            
            {submitted && (
              <div className="toast toast-success" style={{position: 'static', maxWidth: 'none', marginBottom: '1.5rem'}}>
                <span>Enquiry sent! We will contact you shortly.</span>
              </div>
            )}

            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="form-control" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    className="form-control" 
                    placeholder="email@example.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="form-control" 
                    placeholder="(555) 000-0000" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Gearbox Choice</label>
                <select 
                  name="transmission"
                  className="form-control"
                  value={formData.transmission}
                  onChange={handleInputChange}
                >
                  <option value="automatic">Automatic Transmission</option>
                  <option value="manual">Manual Gearbox</option>
                  <option value="undecided">Help me choose</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message / Questions</label>
                <textarea 
                  name="message"
                  className="form-control" 
                  rows="3" 
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Send Message</button>
            </form>
          </div>
        </div>

        {/* Bottom Half: FAQs Accordion */}
        <div className="faq-section-wrapper card">
          <h3 className="faq-main-title">Frequently Asked Questions</h3>
          <p className="card-subtitle" style={{textAlign: 'center', marginBottom: '2rem'}}>Got questions? We have got answers. Find quick replies below.</p>
          
          <div className="faq-accordion">
            {FAQS.map((faq, idx) => {
              const isExpanded = expandedFaqIdx === idx;
              return (
                <div key={idx} className={`faq-item ${isExpanded ? 'faq-item-expanded' : ''}`}>
                  <button 
                    className="faq-question-trigger"
                    onClick={() => setExpandedFaqIdx(isExpanded ? null : idx)}
                    aria-expanded={isExpanded}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon-indicator">{isExpanded ? '−' : '+'}</span>
                  </button>
                  {isExpanded && (
                    <div className="faq-answer-body">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-main);
        }
        .contact-map-wrapper {
          align-items: stretch;
          margin-bottom: 4rem;
        }
        .map-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          text-align: left;
        }
        .map-interaction-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: auto;
        }
        .svg-map-wrapper {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          background-color: #f8fafc;
          aspect-ratio: 250 / 180;
        }
        .coverage-svg-map {
          display: block;
        }
        
        /* Map Path Styles */
        .map-zone-path {
          fill: #e2e8f0;
          stroke: #ffffff;
          stroke-width: 1.5px;
          cursor: pointer;
          transition: fill var(--transition-fast), stroke var(--transition-fast);
        }
        .map-zone-path:hover {
          fill: rgba(13, 148, 136, 0.2);
        }
        .zone-hovered {
          fill: rgba(13, 148, 136, 0.3) !important;
        }
        .zone-selected {
          fill: var(--teal-soft) !important;
          stroke: var(--teal) !important;
          stroke-width: 2px !important;
        }
        .map-zone-label {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 8px;
          fill: var(--primary-light);
          text-anchor: middle;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        
        .zone-info-card {
          background-color: var(--bg-alt);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          border: 1px solid var(--border-color);
        }
        .zone-info-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .zone-info-header h4 {
          margin: 0;
          font-size: 1.05rem;
        }
        .zone-info-details {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          font-size: 0.85rem;
        }
        .info-detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .info-lbl {
          color: var(--text-light);
          font-weight: 500;
        }
        .info-val {
          color: var(--primary-dark);
          font-weight: 700;
        }
        .active-inst-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.2rem;
        }
        .inst-pill {
          background-color: var(--bg-card);
          color: var(--text-dark);
          font-weight: 600;
          font-size: 0.75rem;
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
        }

        .contact-form-card {
          text-align: left;
        }

        /* FAQ Accordion */
        .faq-section-wrapper {
          text-align: left;
          padding: 3rem;
        }
        .faq-main-title {
          font-size: 1.6rem;
          text-align: center;
          margin-bottom: 0.25rem;
        }
        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          max-width: 850px;
          margin: 0 auto;
        }
        .faq-item {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          background-color: var(--bg-card);
          transition: all var(--transition-fast);
        }
        .faq-item-expanded {
          border-color: rgba(13, 148, 136, 0.4);
          box-shadow: var(--shadow-sm);
        }
        .faq-question-trigger {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1rem;
          color: var(--primary-dark);
          text-align: left;
          background-color: var(--bg-card);
          transition: background-color var(--transition-fast);
        }
        .faq-question-trigger:hover {
          background-color: var(--bg-alt);
        }
        .faq-icon-indicator {
          font-size: 1.3rem;
          color: var(--teal);
          font-weight: bold;
          line-height: 1;
        }
        .faq-answer-body {
          padding: 0 1.5rem 1.25rem 1.5rem;
          background-color: var(--bg-card);
          border-top: 1px solid var(--bg-alt);
          animation: slideDownFaq 0.25s ease-out;
        }
        .faq-answer-body p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--text-light);
          line-height: 1.6;
        }
        
        @keyframes slideDownFaq {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .faq-section-wrapper {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
