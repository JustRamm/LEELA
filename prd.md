# Product Requirements Document (PRD): LEELA Driving School

## 1. Executive Summary
**LEELA Driving School** is an online web application designed to connect aspiring learner drivers with patient, certified instructors, interactive lesson booking, test route simulations, and guaranteed pass packages.

---

## 2. Target Audience & Personas
1. **First-Time Learners (Teens & Young Adults, 16–24)**:
   - Needs: Low stress, friendly instructors, clear step-by-step progress, digital booking.
2. **Nervous / Refresher Drivers**:
   - Needs: Safe dual-control vehicles, calm instructors, defensive driving techniques.
3. **Busy Professionals**:
   - Needs: 24/7 flexible scheduling, doorstep pickup, rapid pass courses.

---

## 3. Site Architecture & Core Pages/Sections

### 3.1 Global Header / Navigation
- Brand Logo (`public/brand/logo.svg`).
- Navigation Links: `How it works`, `Courses & Pricing`, `Instructors`, `Test Routes`, `Contact`.
- Action Buttons: `Sign up` (Outline Pill) & `Sign in` (Filled Terracotta Pill).
- Mobile Hamburger drawer menu.

### 3.2 Hero Section ("Windshield Stage")
- Primary Headline: **"Driving with LEELA is easy"** in deep indigo.
- Supporting paragraph explaining stress-free driving lessons.
- The interactive `hero-driver.svg` canvas featuring the learner driver perspective with ambient animation (gentle floating parallax and glowing GPS route).
- Quick CTA: `Book First Lesson` (Pill button with discount badge).

### 3.3 Core Value Pillars (Illustrated Features)
1. **5-Star Certified Instructors** (`feature-instructors.svg`):
   - Patient, background-checked, DVSA/state-certified instructors with digital scorecards.
2. **Flexible 24/7 Scheduling** (`feature-schedule.svg`):
   - Book, reschedule, or swap instructors easily with zero cancellation penalties within 24h.
3. **1st-Time Pass Guarantee** (`feature-pass-guarantee.svg`):
   - Structured curriculum with a 94.8% first-time pass rate or free re-test package.
4. **100% Dual-Control Safety** (`feature-safety.svg`):
   - Modern fleet equipped with dual pedals, forward collision radar, and sanitized cabins.

### 3.4 Interactive Test Route Explorer
- Showcasing `map-route.svg` with clickable waypoints:
  - Parallel parking tips.
  - Roundabout navigation checklist.
  - Emergency stop procedures.

### 3.5 Course Packages & Pricing Matrix
- **Starter Package**: 5 hours intro + digital highway code.
- **Complete Pass Package (Most Popular)**: 20 hours + 1 mock test + instructor car rental on test day.
- **Intensive Fast-Track**: 30 hours over 2 weeks with priority test booking.

### 3.6 Student Reviews & Social Proof
- Customer cards with before-and-after driver license photos and star ratings.

### 3.7 Interactive Lesson Booking Modal
- 3-step lightweight flow:
  1. Transmission Choice: Manual vs. Automatic.
  2. Location & Postal Code lookup.
  3. Date & Time slot picker with instant confirmation.

### 3.8 Authentication Screens (Sign In & Sign Up)
- Full-screen scenic backdrop: `auth-bg-paddy-fields.svg` (sunrise lavender sky, terraced rice paddies, winding road).
- Centered frosted glass card (`rgba(255, 255, 255, 0.94)`, `backdrop-filter: blur(20px)`).
- Architectural "L" logo-mark, back navigation arrow `←`, minimal clean form inputs, and deep indigo CTA button.
- Smooth instant toggle between "Sign In" and "Sign Up" modes.

### 3.9 Footer
- Quick links, accreditation badges, student portal, terms of service, help center.

---

## 4. Non-Functional Requirements
- **Performance**: Lighthouse score >= 90 across Performance, Accessibility, Best Practices, and SEO.
- **Cross-Browser Compatibility**: Chrome, Safari, Firefox, Edge, Mobile WebKit.
- **Accessibility (WCAG 2.1 AA)**: Minimum contrast ratio 4.5:1 for text, keyboard navigability, semantic ARIA landmarks.
