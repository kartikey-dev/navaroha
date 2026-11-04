# CLAUDE.md — Developer & AI Assistant Cheatsheet for Navaroha

## Overview
Navaroha (`navaroha.com`) is a premium Indian digital studio engineered as an immersive **Virtual Office Experience** for worldwide clients.

## Key Technologies
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design Tokens (`globals.css`)
- **Fonts**: Space Grotesk (Headings) & Inter (Body UI)
- **State/Localization**: React 19 `useSyncExternalStore` (`LocalizationContext.tsx`)
- **Analytics**: Google Tag Manager (`G-HPLSPPKJ0R`) + `@vercel/analytics`

---

## Common Commands
```bash
# Development
npm run dev              # Run Next.js local dev server at http://localhost:3000

# Quality & Type Checking
npx tsc --noEmit         # Typecheck whole repository with strict TS
npm run lint             # ESLint check across all components & pages

# Production Build & Run
npm run build            # Compile production build & generate static routes
npm start                # Run production Next.js server locally
```

---

## Architectural & Design Guidelines

### 1. Unified Dark Luxury Theme
- **Base Background**: `#070A12` (Obsidian Base). Never insert white or light-gray background sections.
- **Surface Elevation**: `#0B0F1A` / `.glass-panel-dark` (`rgba(15, 23, 42, 0.75)` with `backdrop-filter: blur(16px)` and `border: 1px solid rgba(255, 255, 255, 0.1)`).
- **Accents**:
  - Astra Blue: `#3B82F6`
  - Radiant Violet: `#8B5CF6`
  - Iridescent Cyan: `#06B6D4`
  - Royal Amber/Saffron: `#F59E0B`
- **Typography & Text**:
  - Headings: `text-white` or `text-slate-100`, font `Space Grotesk`.
  - Body: `text-slate-300`, font `Inter`.

### 2. Virtual Office Room Mappings
Every feature and service maps to one of four virtual office chambers:
- **Room 01: Grand Reception** (`reception`) — Hero, stats, mission, vision.
- **Room 02: Design Studio** (`design-studio`) — UI/UX brand design, website development.
- **Room 03: Dev Lab** (`dev-lab`) — Mobile apps, web apps, browser extensions, maintenance, AI automation, technical advisory.
- **Room 04: Executive Boardroom** (`meeting-room`) — Contact form, Calendly scheduler, WhatsApp quick desk.

### 3. Server Components vs Client Components
- Default to **Server Components** for content, static pages, and layouts.
- Use `"use client"` only when interactive state, browser events, hooks, or modals are required (e.g. `LocalizationContext`, `BookCallModal`, `FloatingLeadWidget`, `Header`, `LiveStatsSection`, `ContactForm`).

### 4. Multi-Currency & Multilingual Context
- Currencies: `INR`, `USD`, `EUR`, `GBP`, `AED`.
- Access via `const { currency, setCurrency, language, setLanguage } = useLocalization();`.
- Formatter helper: `currencyRates[currency].symbol` with dynamic conversion.

---

## Case Study Standards
Case studies in `src/content/data.ts` and UI components must include:
1. `problem`: Specific operational or commercial bottleneck.
2. `whatWeDid`: Bulleted list of architectural and technical implementations.
3. `measurableResults`: Quantifiable outcomes (e.g., student enrollment +42%, teacher recruitment +65%).
4. `liveUrl`: Real deployment link where applicable.
