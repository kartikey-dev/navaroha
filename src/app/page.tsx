import { HeroSection } from "@/components/sections/HeroSection";
import { VirtualOffice } from "@/components/studio/VirtualOffice";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CostEstimator } from "@/components/interactive/CostEstimator";
import { WhySection } from "@/components/sections/WhySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechSection } from "@/components/sections/TechSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VirtualOffice />
      <ServicesSection />
      <CostEstimator />
      <WhySection />
      <ProcessSection />
      <TechSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
