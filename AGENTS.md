<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — Navaroha Studio AI Agents Context & Engineering Charter

## 1. Mission and Brand Identity
Navaroha is a world-class technology and digital-products studio rooted in Indian creativity and serving ambitious founders, enterprises, and institutions worldwide.
- **Brand**: Navaroha
- **Positioning**: Technology · Digital Products · Innovation
- **Tagline**: Build. Manage. Grow.
- **Values**: Innovative, trustworthy, approachable, ambitious, ethical
- **Voice**: Clear, helpful, confident, business-focused, technically authoritative
- **Aesthetic**: Dark luxury obsidian (`#070A12` / `#0B0F1A`), glassmorphic panels, glowing Indian saffron, Astra blue, radiant violet, and iridescent cyan accents, subtle jali geometric patterns.
- **Zero Fabrication Rule**: Never invent customer names, testimonials, results, certifications, or statistics. All case studies (e.g. Primary School Digital Transformation, Armaan Ethnic, KMBCH, Thermal Energy International) reflect verifiable client solutions and real architectural problems.

---

## 2. Virtual Office Architecture & Room Chambers
The entire website is architected as an immersive **Virtual Office Experience** representing physical chambers within the studio:

| Chamber ID | Chamber Name | Room # | Purpose & Linked Features |
|---|---|---|---|
| `reception` | **The Grand Reception** | Room 01 | Hero cinematic entrance, live stats counters, agency mission, vision, and core operating principles. |
| `design-studio` | **The Design Studio** | Room 02 | Creative direction, brand identity, typography, conversion architecture, and high-performance websites (`/services/website-development`, `/services/ui-ux-brand-design`). |
| `dev-lab` | **The Dev Lab** | Room 03 | Deep-tech engineering: iOS/Android mobile apps, SaaS cloud platforms, browser extensions, maintenance SLAs, and agentic AI automation (`/services/android-ios-development`, `/services/web-applications`, `/services/browser-extension-development`, `/services/website-maintenance-support`, `/services/ai-automation`, `/services/technical-advisory`). |
| `meeting-room` | **Executive Boardroom** | Room 04 | Client consultations, mutual NDA onboarding, Calendly/Cal.com scheduler, WhatsApp quick desk, and project scoping (`/contact`). |

---

## 3. Specialized Capabilities & Route Hierarchy
Every single service must have a deeply detailed, dedicated page under `/services/[slug]`:
1. `/services/website-development` — Custom high-performance digital flagships, 90+ PageSpeed, Headless CMS.
2. `/services/ui-ux-brand-design` — Product design systems, Figma component libraries, conversion audits.
3. `/services/android-ios-development` — Native and React Native mobile applications with offline-first sync.
4. `/services/web-applications` — Scalable cloud SaaS systems, multi-tenant databases, microservices.
5. `/services/browser-extension-development` — Custom Chrome/Firefox/Safari extensions with Manifest V3.
6. `/services/website-maintenance-support` — 24/7 SLA uptime monitoring, security patching, Core Web Vitals maintenance.
7. `/services/ai-automation` — Custom LLM agents, RAG document pipelines, workflow automation (LangChain, OpenAI, Claude).
8. `/services/technical-advisory` — Fractional CTO advisory, cloud cost audits, security compliance, architecture scoping.

---

## 4. Case Studies & Measurable Business Impact
Case studies must always be structured around: **The Problem**, **What We Did (Engineering Solution)**, and **Measurable Results**.

### Highlighted Case Study: Primary School Digital Campus & Community Portal
- **Domain**: Education & Institutional Modernization
- **Problem**: Outdated paper-based admissions, missed enrollment deadlines, low teacher candidate reach across regional districts, zero parent engagement analytics.
- **What We Did**: Built a bilingual (English + Regional) modern portal with instant mobile admissions, automated WhatsApp alerts, teacher recruitment ATS, and fee management integration.
- **Measurable Results**:
  - `+42% Year-over-Year student enrollment growth`
  - `+65% increase in verified teacher applications`
  - `99.9% uptime during peak admission rush`
  - `4.8/5 parent satisfaction score`

### Other Featured Deployments:
- **Armaan Ethnic Wear**: Luxury Indian couture e-commerce flagship (+140% mobile conversion, sub-800ms checkout).
- **KMBCH**: Healthcare Patient & Bed Booking Platform (real-time bed availability & doctor scheduling).
- **Thermal Energy International**: Industrial clean tech efficiency portal.

---

## 5. Multi-Currency & Localization Context
- State is managed via `src/context/LocalizationContext.tsx` using `useSyncExternalStore` for SSR/hydration-safe persistence.
- Supported Currencies: `INR (₹)`, `USD ($)`, `EUR (€)`, `GBP (£)`, `AED (د.إ)`.
- Base rates are centrally defined in `src/content/data.ts`.
- Supported Languages: English (Global), Hindi (हिन्दी), Arabic (العربية), German (Deutsch), French (Français).

---

## 6. Design System & Token Standards
- **Theme Standard**: Cohesive dark luxury (`#070A12` base, `#0B0F1A` elevated obsidian). Never use white background sections or zebra checkerboards.
- **Glassmorphism**: `.glass-panel-dark` (`rgba(15, 23, 42, 0.75)` with `backdrop-filter: blur(16px)` and `border: 1px solid rgba(255, 255, 255, 0.1)`).
- **Fonts**:
  - Display/Headings: `Space Grotesk` (500–700)
  - UI/Body: `Inter` (400–600)
- **Palette Tokens**:
  - Obsidian Base: `#070A12`
  - Midnight Surface: `#0B0F1A`
  - Astra Blue: `#3B82F6`
  - Radiant Violet: `#8B5CF6`
  - Iridescent Cyan: `#06B6D4`
  - Royal Amber/Saffron: `#F59E0B`
  - Cloud Text: `#F8FAFC`
  - Slate Secondary: `#94A3B8` / `#CBD5E1`

---

## 7. Engineering Principles & TDD Workflow
1. **TDD**: Red → Green → Refactor.
2. **Strict TypeScript**: Avoid `any`. Document any unavoidable escape hatch.
3. **App Router**: Prefer React Server Components. Use Client Components (`"use client"`) only where client state, browser events, or hooks are necessary.
4. **Performance & Accessibility**:
   - WCAG 2.1 AA compliance (visible focus, keyboard navigation, high contrast).
   - `prefers-reduced-motion` must be respected on all animations.
   - Core Web Vitals target: LCP < 1.2s, CLS < 0.05, FID/INP < 100ms.
5. **Security & Privacy**:
   - Strict Mutual NDA protection message on all contact forms.
   - Never commit secrets, `.env` files, or private keys.

---

## 8. Scripts & Verification
```bash
npm run dev        # Launch development server
npm run build      # Next.js production build (validates all static routes)
npm run lint       # Run ESLint validation
npx tsc --noEmit   # TypeScript strict type checking
```
