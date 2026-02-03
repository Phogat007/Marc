
import { SafariWindow } from "@/components/ui/safari-window";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  demo: string;
  index: number;
}

export const FeatureCard = ({ icon, title, description, color, demo, index }: FeatureCardProps) => {
  return (
    <SafariWindow 
      className={`scattered-box hover:scale-105 transition-all duration-300`}
    >
      <div className="text-center">
        <div className={`${color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
          {icon}
        </div>
        
        <h3 className="font-handwritten text-2xl font-bold text-foreground mb-3">
          {title}
        </h3>
        
        <p className="font-comic text-muted-foreground mb-4">
          {description}
        </p>

        <div className="bg-muted p-4 rounded-lg">
          <p className="font-comic text-sm text-foreground">
            {demo}
          </p>
        </div>
      </div>
    </SafariWindow>
  );
};
