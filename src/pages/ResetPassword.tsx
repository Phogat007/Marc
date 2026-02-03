import { SafariWindow } from "@/components/ui/safari-window";
import { SketchButton } from "@/components/ui/sketch-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Eye, EyeOff, CheckCircle, X, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const passwordRequirements = [
    { text: "At least 8 characters", test: (pwd: string) => pwd.length >= 8 },
    { text: "One uppercase letter", test: (pwd: string) => /[A-Z]/.test(pwd) },
    { text: "One lowercase letter", test: (pwd: string) => /[a-z]/.test(pwd) },
    { text: "One number", test: (pwd: string) => /\d/.test(pwd) },
    { text: "One special character", test: (pwd: string) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd) }
  ];

  const passwordsMatch = password === confirmPassword && password.length > 0;
  const allRequirementsMet = passwordRequirements.every(req => req.test(password));

  useEffect(() => {
    // Simulate token validation
    const validateToken = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsTokenValid(!!token); // Simple validation - just check if token exists
    };
    
    validateToken();
  }, [token]);

  useEffect(() => {
    if (isSubmitted && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isSubmitted && countdown === 0) {
      navigate('/login');
    }
  }, [isSubmitted, countdown, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!allRequirementsMet || !passwordsMatch) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isTokenValid === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <SafariWindow title="Validating Reset Link">
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="font-comic text-muted-foreground">Checking your reset link...</p>
            </div>
          </SafariWindow>
        </div>
      </div>
    );
  }

  if (!isTokenValid) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <SafariWindow title="Invalid Reset Link">
            <div className="text-center space-y-6">
              <X className="w-16 h-16 text-destructive mx-auto" />
              <div className="space-y-4">
                <h2 className="font-handwritten text-2xl font-bold text-foreground">
                  Oops! Invalid Link
                </h2>
                <div className="bg-destructive/10 p-4 rounded-lg">
                  <p className="font-comic text-sm text-foreground">
                    This password reset link is invalid or has expired. Links are only valid for 1 hour.
                  </p>
                </div>
              </div>
              <Link to="/forgot-password">
                <SketchButton variant="default" size="lg" className="w-full">
                  Request New Reset Link
                </SketchButton>
              </Link>
            </div>
          </SafariWindow>
          
          <div className="text-center mt-8">
            <Link to="/login" className="font-comic text-muted-foreground hover:text-primary transition-colors">
              ← Back to login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <SafariWindow title="Create New Password">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-handwritten font-bold text-primary sketch-underline mb-2">
              Marc
            </h1>
            <p className="font-comic text-muted-foreground">
              {isSubmitted ? "Password updated successfully!" : "Create your new password"}
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="password" className="font-comic font-medium">New Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-10 pr-12 font-comic"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="font-comic font-medium">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-10 pr-12 font-comic"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="bg-secondary/50 p-4 rounded-lg space-y-3">
                <h4 className="font-comic font-medium text-sm">Password Requirements:</h4>
                <div className="space-y-1">
                  {passwordRequirements.map((req, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      {req.test(password) ? (
                        <Check className="w-4 h-4 text-primary" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground" />
                      )}
                      <span className={`text-xs font-comic ${
                        req.test(password) ? 'text-primary' : 'text-muted-foreground'
                      }`}>
                        {req.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Password Match Indicator */}
              {confirmPassword.length > 0 && (
                <div className="flex items-center space-x-2">
                  {passwordsMatch ? (
                    <Check className="w-4 h-4 text-primary" />
                  ) : (
                    <X className="w-4 h-4 text-destructive" />
                  )}
                  <span className={`text-xs font-comic ${
                    passwordsMatch ? 'text-primary' : 'text-destructive'
                  }`}>
                    {passwordsMatch ? 'Passwords match!' : 'Passwords do not match'}
                  </span>
                </div>
              )}

              <SketchButton 
                type="submit" 
                variant="default" 
                size="lg" 
                className="w-full"
                disabled={!allRequirementsMet || !passwordsMatch || isLoading}
              >
                {isLoading ? "Updating..." : "Update Password"}
              </SketchButton>
            </form>
          ) : (
            <div className="space-y-6 text-center">
              <div className="flex justify-center">
                <CheckCircle className="w-16 h-16 text-primary" />
              </div>
              
              <div className="bg-mint p-6 rounded-lg space-y-4">
                <h3 className="font-handwritten text-lg font-bold text-foreground">
                  All set! 🎉
                </h3>
                <p className="font-comic text-sm text-foreground">
                  Your password has been updated successfully. You'll be redirected to login in {countdown} seconds.
                </p>
              </div>

              <Link to="/login">
                <SketchButton variant="outline" size="lg" className="w-full">
                  Continue to Login
                </SketchButton>
              </Link>
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

export default ResetPassword;