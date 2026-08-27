import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "neutral";
}

const variantClasses = {
  primary:
    "bg-orange-100 text-[var(--color-primary-dark)]",
  secondary:
    "bg-green-100 text-[var(--color-secondary-dark)]",
  accent:
    "bg-yellow-100 text-yellow-800",
  neutral:
    "bg-gray-100 text-gray-700",
};

export function Badge({
  children,
  variant = "primary",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-(--radius-pill) px-3 py-1 text-xs font-medium ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}