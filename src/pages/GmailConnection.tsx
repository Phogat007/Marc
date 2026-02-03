import { SafariWindow } from "@/components/ui/safari-window";
import { SketchButton } from "@/components/ui/sketch-button";
import { Mail, CheckCircle, AlertCircle, Unlink, RefreshCw, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const GmailConnection = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionHealth, setConnectionHealth] = useState<'healthy' | 'warning' | 'error'>('healthy');
  const [lastConnected, setLastConnected] = useState<Date | null>(null);
  const [connectedEmail, setConnectedEmail] = useState("");
  const [showDisconnectConfirm, setShowDisconnectConfirm] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    
    // Simulate OAuth flow
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsConnected(true);
    setIsConnecting(false);
    setLastConnected(new Date());
    setConnectedEmail("user@gmail.com");
    setConnectionHealth('healthy');
  };

  const handleDisconnect = async () => {
    setIsConnected(false);
    setConnectedEmail("");
    setLastConnected(null);
    setShowDisconnectConfirm(false);
  };

  const checkConnectionHealth = async () => {
    setConnectionHealth('warning');
    // Simulate health check
    await new Promise(resolve => setTimeout(resolve, 1000));
    setConnectionHealth('healthy');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <SafariWindow title="Gmail Integration">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-handwritten font-bold text-primary sketch-underline mb-2">
              Marc
            </h1>
            <p className="font-comic text-muted-foreground">
              Connect your Gmail to enable email notifications and updates
            </p>
          </div>

          <div className="space-y-6">
            {/* Connection Status */}
            <div className={`p-6 rounded-lg border-2 border-dashed ${
              isConnected 
                ? 'border-primary bg-mint' 
                : 'border-muted-foreground bg-secondary/20'
            }`}>
              <div className="flex items-center justify-center mb-4">
                {isConnected ? (
                  <CheckCircle className="w-12 h-12 text-primary" />
                ) : (
                  <Mail className="w-12 h-12 text-muted-foreground" />
                )}
              </div>
              
              <div className="text-center space-y-2">
                <h3 className="font-handwritten text-lg font-bold">
                  {isConnected ? "Gmail Connected!" : "Gmail Not Connected"}
                </h3>
                
                {isConnected ? (
                  <div className="space-y-2">
                    <p className="font-comic text-sm text-foreground">
                      Connected account: <span className="font-medium text-primary">{connectedEmail}</span>
                    </p>
                    {lastConnected && (
                      <p className="font-comic text-xs text-muted-foreground">
                        Last connected: {lastConnected.toLocaleString()}
                      </p>
                    )}
                    
                    {/* Connection Health */}
                    <div className="flex items-center justify-center space-x-2 mt-3">
                      {connectionHealth === 'healthy' && (
                        <>
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="font-comic text-xs text-primary">Healthy</span>
                        </>
                      )}
                      {connectionHealth === 'warning' && (
                        <>
                          <AlertCircle className="w-4 h-4 text-yellow-500" />
                          <span className="font-comic text-xs text-yellow-600">Checking...</span>
                        </>
                      )}
                    </div>
                  </div>
                ) : (
                  <p className="font-comic text-sm text-muted-foreground">
                    Connect your Gmail account to receive notifications and updates from Marc
                  </p>
                )}
              </div>
            </div>

            {/* Permissions Explanation */}
            {!isConnected && (
              <div className="bg-sky p-4 rounded-lg space-y-3">
                <h4 className="font-handwritten text-lg font-bold text-foreground flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  What we'll access:
                </h4>
                <div className="font-comic text-sm text-foreground space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Send email notifications about your social media posts</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Receive weekly analytics reports</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Get notified about account updates and new features</p>
                  </div>
                </div>
                <p className="font-comic text-xs text-muted-foreground">
                  We will never read, store, or access your personal emails.
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4">
              {!isConnected ? (
                <SketchButton 
                  variant="default" 
                  size="lg" 
                  className="w-full"
                  onClick={handleConnect}
                  disabled={isConnecting}
                >
                  {isConnecting ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      Connect with Google
                    </>
                  )}
                </SketchButton>
              ) : (
                <div className="space-y-3">
                  <SketchButton 
                    variant="outline" 
                    size="lg" 
                    className="w-full"
                    onClick={checkConnectionHealth}
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Test Connection
                  </SketchButton>
                  
                  {!showDisconnectConfirm ? (
                    <SketchButton 
                      variant="secondary" 
                      size="lg" 
                      className="w-full"
                      onClick={() => setShowDisconnectConfirm(true)}
                    >
                      <Unlink className="w-4 h-4 mr-2" />
                      Disconnect Gmail
                    </SketchButton>
                  ) : (
                    <div className="bg-destructive/10 p-4 rounded-lg space-y-3">
                      <p className="font-comic text-sm text-center">
                        Are you sure you want to disconnect Gmail? You'll stop receiving email notifications.
                      </p>
                      <div className="flex space-x-2">
                        <SketchButton 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => setShowDisconnectConfirm(false)}
                        >
                          Cancel
                        </SketchButton>
                        <SketchButton 
                          variant="secondary" 
                          size="sm" 
                          className="flex-1"
                          onClick={handleDisconnect}
                        >
                          Disconnect
                        </SketchButton>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Troubleshooting Tips */}
            {isConnected && (
              <div className="bg-secondary/50 p-4 rounded-lg">
                <h4 className="font-handwritten text-sm font-bold mb-2">Troubleshooting Tips:</h4>
                <div className="font-comic text-xs text-muted-foreground space-y-1">
                  <p>• If you're not receiving emails, check your spam folder</p>
                  <p>• Make sure Gmail notifications are enabled in your Google account</p>
                  <p>• Try disconnecting and reconnecting if issues persist</p>
                  <p>• Contact support if the connection shows as unhealthy</p>
                </div>
              </div>
            )}
          </div>
        </SafariWindow>

        <div className="text-center mt-8 space-y-2">
          <Link to="/login" className="font-comic text-muted-foreground hover:text-primary transition-colors block">
            ← Back to account
          </Link>
          <Link to="/" className="font-comic text-muted-foreground hover:text-primary transition-colors block">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GmailConnection;