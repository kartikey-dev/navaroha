"use client";

import Link from "next/link";
import { caseStudies } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function FeaturedWorkSection() {
  // Select top client projects for the homepage showcase
  const featured = caseStudies.slice(0, 6);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-20 md:py-28 bg-[#070C18] text-white relative overflow-hidden border-b border-slate-800"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 pointer-events-none opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #3B82F6 0%, #6366F1 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-blue-500/30 bg-blue-500/10 text-blue-400">
                Proven Engineering Framework
              </span>
              <h2
                id="work-heading"
                className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight"
              >
                Selected work & measurable results
              </h2>
              <p className="text-slate-400 text-base md:text-lg mt-3">
                We believe in substance over hype. For every client engagement, we document the real
                problem, the architecture we engineered, and the verified business outcomes.
              </p>
            </div>

            <div>
              <Link
                href="/work"
                className="btn btn-secondary !text-white !border-slate-700 hover:!border-blue-400 inline-flex items-center gap-2"
              >
                <span>View All 10 Projects</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </RevealOnScroll>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {featured.map((study, idx) => (
            <RevealOnScroll key={study.slug} delay={idx * 80}>
              <div className="group flex flex-col justify-between rounded-3xl bg-slate-900/90 border border-slate-800 p-7 md:p-9 shadow-xl hover:border-blue-500/40 hover:bg-slate-850 transition-all duration-300 h-full">
                <div>
                  {/* Top Category Badge & Live URL */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                      {study.category}
                    </span>

                    {study.liveUrl && (
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-blue-300 transition-colors bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60"
                        title={`Open live site for ${study.title}`}
                      >
                        <span>Live Site</span>
                        <span className="text-[10px]">↗</span>
                      </a>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {study.liveUrl ? (
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {study.title}
                      </a>
                    ) : (
                      study.title
                    )}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium mb-4">
                    {study.tagline}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {study.overview}
                  </p>

                  {/* 3-Part Architecture Framework: Problem, Solution, Results */}
                  <div className="space-y-3.5 pt-4 border-t border-slate-800/80">
                    {/* 1. Problem */}
                    <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/30">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-rose-400 mb-1">
                        <span>🔴</span> The Problem
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {study.problem || study.challenge}
                      </p>
                    </div>

                    {/* 2. What We Did */}
                    <div className="p-3.5 rounded-xl bg-blue-950/20 border border-blue-900/30">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-400 mb-1">
                        <span>🔵</span> What We Did
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{study.solution}</p>
                    </div>

                    {/* 3. Measurable Results */}
                    {study.measurableResults && study.measurableResults.length > 0 && (
                      <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1.5">
                          <span>🟢</span> Measurable Results
                        </div>
                        <ul className="space-y-1">
                          {study.measurableResults.map((result, rIdx) => (
                            <li
                              key={rIdx}
                              className="text-xs text-slate-200 flex items-start gap-1.5"
                            >
                              <span className="text-emerald-400 font-bold shrink-0">✓</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Tech Tags Footer */}
                <div className="pt-5 mt-6 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {study.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* View All CTA Footer */}
        <div className="mt-14 text-center">
          <Link
            href="/work"
            className="btn btn-primary btn-lg inline-flex items-center gap-2"
          >
            <span>Explore All 10 Production Case Studies</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
