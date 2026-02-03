
import { HeroMainContent } from "@/components/hero/hero-main-content";
import { HeroMascot } from "@/components/hero/hero-mascot";
import { SocialPlatforms } from "@/components/hero/social-platforms";
import { FeatureGrid } from "@/components/hero/feature-grid";
import { HeroImageSection } from "@/components/hero/hero-image-section";

export const HeroSection = () => {
  return (
    <section id="home" className="container mx-auto px-4 py-16">
      <HeroMainContent />

      {/* Scattered Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <HeroMascot />
        <SocialPlatforms />
        <FeatureGrid />
      </div>

      <HeroImageSection />
    </section>
  );
};
