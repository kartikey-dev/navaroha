"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59, 130, 246, 0.1), transparent 60%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(139, 92, 246, 0.06), transparent 50%), radial-gradient(ellipse 50% 35% at 20% 30%, rgba(6, 182, 212, 0.06), transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          pointerEvents: "none",
        }}
      />

      <div className="container-main relative" style={{ zIndex: 1 }}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <RevealOnScroll delay={0}>
            <p
              className="text-eyebrow"
              style={{ marginBottom: "1.5rem" }}
            >
              {siteConfig.positioning}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <h1
              className="text-hero"
              style={{ marginBottom: "1.5rem" }}
            >
              Ideas into{" "}
              <span className="text-gradient">impact</span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <p
              className="text-body-lg"
              style={{
                color: "var(--color-text-secondary)",
                maxWidth: "560px",
                margin: "0 auto 2.5rem",
              }}
            >
              We build digital experiences that help businesses grow.
              Websites, applications, and AI solutions — crafted with
              care, built for results.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-gradient btn-lg">
                Start a Project
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/work" className="btn btn-secondary btn-lg">
                See Our Work
              </Link>
            </div>
          </RevealOnScroll>

          {/* Tagline */}
          <RevealOnScroll delay={500}>
            <p
              style={{
                marginTop: "4rem",
                fontFamily: "var(--font-heading)",
                fontSize: "0.8125rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
              }}
            >
              {siteConfig.tagline}
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background:
            "linear-gradient(transparent, var(--color-background))",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
