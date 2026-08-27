import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

import type { CommunityEvent } from "@/types/event";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

interface EventCardProps {
  event: CommunityEvent;
}

export function EventCard({
  event,
}: EventCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow duration-200 hover:shadow-(--shadow-card-hover)">
      {/* Event visual */}
      <div className="relative flex h-44 items-center justify-center bg-linear-to-br from-orange-100 to-yellow-50">
        <CalendarDays
          size={64}
          strokeWidth={1.5}
          className="text-primary"
        />

        <div className="absolute left-4 top-4">
          <Badge>
            {event.category}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-text">
          {event.title}
        </h2>

        <Link
          href={`/communities/${event.communityId}`}
          className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
        >
          {event.communityName}
        </Link>

        <div className="mt-5 space-y-3 text-sm text-text-muted">
          <div className="flex items-center gap-3">
            <CalendarDays
              size={17}
              className="shrink-0 text-primary"
            />

            <span>{event.date}</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock3
              size={17}
              className="shrink-0 text-primary"
            />

            <span>{event.time}</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin
              size={17}
              className="shrink-0 text-primary"
            />

            <span>{event.location}</span>
          </div>
        </div>

        <p className="mt-5 text-sm leading-6 text-text-muted">
          {event.description}
        </p>

        <Link
            href={`/events/${event.id}`}
            className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline"
        >
            View Event →
        </Link>
      </div>
    </Card>
  );
}