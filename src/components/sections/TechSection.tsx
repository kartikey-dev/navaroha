import { technologies } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function TechSection() {
  return (
    <section
      id="technologies"
      aria-labelledby="tech-heading"
      className="section-padding"
    >
      <div className="container-main">
        <RevealOnScroll>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="text-eyebrow" style={{ marginBottom: "0.75rem" }}>
              Technology
            </p>
            <h2 className="text-h2" id="tech-heading">
              Modern tools, proven results
            </h2>
            <p
              className="text-body-lg"
              style={{
                color: "var(--color-text-secondary)",
                maxWidth: "540px",
                margin: "1rem auto 0",
              }}
            >
              We choose the right tools for each project — never the other way
              around.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div
            className="flex flex-wrap justify-center gap-3"
            style={{
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className="px-5 py-2.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-sm font-medium text-[var(--color-text-secondary)] transition-all duration-200 cursor-default hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-blue-50/50"
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
