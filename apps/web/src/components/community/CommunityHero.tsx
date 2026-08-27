import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

import type { Community } from "@/types/community";

interface CommunityHeroProps {
  community: Community;
}

export function CommunityHero({
  community,
}: CommunityHeroProps) {
  return (
    <section className="relative overflow-hidden bg-text">
      <div className="absolute inset-0">
        <Image
          src={community.heroImageUrl}
          alt={community.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-3xl text-white">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-white/80">
            <span className="rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-sm">
              {community.category}
            </span>

            <span className="flex items-center gap-1.5">
              <MapPin size={15} />
              {community.location}
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {community.name}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
            {community.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/communities/${community.id}/events`}
              className="inline-flex items-center justify-center gap-2 rounded-(--radius-button) bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              <CalendarDays size={17} />
              View Events
            </Link>

            <Link
              href={`/communities/${community.id}/about`}
              className="inline-flex items-center justify-center gap-2 rounded-(--radius-button) bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Learn About Us
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}