<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — Navaroha Website

## Mission and Brand
Build Navaroha's website as a premium, approachable technology and digital-products brand.
- **Brand**: Navaroha
- **Positioning**: Technology · Digital Products · Innovation
- **Tagline**: Build. Manage. Grow.
- **Values**: innovative, trustworthy, approachable, ambitious
- **Voice**: clear, helpful, confident, business-focused
- **Services**: websites, web apps, mobile/desktop apps, AI, automation, and digital transformation.

Never invent customer names, testimonials, results, certifications, statistics, or claims. Ask for evidence or omit unsupported claims.

## Engineering Principles
1. Use TDD: Red → Green → Refactor.
2. Prefer simple, maintainable code over speculative abstractions.
3. Use strict TypeScript; avoid `any`, documenting any unavoidable escape hatch.
4. Prefer Next.js App Router Server Components. Use Client Components only where interaction/browser APIs/client state require them.
5. Keep client bundles small; avoid unnecessary dependencies.
6. Use semantic HTML and accessible interaction patterns.
7. Build mobile-first; support keyboard navigation, visible focus, and `prefers-reduced-motion`.
8. Treat SEO, accessibility, security, and performance as acceptance criteria.
9. Centralize design tokens so temporary branding can be replaced when the official logo/palette arrives.
10. Never claim a check passed unless it was actually run.

## Workflow for Every Feature
1. Read relevant files and follow existing repository conventions.
2. Define acceptance criteria, edge cases, loading/error/empty states, and responsive behavior.
3. Write a failing test first.
4. Implement the smallest change that passes.
5. Refactor while keeping tests green.
6. Run relevant tests, formatter, lint, typecheck, and build.
7. Add/update E2E tests for critical journeys.
8. Check keyboard behavior, focus, contrast, and reduced motion.
9. Check metadata, structured data, canonical URLs, and internal links when routes/content change.
10. Review diffs for secrets, unrelated changes, accessibility regressions, and unsupported claims.
11. Commit one logical feature/fix with a descriptive Conventional Commit message.

Do not add superficial tests only after implementation. Do not weaken/delete tests just to make CI pass.

## Scripts
`package.json` is the source of truth. Configure and document equivalents of:
- `dev`, `build`, `start`
- `lint`, `typecheck`, `format:check`
- `test`, `test:coverage`
- `test:e2e`, `test:a11y`, `test:seo`

If a script is not configured, do not pretend it exists. Add tooling or document the missing prerequisite.

## Testing
- **Unit**: pure utilities, validation schemas, metadata helpers.
- **Component**: observable behavior of navigation, forms, accordions, buttons, feedback states.
- **Integration**: server actions/routes, validation, error handling, rate limiting.
- **E2E**: navigation, service-to-contact journey, form success/failure, mobile menu, 404.
- **Accessibility**: axe plus manual keyboard/focus/reduced-motion checks.
- **SEO**: title/description, canonical, robots, sitemap, JSON-LD, indexability, Open Graph.
- **Performance**: production build, bundle review, Lighthouse on critical routes.
- **Security**: dependency audit, secret scanning, safe headers, input validation, server endpoint review.

Test behavior, not private implementation details. Avoid brittle snapshots as the primary proof.

## UI, Motion, and Media
- Use tokens for colors, spacing, typography, radius, shadows, and motion.
- Use `next/image` and `next/font` appropriately.
- Provide image dimensions/aspect ratios to reduce layout shift.
- Prefer transform/opacity for motion and respect reduced motion.
- Essential content must never depend on animation.
- Avoid scroll-jacking, excessive parallax, autoplay audio, and costly continuous blur effects.
- Decorative images use empty alt text; informative images need useful alt text.
- Use licensed and truthful imagery.

## SEO and GEO
- Unique metadata for indexable routes and one canonical production domain.
- Sitemap contains canonical, indexable URLs only; preview deployments must not become canonical.
- Correct robots directives; never accidentally block production content.
- JSON-LD must match accurate information visible on the page.
- Never add fake reviews, ratings, metrics, or unsupported schema.
- Write original, useful service and case-study content that answers real customer questions.
- Do not treat `llms.txt`, keyword stuffing, or schema alone as a GEO strategy.

## Security and Privacy
- Never commit `.env` files, credentials, private keys, tokens, or customer personal data.
- Keep secrets server-side and use environment variables.
- Validate untrusted input on the server, even if client validation exists.
- Add proportionate spam/rate controls to public forms.
- Do not add analytics, trackers, or consent banners without a documented decision.
- `.env.example` contains variable names and safe placeholders only.

## Git and PRs
Branch examples:
`feat/hero-section`, `feat/contact-form`, `fix/mobile-navigation`, `test/seo-metadata`, `chore/ci-pipeline`, `docs/implementation-guide`.

Conventional Commit examples:
- `feat(home): add brand-led hero section`
- `test(contact): cover invalid enquiry submissions`
- `fix(nav): improve mobile menu keyboard behavior`
- `seo(metadata): add canonical and social metadata`
- `ci(github): require test and build checks`
- `docs(readme): document setup and deployment`

One logical feature/fix per commit. Do not commit generated build output, secrets, or failing tests. PRs must explain intent, visible changes, tests run, and known limitations. Require green checks before merge; deploy production only from protected main/release.

## Documentation
Keep README setup, scripts, environment variables, architecture, tests, deployment, and rollback instructions current. Update docs when those change.

## Final Implementation Report
Report files changed, checks actually run and results, checks not run and why, owner-supplied configuration/secrets, and remaining risks/decisions.

## Brand and Typography Tokens
Follow the current brand system:
- **Heading/display font**: Space Grotesk (500–700)
- **Body/UI font**: Inter (400–600)
- **Fallbacks**: Arial, sans-serif
- **Palette tokens**:
  - Midnight: `#0B0F1A`
  - Astra Blue: `#3B82F6`
  - Violet: `#8B5CF6`
  - Cyan: `#06B6D4`
  - Cloud: `#F8FAFC`
  - Slate: `#94A3B8`
- **Gradient direction**: Cyan → Blue → Indigo → Violet
- **Tagline**: Build. Manage. Grow.

Use CSS variables and Tailwind semantic tokens; never scatter raw colors or font family declarations through components. Check WCAG contrast, font-loading shifts, and reduced-motion behavior. Treat the current N symbol and wordmark as proposed assets until the owner approves them. Keep light/dark logo variants, generate real PNG exports from vector sources when needed, and never mislabel SVG files as PNG.
