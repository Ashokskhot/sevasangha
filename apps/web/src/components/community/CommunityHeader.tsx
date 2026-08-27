import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Camera,
  Home,
  Info,
  Menu,
  Users,
} from "lucide-react";

import type { Community } from "@/types/community";

interface CommunityHeaderProps {
  community: Community;
}

const navigation = [
  {
    label: "Home",
    href: "",
    icon: Home,
  },
  {
    label: "About",
    href: "/about",
    icon: Info,
  },
  {
    label: "Events",
    href: "/events",
    icon: CalendarDays,
  },
  {
    label: "Gallery",
    href: "/gallery",
    icon: Camera,
  },
  {
    label: "Members",
    href: "/members",
    icon: Users,
  },
];

export function CommunityHeader({
  community,
}: CommunityHeaderProps) {
  const basePath = `/communities/${community.id}`;

  return (
    <section className="border-b border-border bg-white">
      {/* Community identity */}
      <div className="border-b border-border bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-20 items-center justify-between gap-4 py-4">
            <div className="min-w-0">
              <Link
                href="/communities"
                className="mb-2 inline-flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-primary"
              >
                <ArrowLeft size={14} />
                All Communities
              </Link>

              <h1 className="truncate text-xl font-bold text-text sm:text-2xl">
                {community.name}
              </h1>

              <p className="mt-1 text-sm text-text-muted">
                {community.location}
              </p>
            </div>

            <div className="hidden shrink-0 items-center justify-center rounded-xl bg-orange-50 p-3 text-primary sm:flex">
              <Users size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop navigation */}
      <div className="mx-auto hidden max-w-7xl px-4 sm:px-6 md:block lg:px-8">
        <nav className="flex items-center gap-1 overflow-x-auto">
          {navigation.map((item) => {
            const href = `${basePath}${item.href}`;
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={href}
                className="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-4 py-4 text-sm font-medium text-text-muted transition-colors hover:border-primary hover:text-primary"
              >
                <Icon size={17} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl border border-border px-4 py-3 text-sm font-semibold text-text">
              <span className="flex items-center gap-2">
                <Menu size={18} />
                Community Menu
              </span>

              <span className="text-text-muted transition-transform group-open:rotate-180">
                ↓
              </span>
            </summary>

            <nav className="mt-2 rounded-xl border border-border bg-white p-2 shadow-sm">
              {navigation.map((item) => {
                const href = `${basePath}${item.href}`;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={href}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-text transition-colors hover:bg-orange-50 hover:text-primary"
                  >
                    <Icon size={17} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </details>
        </div>
      </div>
    </section>
  );
}