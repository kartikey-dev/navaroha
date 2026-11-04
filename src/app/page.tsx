import { HeroRedesignSection } from "@/components/sections/HeroRedesignSection";
import { VirtualOfficeRoomsSection } from "@/components/sections/VirtualOfficeRoomsSection";
import { LiveStatsSection } from "@/components/sections/LiveStatsSection";
import { MissionVisionSection } from "@/components/sections/MissionVisionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CaseStudiesRedesignSection } from "@/components/sections/CaseStudiesRedesignSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingAndTrustSection } from "@/components/sections/PricingAndTrustSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechSection } from "@/components/sections/TechSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      {/* 1. Cinematic Hero / Virtual Office Reception Intro */}
      <HeroRedesignSection />

      {/* 2. Interactive Virtual Office Rooms (Reception, Design Studio, Dev Lab, Boardroom) */}
      <VirtualOfficeRoomsSection />

      {/* 3. Live Stats Counters (Projects, Countries, Retention, Experience) */}
      <LiveStatsSection />

      {/* 4. About Us — Mission, Vision & Goals */}
      <MissionVisionSection />

      {/* 5. Comprehensive Services Breakdown */}
      <ServicesSection />

      {/* 6. Case Studies (Problem, What We Did, Measurable Outcomes + School Platform) */}
      <CaseStudiesRedesignSection />

      {/* 7. Warm Visual Team Showcase with Fun Facts & Skills */}
      <TeamSection />

      {/* 8. Client Testimonials & Video Review Reel */}
      <TestimonialsSection />

      {/* 9. Transparent Multi-Currency Pricing & Enterprise Trust Signals */}
      <PricingAndTrustSection />

      {/* 10. 6-Step Agile Engineering Process */}
      <ProcessSection />

      {/* 11. Engineering Technologies & AI Stacks */}
      <TechSection />

      {/* 12. Frequently Asked Questions */}
      <FAQSection />

      {/* 13. Frictionless Project Kickoff CTA */}
      <CTASection />
    </>
  );
}
