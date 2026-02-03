import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SafariWindow } from "@/components/ui/safari-window";
import { MapPin, Clock, Users, Heart, ArrowRight } from "lucide-react";
import { SketchButton } from "@/components/ui/sketch-button";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our team to build the next generation of social media automation tools. We're looking for someone passionate about React, TypeScript, and beautiful UIs."
  },
  {
    id: 2,
    title: "Product Marketing Manager",
    department: "Marketing",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Help us tell Marc's story to the world. We need someone who understands creator economy and can build compelling marketing campaigns."
  },
  {
    id: 3,
    title: "Customer Success Specialist",
    department: "Support",
    location: "Remote",
    type: "Full-time",
    description: "Be the voice of our users and help them succeed with Marc. Perfect for someone who loves helping others and solving problems."
  }
];

const benefits = [
  "Competitive salary and equity",
  "Comprehensive health insurance",
  "Flexible work arrangements",
  "Unlimited PTO policy",
  "Learning and development budget",
  "Home office setup stipend"
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-handwritten font-bold text-primary sketch-underline mb-4">
            Join the Marc Team
          </h1>
          <p className="text-xl font-comic text-muted-foreground max-w-2xl mx-auto">
            Help us build the future of social media automation. We're looking for passionate, creative people who want to make a difference.
          </p>
        </div>

        {/* Company Culture */}
        <SafariWindow className="max-w-4xl mx-auto mb-16">
          <div className="text-center space-y-6">
            <h2 className="font-handwritten text-4xl font-bold text-primary sketch-underline">
              Our Culture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="bg-mint w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-handwritten text-xl font-bold">Passion First</h3>
                <p className="font-comic text-muted-foreground">
                  We're passionate about what we do and believe that passion drives innovation.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-sky w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-handwritten text-xl font-bold">Team Spirit</h3>
                <p className="font-comic text-muted-foreground">
                  We succeed together, support each other, and celebrate wins as a team.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-pink w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <ArrowRight className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-handwritten text-xl font-bold">Growth Mindset</h3>
                <p className="font-comic text-muted-foreground">
                  We're always learning, growing, and pushing the boundaries of what's possible.
                </p>
              </div>
            </div>
          </div>
        </SafariWindow>

        {/* Job Openings */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="font-handwritten text-4xl font-bold text-primary sketch-underline text-center mb-12">
            Open Positions
          </h2>
          
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <SafariWindow key={job.id}>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-handwritten text-2xl font-bold text-foreground">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm font-comic text-muted-foreground mt-2">
                        <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">
                          {job.department}
                        </span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    
                    <SketchButton variant="default">
                      Apply Now
                    </SketchButton>
                  </div>
                  
                  <p className="font-comic text-muted-foreground">
                    {job.description}
                  </p>
                </div>
              </SafariWindow>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <SafariWindow className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <h2 className="font-handwritten text-4xl font-bold text-primary sketch-underline">
              Benefits & Perks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="font-comic text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-mint p-6 rounded-lg mt-8">
              <p className="font-handwritten text-lg text-foreground">
                Don't see a role that fits? We're always looking for amazing people!
              </p>
              <SketchButton variant="outline" className="mt-4">
                Send Us Your Resume
              </SketchButton>
            </div>
          </div>
        </SafariWindow>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;