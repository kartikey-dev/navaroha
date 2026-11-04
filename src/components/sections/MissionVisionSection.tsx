import React from "react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function MissionVisionSection() {
  const pillars = [
    {
      category: "Mission",
      title: "What We Do",
      tagline: "Build without compromise. Eliminate digital mediocrity.",
      description:
        "We engineer high-performance software, luxury web flagships, mobile applications, and AI workflows for ambitious founders and enterprises worldwide. We replace bloated agency overhead with direct, disciplined craftsmanship from India's finest technical minds.",
      icon: "🎯",
      points: [
        "Deliver sub-second, accessible, search-dominant web systems",
        "Maintain zero code-churn through strict TypeScript and TDD principles",
        "Democratize enterprise-grade AI and automated workflows",
      ],
      accentColor: "border-blue-500/30 bg-blue-50/50",
    },
    {
      category: "Vision",
      title: "Where We're Headed",
      tagline: "Establish India as the epicenter of premium digital architecture.",
      description:
        "To redefine global expectations of Indian software studios — moving beyond legacy outsourcing into world-class product invention, bespoke creative direction, and generational technology infrastructure that scales to millions.",
      icon: "🔭",
      points: [
        "Bridge deep cultural creativity with international modernism",
        "Pioneer agentic AI automation architectures for everyday enterprises",
        "Build long-term technology partnerships built on demonstrable ROI",
      ],
      accentColor: "border-violet-500/30 bg-violet-50/50",
    },
    {
      category: "Goals",
      title: "What Drives Us",
      tagline: "Tangible business impact, radical transparency, lasting partnerships.",
      description:
        "Every line of code and user interface decision is guided by measurable client outcomes: higher conversion rates, reduced server compute costs, streamlined operations, and joyful human interactions.",
      icon: "⚡",
      points: [
        "100% on-time milestone delivery with transparent sprint tracking",
        "Continuous 24/7 responsiveness bridging worldwide timezones",
        "Empower clients with complete intellectual property ownership",
      ],
      accentColor: "border-amber-500/30 bg-amber-50/50",
    },
  ];

  return (
    <section
      id="about-mission"
      aria-labelledby="mission-heading"
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container-main relative z-10">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-eyebrow mb-3 block">Identity & Purpose</span>
            <h2 id="mission-heading" className="text-h2 text-slate-900 mb-4">
              Engineered with purpose.{" "}
              <span className="text-gradient">Driven by ambition.</span>
            </h2>
            <p className="text-body-lg text-slate-600">
              Navaroha was founded on a simple truth: global businesses do not need another bloated agency with
              salespeople. They need dedicated product engineers who treat their vision with the same care they would
              their own.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border ${pillar.accentColor} p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 bg-white`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{pillar.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">
                    {pillar.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-heading text-slate-900 mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-[var(--color-primary)] mb-4">
                  {pillar.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Principles:
                </div>
                <ul className="space-y-2">
                  {pillar.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-xs text-slate-700 flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
