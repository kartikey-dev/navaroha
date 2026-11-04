import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, processSteps } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { CTASection } from "@/components/sections/CTASection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} — Navaroha Studio`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const isDesignStudio =
    service.slug === "ui-ux-brand-design" || service.slug === "website-development";
  const roomName = isDesignStudio ? "Room 02 — The Design Studio" : "Room 03 — The Dev Lab";
  const roomBadgeColor = isDesignStudio
    ? "text-purple-300 border-purple-500/40 bg-purple-950/60"
    : "text-blue-300 border-blue-500/40 bg-blue-950/60";

  // Related other services
  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <div className="bg-[#070A12] text-slate-100 min-h-screen">
      {/* Service Header */}
      <section
        className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden border-b border-white/10 jali-pattern-dark"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59, 130, 246, 0.2), transparent 70%)",
          }}
        />
        <div className="container-main relative z-10">
          <RevealOnScroll>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-[var(--color-cyan)]">{service.shortTitle}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${roomBadgeColor}`}
              >
                {roomName}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Production-Ready SLA
              </span>
            </div>

            <div className="flex items-start gap-5 mb-6">
              <span className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center rounded-2xl bg-slate-800/80 border border-white/10 text-3xl sm:text-4xl shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                {service.icon}
              </span>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
                  {service.title}
                </h1>
                <p className="text-base sm:text-lg text-[var(--color-cyan)] font-medium mt-1">
                  {service.tagline}
                </p>
              </div>
            </div>

            <p className="text-body-lg max-w-3xl text-slate-300 leading-relaxed mb-8">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/contact?service=${service.slug}`}
                className="btn btn-primary shadow-[0_0_25px_rgba(59,130,246,0.4)]"
              >
                Start a {service.shortTitle} Project
              </Link>
              <Link
                href="/work"
                className="btn btn-secondary text-slate-200 hover:text-white"
              >
                View Architecture Case Studies
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Deep Dive Grid */}
      <section className="py-20 border-b border-white/10">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content (2 Cols) */}
            <div className="lg:col-span-2 space-y-16">
              {/* Features & Architecture */}
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-cyan)]">
                    Engineering Depth
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mt-1">
                    Architecture & Technical Capabilities
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-blue-500/40 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center text-xs font-mono font-bold mb-3">
                        0{idx + 1}
                      </div>
                      <p className="text-sm font-medium text-slate-200 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Execution Process for this Service */}
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                    Milestones & Delivery
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mt-1">
                    How We Deliver Your {service.shortTitle}
                  </h2>
                </div>
                <div className="space-y-4">
                  {processSteps.slice(0, 5).map((step) => (
                    <div
                      key={step.number}
                      className="flex gap-4 p-5 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md"
                    >
                      <span className="font-mono text-sm font-bold text-blue-400 shrink-0 mt-0.5">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-white mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {step.details || step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar (1 Col) */}
            <div className="space-y-8">
              {/* Deliverables Card */}
              <div className="p-6 rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Tangible Deliverables
                </h3>
                <ul className="space-y-3">
                  {service.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <svg
                        className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack Card */}
              <div className="p-6 rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                  Production Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-800/80 text-blue-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ideal Client Profile */}
              <div className="p-6 rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-md">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                  Best Suited For
                </h3>
                <ul className="space-y-2">
                  {service.idealFor.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-400 italic">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Booking Callout */}
              <div className="p-6 rounded-3xl border border-blue-500/30 bg-blue-950/20 backdrop-blur-xl text-center">
                <h4 className="text-sm font-bold text-white mb-2">
                  Ready to Scope Your {service.shortTitle}?
                </h4>
                <p className="text-xs text-slate-400 mb-4">
                  Direct conversation with lead architects under mutual NDA. No salespeople.
                </p>
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="btn btn-primary btn-sm w-full shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                  Schedule Technical Scoping Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Services */}
      <section className="py-20 border-b border-white/10 bg-[#0B0F1A]">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-cyan)]">
              Integrated Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
              Explore Other Virtual Office Capabilities
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Our multidisciplinary teams collaborate seamlessly across the full digital product lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.slice(0, 3).map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="p-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-300 group no-underline block hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{other.icon}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {other.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {other.description}
                </p>
                <span className="text-xs font-semibold text-blue-400 inline-flex items-center gap-1 group-hover:text-blue-300">
                  Read Specification <span>→</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-xs font-semibold text-slate-400 hover:text-white uppercase tracking-wider hover:underline"
            >
              ← Back to Complete Service Directory
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
