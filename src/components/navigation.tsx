import { SafariWindow } from "@/components/ui/safari-window";
import { SketchButton } from "@/components/ui/sketch-button";
import { Home, Star, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="sticky top-4 z-50 mx-4 mb-8">
      <SafariWindow title="Marc - Social Media Automation" className="backdrop-blur-sm bg-card/95">
        <div className="flex items-center justify-between -mt-2 -mb-2">
          <div className="flex items-center space-x-1">
            <h1 className="text-2xl font-handwritten font-bold text-primary sketch-underline">
              Marc
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-comic">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <Link to="/features" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-comic">
              <Star className="w-4 h-4" />
              Features
            </Link>
            <Link to="/pricing" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-comic">
              <DollarSign className="w-4 h-4" />
              Pricing
            </Link>
            <Link to="/about" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-comic">
              <Users className="w-4 h-4" />
              About
            </Link>
          </div>

          <Link to="/login">
            <SketchButton variant="default" size="default">
              Get Started
            </SketchButton>
          </Link>
        </div>
      </SafariWindow>
    </nav>
  );
};