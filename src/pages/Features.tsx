import { Navigation } from "@/components/navigation";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Features;