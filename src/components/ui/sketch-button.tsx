import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const sketchButtonVariants = cva(
  "btn-sketch inline-flex items-center justify-center whitespace-nowrap font-comic font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-glow shadow-lg",
        secondary: "bg-secondary text-secondary-foreground hover:bg-mint shadow-md",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        pink: "bg-pink text-foreground hover:bg-accent shadow-md",
        peach: "bg-peach text-foreground hover:bg-primary hover:text-primary-foreground shadow-md",
        mint: "bg-mint text-foreground hover:bg-secondary shadow-md",
        sky: "bg-sky text-foreground hover:bg-primary hover:text-primary-foreground shadow-md",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-9 px-3 text-sm",
        lg: "h-14 px-8 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface SketchButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sketchButtonVariants> {}

const SketchButton = forwardRef<HTMLButtonElement, SketchButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(sketchButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
SketchButton.displayName = "SketchButton";

export { SketchButton, sketchButtonVariants };