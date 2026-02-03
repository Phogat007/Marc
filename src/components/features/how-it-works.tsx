
import { SafariWindow } from "@/components/ui/safari-window";
import { MessageCircle, Wand2, Send } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Tell Marc",
      description: "Just describe what you want to share",
      color: "bg-pink"
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "Marc Creates",
      description: "AI crafts perfect posts for each platform",
      color: "bg-mint"
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "Auto Posts",
      description: "Content goes live at optimal times",
      color: "bg-sky"
    }
  ];

  return (
    <SafariWindow className="mb-8">
      <div className="text-center mb-8">
        <h3 className="font-handwritten text-3xl font-bold text-foreground mb-4">
          How Marc Works His Magic ✨
        </h3>
        <p className="font-comic text-muted-foreground">
          Three simple steps to social media success
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
              {step.icon}
            </div>
            <h4 className="font-handwritten text-xl font-bold text-foreground mb-2">
              {step.title}
            </h4>
            <p className="font-comic text-sm text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </SafariWindow>
  );
};
