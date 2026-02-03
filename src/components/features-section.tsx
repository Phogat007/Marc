
import { FeatureCard } from "@/components/features/feature-card";
import { HowItWorks } from "@/components/features/how-it-works";
import { FeaturesCTA } from "@/components/features/features-cta";
import { 
  MessageCircle, 
  Image, 
  Calendar, 
  Zap, 
  Target, 
  BarChart3
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Smart Captions",
      description: "AI-powered captions that match your brand voice perfectly",
      color: "bg-pink",
      demo: "✨ Just type: 'Share our new product launch' → Marc creates engaging posts for all platforms!"
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Auto Images",
      description: "Generate stunning visuals or use your own photos",
      color: "bg-mint",
      demo: "🎨 Marc creates custom graphics that fit each platform's style guide"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Smart Scheduling",
      description: "Posts at optimal times for maximum engagement",
      color: "bg-sky",
      demo: "⏰ Marc knows when your audience is most active on each platform"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Multi-Platform",
      description: "Facebook, X, LinkedIn, Instagram - all in one go",
      color: "bg-peach",
      demo: "🚀 One prompt = Four perfectly tailored posts across all your channels"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "From prompt to published in under 30 seconds",
      color: "bg-pink",
      demo: "⚡ Watch Marc work his magic in real-time"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics",
      description: "Track performance and optimize your content",
      color: "bg-mint",
      demo: "📊 See which posts perform best and let Marc learn from your wins"
    }
  ];

  return (
    <section id="features" className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-handwritten font-bold text-foreground mb-6">
          Marc's{" "}
          <span className="text-primary sketch-underline">
            Magic Powers
          </span>
        </h2>
        <p className="text-xl font-comic text-muted-foreground max-w-3xl mx-auto">
          Everything you need to dominate social media without breaking a sweat
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} index={index} />
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <HowItWorks />
        <FeaturesCTA />
      </div>
    </section>
  );
};
