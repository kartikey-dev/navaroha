import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, processSteps } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { CTASection } from "@/components/sections/CTASection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} — Navaroha Studio`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related other services
  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Service Header */}
      <section
        className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden border-b border-[var(--color-border)]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59, 130, 246, 0.08), transparent 60%)",
        }}
      >
        <div className="container-main">
          <RevealOnScroll>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-4">
              <Link href="/services" className="hover:underline">
                Services
              </Link>
              <span>/</span>
              <span className="text-slate-500">{service.shortTitle}</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="w-16 h-16 flex items-center justify-center rounded-[var(--radius-xl)] bg-[var(--gradient-brand-subtle)] text-3xl">
                {service.icon}
              </span>
              <div>
                <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-[var(--color-midnight)]">
                  {service.title}
                </h1>
                <p className="text-lg md:text-xl text-[var(--color-primary)] font-medium mt-1">
                  {service.tagline}
                </p>
              </div>
            </div>

            <p className="text-body-lg max-w-3xl text-[var(--color-text-secondary)] leading-relaxed mb-8">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/contact?service=${service.slug}`}
                className="btn-primary"
              >
                Start a {service.shortTitle} Project
              </Link>
              <Link href="/work" className="btn-secondary">
                View Architecture Case Studies
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Deep Dive Grid */}
      <section className="py-20">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content (2 Cols) */}
            <div className="lg:col-span-2 space-y-16">
              {/* Features & Architecture */}
              <div>
                <h2 className="text-2xl font-bold font-heading mb-6 text-[var(--color-midnight)]">
                  Architecture & Technical Capabilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)]"
                    >
                      <div className="w-6 h-6 rounded-full bg-blue-50 text-[var(--color-primary)] flex items-center justify-center text-xs font-bold mb-3">
                        {idx + 1}
                      </div>
                      <p className="text-sm font-medium text-slate-800 leading-snug">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Execution Process for this Service */}
              <div>
                <h2 className="text-2xl font-bold font-heading mb-6 text-[var(--color-midnight)]">
                  How We Deliver Your {service.shortTitle}
                </h2>
                <div className="space-y-4">
                  {processSteps.slice(0, 5).map((step) => (
                    <div
                      key={step.number}
                      className="flex gap-4 p-5 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-slate-50/50"
                    >
                      <span className="font-mono text-sm font-bold text-[var(--color-primary)] shrink-0">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-slate-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {step.details || step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar (1 Col) */}
            <div className="space-y-8">
              {/* Deliverables Card */}
              <div className="p-6 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                  Tangible Deliverables
                </h3>
                <ul className="space-y-3">
                  {service.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <svg
                        className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0"
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack Card */}
              <div className="p-6 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ideal Client Profile */}
              <div className="p-6 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-slate-50">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Best Suited For
                </h3>
                <ul className="space-y-2">
                  {service.idealFor.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-600 italic">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Services */}
      <section className="py-16 bg-slate-50 border-t border-[var(--color-border)]">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold font-heading text-slate-900">
              Other Specialized Capabilities
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Explore how we support the full digital product lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="card group no-underline block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{other.icon}</span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[var(--color-primary)] transition-colors">
                    {other.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 line-clamp-3">
                  {other.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
