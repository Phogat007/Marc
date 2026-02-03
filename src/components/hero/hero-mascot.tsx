
import { SafariWindow } from "@/components/ui/safari-window";
import marcMascot from "@/assets/marc-mascot.jpg";

export const HeroMascot = () => {
  return (
    <div className="md:col-span-1">
      <SafariWindow className="scattered-box">
        <div className="text-center">
          <img 
            src={marcMascot} 
            alt="Marc mascot character" 
            className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
          />
          <h3 className="font-handwritten text-xl font-bold text-primary mb-2">
            Hi, I'm Marc! 👋
          </h3>
          <p className="font-comic text-sm text-muted-foreground">
            Your friendly automation buddy
          </p>
        </div>
      </SafariWindow>
    </div>
  );
};
