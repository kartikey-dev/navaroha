import type { Metadata } from "next";
import { caseStudies } from "@/content/data";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { CTASection } from "@/components/sections/CTASection";
import { CaseStudiesGallery } from "@/components/sections/CaseStudiesGallery";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies",
  description:
    "Explore how Navaroha architects and builds enterprise SaaS platforms, luxury web flagships, interactive 3D experiences, and cross-platform apps.",
};

export default function WorkPage() {
  return (
    <>
      {/* Work Hero */}
      <section
        className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59, 130, 246, 0.08), transparent 60%)",
        }}
      >
        <div className="container-main text-center">
          <RevealOnScroll>
            <p className="text-eyebrow mb-4">Proven Architecture</p>
            <h1 className="text-h1 max-w-3xl mx-auto mb-6">
              Selected projects and engineering case studies
            </h1>
            <p className="text-body-lg max-w-2xl mx-auto text-[var(--color-text-secondary)]">
              We focus on substance over hype. Here are real-world systems we have designed,
              architected, and engineered with rigor.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Case Studies Gallery with Category Filtering */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <CaseStudiesGallery studies={caseStudies} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
