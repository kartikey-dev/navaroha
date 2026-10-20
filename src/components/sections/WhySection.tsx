import { whyNavaroha } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function WhySection() {
  return (
    <section
      id="why-navaroha"
      aria-labelledby="why-heading"
      className="section-padding"
      style={{
        background:
          "linear-gradient(180deg, var(--color-background) 0%, rgba(59, 130, 246, 0.02) 50%, var(--color-background) 100%)",
      }}
    >
      <div className="container-main">
        <RevealOnScroll>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="text-eyebrow" style={{ marginBottom: "0.75rem" }}>
              Why Navaroha
            </p>
            <h2 className="text-h2" id="why-heading">
              A partner, not just a vendor
            </h2>
            <p
              className="text-body-lg"
              style={{
                color: "var(--color-text-secondary)",
                maxWidth: "540px",
                margin: "1rem auto 0",
              }}
            >
              We believe great digital products come from honest collaboration,
              thoughtful design, and engineering that lasts.
            </p>
          </div>
        </RevealOnScroll>

        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {whyNavaroha.map((item, index) => (
            <RevealOnScroll key={item.title} delay={index * 100}>
              <div
                style={{
                  textAlign: "center",
                  padding: "2rem 1.5rem",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "56px",
                    height: "56px",
                    borderRadius: "var(--radius-xl)",
                    background: "var(--gradient-brand-subtle)",
                    fontSize: "1.75rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {item.icon}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    marginBottom: "0.75rem",
                    color: "var(--color-text)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.65,
                    color: "var(--color-text-secondary)",
                    maxWidth: "32ch",
                    margin: "0 auto",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
