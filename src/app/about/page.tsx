import type { Metadata } from "next";
import Link from "next/link";
import { studioValues, processSteps } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Navaroha — Technology & Digital Products Studio",
  description:
    "Learn about Navaroha's mission, values, engineering philosophy, and commitment to building truthful, high-impact digital experiences.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59, 130, 246, 0.08), transparent 60%)",
        }}
      >
        <div className="container-main text-center">
          <RevealOnScroll>
            <p className="text-eyebrow mb-4">About Navaroha</p>
            <h1 className="text-h1 max-w-3xl mx-auto mb-6">
              Engineering with conviction, transparency, and care
            </h1>
            <p className="text-body-lg max-w-2xl mx-auto text-[var(--color-text-secondary)]">
              {siteConfig.supportingMessage}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Story & Ethos */}
      <section className="py-20 border-t border-[var(--color-border)]">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--color-midnight)] mb-6">
              A studio built on principles, not templates
            </h2>
            <div className="space-y-6 text-base md:text-lg text-slate-700 leading-relaxed font-sans">
              <p>
                Navaroha was founded with a straightforward perspective:
                businesses don&apos;t just need more code—they need thoughtful,
                durable digital products that solve real problems.
              </p>
              <p>
                Too many development agencies operate like assembly lines,
                handing off fragile code built on bloated templates with no
                regard for long-term maintainability or real business impact.
                When the contract ends, clients are left with technical debt and
                inscrutable systems.
              </p>
              <p>
                We do things differently. We operate as an extension of your
                founding or leadership team. We take the time to understand your
                operational constraints, design interfaces that real humans enjoy
                using, and write strict, tested code that your future engineers
                will thank you for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50 border-y border-[var(--color-border)]">
        <div className="container-main">
          <div className="text-center mb-16">
            <p className="text-eyebrow mb-3">Our Foundation</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              The values that guide every line of code
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studioValues.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-[var(--radius-2xl)] bg-white border border-[var(--color-border)] shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{value.icon}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {value.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest Commitment */}
      <section className="py-20">
        <div className="container-main">
          <div className="max-w-3xl mx-auto rounded-[var(--radius-2xl)] p-8 md:p-12 border border-[var(--color-border)] bg-[var(--color-midnight)] text-white text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-cyan)] mb-3">
              Our Truthful Commitment
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Real engineering. No smoke and mirrors.
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-8">
              We never fabricate client logos, fake metrics, or exaggerate
              certifications. Every project we commit to receives direct attention
              from experienced engineers and designers who care about the outcome
              as much as you do.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Start a Conversation
              </Link>
              <Link
                href="/services"
                className="btn-secondary !text-white !border-slate-700 hover:!border-slate-500"
              >
                Explore Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
