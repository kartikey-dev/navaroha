import { faqItems } from "@/content/data";
import { Accordion } from "@/components/ui/Accordion";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-padding bg-[#0B0F1A] border-y border-white/10 relative overflow-hidden"
    >
      <div className="container-main" style={{ maxWidth: "768px" }}>
        <RevealOnScroll>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="text-eyebrow mb-2 block !text-[var(--color-cyan)]">
              Executive Boardroom Answers
            </span>
            <h2 className="text-h2 text-white" id="faq-heading">
              Frequently Asked Questions
            </h2>
            <p
              className="text-body-lg text-slate-300"
              style={{
                maxWidth: "480px",
                margin: "1rem auto 0",
              }}
            >
              Clear, transparent details on engagement models, IP ownership, timelines, and security.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <Accordion items={faqItems} />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
