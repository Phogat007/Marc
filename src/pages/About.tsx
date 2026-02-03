import { Navigation } from "@/components/navigation";
import { SafariWindow } from "@/components/ui/safari-window";
import { SketchButton } from "@/components/ui/sketch-button";
import { Footer } from "@/components/footer";
import { Heart, Users, Target, Zap } from "lucide-react";
import marcMascot from "@/assets/marc-mascot.jpg";

const About = () => {
  const teamValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Made with Love",
      description: "Every feature is crafted with creators in mind",
      color: "bg-pink"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description: "We listen to our users and build what they need",
      color: "bg-sky"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Simple Solutions",
      description: "Complex problems solved with simple, playful tools",
      color: "bg-mint"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Always Evolving",
      description: "Constantly improving and adding new features",
      color: "bg-peach"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="container mx-auto px-4 py-16">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-handwritten font-bold text-foreground mb-6">
              Meet the team behind{" "}
              <span className="text-primary sketch-underline">Marc</span>
            </h1>
            <p className="text-xl font-comic text-muted-foreground max-w-3xl mx-auto">
              We're the innovative team at <strong>Flux8labs</strong> who got tired of spending hours on social media management. 
              So we built Marc to do the heavy lifting for creators everywhere! 
            </p>
          </div>

          {/* Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <SafariWindow title="Our Story" className="scattered-box">
              <div className="space-y-4">
                <p className="font-comic text-foreground">
                  It all started when our team at Flux8labs spent countless hours creating content for social media campaigns. 
                  There had to be a better way! 
                </p>
                <p className="font-comic text-foreground">
                  After months of late-night coding sessions and countless iterations, Marc was born. 
                  A friendly AI automation buddy that turns one simple prompt into posts across all platforms.
                </p>
                <p className="font-comic text-foreground">
                  Today, Marc helps thousands of creators and businesses save time and grow their audience while 
                  keeping the human touch in their content. Built with love by the Flux8labs team.
                </p>
              </div>
            </SafariWindow>

            <SafariWindow title="Marc's Mission" className="scattered-box">
              <div className="text-center">
                <img 
                  src={marcMascot} 
                  alt="Marc mascot" 
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="font-handwritten text-2xl font-bold text-primary mb-4">
                  "Make social media fun again!"
                </h3>
                <p className="font-comic text-muted-foreground">
                  Our mission at Flux8labs is simple: give creators their time back so they can focus on what they love most - creating amazing content and connecting with their audience. We believe technology should empower creativity, not complicate it.
                </p>
              </div>
            </SafariWindow>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-4xl font-handwritten font-bold text-center text-foreground mb-12">
              What we believe in
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamValues.map((value, index) => (
                <SafariWindow key={index} className="scattered-box text-center">
                  <div className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <div className="text-foreground">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="font-handwritten text-xl font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="font-comic text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </SafariWindow>
              ))}
            </div>
          </div>

          {/* CTA */}
          <SafariWindow className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-handwritten font-bold text-foreground mb-4">
              Ready to join the Marc family?
            </h2>
            <p className="font-comic text-muted-foreground mb-8">
              Thousands of creators trust Marc with their social media. 
              Join them and see why automation can be both powerful and playful!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SketchButton variant="default" size="lg">
                Start Free Trial
              </SketchButton>
              <SketchButton variant="outline" size="lg">
                Watch Demo
              </SketchButton>
            </div>
          </SafariWindow>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;