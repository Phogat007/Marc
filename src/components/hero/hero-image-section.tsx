
import { SafariWindow } from "@/components/ui/safari-window";
import socialMediaHero from "@/assets/social-media-hero.jpg";

export const HeroImageSection = () => {
  return (
    <div className="mt-16">
      <SafariWindow className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="font-handwritten text-2xl font-bold text-primary mb-2">
            See Marc in Action! 🚀
          </h3>
          <p className="font-comic text-muted-foreground">
            Watch how Marc transforms your ideas into engaging posts
          </p>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img 
            src={socialMediaHero} 
            alt="Marc social media automation dashboard" 
            className="w-full h-auto object-cover"
          />
        </div>
      </SafariWindow>
    </div>
  );
};
