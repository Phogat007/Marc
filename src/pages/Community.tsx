import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SafariWindow } from "@/components/ui/safari-window";
import { Users, MessageSquare, Trophy, Calendar, Heart, Share } from "lucide-react";
import { SketchButton } from "@/components/ui/sketch-button";

const communityStats = [
  { label: "Active Members", value: "12,000+", icon: Users },
  { label: "Daily Discussions", value: "500+", icon: MessageSquare },
  { label: "Success Stories", value: "2,000+", icon: Trophy },
  { label: "Events This Month", value: "8", icon: Calendar }
];

const featuredDiscussions = [
  {
    title: "Best practices for Instagram Reels automation",
    author: "Sarah K.",
    replies: 24,
    hearts: 56,
    timeAgo: "2 hours ago"
  },
  {
    title: "How I grew from 1K to 100K followers using Marc",
    author: "Mike Chen",
    replies: 89,
    hearts: 234,
    timeAgo: "1 day ago"
  },
  {
    title: "Weekly content planning template (free download)",
    author: "Emma J.",
    replies: 45,
    hearts: 123,
    timeAgo: "3 days ago"
  }
];

const upcomingEvents = [
  {
    title: "Marc Masterclass: Advanced Automation",
    date: "Dec 20, 2024",
    time: "2:00 PM PST",
    attendees: 234
  },
  {
    title: "Creator Spotlight: Instagram Success Stories",
    date: "Dec 22, 2024",
    time: "11:00 AM PST",
    attendees: 156
  },
  {
    title: "Q&A with the Marc Team",
    date: "Dec 24, 2024",
    time: "3:00 PM PST",
    attendees: 89
  }
];

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-handwritten font-bold text-primary sketch-underline mb-4">
            Marc Community
          </h1>
          <p className="text-xl font-comic text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow creators, share tips, and grow together in our vibrant community.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {communityStats.map((stat, index) => (
            <SafariWindow key={index}>
              <div className="text-center space-y-3">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-handwritten text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="font-comic text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            </SafariWindow>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Featured Discussions */}
          <div className="space-y-6">
            <h2 className="font-handwritten text-3xl font-bold text-primary sketch-underline">
              Trending Discussions
            </h2>
            
            <div className="space-y-4">
              {featuredDiscussions.map((discussion, index) => (
                <SafariWindow key={index}>
                  <div className="space-y-3">
                    <h3 className="font-handwritten text-lg font-bold text-foreground">
                      {discussion.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-sm font-comic text-muted-foreground">
                      <span>by {discussion.author} • {discussion.timeAgo}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 pt-3 border-t border-border">
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        <span className="font-comic text-sm">{discussion.replies}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4 text-primary" />
                        <span className="font-comic text-sm">{discussion.hearts}</span>
                      </div>
                      <SketchButton variant="outline" size="sm" className="ml-auto">
                        Join Discussion
                      </SketchButton>
                    </div>
                  </div>
                </SafariWindow>
              ))}
            </div>
            
            <SketchButton variant="default" className="w-full">
              View All Discussions
            </SketchButton>
          </div>

          {/* Events & Activities */}
          <div className="space-y-6">
            <h2 className="font-handwritten text-3xl font-bold text-primary sketch-underline">
              Upcoming Events
            </h2>
            
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <SafariWindow key={index}>
                  <div className="space-y-3">
                    <h3 className="font-handwritten text-lg font-bold text-foreground">
                      {event.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-sm font-comic text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="font-comic text-sm text-muted-foreground">
                          {event.attendees} attending
                        </span>
                      </div>
                      <SketchButton variant="outline" size="sm">
                        RSVP
                      </SketchButton>
                    </div>
                  </div>
                </SafariWindow>
              ))}
            </div>
            
            <SketchButton variant="default" className="w-full">
              View All Events
            </SketchButton>
          </div>
        </div>

        {/* Join Community CTA */}
        <SafariWindow className="max-w-4xl mx-auto mt-16">
          <div className="text-center space-y-6">
            <h2 className="font-handwritten text-4xl font-bold text-primary sketch-underline">
              Ready to Join?
            </h2>
            <p className="font-comic text-muted-foreground max-w-2xl mx-auto">
              Join thousands of creators who are growing their social media presence together. 
              Share your wins, get help when you need it, and be part of something amazing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SketchButton variant="default" size="lg">
                <Users className="w-4 h-4 mr-2" />
                Join Community
              </SketchButton>
              <SketchButton variant="outline" size="lg">
                <Share className="w-4 h-4 mr-2" />
                Invite Friends
              </SketchButton>
            </div>
            
            <div className="bg-mint p-4 rounded-lg">
              <p className="font-comic text-sm text-foreground">
                🎉 New members get exclusive access to our starter pack with templates and guides!
              </p>
            </div>
          </div>
        </SafariWindow>
      </main>

      <Footer />
    </div>
  );
};

export default Community;