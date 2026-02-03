
import { SketchButton } from "@/components/ui/sketch-button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroMainContent = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-6xl md:text-7xl font-handwritten font-bold text-foreground mb-6">
        Meet Marc,{" "}
        <span className="text-primary sketch-underline">
          your social media sidekick!
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl font-comic text-muted-foreground mb-8 max-w-3xl mx-auto">
        From one simple prompt to posts everywhere ✨
        <br />
        <span className="text-primary font-medium">
          Just tell Marc what you want to share!
        </span>
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <Link to="/login">
          <SketchButton variant="default" size="lg" className="group">
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </SketchButton>
        </Link>
        <SketchButton variant="outline" size="lg">
          Watch Demo
        </SketchButton>
      </div>
    </div>
  );
};
