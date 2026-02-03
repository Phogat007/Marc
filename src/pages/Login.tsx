import { SafariWindow } from "@/components/ui/safari-window";
import { SketchButton } from "@/components/ui/sketch-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Mail, Lock, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <SafariWindow title={isSignUp ? "Join Marc" : "Welcome Back"}>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-handwritten font-bold text-primary sketch-underline mb-2">
              Marc
            </h1>
            <p className="font-comic text-muted-foreground">
              {isSignUp ? "Start your social media automation journey!" : "Ready to automate your social media?"}
            </p>
          </div>

          <div className="space-y-6">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="name" className="font-comic font-medium">Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="pl-10 font-comic"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="font-comic font-medium">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="pl-10 font-comic"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="font-comic font-medium">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 font-comic"
                />
              </div>
            </div>

            <SketchButton variant="default" size="lg" className="w-full">
              {isSignUp ? "Start Free Trial" : "Sign In"}
            </SketchButton>

            <div className="relative">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-background px-2 text-sm font-comic text-muted-foreground">or</span>
              </div>
            </div>

            <SketchButton 
              variant="outline" 
              size="lg" 
              className="w-full"
              onClick={() => window.location.href = '/gmail-connection'}
            >
              Continue with Google
            </SketchButton>

            <div className="text-center space-y-2">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-comic text-primary hover:underline block mx-auto text-center"
              >
                {isSignUp 
                  ? "Already have an account? Sign in" 
                  : "New to Marc? Create account"}
              </button>
              
              {!isSignUp && (
                <Link 
                  to="/forgot-password"
                  className="font-comic text-muted-foreground hover:text-primary transition-colors block text-sm"
                >
                  Forgot your password?
                </Link>
              )}
            </div>

            {isSignUp && (
              <div className="bg-mint p-4 rounded-lg text-center">
                <p className="font-handwritten text-sm text-foreground">
                  ✨ 14-day free trial, no credit card required!
                </p>
              </div>
            )}
          </div>
        </SafariWindow>

        <div className="text-center mt-8">
          <Link to="/" className="font-comic text-muted-foreground hover:text-primary transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;