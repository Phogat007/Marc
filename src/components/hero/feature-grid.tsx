
import { SafariWindow } from "@/components/ui/safari-window";
import { Zap, Calendar, Target } from "lucide-react";

export const FeatureGrid = () => {
  const features = [
    { icon: Zap, text: "Lightning Fast", color: "bg-pink" },
    { icon: Calendar, text: "Smart Scheduling", color: "bg-mint" },
    { icon: Target, text: "Multi-Platform", color: "bg-peach" }
  ];

  return (
    <div className="md:col-span-1">
      <SafariWindow className="scattered-box">
        <h3 className="font-handwritten text-lg font-bold text-foreground mb-4 text-center">
          Key Features
        </h3>
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <div className={`${feature.color} p-2 rounded-full`}>
                <feature.icon className="w-4 h-4 text-foreground" />
              </div>
              <span className="font-comic text-sm text-foreground">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </SafariWindow>
    </div>
  );
};
