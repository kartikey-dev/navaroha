# GEMINI.md — Navaroha Engineering & Agent Architecture Guide

## 1. Navaroha Brand Identity & Positioning

- **Brand Name**: Navaroha
- **Tagline**: Build. Manage. Grow.
- **Positioning**: Technology · Digital Products · Innovation
- **Global Identity**: Navaroha is a globally operating creative technology and digital solutions agency. Never describe Navaroha as an "Indian agency" or restrict its positioning to any single geography.
- **Brand Colors**:
  - Midnight: `#0B0F1A` (Primary Dark, High-contrast surface)
  - Astra Blue: `#3B82F6` (Primary Brand & Accent)
  - Violet: `#8B5CF6` (Creative Glow & Innovation)
  - Cyan: `#06B6D4` (Highlight & Micro-accents)
  - Cloud: `#F8FAFC` (Clean light surface)
  - Slate: `#94A3B8` (Secondary & Muted)
- **Typography**:
  - Headings: Space Grotesk (`var(--font-heading)`)
  - Body: Inter (`var(--font-body)`)
- **Official Brand Assets**:
  - Light Logo: `/brand/navaroha-logo-light.png`
  - Dark Logo: `/brand/navaroha-logo-dark.png`
  - Brand Card: `/brand/navaroha-card.png`
  - Icon: `/brand/navaroha-icon.png`

---

## 2. Project Architecture & Standards

- **Framework**: Next.js 16 (Turbopack) with App Router (`src/app`)
- **Runtime & UI**: React 19, TypeScript 5 (Strict mode)
- **Styling**: Tailwind CSS v4 with semantic CSS tokens in `src/app/globals.css`
- **Component Hierarchy**:
  - `src/components/layout/`: Header, Footer, navigation drawers
  - `src/components/sections/`: HeroSection, ServicesSection, WhySection, ProcessSection, etc.
  - `src/components/studio/`: VirtualOffice (Interactive multi-room studio simulation)
  - `src/components/interactive/`: CostEstimator (Multi-currency dynamic pricing calculator)
  - `src/lib/`: `currency.ts`, `estimator.ts`, `validation.ts`, `site-config.ts`

---

## 3. Test-Driven Development (TDD) Workflow

Follow strict Red-Green-Refactor:

1. **Red**: Write a failing unit or component test describing expected behavior.
2. **Green**: Implement the minimal code required to pass.
3. **Refactor**: Enhance design and maintainability without breaking tests.

### Coverage Thresholds (Enforced in `vitest.config.mts`):

- Statements: >= 80% (Current: **95.69%**)
- Lines: >= 80% (Current: **96.62%**)
- Functions: >= 80% (Current: **94.87%**)
- Branches: >= 75% (Current: **92.85%**)
- Critical business logic (`estimator.ts`, `currency.ts`, `validation.ts`): Target >= 90% (Current: **95%+**)

---

## 4. Mandatory Quality Gates & CI/CD Pipeline

The 11-stage pipeline is codified in `.github/workflows/ci.yml`:

1. **Dependency Installation**: `npm ci --legacy-peer-deps` with lockfile verification.
2. **Code Formatting**: Prettier checking (`npm run format:check`).
3. **Static Analysis**: ESLint 9 (`npm run lint`) & strict TypeScript (`npm run typecheck`).
4. **Unit & Component Testing**: Vitest with `@testing-library/react` and v8 coverage (`npm run test:coverage`).
5. **Production Build**: Next.js optimized production build (`npm run build`).
6. **End-to-End Testing**: Playwright multi-browser & mobile testing (`npm run test:e2e`).
7. **Accessibility (a11y)**: Automated Axe-Core checks enforcing WCAG 2.0 / 2.2 AA.
8. **Lighthouse CI**: Enforcing >= 90 Performance, >= 95 Accessibility, Best Practices, and SEO (`npm run lighthouse`).
9. **SonarQube / SonarCloud**: Quality gate integration configured in `sonar-project.properties`.
10. **Security**: Dependency scanning via `npm audit --audit-level=high`.
11. **Deployment**: Automatic staging preview for PRs; promotion to production on `main`.

---

## 5. Accessibility & Motion Rules (WCAG 2.2 AA)

- All interactive controls have clear ARIA attributes (`role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`, `aria-label`).
- Full keyboard operability (Tab navigation, Arrow keys, Home/End focus trapping).
- Visible focus rings with high-contrast outlines.
- Strict `prefers-reduced-motion` compliance in `globals.css` and all interactive animation states.
- Meaningful alternative text on all brand imagery.

---

## 6. Primary Commands

| Command                 | Action                                            |
| ----------------------- | ------------------------------------------------- |
| `npm run dev`           | Launch local Turbopack dev server                 |
| `npm run build`         | Next.js production compilation                    |
| `npm run start`         | Serve production build locally                    |
| `npm run lint`          | Run ESLint 9 analysis                             |
| `npm run typecheck`     | Run TypeScript strict validation (`tsc --noEmit`) |
| `npm run test`          | Run Vitest unit & component test suite            |
| `npm run test:coverage` | Run test suite and enforce coverage thresholds    |
| `npm run test:e2e`      | Run Playwright multi-browser end-to-end tests     |
| `npm run format:check`  | Verify Prettier code style formatting             |
| `npm run format:write`  | Automatically format all codebase files           |
| `npm run lighthouse`    | Run Lighthouse CI audit                           |
