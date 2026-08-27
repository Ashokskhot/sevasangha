import { Search } from "lucide-react";

import { EventCard } from "@/components/event/EventCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getEvents } from "@/services/eventService";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main>
      {/* Header */}
      <section className="bg-white">
        <Section>
          <SectionHeading
            eyebrow="Community Events"
            title="What's happening"
            description="Discover upcoming events, celebrations and activities from communities on SevaSangha."
            align="center"
          />

          {/* Search */}
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 shadow-sm">
              <Search
                size={20}
                className="shrink-0 text-text-muted"
              />

              <input
                type="search"
                placeholder="Search events..."
                className="w-full bg-transparent text-sm text-text outline-none placeholder:text-text-muted"
              />
            </div>
          </div>
        </Section>
      </section>

      {/* Event listing */}
      <Section>
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-text-muted">
            Showing{" "}
            <span className="font-semibold text-text">
              {events.length}
            </span>{" "}
            upcoming events
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}