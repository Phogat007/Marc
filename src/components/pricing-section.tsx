
import { PricingCard } from "@/components/pricing/pricing-card";
import { PricingFAQ } from "@/components/pricing/pricing-faq";
import { Star, Crown } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "per month",
      description: "Perfect for personal brands",
      color: "bg-mint",
      badge: null,
      features: [
        "50 posts per month",
        "2 social platforms",
        "Basic templates",
        "Standard support",
        "Analytics dashboard"
      ]
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For growing businesses",
      color: "bg-primary",
      badge: { icon: <Star className="w-4 h-4" />, text: "Most Popular", color: "bg-sky" },
      features: [
        "200 posts per month",
        "All 4 platforms",
        "Premium templates",
        "Priority support",
        "Advanced analytics",
        "Custom scheduling",
        "Team collaboration"
      ]
    },
    {
      name: "Agency",
      price: "$99",
      period: "per month",
      description: "For agencies & enterprises",
      color: "bg-peach",
      badge: { icon: <Crown className="w-4 h-4" />, text: "Best Value", color: "bg-pink" },
      features: [
        "Unlimited posts",
        "All platforms + extras",
        "White-label solution",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced automation",
        "API access",
        "Custom branding"
      ]
    }
  ];

  return (
    <section id="pricing" className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-handwritten font-bold text-foreground mb-6">
          Simple,{" "}
          <span className="text-primary sketch-underline">
            Playful Pricing
          </span>
        </h2>
        <p className="text-xl font-comic text-muted-foreground max-w-3xl mx-auto">
          No hidden fees, no confusing tiers. Just pick what works for you! 
        </p>
        <div className="flex justify-center mt-6">
          <div className="bg-mint p-2 rounded-full">
            <p className="font-handwritten text-lg text-foreground px-4">
              ✨ 14-day free trial on all plans!
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} index={index} />
        ))}
      </div>

      <PricingFAQ />
    </section>
  );
};
