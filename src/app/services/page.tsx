import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services & Capabilities — Design Studio & Dev Lab",
  description:
    "Explore Navaroha's comprehensive digital capabilities across our virtual office rooms: custom website development, scalable SaaS web applications, iOS/Android apps, browser extensions, and AI automation.",
};

export default function ServicesPage() {
  const designStudioServices = services.filter(
    (s) => s.slug === "website-development" || s.slug === "ui-ux-brand-design"
  );
  const devLabServices = services.filter(
    (s) => s.slug !== "website-development" && s.slug !== "ui-ux-brand-design"
  );

  return (
    <div className="bg-[#070A12] text-slate-100 min-h-screen">
      {/* Services Hero */}
      <section
        className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden jali-pattern-dark border-b border-white/10"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59, 130, 246, 0.2), transparent 70%)",
          }}
        />
        <div className="container-main text-center relative z-10">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-semibold text-[var(--color-cyan)] mb-4">
              <span>🏛️ Virtual Office Directory</span>
              <span>•</span>
              <span>8 Production Capabilities</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white max-w-4xl mx-auto mb-6 tracking-tight">
              Engineering Digital Products with{" "}
              <span className="text-gradient">Indian Craft & Global Scale</span>
            </h1>
            <p className="text-body-lg max-w-3xl mx-auto text-slate-300 leading-relaxed">
              Explore our dual-engine architecture: <strong className="text-purple-300">The Design Studio</strong> for aesthetic dominance and high-converting interfaces, and <strong className="text-blue-300">The Dev Lab</strong> for resilient cloud software, mobile applications, and agentic AI systems.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Chamber 1: The Design Studio */}
      <section className="py-20 border-b border-white/10 relative overflow-hidden">
        <div className="container-main">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/60 border border-purple-800/80 px-3.5 py-1 rounded-full inline-block mb-2">
              Room 02 — The Design Studio
            </span>
            <h2 className="text-3xl font-heading font-bold text-white">
              Brand Identity & High-Performance Websites
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Creative direction, conversion-focused design systems, and lightning-fast digital flagships.
            </p>
          </div>

          <div className="space-y-12">
            {designStudioServices.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className="flex flex-col lg:flex-row gap-10 p-8 md:p-12 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-purple-500/40 transition-all duration-300"
              >
                {/* Left: Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 flex items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 text-2xl">
                      {service.icon}
                    </span>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400 font-mono">
                        Design Studio • 0{index + 1}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold font-heading text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--color-cyan)] font-semibold mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                      Architectural Capabilities:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <span className="text-purple-400 mt-0.5 font-bold">✦</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="btn btn-primary inline-flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                    >
                      View Dedicated {service.shortTitle} Page
                      <span aria-hidden="true">→</span>
                    </Link>
                    <Link
                      href={`/contact?service=${service.slug}`}
                      className="btn btn-secondary text-slate-200 hover:text-white"
                    >
                      Book Technical Consultation
                    </Link>
                  </div>
                </div>

                {/* Right: Deliverables Card */}
                <div className="w-full lg:w-[380px] bg-slate-950/80 border border-white/10 rounded-2xl p-6 space-y-5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-3">
                      Tangible Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="text-emerald-400 font-bold shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Target Audience
                    </h4>
                    <ul className="space-y-1">
                      {service.idealFor.map((item, iIdx) => (
                        <li key={iIdx} className="text-xs text-slate-400 italic">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Technology Matrix
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-purple-300 border border-purple-800/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chamber 2: The Dev Lab */}
      <section className="py-20 border-b border-white/10 relative overflow-hidden bg-[#0A0E17]">
        <div className="container-main">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 border border-blue-800/80 px-3.5 py-1 rounded-full inline-block mb-2">
              Room 03 — The Dev Lab
            </span>
            <h2 className="text-3xl font-heading font-bold text-white">
              Deep Tech, Cloud Platforms & AI Workflows
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Cross-platform mobile apps, cloud SaaS, browser tooling, and enterprise AI automation.
            </p>
          </div>

          <div className="space-y-12">
            {devLabServices.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className="flex flex-col lg:flex-row gap-10 p-8 md:p-12 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-blue-500/40 transition-all duration-300"
              >
                {/* Left: Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 text-2xl">
                      {service.icon}
                    </span>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 font-mono">
                        Dev Lab • 0{index + 1}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold font-heading text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--color-cyan)] font-semibold mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                      Engineering Architecture:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <span className="text-blue-400 mt-0.5 font-bold">✦</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="btn btn-primary inline-flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    >
                      View Dedicated {service.shortTitle} Page
                      <span aria-hidden="true">→</span>
                    </Link>
                    <Link
                      href={`/contact?service=${service.slug}`}
                      className="btn btn-secondary text-slate-200 hover:text-white"
                    >
                      Schedule Scoping Call
                    </Link>
                  </div>
                </div>

                {/* Right: Deliverables Card */}
                <div className="w-full lg:w-[380px] bg-slate-950/80 border border-white/10 rounded-2xl p-6 space-y-5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">
                      Tangible Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="text-emerald-400 font-bold shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Best Suited For
                    </h4>
                    <ul className="space-y-1">
                      {service.idealFor.map((item, iIdx) => (
                        <li key={iIdx} className="text-xs text-slate-400 italic">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Production Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-blue-300 border border-blue-800/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
