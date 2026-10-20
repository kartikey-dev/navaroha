import { processSteps } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section-padding section-dark"
      style={{
        backgroundColor: "var(--color-midnight)",
      }}
    >
      <div className="container-main">
        <RevealOnScroll>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p
              className="text-eyebrow"
              style={{ marginBottom: "0.75rem", color: "var(--color-cyan)" }}
            >
              Our Process
            </p>
            <h2
              className="text-h2"
              id="process-heading"
              style={{ color: "#F1F5F9" }}
            >
              From idea to impact
            </h2>
            <p
              className="text-body-lg"
              style={{
                color: "#94A3B8",
                maxWidth: "540px",
                margin: "1rem auto 0",
              }}
            >
              A structured, transparent process that keeps you in control at
              every stage.
            </p>
          </div>
        </RevealOnScroll>

        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {processSteps.map((step, index) => (
            <RevealOnScroll key={step.number} delay={index * 80}>
              <div
                className="hover:border-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
                style={{
                  position: "relative",
                  padding: "1.75rem 1.5rem",
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid #1E293B",
                  background: "#141929",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    color: "var(--color-astra-blue)",
                    marginBottom: "0.75rem",
                    display: "block",
                  }}
                >
                  {step.number}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "#F1F5F9",
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    color: "#94A3B8",
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
