import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SafariWindow } from "@/components/ui/safari-window";
import { Mail, MessageCircle, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SketchButton } from "@/components/ui/sketch-button";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-handwritten font-bold text-primary sketch-underline mb-4">
            Get in Touch
          </h1>
          <p className="text-xl font-comic text-muted-foreground max-w-2xl mx-auto">
            Have questions, suggestions, or just want to say hi? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <SafariWindow>
            <div className="space-y-6">
              <h2 className="font-handwritten text-3xl font-bold text-primary sketch-underline">
                Send us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-comic font-medium">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="font-comic"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-comic font-medium">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="font-comic"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-comic font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="font-comic"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-comic font-medium">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    className="font-comic"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-comic font-medium">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what's on your mind..."
                    className="font-comic min-h-[120px]"
                  />
                </div>
                
                <SketchButton variant="default" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </SketchButton>
              </form>
            </div>
          </SafariWindow>

          {/* Contact Information */}
          <div className="space-y-8">
            <SafariWindow>
              <div className="space-y-6">
                <h2 className="font-handwritten text-3xl font-bold text-primary sketch-underline">
                  Other Ways to Reach Us
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-sky w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-handwritten text-lg font-bold text-foreground">Email</h3>
                      <p className="font-comic text-muted-foreground">hello@marc-app.com</p>
                      <p className="font-comic text-sm text-muted-foreground">We'll get back to you within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-mint w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-handwritten text-lg font-bold text-foreground">Live Chat</h3>
                      <p className="font-comic text-muted-foreground">Available in-app</p>
                      <p className="font-comic text-sm text-muted-foreground">Monday - Friday, 9 AM - 6 PM PST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-pink w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-handwritten text-lg font-bold text-foreground">Phone</h3>
                      <p className="font-comic text-muted-foreground">+1 (555) 123-MARC</p>
                      <p className="font-comic text-sm text-muted-foreground">Business hours only</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-peach w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-handwritten text-lg font-bold text-foreground">Office</h3>
                      <p className="font-comic text-muted-foreground">
                        123 Creator Street<br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SafariWindow>

            {/* FAQ Quick Links */}
            <SafariWindow>
              <div className="space-y-4">
                <h3 className="font-handwritten text-xl font-bold text-primary sketch-underline">
                  Quick Help
                </h3>
                <div className="space-y-2">
                  <button className="font-comic text-muted-foreground hover:text-primary transition-colors text-left block">
                    → How do I connect my social accounts?
                  </button>
                  <button className="font-comic text-muted-foreground hover:text-primary transition-colors text-left block">
                    → Can I schedule posts in advance?
                  </button>
                  <button className="font-comic text-muted-foreground hover:text-primary transition-colors text-left block">
                    → How does the free trial work?
                  </button>
                  <button className="font-comic text-muted-foreground hover:text-primary transition-colors text-left block">
                    → What platforms do you support?
                  </button>
                </div>
                <SketchButton variant="outline" className="w-full mt-4">
                  Visit Help Center
                </SketchButton>
              </div>
            </SafariWindow>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;