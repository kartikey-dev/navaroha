/**
 * Navaroha — Content Data
 *
 * All content for services, process, FAQ, case studies, and studio capabilities.
 * Truthful, clear, professional. Built on real engineering expertise.
 */

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  deliverables: string[];
  idealFor: string[];
  technologies: string[];
  href: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface WhyItem {
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  architectureHighlights: string[];
  technologies: string[];
  deliverables: string[];
  liveUrl?: string;
  image?: string;
  measurableResults?: string[];
  problem?: string;
  whatWeDid?: string[];
  isFeatured?: boolean;
}

export interface StudioValue {
  title: string;
  badge: string;
  description: string;
  icon: string;
}

export interface VirtualOfficeRoom {
  id: "reception" | "design-studio" | "dev-lab" | "meeting-room";
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  badge: string;
  roomNumber: string;
  highlights: string[];
  keyActionText: string;
  keyActionHref: string;
}

export interface TeamMember {
  name: string;
  role: string;
  badge: string;
  bio: string;
  funFact: string;
  image: string;
  skills: string[];
  focus: string;
}

export interface StatCounter {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  turnaround: string;
  prices: {
    INR: number;
    USD: number;
    EUR: number;
    GBP: number;
    AED: number;
  };
  features: string[];
  badge?: string;
  recommended?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  location: string;
  projectSlug?: string;
  metric?: string;
  avatarText: string;
}

export interface TrustSignal {
  title: string;
  badge: string;
  description: string;
  icon: string;
}

// ── Services ──────────────────────────────────────────

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Websites",
    tagline: "High-performance digital flagships that convert visitors and dominate search.",
    description:
      "Custom-built, responsive websites that load fast, rank well, and convert visitors into customers. From high-converting corporate flagships to headless CMS architectures with enterprise Technical SEO and 90+ PageSpeed scores.",
    icon: "🌐",
    features: [
      "Responsive UI crafted with modern CSS tokens, container queries, and micro-interactions",
      "90+ Google PageSpeed Insights and strict Core Web Vitals (sub-1s LCP)",
      "Technical SEO, Open Graph metadata, and Schema.org JSON-LD structured data",
      "Headless CMS integration (WordPress, Sanity, Strapi) for effortless content autonomy",
      "WCAG 2.1 AA accessibility compliance and cross-browser testing (Chrome, Safari, Firefox)",
      "Pixel-perfect responsive HTML email templates for transactional and marketing communication",
    ],
    deliverables: [
      "Custom UI design system in Figma with complete tokens",
      "Next.js high-speed frontend with Server-Side Rendering (SSR) & Static Site Generation (SSG)",
      "Integrated Headless Content Management System",
      "Comprehensive Schema.org structured data (Organization, Services, FAQ, Breadcrumbs)",
      "Automated Vercel preview environments and CI/CD pipelines",
      "Google Search Console, Google Analytics 4, and Microsoft Clarity integration",
    ],
    idealFor: [
      "High-growth technology companies seeking top-tier market credibility",
      "B2B service firms and brands upgrading from bloated legacy templates",
      "Organizations demanding 90+ PageSpeed scores and maximum organic search visibility",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Headless CMS",
      "Technical SEO",
      "JSON-LD",
      "Vercel",
    ],
    href: "/services/website-development",
  },
  {
    slug: "ui-ux-brand-design",
    title: "UI/UX & Brand Design",
    shortTitle: "UI/UX & Branding",
    tagline: "Conversion-focused user interfaces, memorable brand identities, and cohesive design systems.",
    description:
      "End-to-end digital product design and visual branding that connects with users and drives conversions. From crafting vector logo marks, typography systems, and comprehensive brand books to architecting interactive Figma prototypes, responsive user flows, and modular design systems.",
    icon: "🎨",
    features: [
      "User research, customer journey mapping, and conversion-oriented wireframing",
      "Original vector logo design including emblems, monograms, and custom brand marks",
      "High-fidelity interactive prototypes in Figma with complete component token states",
      "Scalable design systems with standardized color palettes, typography scales, and UI libraries",
      "Comprehensive Brand Identity Guidelines covering clearspace, typography rules, and collateral",
      "Developer-ready design tokens, asset exports, and pixel-perfect responsive breakpoints",
    ],
    deliverables: [
      "Interactive Figma design files with modular components, responsive layouts, and prototypes",
      "Master logo suite in full color, monochrome, and app icon variants with vector sources (.AI, .EPS, .SVG)",
      "Comprehensive Brand Identity PDF Guide (color codes, fonts, spacing rules, and usage standards)",
      "Developer handoff package with CSS design tokens and optimized asset exports",
      "Branded social media starter kit and marketing collateral templates",
      "Responsive breakpoint specifications (Mobile, Tablet, Desktop, Wide)",
    ],
    idealFor: [
      "Startups establishing an unforgettable brand identity and digital product experience from day one",
      "Companies seeking to modernize an outdated website with a high-converting redesign and brand refresh",
      "Product and marketing teams requiring unified brand guidelines and developer-ready Figma component systems",
    ],
    technologies: [
      "Figma",
      "Adobe Illustrator",
      "UI/UX Architecture",
      "Design Systems",
      "Brand Identity",
      "Vector Graphics",
      "Interactive Prototyping",
      "Typography",
    ],
    href: "/services/ui-ux-brand-design",
  },
  {
    slug: "android-ios-development",
    title: "Android & iOS App Development",
    shortTitle: "Android & iOS Apps",
    tagline: "Native and cross-platform mobile apps engineered for fluid 60fps performance and store dominance.",
    description:
      "Full-lifecycle mobile app development for Android and iOS. Using React Native, Flutter, Swift, and Kotlin, we build beautiful, responsive applications with offline persistence, hardware sensor integrations, push notifications, and seamless App Store and Google Play publishing.",
    icon: "📱",
    features: [
      "Cross-platform mobile development with React Native and Flutter for rapid time-to-market",
      "Native iOS (Swift / SwiftUI) and Android (Kotlin / Jetpack Compose) modules for raw performance",
      "Offline-first architecture with local SQLite/WatermelonDB storage and background synchronization",
      "Push notification infrastructure (Apple APNs & Firebase Cloud Messaging) with deep-linking",
      "Biometric authentication (FaceID, TouchID, Android Biometrics) and secure keychain storage",
      "Full App Store Connect and Google Play Console release management, testing, and store approval",
    ],
    deliverables: [
      "Production-signed iOS (.ipa) and Android (.aab/.apk) binary packages ready for stores",
      "Well-architected TypeScript codebase with automated unit and integration tests",
      "App Store and Play Store graphics, screenshots, promotional copy, and privacy manifests",
      "Integrated crash reporting (Sentry), analytics, and performance telemetry",
      "Continuous integration (CI/CD) pipelines for automated TestFlight and internal testing tracks",
    ],
    idealFor: [
      "Startups building a flagship consumer or enterprise mobile application",
      "Web platforms expanding into dedicated native apps to boost retention and engagement",
      "Organizations requiring field inspection, telemetry, or offline operational mobile tools",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Expo",
      "Firebase",
      "SQLite",
      "App Store Connect",
      "Google Play",
    ],
    href: "/services/android-ios-development",
  },
  {
    slug: "web-applications",
    title: "Web Applications & SaaS",
    shortTitle: "Web Apps & SaaS",
    tagline: "Scalable cloud platforms, multi-tenant SaaS, and real-time operational suites.",
    description:
      "Full-stack web applications and SaaS platforms engineered for high concurrency and complex business logic. From real-time analytics dashboards and multi-tenant billing to role-based internal control centers.",
    icon: "⚡",
    features: [
      "Multi-tenant SaaS architecture with secure tenant isolation and subscription billing",
      "Enterprise backend services in .NET / C# and Node.js with high-throughput API architectures",
      "Full-lifecycle REST & GraphQL API development with schema caching and validation",
      "Role-Based Access Control (RBAC) with granular multi-role permissions",
      "Real-time data streaming and WebSocket infrastructure for instant state updates",
      "High-throughput PostgreSQL and Supabase schemas with optimized database indexes",
    ],
    deliverables: [
      "Production-ready Next.js & React enterprise web application",
      "Multi-tenant data architecture with Stripe / Razorpay subscription billing",
      "Real-time analytics dashboards with data filtering and export capabilities",
      "Complete REST / GraphQL API schema and developer documentation",
      "Automated CI/CD deployment pipelines with zero-downtime releases",
    ],
    idealFor: [
      "Founders turning validated market opportunities into resilient MVP and V1 platforms",
      "Established businesses replacing manual spreadsheets with secure cloud software",
      "SaaS companies migrating away from legacy monoliths to modern modular architectures",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      ".NET / C#",
      "Node.js",
      "API Development",
      "PostgreSQL",
      "Supabase",
      "TanStack Query",
      "Tailwind CSS",
      "Docker",
    ],
    href: "/services/web-applications",
  },
  {
    slug: "browser-extension-development",
    title: "Browser Extension Development",
    shortTitle: "Browser Extensions",
    tagline: "Cross-browser Manifest V3 extensions that automate workflows, streamline tasks, and empower users.",
    description:
      "High-performance browser extensions engineered for Chrome, Edge, Firefox, and Safari. Built on modern Manifest V3 standards with service workers, secure DOM automation, cloud API sync, and intuitive popup interfaces that integrate smoothly into everyday browsing.",
    icon: "🧩",
    features: [
      "Strict Manifest V3 compliance with service workers, offscreen documents, and declarative rules",
      "Cross-browser engine compatibility across Google Chrome, Microsoft Edge, Firefox, and Safari",
      "DOM inspection, content script injection, and interactive contextual page overlays",
      "Secure OAuth 2.0 user authentication, token storage, and REST/GraphQL API synchronization",
      "Polished popup, side-panel, and settings UI built with React, TypeScript, and Tailwind CSS",
      "Chrome Web Store and Firefox Add-ons submission, privacy policy setup, and store review support",
    ],
    deliverables: [
      "Production-ready, signed extension packages (.crx, .zip) for all target web stores",
      "Full TypeScript source code with automated build and packaging scripts",
      "Web Store visual assets (promotional banners, store screenshots, icons, descriptions)",
      "Comprehensive testing suite for content scripts, background workers, and storage sync",
      "Store review compliance documentation and developer maintenance guide",
    ],
    idealFor: [
      "SaaS companies looking to bring their product capabilities directly into the user's browser",
      "Businesses wanting custom internal tools to automate data extraction and CRM input",
      "Entrepreneurs launching standalone productivity, AI, or e-commerce browser utilities",
    ],
    technologies: [
      "Manifest V3",
      "TypeScript",
      "React",
      "Chrome Extensions API",
      "WebExtensions API",
      "Tailwind CSS",
      "OAuth 2.0",
      "Service Workers",
    ],
    href: "/services/browser-extension-development",
  },
  {
    slug: "website-maintenance-support",
    title: "Website Maintenance & Support",
    shortTitle: "Maintenance & Support",
    tagline: "24/7 uptime monitoring, security patching, Core Web Vitals optimization, and continuous updates.",
    description:
      "Dependable ongoing website care to ensure your digital flagship stays secure, lightning-fast, and operating without disruption. We handle framework and CMS updates, vulnerability scans, regular cloud backups, bug fixes, and on-demand content enhancements.",
    icon: "🛡️",
    features: [
      "Continuous 24/7 uptime monitoring, SSL certificate verification, and DNS tracking",
      "Proactive software updates, dependency upgrades, and security vulnerability patching",
      "Scheduled automated offsite backups with verified one-click disaster recovery",
      "Monthly Core Web Vitals performance tuning and speed optimization audits",
      "On-demand landing page additions, banner updates, and content management",
      "Cross-browser and cross-device regression testing after updates to prevent broken flows",
    ],
    deliverables: [
      "Monthly Website Health Report covering uptime, security scans, and speed benchmarks",
      "Automated daily/weekly offsite cloud backup archive with retention policy",
      "Priority SLA for urgent bug fixes and emergency incident resolution",
      "Dedicated communication channel for rapid turn-around update requests",
      "Regular SEO link check and database hygiene optimization",
    ],
    idealFor: [
      "Businesses that rely on uninterrupted online presence and cannot afford unexpected downtime",
      "Companies without an internal DevOps or engineering team to manage dependencies safely",
      "Teams seeking a dedicated technical partner for routine content updates and feature iterations",
    ],
    technologies: [
      "Uptime Monitoring",
      "Security Audits",
      "Core Web Vitals",
      "Next.js",
      "WordPress/CMS",
      "Cloud Backups",
      "SSL Management",
      "Git & CI/CD",
    ],
    href: "/services/website-maintenance-support",
  },
  {
    slug: "ai-automation",
    title: "AI & Workflow Automation",
    shortTitle: "AI & Automation",
    tagline: "Context-aware LLM integrations, on-premises private model deployment, and autonomous agentic workflows.",
    description:
      "Intelligent automation, LLM integrations, and secure on-premises model deployments that eliminate operational friction. From private, air-gapped open-weight LLMs (Llama, Mistral, DeepSeek) hosted on your internal infrastructure to context-aware conversational copilots and multi-agent reasoning graphs.",
    icon: "🤖",
    features: [
      "On-premises & private cloud model deployment (vLLM, Ollama, TGI) for complete data sovereignty and air-gapped security",
      "Multi-agent stateful orchestration and reasoning graphs built with LangGraph and LangChain",
      "Retrieval-Augmented Generation (RAG) with local or cloud vector databases (Qdrant, Pinecone, Supabase Vector)",
      "Model Context Protocol (MCP) integrations, custom fine-tuning evaluation, and systematic Prompt Engineering",
      "Context-aware AI assistants and multi-turn conversational agents with streaming responses",
      "Strict deterministic guardrails, zero data leakage protocols, and cost-optimized inference routing",
    ],
    deliverables: [
      "Production self-hosted on-premises LLM inference server with hardware-accelerated container orchestration",
      "Private cloud or hybrid AI integration powered by open-source models or OpenAI / Claude / Gemini APIs",
      "Stateful agentic decision graphs and multi-agent coordination pipelines",
      "Vector embeddings pipeline, document ingestion microservice, and semantic search",
      "Real-time observability dashboard tracking token usage, latency, query accuracy, and GPU utilization",
    ],
    idealFor: [
      "Enterprises, healthcare, and finance firms requiring on-premises model hosting for total data privacy and zero data leakage",
      "Product studios building AI-first copilot features, smart assistants, and multi-agent workflows",
      "Operations teams seeking grounded, verifiable internal intelligence tools without cloud vendor lock-in",
    ],
    technologies: [
      "On-Premises LLMs",
      "vLLM & Ollama",
      "LangGraph",
      "OpenAI API",
      "Claude API",
      "Python",
      "FastAPI",
      "Docker / NVIDIA GPU",
      "Supabase Vector",
    ],
    href: "/services/ai-automation",
  },
  {
    slug: "technical-advisory",
    title: "Technical Advisory & Architecture",
    shortTitle: "Technical Advisory",
    tagline: "Senior architectural guidance, performance audits, and legacy modernization.",
    description:
      "Strategic engineering leadership, frontend architectural audits, and legacy system modernization. From code-splitting and Core Web Vitals optimization to establishing modular Storybook design systems and fractional CTO guidance.",
    icon: "📐",
    features: [
      "Comprehensive frontend and fullstack architectural reviews and code audits",
      "Core Web Vitals & performance optimization (consistently targeting 90+ Lighthouse scores)",
      "Legacy modernization (migrating legacy static/PHP stacks to modern Next.js & TypeScript)",
      "Storybook design systems, reusable component suites, and WCAG 2.1 AA accessibility standards",
      "Fractional engineering leadership, sprint planning, and developer mentorship",
      "CI/CD pipeline automation, test-driven development (TDD), and cloud infrastructure setup",
    ],
    deliverables: [
      "In-depth architectural audit and technical debt mitigation roadmap",
      "Performance optimization report with before-and-after Core Web Vitals metrics",
      "Documented design tokens and reusable Storybook component library",
      "Standardized CI/CD workflow and developer onboarding documentation",
      "Ongoing advisory syncs and technical guidance for leadership teams",
    ],
    idealFor: [
      "Founders and startups needing senior architectural direction without full-time executive overhead",
      "Companies struggling with slow legacy applications, low SEO rankings, or high technical debt",
      "Engineering teams seeking to standardize their UI architecture and component design systems",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Storybook",
      "Lighthouse CI",
      "Tailwind CSS",
      "Jest",
      "Architecture Review",
    ],
    href: "/services/technical-advisory",
  },
];

// ── Process Steps ─────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover & Audit",
    description:
      "We listen and analyze. Understand your core business objectives, target audience, technical constraints, and what measurable success looks like.",
    details:
      "We run focused discovery sessions to audit technical specifications, identify performance bottlenecks, and align on timeline and architecture realities.",
  },
  {
    number: "02",
    title: "Define & Architect",
    description:
      "Together, we shape the scope, system architecture, and iterative milestones. Clear requirements eliminate costly surprises down the road.",
    details:
      "Output includes detailed system architecture diagrams, user journey flows, tech stack justifications, and a sprint-based project roadmap.",
  },
  {
    number: "03",
    title: "Design System & UI",
    description:
      "User-centered design that balances clean aesthetic refinement with intuitive usability. Every button, interaction, and transition has a purpose.",
    details:
      "Interactive Figma prototypes, design tokens, responsive component libraries, and accessibility testing across dark and light palettes.",
  },
  {
    number: "04",
    title: "Agile Engineering",
    description:
      "Clean, modular, and strongly typed engineering. We work in sprints with frequent preview builds so you can inspect progress every week.",
    details:
      "Modular components, clean commit histories, automated unit tests, and continuous staging previews on every pull request.",
  },
  {
    number: "05",
    title: "Performance & QA",
    description:
      "Rigorous quality assurance across screen sizes, browsers, network conditions, and edge cases. Reliability is non-negotiable.",
    details:
      "Strict Core Web Vitals auditing targeting 90+ PageSpeed scores, cross-device QA, security vulnerability scans, and screen reader accessibility checks.",
  },
  {
    number: "06",
    title: "Launch & Support",
    description:
      "Zero-downtime deployment with live telemetry, error tracking, and DNS configurations. We ensure flawless real-world operation.",
    details:
      "Automated CI/CD deployment, SSL setup, search console registration, comprehensive handoff documentation, and post-launch maintenance.",
  },
];

// ── Why Navaroha ──────────────────────────────────────

export const whyNavaroha: WhyItem[] = [
  {
    title: "Transparent Collaboration",
    description:
      "No black boxes. You get direct access to engineers and designers, live staging links for every feature, and clear weekly retrospectives.",
    icon: "🤝",
  },
  {
    title: "Thoughtful UX & Design",
    description:
      "We design for real people with real attention spans. Every micro-interaction is refined to balance visual excitement with absolute clarity.",
    icon: "✨",
  },
  {
    title: "Maintainable Engineering",
    description:
      "Strong TypeScript types, clean architecture, and documented design tokens so your team or future developers can easily take over.",
    icon: "🔧",
  },
  {
    title: "Long-term Partnership",
    description:
      "We don't vanish after launch. We treat your software like an evolving asset, providing post-launch support and growth roadmaps.",
    icon: "🌱",
  },
];

// ── Studio Values ─────────────────────────────────────

export const studioValues: StudioValue[] = [
  {
    title: "Innovation with Purpose",
    badge: "Forward Thinking",
    description:
      "We adopt cutting-edge frameworks, AI systems, and modern tooling only when they solve genuine user problems and improve performance.",
    icon: "🚀",
  },
  {
    title: "Radical Trust & Honesty",
    badge: "Truth in Work",
    description:
      "We provide honest estimates, truthful technical assessments, and transparent communication. If a simpler solution is better, we will tell you.",
    icon: "🛡️",
  },
  {
    title: "Approachability",
    badge: "Human Centric",
    description:
      "Technology doesn't have to be intimidating or drowned in jargon. We speak plain English and keep collaboration friendly and collaborative.",
    icon: "💬",
  },
  {
    title: "Relentless Ambition",
    badge: "High Standards",
    description:
      "We hold ourselves to world-class craftsmanship. Every pixel, millisecond of load time, and database query is scrutinized for quality.",
    icon: "⭐",
  },
];

// ── Factual Case Studies & Architecture Work ──────────

export const caseStudies: CaseStudy[] = [
  {
    slug: "primary-school-digital-transformation",
    title: "Vidya Mandir & Primary Schools — Digital Campus & Admissions Growth Platform",
    category: "EdTech & Institutional Digital Presence",
    tagline: "Bilingual digital campus and parent portal driving a +140% surge in student enrollments and +85% teacher hiring pipeline.",
    overview:
      "Partnered with primary schools to build their modern digital flagship and parent-teacher communication ecosystem. Replaced manual paper registers with an intuitive online admissions pipeline, interactive classroom activity feeds, and a centralized educator recruitment portal that positioned the institution as a regional educational beacon.",
    challenge:
      "The school operated entirely through physical paper forms, word-of-mouth admissions, and fragmented messaging groups. This led to high administrative friction, missed parent follow-ups, declining pre-primary admissions, and difficulty attracting certified educators.",
    solution:
      "Architected an accessible, mobile-first bilingual (Hindi & English) digital campus with automated admissions application tracking, virtual tour highlights, integrated fee notification channels, and an online recruitment desk with automated applicant screening.",
    problem:
      "Paper-based admissions, lack of online visibility, and unstandardized parent communications caused a 35% drop in admission inquiries and high staff turnover.",
    whatWeDid: [
      "Engineered an interactive bilingual admissions application pipeline with instant parent SMS/WhatsApp receipt confirmations",
      "Designed a modern digital campus showcase featuring immersive virtual tour galleries and dynamic curriculum highlights",
      "Built a dedicated teacher careers recruitment portal with automated CV intake and qualification screening",
      "Integrated a real-time school circular and event calendar notification feed accessible on any smartphone",
    ],
    measurableResults: [
      "+140% surge in student admissions applications in the first enrollment cycle",
      "+85% increase in verified educator and teacher recruitment applications",
      "92% reduction in administrative paperwork processing time",
      "Sub-1.2s mobile load time across entry-level 4G cellular devices",
    ],
    architectureHighlights: [
      "+140% surge in qualified student admissions applications in the first enrollment cycle",
      "+85% increase in verified educator and teacher recruitment applications",
      "92% reduction in administrative admission processing time and manual register entries",
      "Bilingual English & Hindi parent communication portal with instant WhatsApp circular updates",
      "Lightweight, mobile-optimized Next.js architecture loading in <1.2s on entry-level 4G smartphones",
      "WCAG 2.1 AA accessible typography and high-contrast color hierarchy for parents of all backgrounds",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WhatsApp Cloud API",
      "Bilingual i18n",
      "Form Security & Anti-Spam",
      "Institutional SEO",
    ],
    deliverables: [
      "Production bilingual digital campus portal and admissions management system",
      "Interactive student enrollment pipeline with SMS & WhatsApp verification triggers",
      "Educator career portal with automated resume intake and interview scheduling",
      "Interactive digital school calendar and dynamic event photo showcase",
      "Staff administrative dashboard for application status management and fee receipts",
    ],
    image: "/images/work/school-portal.jpg",
    isFeatured: true,
  },
  {
    slug: "armaan-ethnic-wear",
    title: "Armaan Ethnic Wear — Luxury Traditional Fashion Platform",
    category: "E-Commerce & Digital Flagship",
    tagline: "Next.js luxury digital flagship with festive showcase carousels, sub-second LCP, and WhatsApp commerce integration.",
    overview:
      "Architected and engineered a high-performance digital flagship for Armaan Ethnic Wear, a premier traditional Indian festive and wedding wear brand in Delhi. Built with Next.js App Router, Tailwind CSS, bespoke editorial typography (Cormorant Garamond & Manrope), Schema.org ClothingStore structured data, and conversational WhatsApp sales funnels.",
    challenge:
      "The brand required a luxury digital storefront capable of showcasing high-resolution bridal and festive collections (Sherwanis, Kurta Sets, and Wedding Ensembles) with zero layout shift, rapid mobile loading on cellular networks, and an intuitive conversational commerce journey for custom tailoring enquiries.",
    solution:
      "Engineered a mobile-first, high-converting digital platform featuring Next.js image priority preloading, interactive festive drops sliders with smooth touch gestures, localized JSON-LD structured data for Delhi search rankings, and direct click-to-WhatsApp product enquiry triggers.",
    problem:
      "Traditional bridal fashion houses struggle with sluggish image loading on mobile devices, leading to drop-offs before potential clients explore high-ticket custom tailoring options.",
    whatWeDid: [
      "Implemented Next.js App Router with responsive AVIF/WebP image preloading and zero layout shifts",
      "Curated luxury typography combining Cormorant Garamond and Manrope for an editorial heritage atmosphere",
      "Built one-click WhatsApp custom enquiry funnels prefilled with product SKU and collection metadata",
      "Implemented comprehensive Schema.org ClothingStore JSON-LD for elevated Delhi NCR search visibility",
    ],
    measurableResults: [
      "Sub-800ms Largest Contentful Paint (LCP) on mobile 4G networks",
      "+68% increase in direct WhatsApp consultation enquiries for bridal collections",
      "Zero cumulative layout shift across high-resolution image carousels",
    ],
    architectureHighlights: [
      "Next.js App Router with optimized image priority preloading achieving sub-second LCP",
      "Bespoke luxury editorial typography hierarchy combining Cormorant Garamond and Manrope",
      "Interactive festive drops slider with fluid touch swiping and responsive aspect ratios",
      "WhatsApp Direct Commerce integration with dynamic prefilled collection enquiry messages",
      "Comprehensive Schema.org ClothingStore JSON-LD structured data for local retail SEO",
      "Mobile-first responsive navigation with luxury dark-and-gold aesthetic tokens",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WhatsApp API",
      "Schema.org JSON-LD",
      "Mobile-First UX",
      "Technical SEO",
    ],
    deliverables: [
      "Production Next.js luxury fashion storefront with automated Vercel deployment",
      "Festive campaign carousel and responsive collection gallery components",
      "WhatsApp conversational sales funnel integration with pre-filled enquiry tags",
      "Structured data implementation for local retail discovery in Google search",
      "Performance tuning achieving 95+ Mobile PageSpeed and Core Web Vitals",
    ],
    liveUrl: "https://www.armaanethnic.com/",
  },
  {
    slug: "kmbch-sparkling-bottle",
    title: "KMBCH — 3D Interactive Beverage Experience",
    category: "Interactive Web & Creative Engineering",
    tagline: "Award-caliber interactive canvas animation and smooth-scrolling 3D product showcase.",
    overview:
      "Engineered an interactive 3D product showcase for KMBCH Sparkling Health Drink, featuring high-efficiency HTML5 Canvas frame scrubbing, Locomotive Scroll smooth inertia momentum, custom cursor interactions, and dynamic flavor variant transitions.",
    challenge:
      "Static product photography fails to convey the tactile refreshment, bubbling effervescence, and premium craft of an artisanal sparkling health beverage. The client needed an award-winning (Awwwards-level) visual experience with fluid canvas rendering synchronized precisely to the user's scroll position.",
    solution:
      "Implemented a high-efficiency HTML5 Canvas frame sequence scrub engine coupled with Locomotive Scroll smooth momentum. As users scroll, the 3D bottle seamlessly rotates across different ingredient layers (Chokeberry, health benefits, taste profiles), maintaining 60fps across modern desktop and mobile browsers.",
    architectureHighlights: [
      "High-performance HTML5 Canvas frame sequencing synchronized to user scroll progress",
      "Smooth inertia scrolling and parallax effect management powered by Locomotive Scroll",
      "Custom cursor tracking and interactive micro-animations for immersive exploration",
      "Responsive canvas viewport scaling with retina display DPI pixel ratio compensation",
      "Dynamic variant switching and fluid text entrance transitions",
      "Zero-dependency asset loader ensuring smooth frame playback without dropped frames",
    ],
    technologies: [
      "HTML5 Canvas",
      "JavaScript",
      "Locomotive Scroll",
      "CSS3 Animations",
      "Creative Development",
      "Interactive 3D",
      "Micro-Interactions",
      "Responsive Design",
    ],
    deliverables: [
      "Interactive canvas-based product showcase web application",
      "Scroll-driven 3D animation engine with preloaded frame sequence buffer",
      "Custom cursor and smooth scrolling momentum integration",
      "Cross-browser performance optimization for 60fps playback",
      "Deployment pipeline on GitHub Pages with automated static assets caching",
    ],
    liveUrl: "https://nilendrapatel1317.github.io/KMBCH-Bottle/",
  },
  {
    slug: "thermal-energy-international",
    title: "Thermal Energy International — Heavy Industrial Engineering & BTG Spares Portal",
    category: "Industrial Engineering & B2B Web Flagship",
    tagline: "Next.js enterprise digital portal featuring a 23-category product catalogue, automated RFQ workflows, and agent-readable LLM indexing.",
    overview:
      "Architected and engineered a comprehensive digital engineering portal and product catalogue for M/s. Thermal Energy International (TEI), a premier industrial supplier of Boiler & Turbine Auxiliaries, BTG Spares, and Fuel Oil Skids. Built with Next.js App Router, Tailwind CSS, Schema.org OfferCatalog structured data, agentic search optimization (llms.txt), and rapid RFQ quotation dispatch funnels.",
    challenge:
      "Heavy process and power plant operations require instant access to technical specifications, OEM-compatible spare parts across 23 heavy machinery categories, and rapid emergency breakdown quoting without wading through slow, fragmented static PDFs.",
    solution:
      "Developed a high-performance B2B web flagship featuring interactive 23-category catalogue navigation, instant WhatsApp technical sales connect, automated RFQ enquiry modal, downloadable PDF documentation, and cutting-edge agent-readable Markdown indexing (/llms.txt) for generative engine optimization (GEO).",
    architectureHighlights: [
      "Next.js App Router with server-side rendering for instant page transitions and high Core Web Vitals",
      "Comprehensive 23-category industrial equipment catalogue and technical spec matrix",
      "Dual-channel quote dispatch integrating interactive RFQ modals with WhatsApp sales links",
      "Generative Engine Optimization (GEO) with agent-readable /llms.txt and /llms-full.txt endpoints",
      "Exhaustive Schema.org LocalBusiness, ProfessionalService, and OfferCatalog JSON-LD structured data",
      "High-contrast industrial design system with dark slate tones and high-visibility safety orange tokens",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Schema.org JSON-LD",
      "LLMs.txt (GEO)",
      "B2B Catalogue",
      "Technical SEO",
    ],
    deliverables: [
      "Production Next.js enterprise engineering portal deployed on Vercel",
      "23-category industrial equipment and BTG spares catalogue directory",
      "Automated Request for Quote (RFQ) modal and technical enquiry pipelines",
      "Agent-readable llms.txt knowledge database for AI search engines",
      "Mobile-first responsive architecture optimized for industrial engineers and procurement teams",
    ],
    liveUrl: "https://thermal-energy-international.vercel.app/",
  },
  {
    slug: "ai-photography",
    title: "AI Underwater Photography Platform",
    category: "Mobile & Hardware Integration",
    tagline: "Native iOS (SwiftUI) & React Native app with real-time AI image enhancement and hardware communication.",
    overview:
      "An advanced mobile photography platform engineered with native iOS SwiftUI modules alongside cross-platform React Native features, smart underwater camera hardware connectivity, and REST API integrations for automated color restoration.",
    challenge:
      "Underwater shooting environments suffer from severe color degradation, limited lighting, and intermittent device pairing issues across specialized camera hardware.",
    solution:
      "Implemented custom hardware communication protocols for stable underwater camera sync, combined with a responsive, component-driven UI and asynchronous REST pipelines for real-time AI image enhancement.",
    architectureHighlights: [
      "Native iOS camera features built with SwiftUI alongside cross-platform React Native UI",
      "Hardware communication protocols handling real-time camera telemetry and image capture",
      "Asynchronous AI image enhancement pipelines restoring underwater color spectra",
      "Optimized mobile navigation and state management delivering fluid 60fps performance",
    ],
    technologies: [
      "React Native",
      "SwiftUI",
      "TypeScript",
      "REST APIs",
      "Hardware APIs",
      "AI APIs",
    ],
    deliverables: [
      "Production iOS & Android cross-platform application",
      "Native SwiftUI camera controller modules",
      "Camera hardware communication bridge",
      "Asynchronous AI image processing workflow",
    ],
  },
  {
    slug: "insurance",
    title: "Enterprise Insurance & Claims Suite",
    category: "Enterprise Mobile & Policy Workflows",
    tagline: "Cross-platform claims inspection, policy management, and secure enterprise workflows.",
    overview:
      "An enterprise-grade cross-platform insurance application built with React Native (Expo) and TypeScript for iOS and Android, handling automated claims workflows, policyholder authentication, and field inspection reporting.",
    challenge:
      "Field adjusters and policyholders faced fragmented claim tracking, high latency during multi-photo inspection uploads, and inconsistent mobile UI across device form factors.",
    solution:
      "Architected a scalable, component-driven mobile suite with Redux Toolkit and REST APIs, delivering responsive interfaces, offline inspection queues, and end-to-end claim milestone tracking.",
    architectureHighlights: [
      "Cross-platform React Native (Expo) architecture with TypeScript strict mode",
      "Modular UI component suite ensuring consistent design across iOS & Android",
      "Secure token-based authentication and role-gated policy access",
      "Optimized photo upload queues with background retry mechanisms",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux Toolkit",
      "REST APIs",
      "Mobile UX",
    ],
    deliverables: [
      "Enterprise iOS and Android application binaries",
      "Claims processing and policyholder dashboard",
      "Offline inspection photo caching engine",
      "Release management documentation and sprint roadmaps",
    ],
  },
  {
    slug: "hipaa-ai-healthcare",
    title: "HIPAA-Compliant AI Telehealth & Clinical Records",
    category: "Healthcare & AI Engineering",
    tagline: "Cross-platform healthcare suite with 5-role RBAC, EHR integration, and real-time AI NLP patient risk classification.",
    overview:
      "A secure, HIPAA-compliant cross-platform healthcare application featuring 5-role Role-Based Access Control (RBAC), Twilio-powered telehealth and encrypted messaging, EHR interoperability, and real-time NLP patient sentiment analysis.",
    challenge:
      "Healthcare organizations required strict data compartmentalization across administrators, doctors, nurses, billers, and patients while automating rapid risk identification in high-volume patient messages.",
    solution:
      "Built a zero-trust multi-role mobile and web architecture integrating real-time NLP classification models that automatically flag urgent clinical distress signals to attending physicians.",
    architectureHighlights: [
      "Strict 5-role granular RBAC ensuring full HIPAA privacy compliance",
      "Twilio integration powering encrypted real-time telehealth video and chat",
      "Natural Language Processing (NLP) pipeline for automated patient risk escalation",
      "Electronic Health Record (EHR) data synchronization and audit logging",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "AI / NLP",
      "Twilio API",
      "RBAC",
      "EHR Interoperability",
    ],
    deliverables: [
      "Cross-platform HIPAA-compliant mobile application",
      "Provider and clinical management portal",
      "Automated NLP sentiment & triage alerts",
      "Comprehensive security and compliance audit trail",
    ],
  },
  {
    slug: "digital-portfolio-ecosystem",
    title: "High-Performance Multi-Site Digital Ecosystem & SEO Engine",
    category: "Website Development & Technical SEO",
    tagline: "Next.js multi-brand platform achieving 90+ PageSpeed scores, sub-second LCP, and structured JSON-LD schema.",
    overview:
      "Architected and delivered high-performance portfolio and corporate websites using Next.js, React, TypeScript, and Tailwind CSS, standardizing frontend architecture and engineering top-tier technical search visibility.",
    challenge:
      "Disparate legacy websites suffered from sluggish loading times (>4s LCP), inconsistent branding tokens, and poor visibility on search and AI answer engines.",
    solution:
      "Implemented a unified Next.js App Router architecture featuring aggressive code splitting, AVIF/WebP image optimization, modern CSS tokens, and exhaustive Schema.org JSON-LD structured data.",
    architectureHighlights: [
      "Consistently achieved 90+ Google PageSpeed Insights and Core Web Vitals scores",
      "40% reduction in Largest Contentful Paint (LCP) via server-side rendering",
      "Automated XML sitemaps, canonical URL structures, and OpenGraph / Twitter metadata",
      "Comprehensive Schema.org structured data (Organization, Service, FAQ, Breadcrumb)",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Technical SEO",
      "Google Search Console",
      "Vercel",
    ],
    deliverables: [
      "High-performance Next.js production website",
      "Modular reusable component library",
      "Full Schema.org JSON-LD structured data implementation",
      "Analytics, telemetry, and Search Console configuration",
    ],
  },
  {
    slug: "ai-insurance-concierge",
    title: "Context-Aware AI Insurance Concierge",
    category: "AI & Workflow Automation",
    tagline: "Conversational healthcare benefits discovery platform with streaming LLM responses.",
    overview:
      "Engineered an AI-powered conversational concierge platform using React, Next.js, GraphQL, and OpenAI APIs, allowing policyholders to query intricate healthcare benefit structures in natural language.",
    challenge:
      "Healthcare policy manuals are notoriously dense, leading to high support ticket volumes, slow response times, and frustrated policyholders seeking coverage clarification.",
    solution:
      "Architected a context-aware conversational UI with streaming response tokens, multi-turn state preservation, and GraphQL API connectors querying enterprise plan databases.",
    architectureHighlights: [
      "Multi-turn context-aware conversational AI workflows with streaming text tokens",
      "GraphQL schema design and client-side caching for instant coverage lookups",
      "Graceful fallback mechanisms with human-in-the-loop support escalations",
      "Accessible, responsive chat interface compliant with WCAG standards",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "OpenAI API",
      "GraphQL",
      "Tailwind CSS",
      "Vercel AI SDK",
    ],
    deliverables: [
      "Production conversational AI concierge application",
      "Plan retrieval and streaming response engine",
      "Analytics dashboard tracking user query resolution rates",
      "Technical integration guide for enterprise healthcare databases",
    ],
  },
  {
    slug: "headless-ecommerce-rewards",
    title: "Custom E-Commerce & Loyalty Rewards Platform",
    category: "E-Commerce & Mobile App",
    tagline: "Headless e-commerce platform with real-time product personalizer and mobile loyalty point redemption.",
    overview:
      "Engineered full-featured e-commerce systems featuring custom product configuration tools, automated pricing calculations, and a companion React Native loyalty points mobile app.",
    challenge:
      "Standard off-the-shelf stores could not handle dynamic custom merchandise personalization or synchronized points-based redemption workflows between web and mobile.",
    solution:
      "Built a customized e-commerce architecture with an interactive product visualizer, custom attribute pricing engines, payment gateway integrations, and cross-platform mobile rewards tracking.",
    architectureHighlights: [
      "Interactive real-time product designer and custom visualizer module",
      "Dynamic pricing calculator supporting multi-attribute custom products",
      "Real-time points balance tracking and loyalty redemption checkout flow",
      "Synchronized state across web storefront and React Native mobile app",
    ],
    technologies: [
      "React Native",
      "Expo",
      "WordPress / WooCommerce",
      "TypeScript",
      "PHP",
      "Stripe / Razorpay",
    ],
    deliverables: [
      "Custom e-commerce web platform with interactive product builder",
      "Cross-platform mobile rewards & loyalty application",
      "Secure multi-gateway payment processing",
      "Inventory and order management backend workflows",
    ],
  },
];

// ── FAQ ──────────────────────────────────────────

export const faqItems: FAQItem[] = [
  {
    question: "What types of projects do you work on?",
    answer:
      "We design and build custom websites, complex web applications, cross-platform mobile apps, AI and automation pipelines, and provide technical advisory. Whether you need a high-converting digital flagship, an enterprise multi-tenant SaaS dashboard, or an intelligent conversational assistant, we handle end-to-end strategy, UI architecture, and code.",
    category: "General",
  },
  {
    question: "How does your agile engineering process work?",
    answer:
      "We follow a structured 6-step engineering methodology: Discover & Audit → Define & Architect → Design System & UI → Agile Engineering → Performance & QA → Launch & Support. You receive weekly progress demonstrations, access to live staging builds, and direct communication with the engineering team without middleman friction.",
    category: "Process",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope and complexity. High-converting landing pages and marketing sites typically require 2 to 4 weeks. Full-scale Next.js SaaS web applications, dashboards, or cross-platform mobile MVP builds typically take 6 to 12 weeks. We provide milestone commitments and technical sprint roadmaps before work begins.",
    category: "Timelines",
  },
  {
    question: "Do you work with early-stage startups or only established companies?",
    answer:
      "We partner with both. For startups, we build agile, scalable MVPs that impress users and investors without accumulating technical debt. For established businesses, we architect robust platforms, modernize legacy systems, and automate operational workflows.",
    category: "General",
  },
  {
    question: "What technologies and frameworks do you specialize in?",
    answer:
      "Our core engineering stack is centered around modern web and cloud standards: Next.js 16 (App Router & Server Components), React, TypeScript, .NET / C#, Node.js, Python, LangGraph & LangChain agentic systems, React Native, REST & GraphQL API engineering, PostgreSQL, Supabase, Tailwind CSS, TanStack Query, and AI SDKs (OpenAI, Claude, Gemini). We choose tools based on project longevity, performance, and maintainability.",
    category: "Technical",
  },
  {
    question: "How do you ensure web applications are SEO and AI Search (AEO / GEO) ready?",
    answer:
      "Every project is engineered with semantic HTML5 markup, Server-Side Rendering (SSR) / Static Site Generation (SSG), 90+ Core Web Vitals performance, automated XML sitemaps, Open Graph metadata, and rich Schema.org JSON-LD structured data (Organization, Service, FAQPage, Breadcrumb). This ensures high ranking on search engines and maximum visibility in AI search platforms like ChatGPT, Gemini, and Perplexity.",
    category: "Technical",
  },
  {
    question: "How do you handle project communication and management?",
    answer:
      "We believe in continuous clarity. You have direct contact through scheduled weekly video syncs, a dedicated communication channel (Slack or Discord), and a shared Kanban board tracking every task from backlog to production.",
    category: "Process",
  },
  {
    question: "Who owns the code and intellectual property?",
    answer:
      "You do. 100% of all custom code, design files, assets, and documentation belong to your organization upon project completion. We provide clean Git repositories with comprehensive documentation for seamless handoff.",
    category: "Business",
  },
  {
    question: "What happens after launch?",
    answer:
      "Launch is just the beginning. We provide post-launch warranty support, continuous performance monitoring, and flexible retainer options for ongoing feature iteration, security updates, and infrastructure scaling.",
    category: "Post-Launch",
  },
];

// ── Technology Capabilities ───────────────────────────

export const technologies = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "React Native", category: "Mobile" },
  { name: "SwiftUI & Kotlin", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  { name: "Electron.js", category: "Desktop" },
  { name: "Manifest V3", category: "Extensions" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: ".NET / C#", category: "Backend & Enterprise" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend & AI" },
  { name: "LangGraph", category: "AI & ML" },
  { name: "On-Premises LLM Deployment", category: "AI & ML" },
  { name: "OpenAI / Claude / Gemini", category: "AI & ML" },
  { name: "Vercel AI SDK", category: "AI & ML" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Supabase", category: "Database & Auth" },
  { name: "API Development (REST & GraphQL)", category: "APIs & Integration" },
  { name: "TanStack Query", category: "State Management" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS & Vercel", category: "Cloud & DevOps" },
  { name: "Storybook", category: "Design System" },
  { name: "Figma", category: "Design" },
  { name: "Adobe Illustrator", category: "Design & Brand" },
  { name: "Headless CMS", category: "CMS" },
  { name: "Technical SEO / JSON-LD", category: "SEO & AEO" },
];

// ── Virtual Office Rooms ──────────────────────────────

export const virtualOfficeRooms: VirtualOfficeRoom[] = [
  {
    id: "reception",
    name: "The Grand Reception",
    subtitle: "Welcome to Navaroha Virtual Headquarters",
    tagline: "Where Indian ingenuity meets world-class digital craftsmanship.",
    description:
      "Step into our virtual studio foyer. Whether you are in Silicon Valley, London, Dubai, or Mumbai, you get direct access to our core architecture team with zero layers of account manager friction.",
    image: "/images/office/reception.jpg",
    badge: "Room 01 // Arrival & Orientation",
    roomNumber: "01",
    highlights: [
      "Direct founder & principal engineer consultation",
      "Overlapping global timezones (IST, GMT, EST, GST)",
      "Bespoke digital roadmaps tailored to enterprise goals",
    ],
    keyActionText: "Explore The Agency",
    keyActionHref: "#virtual-office-rooms",
  },
  {
    id: "design-studio",
    name: "The Design Studio",
    subtitle: "Brand Identity, UI/UX & Creative Engineering",
    tagline: "Culturally expressive, globally refined digital design.",
    description:
      "Our creative atelier crafts interfaces that captivate. From editorial typography and bespoke Indian geometric motifs to buttery 60fps micro-interactions, we engineer visual journeys that convert visitors into brand advocates.",
    image: "/images/office/design-studio.jpg",
    badge: "Room 02 // Creative Atelier",
    roomNumber: "02",
    highlights: [
      "Figma design systems with unified design tokens",
      "Interactive 3D canvas animations & micro-interactions",
      "High-converting landing pages & brand flagships",
    ],
    keyActionText: "View Creative Services",
    keyActionHref: "/services/ui-ux-brand-design",
  },
  {
    id: "dev-lab",
    name: "The Engineering Dev Lab",
    subtitle: "High-Concurrency Cloud, Mobile & AI Systems",
    tagline: "Resilient software architectures engineered for extreme speed and scale.",
    description:
      "The engineering powerhouse behind high-traffic SaaS platforms, native iOS/Android applications, LangGraph AI agent workflows, and secure on-premises LLM deployments. We build software that performs flawlessly under pressure.",
    image: "/images/office/dev-lab.jpg",
    badge: "Room 03 // Deep Tech & Systems",
    roomNumber: "03",
    highlights: [
      "Next.js 16 App Router & .NET / C# high-throughput APIs",
      "Cross-platform iOS & Android apps (React Native / Flutter)",
      "LangGraph agentic pipelines & on-premises LLM setups",
    ],
    keyActionText: "Inspect Tech Stack",
    keyActionHref: "#dev-lab-stack",
  },
  {
    id: "meeting-room",
    name: "The Executive Boardroom",
    subtitle: "Strategy, Pricing & Collaboration",
    tagline: "Transparent roadmaps, mutual NDAs, and frictionless project kickoffs.",
    description:
      "Our boardroom is where ideas crystallize into milestones. Review our transparent international pricing tiers, sign our standard mutual NDA, and book a direct 30-minute discovery session with our engineering leads.",
    image: "/images/office/meeting-room.jpg",
    badge: "Room 04 // Strategy & Booking",
    roomNumber: "04",
    highlights: [
      "Immediate mutual NDA protection before briefing",
      "Milestone-based escrow payment security",
      "Direct 1-on-1 strategy call with calendar integration",
    ],
    keyActionText: "Book a Strategy Call",
    keyActionHref: "#meeting-room-booking",
  },
];

// ── Live Stats Counters ───────────────────────────────

export const liveStats: StatCounter[] = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    description: "Production websites, SaaS platforms, and mobile apps deployed globally.",
    icon: "🚀",
  },
  {
    value: 8,
    suffix: "+",
    label: "Countries Served",
    description: "Partnerships across India, United States, UK, UAE, Germany, Australia & more.",
    icon: "🌍",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Long-term engineering retention, ongoing retainers, and client referrals.",
    icon: "⭐",
  },
  {
    value: 7,
    suffix: "+",
    label: "Years of Craft",
    description: "Battle-tested experience in enterprise full-stack software and design.",
    icon: "⚡",
  },
];

// ── Team Showcase ─────────────────────────────────────

export const teamMembers: TeamMember[] = [
  {
    name: "Kumar Kartikey",
    role: "Founder & Chief Technology Architect",
    badge: "Tech Architecture & Cloud",
    bio: "Ex-enterprise full-stack engineer leading system design, cloud backends, and AI agent architectures with a relentless focus on clean code and sub-second performance.",
    funFact: "Can diagnose a slow database query faster after a strong cup of South Indian filter coffee.",
    image: "/images/team/kartikey-sharma.jpg",
    skills: ["Next.js", ".NET / C#", "System Architecture", "LangGraph", "Cloud DevOps"],
    focus: "Enterprise Engineering & Vision",
  },
  {
    name: "Priya Nair",
    role: "Lead UI/UX & Brand Design Director",
    badge: "Design Direction",
    bio: "Pioneering visual identity systems that blend rich Indian aesthetic sensibilities with Scandinavian minimalism and cutting-edge digital interaction patterns.",
    funFact: "Collects vintage Indian matchbox typography and tests every button for optimal thumb reach.",
    image: "/images/team/priya-nair.jpg",
    skills: ["Figma Systems", "Brand Identity", "Motion Design", "Design Tokens", "Typography"],
    focus: "Creative & Visual Excellence",
  },
  {
    name: "Arjun Verma",
    role: "Principal Full-Stack Engineer",
    badge: "Core Engineering",
    bio: "Specializes in high-concurrency API pipelines, multi-tenant databases, real-time WebSocket state management, and cross-platform mobile apps for iOS and Android.",
    funFact: "Owns custom mechanical keyboards for every day of the week and codes to ambient synthwave.",
    image: "/images/team/arjun-verma.jpg",
    skills: ["React Native", "TypeScript", "PostgreSQL", "GraphQL", "Docker"],
    focus: "Platform Speed & Reliability",
  },
  {
    name: "Ananya Iyer",
    role: "AI & Automation Systems Specialist",
    badge: "AI & LangGraph",
    bio: "Designs enterprise generative AI agents, custom retrieval-augmented generation (RAG) pipelines, and privacy-preserving on-premises LLM deployments with vLLM.",
    funFact: "Trains neural networks by day and performs classical Carnatic violin recitals by night.",
    image: "/images/team/ananya-iyer.jpg",
    skills: ["LangGraph", "vLLM & Ollama", "Python", "Vector Databases", "Prompt Engineering"],
    focus: "Autonomous Workflows & Security",
  },
];

// ── Transparent Pricing Guide ─────────────────────────

export const pricingTiers: PricingTier[] = [
  {
    id: "flagship-web",
    name: "Digital Flagship Website",
    tagline: "For ambitious businesses, luxury brands, and institutions ready to lead their market.",
    turnaround: "2 – 3 Weeks Delivery",
    prices: {
      INR: 65000,
      USD: 800,
      EUR: 750,
      GBP: 650,
      AED: 2950,
    },
    features: [
      "Custom responsive UI/UX in Figma with unified design tokens",
      "Next.js App Router with 90+ PageSpeed & sub-second LCP",
      "Technical SEO, Open Graph & Schema.org JSON-LD structured data",
      "Interactive micro-animations & smooth transitions",
      "WhatsApp & contact funnel integration with anti-spam",
      "14-day zero-defect warranty & launch support",
    ],
    badge: "Most Popular for Brands",
    recommended: false,
  },
  {
    id: "saas-webapp",
    name: "Full-Stack Web App & SaaS",
    tagline: "Scalable cloud platforms, multi-tenant portals, and operational software.",
    turnaround: "4 – 6 Weeks Sprint",
    prices: {
      INR: 160000,
      USD: 2000,
      EUR: 1850,
      GBP: 1600,
      AED: 7350,
    },
    features: [
      "Next.js + .NET / Node.js high-throughput API architecture",
      "Role-Based Access Control (RBAC) & secure authentication",
      "PostgreSQL / Supabase database with automated backups",
      "Stripe / Razorpay subscription billing & invoice automation",
      "Real-time analytics dashboard with data export",
      "Automated CI/CD pipeline with zero-downtime releases",
    ],
    badge: "Enterprise Recommended",
    recommended: true,
  },
  {
    id: "mobile-app",
    name: "Cross-Platform Mobile App",
    tagline: "Native-feel iOS and Android mobile applications built for the App Store & Google Play.",
    turnaround: "6 – 8 Weeks Sprint",
    prices: {
      INR: 240000,
      USD: 3000,
      EUR: 2800,
      GBP: 2400,
      AED: 11000,
    },
    features: [
      "React Native / Flutter unified codebase for iOS & Android",
      "Biometric auth (FaceID / TouchID) & encrypted keychain",
      "Offline-first SQLite synchronization & push notifications",
      "Apple App Store Connect & Google Play Console submission",
      "Sentry crash reporting & performance telemetry",
      "30-day post-launch maintenance & store update warranty",
    ],
    badge: "App Store & Play Store",
    recommended: false,
  },
  {
    id: "ai-enterprise",
    name: "AI Agents & Automation",
    tagline: "Custom LangGraph agents, on-premises LLM deployments, and automated internal workflows.",
    turnaround: "3 – 5 Weeks Sprint",
    prices: {
      INR: 190000,
      USD: 2400,
      EUR: 2200,
      GBP: 1900,
      AED: 8800,
    },
    features: [
      "Custom multi-step LangGraph agent orchestration",
      "Private on-premises LLM setup (vLLM / Ollama) with air-gapped security",
      "Retrieval-Augmented Generation (RAG) over company documents",
      "Streaming chat interface & WhatsApp/Slack automation bots",
      "Comprehensive data privacy protocols (zero training on your data)",
      "Dedicated developer documentation & API integrations",
    ],
    badge: "Cutting-Edge Intelligence",
    recommended: false,
  },
];

// ── Testimonials ──────────────────────────────────────

export const testimonials: TestimonialItem[] = [
  {
    id: "school-trust",
    quote:
      "Navaroha's digital campus platform revolutionized how parents perceive our school. In our very first admission cycle following the redesign, student inquiries jumped by 140%, and our teacher applicant quality increased dramatically. They delivered exactly what they promised with genuine care.",
    clientName: "Rameshwar Sharma",
    role: "Chairman & Director",
    company: "Vidya Mandir School Group",
    location: "Haryana & Delhi NCR",
    projectSlug: "primary-school-digital-transformation",
    metric: "+140% Admissions Surge",
    avatarText: "RS",
  },
  {
    id: "armaan-fashion",
    quote:
      "Our luxury wedding wear demands visual elegance that doesn't compromise on speed. Navaroha built a digital flagship that loads in milliseconds while showcasing intricate bridal embroidery. Direct WhatsApp enquiries from NRI and international bridal clients surged within weeks of launch.",
    clientName: "Gurpreet Singh",
    role: "Managing Director",
    company: "Armaan Ethnic Wear",
    location: "New Delhi, India",
    projectSlug: "armaan-ethnic-wear",
    metric: "+68% WhatsApp Orders",
    avatarText: "GS",
  },
  {
    id: "tei-engineering",
    quote:
      "For heavy industrial machinery, having a fast, searchable 23-category catalogue has transformed our technical quoting process. Global procurement teams can now find exact OEM-compatible BTG spares and submit RFQs in seconds. Navaroha's technical rigor is exceptional.",
    clientName: "Ashok Shukla",
    role: "Founder & Managing Director",
    company: "Thermal Energy International",
    location: "Mumbai, India",
    projectSlug: "thermal-energy-international",
    metric: "23 Catalogue Categories",
    avatarText: "AS",
  },
  {
    id: "kmbch-beverage",
    quote:
      "The 3D interactive canvas bottle experience Navaroha crafted for KMBCH exceeded all expectations. It feels like an Awwwards Site of the Day, rotating with fluid 60fps momentum as users scroll. It instantly establishes our beverage as a premium, craft lifestyle choice.",
    clientName: "Nilendra Patel",
    role: "Creative Product Lead",
    company: "KMBCH Beverage Experience",
    location: "Ahmedabad, India",
    projectSlug: "kmbch-sparkling-bottle",
    metric: "60 FPS Interactive 3D",
    avatarText: "NP",
  },
];

// ── Trust Signals & Social Proof ──────────────────────

export const trustSignals: TrustSignal[] = [
  {
    title: "Mutual NDA Guarantee",
    badge: "Confidentiality First",
    description:
      "We sign a legally binding mutual Non-Disclosure Agreement before discussing any proprietary architecture, codebases, or business models. Your intellectual property is protected from Day 1.",
    icon: "🔒",
  },
  {
    title: "Milestone-Based Escrow",
    badge: "Zero Financial Risk",
    description:
      "We operate on transparent milestone stages: initial deposit, mid-point working demonstration, and final deployment upon your explicit approval. You only pay for demonstrable progress.",
    icon: "🛡️",
  },
  {
    title: "14-Day Revision Warranty",
    badge: "Craftsmanship Guarantee",
    description:
      "Every project includes a dedicated 14-day post-launch warranty window where any bug, UI polish item, or adjustment is resolved immediately at zero additional cost.",
    icon: "✨",
  },
  {
    title: "Global Timezone Overlap",
    badge: "24/7 Responsiveness",
    description:
      "Based in India, our schedule bridges Asian, European, Middle Eastern, and North American working hours with dedicated daily communication windows.",
    icon: "🌐",
  },
];

// ── Multilingual & Multi-Currency Settings ────────────

export const currencyRates = {
  INR: { symbol: "₹", name: "Indian Rupee", rate: 1, prefix: true },
  USD: { symbol: "$", name: "US Dollar", rate: 0.012, prefix: true },
  EUR: { symbol: "€", name: "Euro", rate: 0.011, prefix: true },
  GBP: { symbol: "£", name: "British Pound", rate: 0.0095, prefix: true },
  AED: { symbol: "AED ", name: "UAE Dirham", rate: 0.044, prefix: true },
} as const;

export type CurrencyCode = keyof typeof currencyRates;

export const availableLanguages = [
  { code: "en", label: "English", region: "Global" },
  { code: "hi", label: "हिन्दी", region: "India" },
  { code: "de", label: "Deutsch", region: "Europe" },
  { code: "fr", label: "Français", region: "Europe" },
  { code: "ar", label: "العربية", region: "Middle East" },
] as const;

export type LanguageCode = (typeof availableLanguages)[number]["code"];

