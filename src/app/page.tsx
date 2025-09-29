import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { FeaturesSection } from "@/components/ui/features-section";
import { CTASection } from "@/components/ui/cta-section";

export default function Home() {
  return (
    <main>
      <HeroGeometric 
        badge="CONSILIENCE Network"
        title1="Connect Through"
        title2="Skills & Passion" 
      />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}