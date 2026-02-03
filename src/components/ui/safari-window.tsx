import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SafariWindowProps {
  children: ReactNode;
  title?: string;
  className?: string;
  showButtons?: boolean;
}

export const SafariWindow = ({ 
  children, 
  title, 
  className, 
  showButtons = true 
}: SafariWindowProps) => {
  return (
    <div className={cn("safari-window", className)}>
      {showButtons && (
        <div className="safari-header">
          <div className="flex gap-2">
            <div className="safari-button safari-button-red"></div>
            <div className="safari-button safari-button-yellow"></div>
            <div className="safari-button safari-button-green"></div>
          </div>
          {title && (
            <div className="flex-1 text-center text-sm font-comic text-muted-foreground">
              {title}
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};