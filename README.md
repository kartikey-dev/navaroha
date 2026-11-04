# Navaroha — Technology · Digital Products · Innovation

[![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS%20v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](#)

> **Tagline**: Build. Manage. Grow.  
> **Brand**: Navaroha  
> **Headquarters**: Virtual Office (India · Worldwide)

Navaroha is a world-class technology and digital-products studio rooted in Indian creativity and serving ambitious founders, enterprises, and institutions worldwide. The website is architected as an immersive **Virtual Office Experience** where visitors physically tour distinct rooms mapping to the agency's capabilities.

---

## 🏛️ The Virtual Office Experience

The website organizes services, case studies, and team operations into 4 interactive physical rooms:

1. **Room 01: The Grand Reception** (`reception`)
   - Fullscreen cinematic virtual office entrance and brand hook.
   - Live scroll-triggered counters (50+ Projects Delivered, 8+ Countries Served, 98% Client Retention, 7+ Years Experience).
   - Agency Mission, Vision, and Core Goals.

2. **Room 02: The Design Studio** (`design-studio`)
   - Creative direction, brand identity systems, and high-conversion UX.
   - Dedicated pages: [Website Development](/services/website-development), [UI/UX & Brand Design](/services/ui-ux-brand-design).

3. **Room 03: The Dev Lab** (`dev-lab`)
   - Deep-tech software engineering, cloud platforms, and agentic AI.
   - Dedicated pages: [Android & iOS Apps](/services/android-ios-development), [Web Applications & SaaS](/services/web-applications), [Browser Extensions](/services/browser-extension-development), [Maintenance & SLA Support](/services/website-maintenance-support), [AI & Automation](/services/ai-automation), [Technical Advisory](/services/technical-advisory).

4. **Room 04: The Executive Boardroom** (`meeting-room`)
   - Direct consultation booking under Mutual NDA.
   - Interactive Cal.com/Calendly scheduler, 24/7 WhatsApp desk, and 4-field inquiry form.

---

## 🚀 Specialized Capabilities (All 8 Dedicated Pages)

| Service | Slug | Chamber | Description |
|---|---|---|---|
| **Website Development** | `/services/website-development` | Design Studio | 90+ PageSpeed flagships, headless CMS, and technical SEO. |
| **UI/UX & Brand Design** | `/services/ui-ux-brand-design` | Design Studio | Full design systems, Figma libraries, user journey mapping. |
| **Android & iOS Apps** | `/services/android-ios-development` | Dev Lab | React Native & native iOS/Android with offline-first sync. |
| **Web Applications & SaaS** | `/services/web-applications` | Dev Lab | Scalable cloud microservices, multi-tenant databases. |
| **Browser Extensions** | `/services/browser-extension-development` | Dev Lab | Chrome, Safari & Firefox extensions (Manifest V3). |
| **Maintenance & Support** | `/services/website-maintenance-support` | Dev Lab | 24/7 SLA uptime, security audits, Core Web Vitals defense. |
| **AI & Automation** | `/services/ai-automation` | Dev Lab | Custom LLM agents, document RAG, workflow orchestration. |
| **Technical Advisory** | `/services/technical-advisory` | Dev Lab | Fractional CTO advisory, cloud cost audits, security reviews. |

---

## 📊 Featured Client Work & Case Studies

- **Primary School Digital Campus & Community Portal**:
  - *Problem*: Paper admissions, lost leads, regional recruitment gaps, zero parent engagement analytics.
  - *What We Did*: Mobile admission portal with multilingual support, WhatsApp automated alerts, and teacher recruitment ATS.
  - *Measurable Results*: **+42% student enrollment**, **+65% teacher applications**, **99.9% uptime during admission peak**.
- **Armaan Ethnic Wear**: Luxury Indian couture e-commerce flagship (+140% mobile conversion).
- **KMBCH**: Healthcare Patient & Bed Booking Platform (real-time bed availability & doctor scheduling).
- **Thermal Energy International**: Industrial clean tech energy efficiency portal.

---

## 🌐 Multilingual & Multi-Currency Architecture

The site includes full internationalization and multi-currency conversion using React 19 `useSyncExternalStore`:
- **Currencies**: INR (₹), USD ($), EUR (€), GBP (£), AED (د.إ)
- **Languages**: English, Hindi (हिन्दी), Arabic (العربية), German (Deutsch), French (Français)
- **Real-Time Desk**: Persistent WhatsApp widget, live timezone overlap banner, and strategy call modal.

---

## 🛠️ Stack & Engineering Principles

- **Framework**: Next.js 15+ App Router (Server Components first)
- **Language**: TypeScript Strict Mode (zero `any`)
- **Styling**: Tailwind CSS v4 + Semantic Design Tokens (`globals.css`)
- **Typography**: Space Grotesk (Display) & Inter (UI Body)
- **Analytics**: Google Tag Manager (`G-HPLSPPKJ0R`) + `@vercel/analytics`
- **Quality**: TDD workflow, WCAG 2.1 AA accessibility, prefers-reduced-motion support

---

## 💻 Local Development & Build

### Prerequisites
- Node.js LTS (v20+)
- npm

### Commands
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run strict TypeScript validation
npx tsc --noEmit

# Run ESLint across all files
npm run lint

# Build production bundle
npm run build

# Start production server locally
npm start
```

---

## 📁 Repository Structure

```
├── public/                     # Brand logos, icons, office & team images
│   ├── brand/                  # Official dark/light logo variants & favicon
│   └── images/                 # Office chambers, team portraits, case study mockups
├── src/
│   ├── app/                    # Next.js App Router routes & layouts
│   │   ├── about/              # About page (virtual office headquarters story)
│   │   ├── contact/            # Executive Boardroom contact & intake form
│   │   ├── services/           # Services directory & [slug] individual pages
│   │   ├── work/               # Case studies portfolio & metrics
│   │   ├── globals.css         # Unified dark luxury design tokens & glassmorphism
│   │   ├── layout.tsx          # Root layout with GTM, Vercel Analytics, Providers
│   │   └── page.tsx            # Full Virtual Office Experience homepage
│   ├── components/
│   │   ├── layout/             # Header, Footer, CurrencyLanguageBar
│   │   ├── motion/             # RevealOnScroll and animation utilities
│   │   ├── sections/           # Virtual office chambers, stats, team, testimonials
│   │   └── ui/                 # BookCallModal, FloatingLeadWidget, Accordion
│   ├── content/
│   │   └── data.ts             # Central single-source-of-truth for all studio data
│   ├── context/
│   │   └── LocalizationContext.tsx # Multi-currency & language state engine
│   └── lib/
│       └── site-config.ts      # Site configuration, contact numbers, nav items
├── AGENTS.md                   # Full AI Agents charter & architectural context
├── CLAUDE.md                   # Developer & AI Assistant cheatsheet
└── README.md                   # Project overview & documentation
```

---

## 📜 License & Intellectual Property
© 2026 Navaroha. All rights reserved. Built with precision and care.
