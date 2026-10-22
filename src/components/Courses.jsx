import React from 'react';
import '../styles/Courses.css';

export default function Courses({ onSelectPackage }) {
  const packages = [
    {
      name: 'Starter Package',
      tagline: 'Ideal for complete beginners looking to test the waters and learn basics.',
      price: '195',
      period: '/ 5 Hours',
      features: [
        '✓ 5 Hours of 1-on-1 In-Car Training',
        '✓ Dual-Control Vehicle Selection',
        '✓ Doorstep Pickup & Dropoff',
        '✓ Digital Highway Code Access',
        '✗ Mock Driving Test'
      ],
      featured: false,
      btnText: 'Book Starter'
    },
    {
      name: 'Complete Pass',
      tagline: 'Our flagship curriculum proven to pass 98% of students first time.',
      price: '699',
      period: '/ 20 Hours',
      features: [
        '✓ 20 Hours Comprehensive In-Car Driving',
        '✓ Complete Official Test Route Training',
        '✓ 2 Full Examiner Mock Driving Tests',
        '✓ Free Re-Test Assurance Guarantee',
        '✓ Instructor Car Rental for Test Day'
      ],
      featured: true,
      btnText: 'Get Pass Guarantee'
    },
    {
      name: 'Fast-Track Intensive',
      tagline: 'Need your license quickly? Pass within 10 to 14 days with intensive daily driving.',
      price: '980',
      period: '/ 30 Hours',
      features: [
        '✓ 30 Hours Intensive Daily Sessions',
        '✓ Priority Fast-Track Test Slot Booking',
        '✓ Dedicated Senior Instructor',
        '✓ Highway & Night Driving Modules',
        '✓ Full Test Day Car Rental Included'
      ],
      featured: false,
      btnText: 'Book Intensive'
    }
  ];

  return (
    <section className="courses-section" id="courses">
      <div className="courses-header">
        <span className="courses-tag">TRANSPARENT PACKAGES</span>
        <h2 className="courses-title">Choose Your Path to Passing</h2>
        <p className="courses-desc">No hidden fees, flexible weekly payment, and free lesson cancellations up to 24 hours.</p>
      </div>

      <div className="courses-grid">
        {packages.map(pkg => (
          <div key={pkg.name} className={`course-card ${pkg.featured ? 'featured' : ''}`}>
            {pkg.featured && (
              <div className="course-featured-badge">MOST POPULAR • 1ST PASS GUARANTEE</div>
            )}
            <div className="course-top">
              <h3 className="course-name">{pkg.name}</h3>
              <p className="course-tagline">{pkg.tagline}</p>
              <div className="course-price-wrap">
                <span className="course-currency">£</span>
                <span className="course-price-num">{pkg.price}</span>
                <span className="course-period">{pkg.period}</span>
              </div>
            </div>
            <ul className="course-features">
              {pkg.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
            <button 
              type="button" 
              className={pkg.featured ? 'btn-course-solid' : 'btn-course-outline'}
              onClick={() => onSelectPackage(pkg.name)}
            >
              {pkg.btnText}
            </button>
          </div>
        ))}
      </div>

      {/* Pass Guarantee Banner */}
      <div className="pass-guarantee-banner">
        <div className="banner-content">
          <span className="badge-gold-pill">PEACE OF MIND</span>
          <h3>100% First-Time Pass Guarantee</h3>
          <p>
            If you do not pass on your first attempt after completing our Complete Pass package, we provide your next mock test and car rental on re-test day completely free of charge.
          </p>
          <button 
            type="button" 
            className="btn-course-solid" 
            style={{ width: 'auto', display: 'inline-block', padding: '12px 30px' }}
            onClick={() => onSelectPackage('Complete Pass Guarantee')}
          >
            Claim Guarantee
          </button>
        </div>
        <div className="banner-img">
          <img 
            src="/illustrations/home/feature-pass-guarantee.svg" 
            alt="First Time Pass Guarantee Driving License Card" 
            width="400" 
            height="320" 
          />
        </div>
      </div>
    </section>
  );
}
