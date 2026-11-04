import React from "react";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function CaseStudiesRedesignSection() {
  const featuredSchool = caseStudies.find(
    (c) => c.slug === "primary-school-digital-transformation"
  );
  const otherStudies = caseStudies.filter(
    (c) => c.slug !== "primary-school-digital-transformation"
  ).slice(0, 3);

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container-main relative z-10">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-eyebrow mb-3 block">Demonstrated Impact</span>
            <h2 id="case-studies-heading" className="text-h2 text-slate-900 mb-4">
              Real systems. Measurable outcomes.{" "}
              <span className="text-gradient">No speculation.</span>
            </h2>
            <p className="text-body-lg text-slate-600">
              We judge our engineering not by vanity aesthetics, but by business growth: enrollment surges, high-speed
              commerce transactions, and automated operational efficiency.
            </p>
          </div>
        </RevealOnScroll>

        {/* Featured Case Study: Primary School Digital Campus */}
        {featuredSchool && (
          <div className="mb-16 rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-white p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

            {/* Featured Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 text-white shadow-sm flex items-center gap-1.5">
                <span>⭐</span> Highlighted Community Impact Case Study
              </span>
              <span className="text-xs font-mono font-semibold text-blue-900/70 bg-white/80 px-3 py-1 rounded-full border border-blue-200">
                Education & Digital Campus
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Textual Narrative: Problem, What We Did, Results */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 leading-tight">
                    {featuredSchool.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-blue-800 mt-2">
                    {featuredSchool.tagline}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* The Problem */}
                  <div className="p-4 rounded-2xl bg-white border border-rose-100 shadow-sm">
                    <div className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-1 flex items-center gap-1.5">
                      <span>⚠️</span> The Problem & Challenge
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {featuredSchool.problem || featuredSchool.challenge}
                    </p>
                  </div>

                  {/* What We Did */}
                  <div className="p-4 rounded-2xl bg-white border border-blue-100 shadow-sm">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1 flex items-center gap-1.5">
                      <span>🛠️</span> What We Did & Engineered
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {featuredSchool.whatWeDid?.map((item, idx) => (
                        <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="text-blue-500 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Measurable Results */}
                  <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 shadow-sm">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2 flex items-center gap-1.5">
                      <span>📈</span> Measurable Institutional Outcomes
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {featuredSchool.measurableResults?.map((res, rIdx) => (
                        <div key={rIdx} className="flex items-center gap-2 text-xs font-bold text-emerald-950">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {featuredSchool.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200 shadow-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual Project Mockup */}
              <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
                {featuredSchool.image && (
                  <Image
                    src={featuredSchool.image}
                    alt="Primary School Digital Campus Portal Mockup"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-700 text-white flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold">
                      Institutional Growth Case
                    </div>
                    <div className="text-xs font-bold">Vidya Mandir Digital Campus</div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                    +140% Admissions
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Real Client Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherStudies.map((study) => (
            <div
              key={study.slug}
              className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    {study.category}
                  </span>
                  {study.liveUrl && (
                    <span className="text-xs font-mono text-emerald-600 font-bold">Live ↗</span>
                  )}
                </div>

                <h4 className="text-xl font-bold font-heading text-slate-900 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {study.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {study.overview}
                </p>

                {/* Problem & Results Highlights */}
                <div className="space-y-3 pt-3 border-t border-slate-100 mb-4">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Problem Solved:
                    </div>
                    <p className="text-xs text-slate-700 font-medium">
                      {study.problem || study.challenge}
                    </p>
                  </div>

                  {study.measurableResults && (
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
                        Measurable Result:
                      </div>
                      <div className="text-xs text-emerald-900 font-semibold bg-emerald-50/70 p-2 rounded-lg border border-emerald-100">
                        {study.measurableResults[0]}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                {study.liveUrl ? (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:underline"
                  >
                    <span>Visit Live Website</span>
                    <span>↗</span>
                  </a>
                ) : (
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-blue-600"
                  >
                    <span>View Architecture</span>
                    <span>→</span>
                  </Link>
                )}
                <span className="text-[10px] font-mono text-slate-400">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Full Work Page */}
        <div className="text-center mt-12">
          <Link href="/work" className="btn btn-secondary btn-md">
            <span>Explore All Client Work & Case Studies</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
