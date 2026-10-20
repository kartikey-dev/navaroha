import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function CTASection() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="section-padding"
    >
      <div className="container-main">
        <RevealOnScroll>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "var(--radius-2xl)",
              padding: "4rem 2rem",
              textAlign: "center",
              background: "var(--color-midnight)",
            }}
          >
            {/* Gradient orbs */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15), transparent 50%), radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15), transparent 50%), radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.08), transparent 40%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <h2
                className="text-h2"
                id="cta-heading"
                style={{
                  color: "#F1F5F9",
                  marginBottom: "1rem",
                }}
              >
                Ready to build something{" "}
                <span className="text-gradient">great</span>?
              </h2>
              <p
                className="text-body-lg"
                style={{
                  color: "#94A3B8",
                  maxWidth: "480px",
                  margin: "0 auto 2rem",
                }}
              >
                Tell us about your project. We&apos;ll get back to you with
                ideas, not a sales pitch.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn btn-gradient btn-lg">
                  Start a Project
                  <span aria-hidden="true">→</span>
                </Link>
                {siteConfig.contact.email && (
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="btn btn-secondary btn-lg"
                    style={{
                      color: "#CBD5E1",
                      borderColor: "#334155",
                    }}
                  >
                    {siteConfig.contact.email}
                  </a>
                )}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
