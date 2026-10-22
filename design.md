# Design Specification: LEELA Driving School - "Drive with Confidence"

## 1. Overview & Concept

The design represents a fresh, friendly, and vibrant landing page for **"LEELA Driving School"**, a modern driving academy platform. The page uses a striking and cheerful high-contrast visual identity combining **sunny warm yellow** and **dreamy pastel violet/lavender** tones.

### Key Visual Highlights
- **Style Archetype**: Modern Corporate Vector / Friendly Editorial Vector Illustration.
- **Tone**: Optimistic, accessible, reassuring, approachable, and tech-forward.
- **Composition**: A primary golden-yellow central canvas framed by organic wavy lavender background waves, fronted by an immersive, first-person windshield perspective illustration of a smiling learner driver navigating comfortably.

---

## 2. Color Palette & Design Tokens

| Token Name | Hex Code | Visual Swatch / Role | Usage Description |
| :--- | :--- | :--- | :--- |
| `--color-yellow-main` | `#FFDE17` / `#FFD000` | Sunny Canary Yellow | Main hero canvas background, driver's top, primary highlights |
| `--color-yellow-warm` | `#F5B800` | Golden Amber | Pine tree silhouettes, mid-ground landscape layers |
| `--color-purple-primary` | `#8B6CE6` / `#987BED` | Soft Lilac / Violet | Car windshield frame, outer chassis, primary brand accents |
| `--color-purple-deep` | `#353075` / `#31276C` | Midnight Indigo / Deep Violet | Dashboard surface, H1 headline ("Driving with LEELA is easy") |
| `--color-purple-bg` | `#A68BF0` to `#8056DB` | Lavender / Periwinkle Gradient | Outer fluid wave backdrop, atmospheric shading |
| `--color-seat-purple` | `#6A52C5` | Slate Lavender | Car headrests and passenger seats |
| `--color-cta-signin` | `#B85D19` / `#A5480D` | Warm Terracotta / Rust | "Sign in" primary pill button |
| `--color-text-dark` | `#2D2353` | Deep Indigo-Purple | Main heading (`Drive with LEELA is easy`), logo text |
| `--color-text-body` | `#785600` / `#6E4F08` | Warm Bronze / Golden Brown | Hero subtitle description text |
| `--color-glass-hud` | `rgba(255, 255, 255, 0.55)` | Translucent Glass / Frosted HUD | In-car navigation tablet display |
| `--color-white` | `#FFFFFF` | Crisp White | Route lines, highlights, button typography |

---

## 3. Typography System

The design utilizes a rounded, highly readable modern sans-serif (such as **Plus Jakarta Sans**, **Outfit**, or **Nunito**).

| Element | Font Family | Size / Line-Height | Weight | Letter Spacing | Color |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Brand Logo** (`LEELA`) | Geometric Rounded Sans | `22px` / `1.2` | `900` (Black) | `0.02em` | `#2D2353` / `#704AC8` |
| **Nav Links** | Geometric Rounded Sans | `14px` / `1.4` | `600` (SemiBold) | `0em` | `#6E4F08` / `#2D2353` |
| **Hero Title (`H1`)** | Geometric Rounded Sans | `46px` – `52px` / `1.2` | `800` (ExtraBold) | `-0.02em` | `#31276C` |
| **Hero Subtitle** | Rounded Sans / Inter | `15px` / `1.6` | `400` – `500` | `0em` | `#785600` |
| **Sign Up Button** | Geometric Rounded Sans | `13px` / `1.0` | `600` (SemiBold) | `0em` | `#785600` (Outlined) |
| **Sign In Button** | Geometric Rounded Sans | `13px` / `1.0` | `600` (SemiBold) | `0em` | `#FFFFFF` (Filled) |

---

## 4. Layout Architecture

### Overall Viewport Grid
1. **Outer Viewport Backdrop**:
   - Soft, multi-layered organic wavy shapes in lavender and purple gradients (`#9D7CEE` to `#7E57C2`).
2. **Main Application Stage (The "Yellow Horizon Card")**:
   - High-contrast, rounded rectangular card floating centered in the viewport.
   - Background: Rich sunny yellow (`#FFDE17` graduating subtly to `#FFC800`).
3. **Z-Index Layering (Back to Front)**:
   - `Layer 0`: Deep outer lavender wave backdrop.
   - `Layer 1`: Yellow hero canvas with pine tree forest silhouettes.
   - `Layer 2`: Center-aligned H1 typography ("Drive with LEELA is easy") & descriptive paragraph.
   - `Layer 3`: Driver character (smiling woman with seatbelt, holding steering wheel, car seats).
   - `Layer 4`: Dashboard with glowing translucent GPS navigation tablet.
   - `Layer 5`: Purple car chassis, pillars (A-pillars, B-pillars) & windshield glass frame.
   - `Layer 6`: Floating navigation header (`LEELA` logo, links, action buttons).

---

## 5. Component Breakdown

### 5.1 Top Navigation Bar
- **Logo**: Pure text wordmark `LEELA` (bold geometric sans-serif in deep indigo `#2D2353`, matching the minimalist header in the design mockup).
- **Center Nav Links**: `How it works`, `About Us`, `Contact` spaced cleanly with warm brown contrast.
- **Action Buttons**:
  - `Sign up`: Pill outline button (`border: 1.5px solid #A87000`, text: `#785600`).
  - `Sign in`: Pill solid button (`background: #B85D19`, text: `#FFFFFF`, hover lift).

### 5.2 Hero Content (Top-Center)
- **Title**: `Easy Drive is easy` — friendly, bold, centered in indigo `#31276C`.
- **Description**: 2-line centered paragraph explaining the stress-free experience of learning to drive.
- **Horizontal placement**: Centered directly above the windshield view to naturally direct the eye downward into the scene.

### 5.3 Hero Illustration Composition ("Behind the Windshield")
- **Perspective**: Front-facing perspective looking into the car through the front windshield.
- **The Driver**:
  - Young female learner driver with a confident, happy expression.
  - Brown wavy hair, yellow top, hands positioned at 10-and-2 / 9-and-3 on the steering wheel.
  - Seatbelt securely fastened across the torso (reinforcing road safety).
- **In-Cabin Tech (GPS HUD Tablet)**:
  - Semi-transparent frosted-glass tablet mounted on the passenger dashboard.
  - Shows simulated route guidance: start point, curved navigation line `o----x`, step indicator dots.
- **Landscape Backdrop**:
  - Golden pine tree silhouettes creating depth behind the driver, symbolizing an open, scenic countryside road trip.
- **Car Interior & Frame**:
  - Sleek modern lilac/periwinkle windshield frame enclosing the scene.
  - Indigo dashboard shelf with soft purple car seats.

---

## 6. Required Vector Assets for Driving School Platform

To build out the complete website, the following SVG assets are required:

### Brand Assets (`/public/brand/`)
1. **`logo.svg`**: Complete brandmark with car-curve motif and "EasyDrive" logotype.
2. **`logo-mark.svg`**: Standalone icon/app-icon (steering wheel + road symbol in violet and gold).
3. **`favicon.svg`**: Crisp simplified favicon for browser tabs.

### Illustration Assets by Directory

#### A. Scroll-Driven Driving Journey (`public/illustrations/scroll/`)
- **Stage 1 (Departure / Home)**:
  - `cockpit-stage1-start.svg`: Attentive focused learner driver, neutral 10-and-2 hand placement, wheel straight.
- **Stage 2 (Maneuvers / How It Works)**:
  - `cockpit-stage2-turning.svg`: Active steering wheel rotation (`-25°`), head tilted into the curve checking mirrors.
- **Stage 3 (Certified Coaches / Our Instructors)**:
  - `cockpit-stage3-instructors.svg`: Learner focused 10-and-2 grip, instructor guiding calmly with DVSA progress checklist.
- **Stage 4 (Open Highway / Why LEELA)**:
  - `cockpit-stage4-cruising.svg`: Relaxed highway cruising posture, beaming smile, instructor thumbs-up.
- **Stage 5 (Maneuver Training / Gallery)**:
  - `cockpit-stage5-gallery.svg`: Reverse bay parking maneuver, learner checking rearview mirror with 12 o'clock palm steering grip.
- **Stage 6 (Arrival & Test Pass / Contact Us)**:
  - `cockpit-stage6-celebrate.svg`: Triumphant celebration pose, right hand giving proud thumbs-up `👍`, celebratory sparkle stars, test passed!
- **`hero-driver.svg`**: Standalone fallback illustration.

#### B. Content Section Cards (`public/illustrations/home/`)
1. **`feature-instructors.svg`**: Certified instructor with digital milestone tablet & 5-star rating.
2. **`feature-schedule.svg`**: 24/7 flexible lesson booking (3D calendar, smart key fob, flexible clock).
3. **`feature-pass-guarantee.svg`**: 1st-time pass guarantee (official driving license card & gold ribbon).
4. **`feature-safety.svg`**: Dual-control safety system (dual brake pedals & 3D safety shield).
5. **`map-route.svg`**: Interactive driving test route GPS map with clickable maneuver checkpoints.

#### C. Authentication Screens (`public/illustrations/auth/`)
1. **`auth-bg-paddy-fields.svg`**: Full-screen layered sunrise paddy fields background for the Sign In / Sign Up modals.

---

## 7. Interactive & Animation Recommendations (The "Driving Forward" Experience)

1. **4-Stage Dynamic Cockpit & Scenery Progression**:
   - As the visitor scrolls down the page, both the **outside scenery** AND the **driver's pose & steering** evolve simultaneously:
     - **Hero Section**: Stage 1 (Attentive start into the morning forest).
     - **How It Works**: Stage 2 (Actively steering through suburban roundabouts and turns).
     - **Courses & Pricing**: Stage 3 (Cruising smoothly through open paddy field landscapes with confident relaxation).
     - **Test Routes & Booking**: Stage 4 (Safely arriving at the test centre with a victorious thumbs-up and passed test notification).
2. **Road Motion Simulation**:
   - Continuous subtle CSS keyframe translation on road centerline dashes creating the sensation of steady forward travel (`speed: ~35mph`).
3. **Interactive GPS HUD Waypoint Progression**:
   - The translucent tablet screen mounted on the dashboard updates its step progress (`Stage 1/4 → 2/4 → 3/4 → Test Passed ✓`) with each scroll section.
4. **Parallax Horizon & Micro-Interactions**:
   - Distant trees and hills move at `0.15x` scroll speed, road at `1x`, creating true 3D spatial depth.
   - Hovering over buttons produces a gentle lift and glowing shadow.
   - Smooth transitions on navigation links with yellow/violet underline indicators.

---

## 8. Screen List & Information Architecture

1. **Hero Landing Page** (`/`): The core windshield stage, quick transmission lookup, and proof badges.
2. **How It Works & Curriculum** (`#how-it-works`): Step-by-step winding road learning milestones.
3. **Courses & Pricing** (`#courses`): Package tier cards and interactive hour calculator.
4. **Instructors & Fleet** (`#instructors`): Certified instructor bios and dual-control safety breakdown.
5. **Interactive Test Routes** (`#routes`): Clickable test route map with maneuver tips.
6. **Inquiry & Booking** (`#contact`): Frictionless contact form and WhatsApp direct booking.

---

## 9. Sign In & Sign Up Screens (Auth Design Specification)

### 9.1 Concept & Spatial Layout
The authentication screens follow a serene, high-end floating card layout set against a scenic, layered countryside landscape:
- **Background**: Full-viewport immersive illustration (`public/illustrations/auth-bg-paddy-fields.svg`).
- **Foreground Container**: A centered, elegant floating card:
  - Width: `400px` – `440px` (or `90vw` on mobile devices).
  - Background: Crisp frosted white (`rgba(255, 255, 255, 0.94)` with `backdrop-filter: blur(20px)`).
  - Border Radius: `24px`.
  - Border: `1px solid rgba(255, 255, 255, 0.6)`.
  - Box Shadow: `0 30px 70px rgba(32, 26, 66, 0.22)`.
  - Internal Padding: `36px 36px 32px 36px`.

### 9.2 Background Art: Serene Terraced Paddy Fields (`auth-bg-paddy-fields.svg`)
Instead of generic mountains, the scene showcases lush, terraced agricultural rice paddy fields in the website's brand colors:
- **Sky**: Sunrise gradient transitioning from morning lavender (`#8F72E8`) through soft lilac to a warm golden horizon (`#FFD738`).
- **Terraces**: Layered stepped paddy bunds with natural curved ridges transitioning from violet-haze in the distance to deep midnight indigo (`#1B133B`) in the foreground.
- **Water Mirrors**: Flooded paddy basins reflecting the lavender and gold morning light.
- **Learner Road**: A gentle countryside driving road with a golden dashed centerline winding between the terraced fields into the horizon.
- **Foliage**: Subtle palm silhouettes and golden ripened rice grain tips framing the bottom corners.

### 9.3 Floating Card Anatomy & Components
```
+-------------------------------------------------------+
|  [← Back to Home]                                [ ≡ ]|
|                                                       |
|                     [ LEELA Mark ]                    |
|                                                       |
|                    Welcome back!                      |
|          Continue your driving journey with LEELA     |
|                                                       |
|  Email or Username                                    |
|  [ alex.morgan@example.com                          ] |
|                                                       |
|  Password                                             |
|  [ ••••••••••••••                               (👁) ] |
|                                                       |
|                                     Forgot Password?  |
|                                                       |
|  [                   SIGN IN                        ] |
|                                                       |
|            Don't have an account? Sign Up             |
+-------------------------------------------------------+
```

1. **Card Navigation Bar**:
   - Left: Minimal back arrow button (`←`) linking back to the main website.
   - Right: Subtle hamburger/menu icon (`≡`) for language or help.
2. **Brand Icon**:
   - The minimal architectural "L" mark (`public/brand/logo-mark.svg`) centered at the top.
3. **Headings**:
   - Sign In: "Welcome back!" (Font: `24px`, ExtraBold `#201A42`).
   - Sign Up: "Create Your Account" / "Join LEELA Driving School".
   - Subtitle: Clean neutral slate gray (`#64748B`, `13px`).
4. **Form Fields**:
   - Clean minimalist inputs with subtle gray borders (`#E2E8F0`) that animate into brand violet (`#8B6CE6`) with an outer glow on focus.
   - Password field includes an eye toggle (`Show / Hide`).
   - Sign Up includes an additional toggle button: Transmission Choice (*Automatic* vs. *Manual*).
5. **Primary Action Button**:
   - Pill-shaped (`border-radius: 9999px`).
   - Background: Deep Midnight Indigo (`#201A42`) with hover lift and soft lilac glow.
   - Typography: Bold white uppercase (`14px`, letter-spacing `0.05em`).
6. **Footer Switch Link**:
   - "Don't have an account? **Sign Up**" / "Already have an account? **Sign In**" with smooth fade transition between modes.
