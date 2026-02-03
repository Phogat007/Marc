import { SafariWindow } from "@/components/ui/safari-window";
import { SketchButton } from "@/components/ui/sketch-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <SafariWindow title="Reset Your Password">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-handwritten font-bold text-primary sketch-underline mb-2">
              Marc
            </h1>
            <p className="font-comic text-muted-foreground">
              {isSubmitted 
                ? "Check your email for reset instructions!" 
                : "Enter your email to reset your password"}
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-comic font-medium">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="pl-10 font-comic"
                    required
                  />
                </div>
              </div>

              <div className="bg-mint p-4 rounded-lg">
                <p className="font-comic text-sm text-foreground">
                  💡 We'll send you a link to reset your password. The link will expire in 1 hour for security.
                </p>
              </div>

              <SketchButton 
                type="submit" 
                variant="default" 
                size="lg" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Reset Link"}
              </SketchButton>
            </form>
          ) : (
            <div className="space-y-6 text-center">
              <div className="flex justify-center">
                <CheckCircle className="w-16 h-16 text-primary" />
              </div>
              
              <div className="bg-mint p-6 rounded-lg space-y-4">
                <h3 className="font-handwritten text-lg font-bold text-foreground">
                  Reset link sent! 📧
                </h3>
                <div className="font-comic text-sm text-foreground space-y-2">
                  <p>We've sent a password reset link to:</p>
                  <p className="font-medium text-primary">{email}</p>
                  <p>Click the link in your email to reset your password.</p>
                  <p className="text-xs text-muted-foreground">
                    Didn't receive it? Check your spam folder or try again in a few minutes.
                  </p>
                </div>
              </div>

              <SketchButton 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={() => {
                  setIsSubmitted(false);
                  setEmail("");
                }}
              >
                Try Different Email
              </SketchButton>
            </div>
          )}
        </SafariWindow>

        <div className="text-center mt-8">
          <Link to="/login" className="font-comic text-muted-foreground hover:text-primary transition-colors">
            ← Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;