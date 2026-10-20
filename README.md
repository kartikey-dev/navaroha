# Navaroha Website

A premium, responsive website for **Navaroha** — Technology · Digital Products · Innovation.

**Tagline**: Build. Manage. Grow.

This README is a starter guide. Verify the scripts and dependencies in `package.json` after repository initialization; do not assume every command exists before setup is complete.

## Goals
- Present Navaroha as a technology and digital-products partner.
- Showcase services and verified case studies.
- Generate qualified project enquiries.
- Deliver accessible, performant, SEO-ready pages with answer-engine discoverability in mind.
- Use TDD, feature-based commits, and automated CI/CD.
- Keep design tokens configurable until the official logo and palette arrive.

## Stack
- Next.js App Router
- TypeScript strict mode
- Tailwind CSS
- next/font & next/image
- Vitest + React Testing Library (for unit & component tests)
- Playwright (for E2E tests)
- axe-based accessibility checks
- ESLint + Prettier
- GitHub Actions
- Vercel or another confirmed Next.js-compatible host

## Getting Started

### Prerequisites
- Node.js LTS (v20+ recommended)
- npm (or compatible package manager)
- Git

### Installation & Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build
```bash
# Build production bundle
npm run build

# Start production server
npm start
```

## Environment Variables
Copy `.env.example` to `.env.local` if present and provide local values. Never commit `.env.local`. Actual variables depend on the selected contact-form provider, analytics/error monitoring, and deployment target. Keep secrets server-side and use placeholders only in `.env.example`.

## Quality Commands
```bash
npm run dev         # Start development server
npm run build       # Build optimized production bundle
npm run start       # Start production server
npm run lint        # Run ESLint validation
```

## TDD Workflow
For each feature, follow Red → Green → Refactor:
1. Define acceptance criteria and edge cases.
2. Write a failing test for the missing behavior.
3. Implement the smallest change to pass.
4. Refactor and keep tests green.
5. Run relevant tests, lint, typecheck, and build.
6. Add E2E coverage for critical journeys.
7. Verify accessibility, responsive behavior, SEO, and failure states.
8. Commit the feature independently.

## Architecture
```
src/
  app/          # Routes, layouts, metadata, sitemap/robots
    about/
    contact/
    services/
      [slug]/
    work/
      [slug]/
    privacy-policy/
    terms/
  components/
    layout/     # Header, navigation, footer
    ui/         # Buttons, cards, fields, accordions
    sections/   # Hero, services, work, process, CTA
    motion/     # Accessible motion primitives
  content/      # Services, FAQs, case studies, values
  lib/          # Site config, validation, utilities
public/         # Brand assets, static images, icons
```

Prefer Server Components by default; use Client Components only when interaction requires them.

## Pages
- `/` — Homepage: Hero, Services, Why Navaroha, Process, Technologies, FAQ Accordion, Final CTA
- `/services` — Services overview
- `/services/[slug]` — Detailed service deep-dives (`website-development`, `web-applications`, `mobile-desktop-apps`, `ai-automation`)
- `/work` — Architectural case studies and real-world system implementations
- `/work/[slug]` — Detailed case study breakdowns
- `/about` — Studio story, core values, principles, and team ethos
- `/contact` — Interactive project enquiry form with service pre-selection and budget ranges
- `/privacy-policy` & `/terms` — Legal terms and policies

*Truthful Content Policy*: Never invent client logos, testimonials, metrics, certifications, or results.

## SEO and GEO
Use unique metadata, correct canonical URLs, sitemap, robots rules, Open Graph metadata, semantic HTML, descriptive internal links, accurate JSON-LD, and original service/case-study content. Keep the site fast and minimize unnecessary client-side JavaScript.

## Accessibility and Performance
Target WCAG 2.2 AA as an engineering goal. Support keyboard navigation, visible focus, accessible form feedback, contrast, useful alt text, and reduced motion.

## Git Workflow
Branch naming examples:
- `feat/hero-section`
- `feat/contact-form`
- `fix/mobile-navigation`
- `test/seo-metadata`
- `chore/ci-pipeline`
- `docs/implementation-guide`

Conventional Commit examples:
- `feat(home): add brand-led hero section`
- `feat(services): add service overview`
- `test(contact): cover invalid enquiry submissions`
- `fix(nav): improve mobile menu keyboard behavior`
- `seo(metadata): add canonical and social metadata`
- `ci(github): require test and build checks`
- `docs(readme): document setup and deployment`

Keep each commit focused on one logical feature or fix.

## Brand System
- **Brand**: Navaroha
- **Positioning**: Technology · Digital Products · Innovation
- **Tagline**: Build. Manage. Grow.
- **Heading font**: Space Grotesk (500–700)
- **Body font**: Inter (400–600)
- **Palette tokens**: Midnight `#0B0F1A`, Astra Blue `#3B82F6`, Violet `#8B5CF6`, Cyan `#06B6D4`, Cloud `#F8FAFC`, Slate `#94A3B8`
- **Gradient**: Cyan → Blue → Indigo → Violet
