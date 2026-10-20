import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { CTASection } from "@/components/sections/CTASection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} — Navaroha Case Study`,
    description: study.overview,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  const otherStudies = caseStudies.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Header */}
      <section
        className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden border-b border-[var(--color-border)]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59, 130, 246, 0.08), transparent 60%)",
        }}
      >
        <div className="container-main">
          <RevealOnScroll>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-4">
              <Link href="/work" className="hover:underline">
                Work
              </Link>
              <span>/</span>
              <span className="text-slate-500">{study.category}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-[var(--color-midnight)] mb-4">
              {study.title}
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-primary)] font-medium max-w-3xl mb-6">
              {study.tagline}
            </p>

            <p className="text-body-lg max-w-3xl text-[var(--color-text-secondary)] leading-relaxed mb-8">
              {study.overview}
            </p>

            <div className="flex flex-wrap gap-2">
              {study.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Case Study Details */}
      <section className="py-20">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content (2 Cols) */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <div className="p-8 rounded-[var(--radius-xl)] bg-rose-50/50 border border-rose-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 mb-3">
                  <span className="w-2 h-2 rounded-full bg-rose-600" />
                  The Architectural Challenge
                </div>
                <p className="text-base text-slate-800 leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="p-8 rounded-[var(--radius-xl)] bg-blue-50/50 border border-blue-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                  The Solution & Engineering Approach
                </div>
                <p className="text-base text-slate-800 leading-relaxed">
                  {study.solution}
                </p>
              </div>

              {/* Architecture Highlights */}
              <div>
                <h2 className="text-2xl font-bold font-heading mb-6 text-[var(--color-midnight)]">
                  Key Technical Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {study.architectureHighlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white shadow-sm"
                    >
                      <span className="text-xs font-mono font-bold text-[var(--color-primary)] mb-2 block">
                        HIGHLIGHT 0{idx + 1}
                      </span>
                      <p className="text-sm font-medium text-slate-800">
                        {hl}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Deliverables Card */}
              <div className="p-6 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                  Deliverables Produced
                </h3>
                <ul className="space-y-3">
                  {study.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <svg
                        className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0"
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

              {/* Start Similar Project */}
              <div className="p-6 rounded-[var(--radius-xl)] bg-[var(--color-midnight)] text-white">
                <h3 className="text-lg font-bold font-heading mb-2">
                  Building something similar?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Let us evaluate your architecture requirements and draft an
                  honest scope.
                </p>
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center block text-sm"
                >
                  Schedule Technical Discovery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 bg-slate-50 border-t border-[var(--color-border)]">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold font-heading text-slate-900">
              More Architecture Case Studies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherStudies.slice(0, 3).map((other) => (
              <Link
                key={other.slug}
                href={`/work/${other.slug}`}
                className="card group no-underline block"
              >
                <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2 block">
                  {other.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[var(--color-primary)] transition-colors mb-2">
                  {other.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {other.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
