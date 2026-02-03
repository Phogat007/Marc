
import { SketchButton } from "@/components/ui/sketch-button";
import { SafariWindow } from "@/components/ui/safari-window";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

export const FeaturesCTA = () => {
  return (
    <SafariWindow className="bg-gradient-to-r from-primary/10 to-mint/20 border-primary/20">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
        </div>
        
        <h3 className="font-handwritten text-3xl font-bold text-foreground mb-4">
          Ready to let Marc handle your social media?
        </h3>
        
        <p className="font-comic text-lg text-muted-foreground mb-6">
          Join thousands of creators who've automated their way to success
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/login">
            <SketchButton variant="default" size="lg" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </SketchButton>
          </Link>
          <Link to="/pricing">
            <SketchButton variant="outline" size="lg">
              View Pricing
            </SketchButton>
          </Link>
        </div>

        <p className="font-comic text-sm text-muted-foreground mt-4">
          No credit card required • 14-day free trial
        </p>
      </div>
    </SafariWindow>
  );
};
