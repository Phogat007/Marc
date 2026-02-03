import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SafariWindow } from "@/components/ui/safari-window";
import { Shield, Eye, Lock, Users, FileText, Mail } from "lucide-react";

const privacyPrinciples = [
  {
    icon: Shield,
    title: "Data Protection",
    description: "Your data is encrypted and protected with industry-standard security measures."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We're clear about what data we collect and how we use it."
  },
  {
    icon: Lock,
    title: "User Control",
    description: "You have full control over your data and can delete it anytime."
  },
  {
    icon: Users,
    title: "No Selling",
    description: "We never sell your personal data to third parties."
  }
];

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-handwritten font-bold text-primary sketch-underline mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl font-comic text-muted-foreground max-w-2xl mx-auto">
            Your privacy matters to us. Here's how we protect and handle your data.
          </p>
          <p className="font-comic text-sm text-muted-foreground mt-4">
            Last updated: December 15, 2024
          </p>
        </div>

        {/* Privacy Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {privacyPrinciples.map((principle, index) => (
            <SafariWindow key={index}>
              <div className="text-center space-y-4">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <principle.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-handwritten text-xl font-bold text-foreground">
                  {principle.title}
                </h3>
                <p className="font-comic text-sm text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            </SafariWindow>
          ))}
        </div>

        {/* Privacy Policy Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <SafariWindow>
            <div className="space-y-6">
              <h2 className="font-handwritten text-3xl font-bold text-primary sketch-underline">
                What Information We Collect
              </h2>
              
              <div className="space-y-4 font-comic text-foreground">
                <div>
                  <h3 className="font-handwritten text-xl font-bold mb-2">Account Information</h3>
                  <p className="text-muted-foreground">
                    When you create an account, we collect your name, email address, and password. 
                    This information is necessary to provide you with access to Marc's features.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-handwritten text-xl font-bold mb-2">Social Media Data</h3>
                  <p className="text-muted-foreground">
                    With your explicit permission, we access your connected social media accounts to 
                    schedule posts and provide analytics. We only access what's necessary for our service.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-handwritten text-xl font-bold mb-2">Usage Data</h3>
                  <p className="text-muted-foreground">
                    We collect information about how you use Marc, including features accessed, 
                    content created, and performance metrics to improve our service.
                  </p>
                </div>
              </div>
            </div>
          </SafariWindow>

          <SafariWindow>
            <div className="space-y-6">
              <h2 className="font-handwritten text-3xl font-bold text-primary sketch-underline">
                How We Use Your Information
              </h2>
              
              <div className="space-y-4 font-comic text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Provide and maintain Marc's social media automation services</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Schedule and publish content to your connected social media accounts</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Generate analytics and insights about your social media performance</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Improve our AI content generation and recommendation features</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Send you important updates about your account and our service</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Provide customer support and respond to your inquiries</p>
                </div>
              </div>
            </div>
          </SafariWindow>

          <SafariWindow>
            <div className="space-y-6">
              <h2 className="font-handwritten text-3xl font-bold text-primary sketch-underline">
                Data Sharing and Security
              </h2>
              
              <div className="space-y-4 font-comic text-foreground">
                <div>
                  <h3 className="font-handwritten text-xl font-bold mb-2">Third-Party Sharing</h3>
                  <p className="text-muted-foreground">
                    We do not sell, trade, or otherwise transfer your personal information to third parties. 
                    We only share data with trusted service providers who help us operate Marc, and they 
                    are bound by strict confidentiality agreements.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-handwritten text-xl font-bold mb-2">Security Measures</h3>
                  <p className="text-muted-foreground">
                    Your data is protected using industry-standard encryption both in transit and at rest. 
                    We implement regular security audits and follow best practices to keep your information safe.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-handwritten text-xl font-bold mb-2">Data Retention</h3>
                  <p className="text-muted-foreground">
                    We retain your data only as long as necessary to provide our services. 
                    You can request deletion of your account and data at any time.
                  </p>
                </div>
              </div>
            </div>
          </SafariWindow>

          <SafariWindow>
            <div className="space-y-6">
              <h2 className="font-handwritten text-3xl font-bold text-primary sketch-underline">
                Your Rights and Controls
              </h2>
              
              <div className="space-y-4 font-comic text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Access:</strong> Request a copy of the personal data we hold about you</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Correction:</strong> Update or correct your personal information</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Deletion:</strong> Request deletion of your account and associated data</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Portability:</strong> Export your data in a machine-readable format</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Consent:</strong> Withdraw consent for data processing at any time</p>
                </div>
              </div>
            </div>
          </SafariWindow>

          <SafariWindow>
            <div className="space-y-6">
              <h2 className="font-handwritten text-3xl font-bold text-primary sketch-underline">
                Contact Us
              </h2>
              
              <div className="space-y-4">
                <p className="font-comic text-muted-foreground">
                  If you have any questions about this Privacy Policy or how we handle your data, 
                  please don't hesitate to contact us:
                </p>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-comic text-foreground">privacy@marc-app.com</span>
                </div>
                
                <div className="bg-mint p-4 rounded-lg">
                  <p className="font-comic text-sm text-foreground">
                    📋 For data requests or privacy concerns, we'll respond within 30 days.
                  </p>
                </div>
              </div>
            </div>
          </SafariWindow>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;