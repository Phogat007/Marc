
import { SafariWindow } from "@/components/ui/safari-window";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const SocialPlatforms = () => {
  const platforms = [
    { name: "Facebook", icon: Facebook, color: "bg-sky" },
    { name: "X", icon: Twitter, color: "bg-pink" },
    { name: "LinkedIn", icon: Linkedin, color: "bg-mint" },
    { name: "Instagram", icon: Instagram, color: "bg-peach" }
  ];

  return (
    <div className="md:col-span-1">
      <SafariWindow className="scattered-box">
        <h3 className="font-handwritten text-lg font-bold text-foreground mb-4 text-center">
          All Platforms
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className={`${platform.color} p-3 rounded-lg flex flex-col items-center gap-2`}
            >
              <platform.icon className="w-6 h-6 text-foreground" />
              <span className="font-comic text-xs text-foreground">
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      </SafariWindow>
    </div>
  );
};
