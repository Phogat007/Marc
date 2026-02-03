import { Navigation } from "@/components/navigation";
import { PricingSection } from "@/components/pricing-section";
import { Footer } from "@/components/footer";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;