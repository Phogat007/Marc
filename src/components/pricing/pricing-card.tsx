
import { SketchButton } from "@/components/ui/sketch-button";
import { Check, Zap } from "lucide-react";
import { ReactNode } from "react";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  color: string;
  badge: { icon: ReactNode; text: string; color: string } | null;
  features: string[];
  index: number;
}

export const PricingCard = ({ name, price, period, description, color, badge, features, index }: PricingCardProps) => {
  return (
    <div 
      key={index}
      className={`bg-card border border-border rounded-xl p-8 scattered-box relative hover:scale-105 transition-all duration-300 ${
        badge ? 'ring-2 ring-primary ring-offset-4' : ''
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className={`${badge.color} px-4 py-2 rounded-full flex items-center gap-2 shadow-lg`}>
            {badge.icon}
            <span className="font-comic font-bold text-sm text-foreground">
              {badge.text}
            </span>
          </div>
        </div>
      )}

      <div className="text-center">
        <div className={`${color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
          <Zap className="w-10 h-10 text-foreground" />
        </div>

        <h3 className="font-handwritten text-3xl font-bold text-foreground mb-2">
          {name}
        </h3>
        
        <p className="font-comic text-muted-foreground mb-6">
          {description}
        </p>

        <div className="mb-6">
          <span className="text-4xl font-handwritten font-bold text-foreground">
            {price}
          </span>
          <span className="font-comic text-muted-foreground ml-2">
            {period}
          </span>
        </div>

        <div className="space-y-3 mb-8">
          {features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center gap-3">
              <div className="bg-primary w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="font-comic text-sm text-foreground">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <SketchButton 
          variant={badge ? "default" : "outline"} 
          size="lg" 
          className="w-full"
        >
          Get Started
        </SketchButton>
      </div>
    </div>
  );
};
