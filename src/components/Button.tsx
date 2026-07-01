import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  icon?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  icon = false,
}: ButtonProps) {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };

  return (
    <a href={href} className={cn(variants[variant], className)}>
      {icon && <Phone className="h-4 w-4 shrink-0" aria-hidden />}
      {children}
    </a>
  );
}
