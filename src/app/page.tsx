import { HeroSection } from "@/components/sections/HeroSection";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { LiveStatsSection } from "@/components/sections/LiveStatsSection";
import { VirtualOffice } from "@/components/studio/VirtualOffice";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CostEstimator } from "@/components/interactive/CostEstimator";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { WhySection } from "@/components/sections/WhySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechSection } from "@/components/sections/TechSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <LiveStatsSection />
      <VirtualOffice />
      <FeaturedWorkSection />
      <ServicesSection />
      <CostEstimator />
      <TestimonialsSection />
      <TeamSection />
      <WhySection />
      <ProcessSection />
      <TechSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
