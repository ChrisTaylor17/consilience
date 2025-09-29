import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { FeaturesSection } from "@/components/ui/features-section"
import { CTASection } from "@/components/ui/cta-section"
import { Navigation } from "@/components/ui/navigation"

function DemoHeroGeometric() {
    return (
        <>
            <Navigation />
            <div className="pt-16">
                <HeroGeometric 
                    badge="CONSILIENCE Network"
                    title1="Connect Through"
                    title2="Skills & Passion" 
                />
                <FeaturesSection />
                <CTASection />
            </div>
        </>
    )
}

export { DemoHeroGeometric }