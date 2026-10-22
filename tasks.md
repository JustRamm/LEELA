# Implementation Tasks & Roadmap: LEELA Driving School

## Phase 1: Foundation & React Stack Migration
- [x] Converted tech stack to **React 18 + Vite**
- [x] Created clean, modular folder architecture:
  - `src/components/`: Modular screen components (`Hero`, `HowItWorks`, `WhyLeela`, `Courses`, `TestRoutes`, `Contact`, `Footer`, `AuthModal`, `BookingModal`)
  - `src/styles/`: Dedicated CSS files per component (`global.css`, `Hero.css`, `Navbar.css`, `HowItWorks.css`, `WhyLeela.css`, `Courses.css`, `TestRoutes.css`, `Contact.css`, `Footer.css`, `AuthModal.css`, `BookingModal.css`)
- [x] Verified and linked all custom SVG illustrations (`public/brand/`, `public/illustrations/scroll/`, `public/illustrations/home/`, `public/illustrations/auth/`)

## Phase 2: Exact Reference Alignment for Hero
- [x] Outer canvas: Fluid organic lavender waves (`#9C80F2`)
- [x] Floating unified yellow card with rounded corners (`border-radius: 28px`)
- [x] Header Navbar embedded directly in the yellow sky (LEELA wordmark, links, Sign up pill, Sign in burnt-orange CTA)
- [x] Flanking golden pine tree silhouettes in the upper sky matching reference mockup
- [x] Centered royal blue headline (`#2435C2`) "Driving with LEELA is easy" with warm amber subtitle
- [x] Integrated front windshield cockpit & purple car chassis flush against the card bottom corners
- [x] Interactive 4-stage driving journey cross-fade engine:
  - [x] Stage 1: Morning forest highway start
  - [x] Stage 2: Suburban roundabout (-25° active steering turn)
  - [x] Stage 3: Terraced paddy fields curve (smiling cruise)
  - [x] Stage 4: Test centre arrival (thumbs-up celebration 👍 & HUD test pass certificate)
  - [x] Interactive stage stepper pills at the base of the dashboard

## Phase 3: Curriculum, Safety & Test Route Explorer
- [x] Step-by-Step Curriculum cards (`HowItWorks.jsx`) with 4 progression milestones
- [x] "Why Students Love LEELA" (`WhyLeela.jsx`) featuring certified instructors & dual-control safety fleet
- [x] Interactive Test Route Explorer (`TestRoutes.jsx`) with interactive map checkpoints & local test tips

## Phase 4: Pricing Packages, Modals & Toast State
- [x] Pricing comparison cards (`Courses.jsx`) for Starter, Complete Pass, and Intensive
- [x] 100% First-Time Pass Guarantee banner with custom guarantee card illustration
- [x] Auth Modal (`AuthModal.jsx`) with full-screen sunrise terraced paddy fields background, glassmorphism, and sign-in/sign-up switching
- [x] Booking Modal (`BookingModal.jsx`) for seamless lesson reservation with transmission selection and date picker
- [x] Interactive toast notifications with auto-dismiss
- [x] Scroll-driven stage synchronizer (`IntersectionObserver` auto-advances the driving journey as you scroll down the page)

## Phase 5: Verification & Production Build
- [x] Production build passes cleanly (`vite build` completed in ~2s, 0 errors)
- [x] Dev server active at `http://localhost:5173/`
