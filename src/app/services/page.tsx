import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description:
    "Explore Navaroha's core engineering services: custom website development, scalable SaaS web applications, cross-platform mobile apps, and intelligent AI automation.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Services Hero */}
      <section
        className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59, 130, 246, 0.08), transparent 60%)",
        }}
      >
        <div className="container-main text-center">
          <RevealOnScroll>
            <p className="text-eyebrow mb-4">Our Expertise</p>
            <h1 className="text-h1 max-w-3xl mx-auto mb-6">
              Engineering digital products that scale with your ambition
            </h1>
            <p className="text-body-lg max-w-2xl mx-auto text-[var(--color-text-secondary)]">
              We combine design precision with resilient software engineering.
              From high-conversion websites to complex cloud platforms, we
              build technology that drives real business outcomes.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <div className="flex flex-col gap-16 md:gap-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  } gap-12 items-center p-8 md:p-12 rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-shadow duration-300`}
                >
                  {/* Left Column: Description & Features */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-12 h-12 flex items-center justify-center rounded-[var(--radius-xl)] bg-[var(--gradient-brand-subtle)] text-2xl">
                        {service.icon}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                        Capability 0{index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3 text-[var(--color-midnight)]">
                      {service.title}
                    </h2>
                    <p className="text-base text-[var(--color-primary)] font-medium mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-midnight)] mb-3">
                        Key Features & Architecture
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]"
                          >
                            <svg
                              className="w-4 h-4 text-[var(--color-primary)] mt-0.5 shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="btn-primary inline-flex items-center gap-2"
                      >
                        Explore {service.shortTitle}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                      <Link
                        href={`/contact?service=${service.slug}`}
                        className="btn-secondary"
                      >
                        Discuss a Project
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Deliverables & Tech Card */}
                  <div className="w-full lg:w-[420px] bg-slate-50 border border-[var(--color-border)] rounded-[var(--radius-xl)] p-6 md:p-8 space-y-6">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-midnight)] mb-3">
                        What We Deliver
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[var(--color-border)]">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-midnight)] mb-2">
                        Ideal For
                      </h4>
                      <ul className="space-y-1.5">
                        {service.idealFor.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-[var(--color-text-secondary)] italic"
                          >
                            &ldquo;{item}&rdquo;
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[var(--color-border)]">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-midnight)] mb-2">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white border border-[var(--color-border)] text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
