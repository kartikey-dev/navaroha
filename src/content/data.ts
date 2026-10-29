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
