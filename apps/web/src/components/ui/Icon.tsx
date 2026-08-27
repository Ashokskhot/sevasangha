import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  Camera,
  HeartHandshake,
  Menu,
  Users,
  X,
} from "lucide-react";

export const icons = {
  community: Users,
  events: CalendarDays,
  contributions: HeartHandshake,
  gallery: Camera,
  menu: Menu,
  close: X,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function Icon({
  name,
  size = 24,
  strokeWidth = 2,
  className = "",
}: IconProps) {
  const IconComponent = icons[name];

  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
    />
  );
}