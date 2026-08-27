import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { notFound } from "next/navigation";

import { EventCard } from "@/components/event/EventCard";
import { getCommunityById } from "@/services/communityService";
import { getEventsByCommunity } from "@/services/eventService";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface CommunityEventsPageProps {
  params: Promise<{
    communityId: string;
  }>;
}

export default async function CommunityEventsPage({
  params,
}: CommunityEventsPageProps) {
  const { communityId } = await params;

  const community = await getCommunityById(communityId);

  if (!community) {
    notFound();
  }

  const communityEvents = await getEventsByCommunity(communityId);

  return (
    <main>
      <Section>
        <SectionHeading
          eyebrow="Community Events"
          title="Upcoming events"
          description={`Discover upcoming events and activities from ${community.name}.`}
        />

        {communityEvents.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {communityEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-(--radius-card) border border-dashed border-border bg-surface-muted px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-primary">
              <CalendarDays size={26} />
            </div>

            <h2 className="mt-5 text-xl font-semibold text-text">
              No upcoming events
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-text-muted">
              There are currently no upcoming events for this
              community. Please check again later.
            </p>

            <Link
              href={`/communities/${community.id}`}
              className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline"
            >
              Back to Community →
            </Link>
          </div>
        )}
      </Section>
    </main>
  );
}