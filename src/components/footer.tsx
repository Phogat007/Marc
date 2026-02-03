
import { SafariWindow } from "@/components/ui/safari-window";
import { Heart, Mail, MessageCircle, Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-16">
      {/* Wavy separator */}
      <div className="w-full h-8 mb-12">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-primary opacity-20"
          />
        </svg>
      </div>

      <SafariWindow className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-handwritten text-3xl font-bold text-primary sketch-underline">
              Marc
            </h3>
            <p className="font-comic text-muted-foreground">
              Your playful social media sidekick, making content creation fun and effortless.
            </p>
            <div className="flex gap-4">
              <div className="bg-sky w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Twitter className="w-5 h-5 text-foreground" />
              </div>
              <div className="bg-pink w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Github className="w-5 h-5 text-foreground" />
              </div>
              <div className="bg-mint w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Mail className="w-5 h-5 text-foreground" />
              </div>
            </div>
          </div>

          {/* Product Column */}
          <div className="space-y-4">
            <h4 className="font-handwritten text-xl font-bold text-foreground">
              Product
            </h4>
            <ul className="space-y-2 font-comic text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Features</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Pricing</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Integrations</li>
              <li className="hover:text-primary transition-colors cursor-pointer">API Docs</li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="font-handwritten text-xl font-bold text-foreground">
              Company
            </h4>
            <ul className="space-y-2 font-comic text-muted-foreground">
              <Link to="/about" className="hover:text-primary transition-colors cursor-pointer block">About Us</Link>
              <Link to="/blog" className="hover:text-primary transition-colors cursor-pointer block">Blog</Link>
              <Link to="/careers" className="hover:text-primary transition-colors cursor-pointer block">Careers</Link>
              <Link to="/contact" className="hover:text-primary transition-colors cursor-pointer block">Contact</Link>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h4 className="font-handwritten text-xl font-bold text-foreground">
              Support
            </h4>
            <ul className="space-y-2 font-comic text-muted-foreground">
              <Link to="/help-center" className="hover:text-primary transition-colors cursor-pointer block">Help Center</Link>
              <Link to="/community" className="hover:text-primary transition-colors cursor-pointer block">Community</Link>
              <Link to="/privacy" className="hover:text-primary transition-colors cursor-pointer block">Privacy</Link>
              <Link to="/gdpr" className="hover:text-primary transition-colors cursor-pointer block">GDPR</Link>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-comic text-muted-foreground text-center md:text-left">
              © 2024 Marc. Made with{" "}
              <Heart className="inline w-4 h-4 text-primary mx-1" />
              by{" "}
              <a 
                href="https://flux8labs.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Flux8labs
              </a>
              {" "}for creators everywhere.
            </p>
            
            <div className="flex items-center gap-4">
              <MessageCircle className="w-6 h-6 text-primary hover:scale-110 transition-transform cursor-pointer" />
            </div>
          </div>
        </div>
      </SafariWindow>
    </footer>
  );
};
