import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  icon?: boolean;
  external?: boolean;
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
    outline:
      "btn-font inline-flex items-center justify-center gap-2 border-0 bg-mps-accent text-mps-accent-dark transition hover:opacity-80",
  };

  const classes = cn(
    "inline-flex items-center justify-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mps-accent-dark",
    variants[variant],
    variant === "outline" && "rounded-petal px-[var(--mps-button-padding)] py-[var(--mps-button-padding)]",
    className,
  );

  return (
    <a href={href} className={classes}>
      {icon && <Phone className="h-4 w-4 shrink-0" aria-hidden />}
      {children}
    </a>
  );
}
