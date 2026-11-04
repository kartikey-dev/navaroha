import { technologies } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function TechSection() {
  return (
    <section
      id="technologies"
      aria-labelledby="tech-heading"
      className="section-padding bg-[#070A12] border-y border-white/10 relative overflow-hidden jali-pattern-dark"
    >
      <div className="container-main relative z-10">
        <RevealOnScroll>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="text-eyebrow mb-2 block !text-[var(--color-cyan)]">
              Dev Lab Tech Matrix
            </span>
            <h2 className="text-h2 text-white" id="tech-heading">
              Modern Tools, Proven Resilience
            </h2>
            <p
              className="text-body-lg text-slate-300"
              style={{
                maxWidth: "540px",
                margin: "1rem auto 0",
              }}
            >
              We choose battle-tested technologies with strong ecosystems — never risky abstractions.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div
            className="flex flex-wrap justify-center gap-3"
            style={{
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className="px-5 py-2.5 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-md text-sm font-medium text-slate-300 transition-all duration-200 cursor-default hover:border-blue-500/60 hover:text-white hover:bg-blue-500/15 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:-translate-y-0.5"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
