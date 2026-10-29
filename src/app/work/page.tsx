import type { Metadata } from "next";
import { caseStudies } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies",
  description:
    "Explore how Navaroha architects and builds enterprise SaaS platforms, luxury web flagships, interactive 3D experiences, and cross-platform apps.",
};

export default function WorkPage() {
  return (
    <>
      {/* Work Hero */}
      <section
        className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59, 130, 246, 0.08), transparent 60%)",
        }}
      >
        <div className="container-main text-center">
          <RevealOnScroll>
            <p className="text-eyebrow mb-4">Proven Architecture</p>
            <h1 className="text-h1 max-w-3xl mx-auto mb-6">
              Selected projects and engineering case studies
            </h1>
            <p className="text-body-lg max-w-2xl mx-auto text-[var(--color-text-secondary)]">
              We focus on substance over hype. Here are real-world systems we
              have designed, architected, and engineered with rigor.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {caseStudies.map((study, index) => (
              <div
                key={study.slug}
                className="group flex flex-col rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-white p-8 md:p-10 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-xl)] transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {study.category}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h2 className="text-2xl font-bold font-heading text-slate-900 mb-2">
                  {study.liveUrl ? (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-2 group/title"
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
                </h2>

                <p className="text-sm font-medium text-slate-700 mb-4">
                  {study.tagline}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                  {study.overview}
                </p>

                <div className="space-y-3 mb-6 pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                    Key Highlights
                  </h3>
                  <ul className="space-y-1.5">
                    {study.architectureHighlights.slice(0, 3).map((hl, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-slate-600 flex items-start gap-2"
                      >
                        <span className="text-[var(--color-primary)] font-bold">
                          •
                        </span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {study.liveUrl && (
                  <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-100 mt-auto">
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline group-hover:gap-2.5 transition-all"
                      aria-label={`Visit live site for ${study.title}`}
                    >
                      <span>Visit Live Website</span>
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
                    <span className="text-xs font-mono text-slate-400">Live ↗</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
