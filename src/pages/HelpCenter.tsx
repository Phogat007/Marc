import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SafariWindow } from "@/components/ui/safari-window";
import { Search, Book, MessageCircle, Video, Download, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SketchButton } from "@/components/ui/sketch-button";

const helpCategories = [
  {
    title: "Getting Started",
    icon: Book,
    articles: [
      "Setting up your Marc account",
      "Connecting your social media platforms",
      "Creating your first automated post",
      "Understanding the dashboard"
    ]
  },
  {
    title: "Automation Features",
    icon: MessageCircle,
    articles: [
      "How to schedule posts",
      "Using AI content generation",
      "Setting up recurring posts",
      "Managing multiple accounts"
    ]
  },
  {
    title: "Video Tutorials",
    icon: Video,
    articles: [
      "Marc overview walkthrough",
      "Advanced scheduling techniques",
      "Analytics and insights",
      "Troubleshooting common issues"
    ]
  },
  {
    title: "Downloads & Resources",
    icon: Download,
    articles: [
      "Content planning templates",
      "Social media best practices guide",
      "API documentation",
      "Brand guidelines for creators"
    ]
  }
];

const popularArticles = [
  "How do I connect Instagram to Marc?",
  "Can I edit scheduled posts?",
  "What's included in the free trial?",
  "How to use AI for caption generation",
  "Setting up team collaboration",
  "Understanding analytics reports"
];

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-handwritten font-bold text-primary sketch-underline mb-4">
            Help Center
          </h1>
          <p className="text-xl font-comic text-muted-foreground max-w-2xl mx-auto mb-8">
            Find answers, get support, and learn how to make the most of Marc.
          </p>
          
          {/* Search Bar */}
          <SafariWindow className="max-w-2xl mx-auto">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for help articles..."
                  className="pl-10 font-comic"
                />
              </div>
              <SketchButton variant="default">
                Search
              </SketchButton>
            </div>
          </SafariWindow>
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {helpCategories.map((category, index) => (
            <SafariWindow key={index}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="font-handwritten text-2xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>
                
                <div className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <button
                      key={articleIndex}
                      className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-secondary/50 transition-colors text-left"
                    >
                      <span className="font-comic text-foreground">{article}</span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </button>
                  ))}
                </div>
              </div>
            </SafariWindow>
          ))}
        </div>

        {/* Popular Articles */}
        <SafariWindow className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            <h2 className="font-handwritten text-3xl font-bold text-primary sketch-underline text-center">
              Popular Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularArticles.map((article, index) => (
                <button
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors text-left"
                >
                  <span className="font-comic text-foreground">{article}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </button>
              ))}
            </div>
          </div>
        </SafariWindow>

        {/* Contact Support */}
        <SafariWindow className="max-w-2xl mx-auto">
          <div className="text-center space-y-6">
            <h2 className="font-handwritten text-3xl font-bold text-primary sketch-underline">
              Still Need Help?
            </h2>
            <p className="font-comic text-muted-foreground">
              Can't find what you're looking for? Our support team is here to help!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SketchButton variant="default">
                <MessageCircle className="w-4 h-4 mr-2" />
                Live Chat
              </SketchButton>
              <SketchButton variant="outline">
                Contact Support
              </SketchButton>
            </div>
            
            <div className="bg-mint p-4 rounded-lg">
              <p className="font-comic text-sm text-foreground">
                💡 Tip: Include screenshots and detailed steps when contacting support for faster resolution!
              </p>
            </div>
          </div>
        </SafariWindow>
      </main>

      <Footer />
    </div>
  );
};

export default HelpCenter;