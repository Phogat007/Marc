import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SafariWindow } from "@/components/ui/safari-window";
import { Calendar, User, Tag, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SketchButton } from "@/components/ui/sketch-button";

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Better Social Media Engagement",
    excerpt: "Learn how to create content that your audience actually wants to engage with. From timing to tone, we cover everything you need to know.",
    author: "Marc Team",
    date: "Dec 15, 2024",
    category: "Social Media",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Future of AI in Content Creation",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we create and distribute content across social platforms.",
    author: "Sarah Johnson",
    date: "Dec 12, 2024",
    category: "AI & Technology",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Building Your Personal Brand Online",
    excerpt: "A comprehensive guide to establishing and maintaining a strong personal brand across all social media platforms.",
    author: "Mike Chen",
    date: "Dec 10, 2024",
    category: "Branding",
    readTime: "6 min read"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-handwritten font-bold text-primary sketch-underline mb-4">
            Marc's Blog
          </h1>
          <p className="text-xl font-comic text-muted-foreground max-w-2xl mx-auto">
            Tips, tricks, and insights to help you master social media automation and grow your online presence.
          </p>
        </div>

        {/* Search and Filter */}
        <SafariWindow className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 font-comic"
              />
            </div>
            <SketchButton variant="default">
              Search
            </SketchButton>
          </div>
        </SafariWindow>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <SafariWindow key={post.id} className="h-full">
              <article className="space-y-4">
                <div className="bg-gradient-to-br from-primary/20 to-mint/30 h-48 rounded-lg flex items-center justify-center">
                  <Tag className="w-12 h-12 text-primary" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-comic text-muted-foreground">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="font-handwritten text-xl font-bold text-foreground">
                    {post.title}
                  </h2>
                  
                  <p className="font-comic text-muted-foreground text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="font-comic text-sm text-muted-foreground">
                        {post.author}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="font-comic text-sm text-muted-foreground">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </SafariWindow>
          ))}
        </div>

        {/* Newsletter Signup */}
        <SafariWindow className="max-w-2xl mx-auto mt-16">
          <div className="text-center space-y-6">
            <h3 className="font-handwritten text-3xl font-bold text-primary sketch-underline">
              Stay Updated
            </h3>
            <p className="font-comic text-muted-foreground">
              Get the latest tips and insights delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                className="font-comic flex-1"
              />
              <SketchButton variant="default">
                Subscribe
              </SketchButton>
            </div>
          </div>
        </SafariWindow>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;