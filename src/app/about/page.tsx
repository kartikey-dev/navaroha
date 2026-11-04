import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { studioValues } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Navaroha — Technology & Digital Products Studio",
  description:
    "Learn about Navaroha's mission, values, engineering philosophy, and commitment to building truthful, high-impact digital experiences from our virtual office headquarters.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#070A12] text-slate-100 min-h-screen">
      {/* Hero */}
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
              <span>🏛️ Navaroha Virtual Headquarters</span>
              <span>•</span>
              <span>Indian Creativity · Global Scale</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white max-w-4xl mx-auto mb-6 tracking-tight">
              Engineering with Conviction,{" "}
              <span className="text-gradient">Transparency, and Craft</span>
            </h1>
            <p className="text-body-lg max-w-3xl mx-auto text-slate-300 leading-relaxed">
              {siteConfig.supportingMessage} We bridge deep Indian technical discipline with internationally competitive design aesthetics to build durable digital products for worldwide founders.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Story & Ethos */}
      <section className="py-20 border-b border-white/10">
        <div className="container-main">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14">
            <div className="shrink-0 flex justify-center">
              <Image
                src="/brand/navaroha-card.png"
                alt="Navaroha Brand Emblem"
                width={240}
                height={165}
                className="rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.3)] border border-slate-700 w-56 md:w-64 h-auto"
              />
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-cyan)] mb-2 block">
                Our Genesis
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-6">
                A studio built on principles, not templates
              </h2>
              <div className="space-y-4 text-base text-slate-300 leading-relaxed font-sans">
                <p>
                  Navaroha was founded with a straightforward perspective: businesses do not just need more lines of code—they need thoughtful, durable digital products that solve real operational bottlenecks.
                </p>
                <p>
                  Too many agencies operate like assembly lines, handing off fragile code built on bloated WordPress themes or cookie-cutter templates with no regard for long-term maintainability or real business impact. When the handover is complete, clients are left with technical debt and inscrutable systems.
                </p>
                <p>
                  We operate as your high-calibre technical wing. We take the time to understand your commercial objectives, design interfaces that captivate real humans, and write strict, tested code that scales effortlessly to millions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#0B0F1A] border-b border-white/10">
        <div className="container-main">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-cyan)]">
              Our Operating System
            </span>
            <h2 className="text-3xl font-bold font-heading text-white mt-1">
              The values that guide every line of code
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studioValues.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{value.icon}</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/80">
                    {value.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
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
          <div className="max-w-3xl mx-auto rounded-3xl p-8 md:p-12 border border-white/15 bg-slate-900/80 backdrop-blur-xl shadow-[0_0_50px_rgba(59,130,246,0.2)] text-white text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-cyan)] mb-3 inline-block">
              Our Truthful Commitment
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Real engineering. Absolute ethics. No smoke and mirrors.
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-8">
              We never fabricate client logos, fake metrics, or exaggerate certifications. Every project we commit to receives direct attention from senior architects and designers who care about the commercial outcome as much as you do.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-primary shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                Start a Conversation
              </Link>
              <Link
                href="/services"
                className="btn btn-secondary text-slate-200 hover:text-white"
              >
                Explore Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
