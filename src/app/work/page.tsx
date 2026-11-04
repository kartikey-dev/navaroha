import type { Metadata } from "next";
import Image from "next/image";
import { caseStudies } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Case Studies & Client Work — Navaroha Studio",
  description:
    "Explore how Navaroha architects and builds enterprise SaaS platforms, primary school digital portals, luxury e-commerce flagships, and industrial software with measurable business outcomes.",
};

export default function WorkPage() {
  const featuredSchool = caseStudies.find(
    (c) => c.slug === "primary-school-digital-transformation"
  );
  const otherCaseStudies = caseStudies.filter(
    (c) => c.slug !== "primary-school-digital-transformation"
  );

  return (
    <div className="bg-[#070A12] text-slate-100 min-h-screen">
      {/* Work Hero */}
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
              <span>🚀 Demonstrable Business ROI</span>
              <span>•</span>
              <span>Problem · What We Did · Outcomes</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white max-w-4xl mx-auto mb-6 tracking-tight">
              Real Work. Real Software.{" "}
              <span className="text-gradient">Measurable Growth.</span>
            </h1>
            <p className="text-body-lg max-w-3xl mx-auto text-slate-300 leading-relaxed">
              We focus on engineering substance over superficial hype. Every case study below outlines the tangible client challenge, what we engineered, and the measurable business metrics achieved.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Featured Primary School Digital Transformation Case Study */}
      {featuredSchool && (
        <section className="py-20 border-b border-white/10 relative overflow-hidden bg-[#0A0E17]">
          <div className="container-main">
            <RevealOnScroll>
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3.5 py-1 rounded-full">
                  ★ Highlighted Case Study • Education & Institutional Growth
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Featured Deployment
                </span>
              </div>

              <div className="rounded-3xl border border-white/15 bg-slate-900/70 backdrop-blur-xl p-8 md:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Left Column: Story */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-2">
                        {featuredSchool.title}
                      </h2>
                      <p className="text-base text-[var(--color-cyan)] font-medium">
                        {featuredSchool.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {featuredSchool.overview}
                    </p>

                    {/* Problem Statement */}
                    <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-800/40">
                      <div className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-1">
                        The Problem
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        {featuredSchool.problem}
                      </p>
                    </div>

                    {/* What We Did */}
                    <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-800/40">
                      <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                        What We Did (Engineering Solution)
                      </div>
                      <ul className="space-y-1.5">
                        {featuredSchool.whatWeDid?.map((item, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                            <span className="text-blue-400 font-bold">✦</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Measurable Results */}
                    <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-800/50 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Measurable Institutional Outcomes
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {featuredSchool.measurableResults?.map((res, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-emerald-800/40 text-center">
                            <span className="text-xs font-bold text-white block">
                              {res}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Preview & Meta */}
                  <div className="lg:col-span-5 space-y-6">
                    {featuredSchool.image && (
                      <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                        <Image
                          src={featuredSchool.image}
                          alt={featuredSchool.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover object-center"
                        />
                      </div>
                    )}

                    <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 space-y-4">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Production Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {featuredSchool.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 text-blue-300 border border-slate-700/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/10">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Core Architecture Highlights
                        </h4>
                        <ul className="space-y-1">
                          {featuredSchool.architectureHighlights.map((hl, hIdx) => (
                            <li key={hIdx} className="text-xs text-slate-300 flex items-start gap-2">
                              <span className="text-emerald-400">✓</span>
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* Other Case Studies Grid */}
      <section className="py-20 border-b border-white/10">
        <div className="container-main">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-cyan)]">
              Enterprise Portfolio
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Production Client Deployments
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              From global couture e-commerce to hospital medical bed tracking and industrial energy platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {otherCaseStudies.map((study, index) => (
              <div
                key={study.slug}
                className="group flex flex-col rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-blue-500/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-cyan)] bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/80">
                    {study.category}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    0{index + 2}
                  </span>
                </div>

                {study.image && (
                  <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-white/10">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <h3 className="text-2xl font-bold font-heading text-white mb-2">
                  {study.liveUrl ? (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors inline-flex items-center gap-2 group/title"
                    >
                      <span>{study.title}</span>
                      <svg
                        className="w-4 h-4 opacity-70 group-hover/title:opacity-100 transition-opacity"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ) : (
                    study.title
                  )}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-[var(--color-cyan)] mb-3">
                  {study.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 flex-1">
                  {study.overview}
                </p>

                {study.problem && (
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/10 mb-4 text-xs">
                    <div className="font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Problem Addressed:
                    </div>
                    <div className="text-slate-300">{study.problem}</div>
                  </div>
                )}

                {study.measurableResults && (
                  <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 mb-4 text-xs">
                    <div className="font-bold uppercase tracking-wider text-emerald-400 mb-1">
                      Measurable Result:
                    </div>
                    <div className="text-emerald-200 font-semibold">{study.measurableResults[0]}</div>
                  </div>
                )}

                <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Highlights
                  </h4>
                  <ul className="space-y-1">
                    {study.architectureHighlights.slice(0, 3).map((hl, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-slate-400 flex items-start gap-2"
                      >
                        <span className="text-blue-400 font-bold">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/80 text-blue-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {study.liveUrl && (
                  <div className="pt-4 flex items-center justify-between gap-3 border-t border-white/10 mt-auto">
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 group-hover:gap-2.5 transition-all"
                      aria-label={`Visit live site for ${study.title}`}
                    >
                      <span>Visit Live Deployment</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <span className="text-xs font-mono text-slate-400">Production ↗</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
