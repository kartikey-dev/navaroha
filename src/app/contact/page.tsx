import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "./ContactForm";
import { siteConfig } from "@/lib/site-config";
import { faqItems } from "@/content/data";
import { Accordion } from "@/components/ui/Accordion";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export const metadata: Metadata = {
  title: "Contact Navaroha — Start a Project",
  description:
    "Reach out to Navaroha to discuss your software engineering, website development, or AI automation project.",
};

export default function ContactPage() {
  return (
    <>
      <section
        className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59, 130, 246, 0.08), transparent 60%)",
        }}
      >
        <div className="container-main text-center">
          <RevealOnScroll>
            <p className="text-eyebrow mb-4">Start a Conversation</p>
            <h1 className="text-h1 max-w-3xl mx-auto mb-6">
              Let&apos;s build something exceptional together
            </h1>
            <p className="text-body-lg max-w-2xl mx-auto text-[var(--color-text-secondary)]">
              Whether you have a fully scoped specification or an early concept,
              we&apos;ll help you clarify requirements and chart the right technical
              path forward.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="py-16 md:py-24 border-t border-[var(--color-border)]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column (7 Cols) */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="p-12 text-center text-slate-500 bg-white rounded-[var(--radius-2xl)] border border-[var(--color-border)]">
                    Loading contact form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>

            {/* Sidebar Contact Info (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-[var(--radius-2xl)] bg-slate-50 border border-[var(--color-border)] space-y-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
                    Direct Email
                  </h3>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-lg font-semibold text-[var(--color-primary)] hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct channel monitored by engineering leads.
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--color-border)]">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
                    Response Commitment
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We respond to all qualified enquiries within 24 business
                    hours with an initial assessment and calendar link.
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--color-border)]">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
                    What Happens Next?
                  </h3>
                  <ol className="space-y-3 text-xs text-slate-600 list-decimal list-inside">
                    <li>
                      <strong className="text-slate-800">Initial Discovery:</strong>{" "}
                      A 30-minute introductory call to understand requirements.
                    </li>
                    <li>
                      <strong className="text-slate-800">Architecture Scope:</strong>{" "}
                      We draft a transparent milestone plan and budget options.
                    </li>
                    <li>
                      <strong className="text-slate-800">Sprint Kickoff:</strong>{" "}
                      Design and engineering begin with live weekly preview links.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Quick FAQ */}
              <div className="p-8 rounded-[var(--radius-2xl)] bg-white border border-[var(--color-border)] shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-4 font-heading">
                  Quick Questions
                </h3>
                <Accordion items={faqItems.slice(0, 3)} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
