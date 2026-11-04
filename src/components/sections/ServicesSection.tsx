import Link from "next/link";
import { services } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding bg-[#070A12] border-y border-white/10 relative overflow-hidden jali-pattern-dark"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(59, 130, 246, 0.12), transparent 70%)",
        }}
      />

      <div className="container-main relative z-10">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-eyebrow mb-3 block !text-[var(--color-cyan)]">
              Specialized Studio Capabilities
            </span>
            <h2 className="text-h2 text-white mb-4" id="services-heading">
              Design Studio & Dev Lab Services
            </h2>
            <p className="text-body-lg text-slate-300">
              From creative identity systems and digital flagships to complex cloud web apps and autonomous AI workflows — engineered to scale.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const isDesignStudio =
              service.slug === "ui-ux-brand-design" || service.slug === "website-development";
            const roomLabel = isDesignStudio ? "Design Studio" : "Dev Lab";
            const badgeColor = isDesignStudio
              ? "text-purple-300 border-purple-500/30 bg-purple-500/10"
              : "text-blue-300 border-blue-500/30 bg-blue-500/10";

            return (
              <RevealOnScroll key={service.slug} delay={index * 60}>
                <Link
                  href={service.href}
                  className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 group flex flex-col justify-between h-full no-underline hover:-translate-y-1.5"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800/80 border border-white/10 text-2xl group-hover:scale-110 transition-transform">
                        {service.icon}
                      </span>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeColor}`}
                      >
                        {roomLabel}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 mt-auto">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {service.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                      Explore Service & Specs
                      <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Directory Link */}
        <RevealOnScroll delay={300}>
          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="btn btn-secondary btn-lg border-white/20 text-slate-200 hover:text-white hover:border-blue-500 shadow-sm"
            >
              Browse Complete Service Directory & Architecture Breakdown →
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
