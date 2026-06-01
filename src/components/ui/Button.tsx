import * as React from "react";
import { cn } from "../../lib/utils";

type BadgeVariant =
  | "default"
  | "secondary"
  | "outline"
  | "destructive"
  | "warning"
  | "success";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants: Record<BadgeVariant, string> = {
    default: "bg-[#00E5A8]/15 text-[#00E5A8] border border-[#00E5A8]/20",
    secondary: "bg-white/10 text-white/80 border border-white/10",
    outline: "border border-white/20 text-white/80",
    destructive: "bg-red-500/15 text-red-400 border border-red-500/20",
    warning: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20",
    success: "bg-green-500/15 text-green-400 border border-green-500/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}