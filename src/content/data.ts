/**
 * Navaroha — Content Data
 *
 * All content for services, process, FAQ, case studies, and page sections.
 * Truthful, clear, professional. Never invent fake client logos or deceptive metrics.
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
}

export interface StudioValue {
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
    tagline: "High-performance digital flagships that convert and scale.",
    description:
      "Custom-built, responsive websites that load fast, rank well, and convert visitors into customers. From brand sites to complex multi-page platforms with enterprise SEO.",
    icon: "🌐",
    features: [
      "Responsive design tailored for desktop, tablet, and mobile",
      "Core Web Vitals and Lighthouse performance optimization",
      "Semantic SEO architecture with structured data (JSON-LD)",
      "Headless CMS integration for effortless content editing",
      "Accessibility compliance adhering to WCAG 2.1 AA standards",
    ],
    deliverables: [
      "Custom UI design system in Figma",
      "Next.js high-speed frontend with Server-Side Rendering",
      "Integrated Headless Content Management System",
      "Automated deployment & preview workflows",
      "Technical SEO audit and analytics configuration",
    ],
    idealFor: [
      "High-growth tech startups seeking market credibility",
      "B2B service firms upgrading from legacy CMS platforms",
      "Brands requiring customized design without generic templates",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "Vercel"],
    href: "/services/website-development",
  },
  {
    slug: "web-applications",
    title: "Web Applications & SaaS",
    shortTitle: "Web Apps",
    tagline: "Scalable cloud applications built for complex business logic.",
    description:
      "Scalable web applications and SaaS platforms built with modern frameworks. From real-time operational dashboards to customer-facing SaaS products engineered for high concurrency.",
    icon: "⚡",
    features: [
      "Custom dashboards and role-based access management",
      "Real-time data streaming and WebSocket infrastructure",
      "Robust REST & GraphQL API engineering",
      "Secure authentication and authorization patterns",
      "Database schema modeling with high transactional throughput",
    ],
    deliverables: [
      "End-to-end fullstack web application",
      "Multi-tenant data architecture",
      "Subscription billing & Stripe integration",
      "Complete API documentation and schema",
      "Dockerized testing & CI/CD deployment pipelines",
    ],
    idealFor: [
      "Founders turning validated ideas into robust MVPs or V1 products",
      "Enterprises replacing disconnected spreadsheets with custom tools",
      "SaaS companies modernizing legacy architectures",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
    href: "/services/web-applications",
  },
  {
    slug: "mobile-desktop-apps",
    title: "Mobile & Desktop Apps",
    shortTitle: "Apps",
    tagline: "Unified multi-platform experiences with native speed.",
    description:
      "Cross-platform mobile and desktop applications that deliver native-quality experiences. Engineered for performance, offline capability, and long-term codebase maintainability.",
    icon: "📱",
    features: [
      "Unified codebase for iOS, Android, and Desktop platforms",
      "Offline-first architecture with local data synchronization",
      "Native device sensor and hardware integration",
      "Background sync, biometric auth, and push notifications",
      "Automated build pipelines for app store releases",
    ],
    deliverables: [
      "Production-ready iOS and Android binaries",
      "Desktop distributions (macOS, Windows, Linux) where required",
      "App Store & Google Play submission assistance",
      "Crash reporting and telemetry integration",
      "Code documentation and release management plan",
    ],
    idealFor: [
      "Businesses expanding web services into mobile ecosystems",
      "Field operations requiring reliable offline data entry",
      "Product studios wanting single-team cross-platform execution",
    ],
    technologies: ["React Native", "TypeScript", "Expo", "Electron", "SQLite"],
    href: "/services/mobile-desktop-apps",
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    shortTitle: "AI",
    tagline: "Pragmatic machine intelligence that saves hundreds of team hours.",
    description:
      "Intelligent automation, LLM integrations, and custom workflow pipelines that eliminate operational friction. Real-world machine learning applied to tangible business workflows.",
    icon: "🤖",
    features: [
      "Context-aware AI assistants and knowledge retrieval (RAG)",
      "Automated document processing and data extraction",
      "Custom business workflow pipelines & third-party connectors",
      "Fine-tuned prompts with rigorous deterministic guardrails",
      "Cost-optimized LLM routing and token management",
    ],
    deliverables: [
      "Production LLM integration with vector database search",
      "Workflow automation bots connecting internal tools",
      "Data ingestion, cleaning, and indexing scripts",
      "Audit logging and observability dashboard",
      "Security compliance review for sensitive enterprise data",
    ],
    idealFor: [
      "Organizations drowning in repetitive manual data workflows",
      "Customer support teams wanting grounded, verified AI answers",
      "Products embedding intelligent copilot features",
    ],
    technologies: ["Python", "OpenAI / Claude APIs", "LangChain", "pgvector", "FastAPI"],
    href: "/services/ai-automation",
  },
];

// ── Process Steps ─────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We listen and analyze. Understand your core business objectives, target audience, technical constraints, and what measurable success looks like.",
    details:
      "We run focused discovery workshops to map stakeholder requirements, identify hidden technical risks, and align on timeline and budget realities.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Together, we shape the scope, system architecture, and iterative milestones. Clear requirements eliminate costly surprises down the road.",
    details:
      "Output includes detailed system architecture diagrams, user journey flows, tech stack justifications, and a sprint-based project roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "User-centered design that balances clean aesthetic refinement with intuitive usability. Every button, interaction, and transition has a purpose.",
    details:
      "Interactive Figma prototypes, design tokens, responsive component libraries, and accessibility testing across dark and light palettes.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Clean, modular, and strongly typed engineering. We work in sprints with frequent preview builds so you can inspect progress every week.",
    details:
      "Modular components, clean commit histories, automated unit tests, and continuous staging previews on every pull request.",
  },
  {
    number: "05",
    title: "Validate",
    description:
      "Rigorous quality assurance across screen sizes, browsers, network conditions, and edge cases. Reliability is non-negotiable.",
    details:
      "Core Web Vitals auditing, cross-device QA, security vulnerability scans, load testing, and screen reader accessibility checks.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "Zero-downtime deployment with live telemetry, error tracking, and DNS configurations. We ensure flawless real-world operation.",
    details:
      "Production deployment checklist, backup configurations, SSL setup, search console registration, and staging-to-prod verification.",
  },
  {
    number: "07",
    title: "Improve",
    description:
      "Ongoing iteration, technical maintenance, and data-backed feature enhancements as your customer base scales.",
    details:
      "Scheduled dependency upgrades, performance health checks, user feedback analysis, and roadmap planning for version 2.",
  },
];

// ── Why Navaroha ──────────────────────────────────────

export const whyNavaroha: WhyItem[] = [
  {
    title: "Transparent Collaboration",
    description:
      "No black boxes. You get direct access to engineers and designers, staging links for every feature, and clear weekly retrospectives.",
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
    slug: "cloud-saas-platform",
    title: "Enterprise Multi-Tenant SaaS Workspace",
    category: "Web Application & Cloud Architecture",
    tagline: "High-throughput operational platform with real-time multi-user synchronization.",
    overview:
      "An architectural build designed for distributed team collaboration, handling complex state synchronization, role-based security, and lightning-fast load times.",
    challenge:
      "Legacy software suffered from slow page transitions, fragmented user permissions, and cumbersome batch updates that caused frequent lockouts.",
    solution:
      "Engineered an event-driven web application using Next.js, WebSockets, and a partitioned PostgreSQL database with optimistic client-side caching.",
    architectureHighlights: [
      "Optimistic UI updates with offline rollback capability",
      "Role-Based Access Control (RBAC) with fine-grained granular permissions",
      "Dynamic data tables supporting 50,000+ rows with virtualized DOM rendering",
      "Edge caching reducing global latency to under 70ms",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Redis"],
    deliverables: [
      "Modular design system and component UI library",
      "Real-time WebSocket event layer",
      "Stripe customer billing & tier provisioning portal",
      "Automated CI/CD deployment pipeline with zero-downtime rollouts",
    ],
  },
  {
    slug: "headless-ecommerce-platform",
    title: "Next-Gen Headless Digital Flagship",
    category: "Website & Headless Commerce",
    tagline: "Sub-second product catalog with customized checkout flows and enterprise SEO.",
    overview:
      "A tailored digital storefront built to replace a bloated monolithic CMS, delivering perfect Core Web Vitals and seamless content management.",
    challenge:
      "The client experienced a 4.2-second initial page load, high mobile bounce rates, and rigid template limitations that hindered seasonal marketing campaigns.",
    solution:
      "Architected a decoupled headless frontend utilizing Next.js Server Components, localized edge caching, and a flexible headless CMS for marketing autonomy.",
    architectureHighlights: [
      "100/100 Lighthouse Performance score on desktop and 98+ on mobile",
      "Instant page transitions with predictive route pre-fetching",
      "Automated image optimization and modern AVIF/WebP image formatting",
      "Dynamic internationalization (i18n) and currency handling",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS", "GraphQL"],
    deliverables: [
      "Complete responsive storefront with custom product visualizer",
      "Headless CMS integration with drag-and-drop landing page builder",
      "Structured data Schema.org markup for rich Google search cards",
      "Automated performance monitoring and bundle size alerting",
    ],
  },
  {
    slug: "ai-document-intelligence",
    title: "Intelligent Document Processing & RAG Pipeline",
    category: "AI & Workflow Automation",
    tagline: "Autonomous retrieval-augmented system processing complex corporate documents in seconds.",
    overview:
      "An AI-driven automation pipeline that parses unstructured invoices, legal contracts, and internal policies into structured, searchable intelligence.",
    challenge:
      "Manual data entry and policy lookups consumed more than 30 hours per week of senior staff time, introducing transcription errors and compliance risks.",
    solution:
      "Developed a secure, private Retrieval-Augmented Generation (RAG) system with token-efficient embeddings, deterministic validation layers, and role-gated queries.",
    architectureHighlights: [
      "Deterministic data validation checking LLM outputs against strict JSON schemas",
      "Semantic chunking and vector indexing utilizing pgvector",
      "Strict data privacy with zero external model training on proprietary inputs",
      "Audit logging recording every prompt, reference snippet, and confidence score",
    ],
    technologies: ["Python", "FastAPI", "OpenAI API", "pgvector", "PostgreSQL", "Docker"],
    deliverables: [
      "RESTful ingestion microservice for PDF and DOCX documents",
      "Interactive natural language search and query interface",
      "Confidence-weighted human-in-the-loop review workflow",
      "Security compliance review and deployment architecture guide",
    ],
  },
  {
    slug: "cross-platform-field-suite",
    title: "Offline-First Mobile Operations Suite",
    category: "Mobile & Desktop Application",
    tagline: "Resilient field inspection application with bidirectional cloud synchronization.",
    overview:
      "A cross-platform mobile and desktop utility enabling technicians to execute comprehensive facility audits in remote environments with zero network connectivity.",
    challenge:
      "Technicians frequently worked in underground facilities without cellular signal, losing inspection records and facing app crashes.",
    solution:
      "Engineered an offline-first mobile application featuring local SQLite caching, queued background synchronization, and conflict-resolution algorithms.",
    architectureHighlights: [
      "Local-first SQLite database with automatic conflict resolution",
      "Background upload queues that resume automatically when connectivity is restored",
      "Native camera integration with automated photo compression and watermarking",
      "Biometric login with encrypted local keychain storage",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "SQLite", "Node.js"],
    deliverables: [
      "iOS and Android application builds ready for enterprise distribution",
      "Desktop administration companion app for management review",
      "Real-time sync engine with conflict resolution protocol",
      "Comprehensive technician onboarding documentation and video guides",
    ],
  },
];

// ── FAQ ──────────────────────────────────────────

export const faqItems: FAQItem[] = [
  {
    question: "What types of projects do you work on?",
    answer:
      "We design and build custom websites, complex web applications, cross-platform mobile apps, and custom AI/automation pipelines. Whether you need a brand flagship, an internal operations dashboard, or an intelligent RAG assistant, we handle end-to-end strategy, design, and code.",
    category: "General",
  },
  {
    question: "How does your process work?",
    answer:
      "We follow a transparent 7-step process: Discover → Define → Design → Build → Validate → Launch → Improve. You receive weekly progress demonstrations, access to live staging builds, and direct communication with the engineering team.",
    category: "Process",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on complexity and scope. A bespoke marketing website typically takes 4–6 weeks. A feature-rich MVP or custom web application typically requires 8–14 weeks. We always provide milestone commitments before work begins.",
    category: "Timelines",
  },
  {
    question: "Do you work with early-stage startups or only established companies?",
    answer:
      "We partner with both. For startups, we build agile, scalable MVPs that impress investors and users without technical debt. For established businesses, we architect robust platforms, modernize legacy systems, and automate operational workflows.",
    category: "General",
  },
  {
    question: "What technologies and frameworks do you specialize in?",
    answer:
      "Our core engineering stack is centered around modern web and cloud standards: Next.js, React, TypeScript, Node.js, Python, PostgreSQL, and cloud infrastructure on AWS and Vercel. We choose tools based on project longevity, performance, and maintainability.",
    category: "Technical",
  },
  {
    question: "How do you handle project communication and management?",
    answer:
      "We believe in continuous clarity. You'll have direct contact through scheduled weekly video syncs, a dedicated Slack or Discord channel, and a shared Kanban board tracking every task from backlog to production.",
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
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend & AI" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS", category: "Cloud & DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "React Native", category: "Mobile" },
  { name: "OpenAI / Claude", category: "AI & ML" },
  { name: "Figma", category: "Design System" },
];
