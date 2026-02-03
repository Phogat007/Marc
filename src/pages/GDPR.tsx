
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SafariWindow } from "@/components/ui/safari-window";
import { Shield, Lock, Eye, FileText, Users, Mail } from "lucide-react";

const GDPR = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-handwritten font-bold text-foreground mb-6">
              GDPR{" "}
              <span className="text-primary sketch-underline">
                Compliance
              </span>
            </h1>
            <p className="text-xl font-comic text-muted-foreground max-w-3xl mx-auto">
              Your privacy matters to us. Here's how we protect your data and respect your rights under GDPR.
            </p>
          </div>

          {/* Overview */}
          <SafariWindow title="What is GDPR?" className="mb-8">
            <div className="space-y-4">
              <p className="font-comic text-foreground">
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law that came into effect on May 25, 2018. 
                It gives individuals control over their personal data and simplifies the regulatory environment for international business.
              </p>
              <p className="font-comic text-muted-foreground">
                At Marc, we're committed to protecting your privacy and ensuring full compliance with GDPR requirements.
              </p>
            </div>
          </SafariWindow>

          {/* Your Rights */}
          <SafariWindow title="Your Data Rights" className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Eye className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-handwritten text-lg font-bold text-foreground mb-2">
                      Right to Access
                    </h3>
                    <p className="font-comic text-sm text-muted-foreground">
                      You have the right to know what personal data we hold about you and how we use it.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-mint w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-handwritten text-lg font-bold text-foreground mb-2">
                      Right to Rectification
                    </h3>
                    <p className="font-comic text-sm text-muted-foreground">
                      You can request corrections to any inaccurate or incomplete personal data.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-pink w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Lock className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-handwritten text-lg font-bold text-foreground mb-2">
                      Right to Erasure
                    </h3>
                    <p className="font-comic text-sm text-muted-foreground">
                      Also known as the "right to be forgotten" - you can request deletion of your personal data.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-sky w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-handwritten text-lg font-bold text-foreground mb-2">
                      Right to Portability
                    </h3>
                    <p className="font-comic text-sm text-muted-foreground">
                      You can request your data in a portable format to transfer to another service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-peach w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-handwritten text-lg font-bold text-foreground mb-2">
                      Right to Object
                    </h3>
                    <p className="font-comic text-sm text-muted-foreground">
                      You can object to certain types of processing, including direct marketing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Lock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-handwritten text-lg font-bold text-foreground mb-2">
                      Right to Restrict Processing
                    </h3>
                    <p className="font-comic text-sm text-muted-foreground">
                      You can request that we limit how we process your personal data in certain circumstances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SafariWindow>

          {/* How We Protect Your Data */}
          <SafariWindow title="How We Protect Your Data" className="mb-8">
            <div className="space-y-6">
              <div className="bg-mint p-4 rounded-lg">
                <h3 className="font-handwritten text-xl font-bold text-foreground mb-3">
                  🔒 Data Security Measures
                </h3>
                <ul className="space-y-2 font-comic text-sm text-foreground">
                  <li>• End-to-end encryption for all data transmission</li>
                  <li>• Secure data storage with industry-standard protocols</li>
                  <li>• Regular security audits and vulnerability assessments</li>
                  <li>• Limited access controls and employee training</li>
                  <li>• Automated data backup and recovery systems</li>
                </ul>
              </div>

              <div className="bg-pink p-4 rounded-lg">
                <h3 className="font-handwritten text-xl font-bold text-foreground mb-3">
                  📋 Data Processing Principles
                </h3>
                <ul className="space-y-2 font-comic text-sm text-foreground">
                  <li>• We only collect data that's necessary for our services</li>
                  <li>• Data is processed lawfully, fairly, and transparently</li>
                  <li>• We keep data accurate and up to date</li>
                  <li>• Data is stored only as long as necessary</li>
                  <li>• We ensure data integrity and confidentiality</li>
                </ul>
              </div>

              <div className="bg-sky p-4 rounded-lg">
                <h3 className="font-handwritten text-xl font-bold text-foreground mb-3">
                  🤝 Your Consent Matters
                </h3>
                <ul className="space-y-2 font-comic text-sm text-foreground">
                  <li>• Clear and explicit consent before data collection</li>
                  <li>• Easy-to-understand privacy notices</li>
                  <li>• Simple opt-out mechanisms for marketing communications</li>
                  <li>• Granular consent options for different data uses</li>
                  <li>• Consent can be withdrawn at any time</li>
                </ul>
              </div>
            </div>
          </SafariWindow>

          {/* Data We Collect */}
          <SafariWindow title="What Data We Collect" className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-handwritten text-xl font-bold text-primary">
                  Account Information
                </h3>
                <ul className="space-y-2 font-comic text-sm text-muted-foreground">
                  <li>• Name and email address</li>
                  <li>• Profile picture (optional)</li>
                  <li>• Business information</li>
                  <li>• Social media account connections</li>
                  <li>• Subscription and billing details</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-handwritten text-xl font-bold text-primary">
                  Usage Information
                </h3>
                <ul className="space-y-2 font-comic text-sm text-muted-foreground">
                  <li>• Content creation and posting activity</li>
                  <li>• App usage patterns and preferences</li>
                  <li>• Device and browser information</li>
                  <li>• IP address and location data</li>
                  <li>• Analytics and performance metrics</li>
                </ul>
              </div>
            </div>
          </SafariWindow>

          {/* Contact Information */}
          <SafariWindow title="Exercise Your Rights" className="mb-8">
            <div className="text-center space-y-6">
              <div className="bg-peach p-6 rounded-lg">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-handwritten text-2xl font-bold text-foreground mb-4">
                  Need Help with Your Data Rights?
                </h3>
                <p className="font-comic text-muted-foreground mb-4">
                  Contact our Data Protection Officer to exercise your GDPR rights or ask questions about our data practices.
                </p>
                <div className="space-y-2">
                  <p className="font-comic text-sm text-foreground">
                    <strong>Email:</strong> privacy@marc-app.com
                  </p>
                  <p className="font-comic text-sm text-foreground">
                    <strong>Response Time:</strong> Within 30 days as required by GDPR
                  </p>
                </div>
              </div>

              <div className="bg-mint p-4 rounded-lg">
                <p className="font-comic text-sm text-foreground">
                  💡 <strong>Quick Tip:</strong> Most data requests can be handled directly in your account settings. 
                  For complex requests or complete data deletion, please contact us directly.
                </p>
              </div>
            </div>
          </SafariWindow>

          {/* Last Updated */}
          <div className="text-center mt-12">
            <p className="font-comic text-sm text-muted-foreground">
              Last updated: January 2024 | This page is regularly updated to reflect any changes in our GDPR compliance practices.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GDPR;
