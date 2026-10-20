import { faqItems } from "@/content/data";
import { Accordion } from "@/components/ui/Accordion";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-padding"
      style={{
        background:
          "linear-gradient(180deg, var(--color-background) 0%, rgba(139, 92, 246, 0.02) 50%, var(--color-background) 100%)",
      }}
    >
      <div className="container-main" style={{ maxWidth: "768px" }}>
        <RevealOnScroll>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="text-eyebrow" style={{ marginBottom: "0.75rem" }}>
              FAQ
            </p>
            <h2 className="text-h2" id="faq-heading">
              Common questions
            </h2>
            <p
              className="text-body-lg"
              style={{
                color: "var(--color-text-secondary)",
                maxWidth: "480px",
                margin: "1rem auto 0",
              }}
            >
              Answers to the things we get asked most often.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <Accordion items={faqItems} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
