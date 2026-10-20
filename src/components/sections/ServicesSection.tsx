import Link from "next/link";
import { services } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding"
    >
      <div className="container-main">
        <RevealOnScroll>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="text-eyebrow" style={{ marginBottom: "0.75rem" }}>
              What We Do
            </p>
            <h2 className="text-h2" id="services-heading">
              Services built for growth
            </h2>
            <p
              className="text-body-lg"
              style={{
                color: "var(--color-text-secondary)",
                maxWidth: "540px",
                margin: "1rem auto 0",
              }}
            >
              From concept to launch and beyond — we cover the full product
              lifecycle.
            </p>
          </div>
        </RevealOnScroll>

        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {services.map((service, index) => (
            <RevealOnScroll key={service.slug} delay={index * 100}>
              <Link
                href={service.href}
                className="card group no-underline block"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Icon */}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                    borderRadius: "var(--radius-lg)",
                    background: "var(--gradient-brand-subtle)",
                    fontSize: "1.5rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {service.icon}
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "var(--color-text)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.65,
                    color: "var(--color-text-secondary)",
                    flex: 1,
                    marginBottom: "1.25rem",
                  }}
                >
                  {service.description}
                </p>

                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--color-primary)",
                    transition: "gap var(--duration-base) var(--ease-out)",
                  }}
                >
                  Learn more
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
