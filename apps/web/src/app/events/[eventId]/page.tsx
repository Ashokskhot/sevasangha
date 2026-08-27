import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  HeartHandshake,
  MapPin,
  Users,
} from "lucide-react";

import { events } from "@/data/events";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

interface EventDetailPageProps {
  params: Promise<{
    eventId: string;
  }>;
}

export default async function EventDetailPage({
  params,
}: EventDetailPageProps) {
  const { eventId } = await params;

  const event = events.find((item) => item.id === eventId);

  if (!event) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-white">
        <Section>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to Events
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-center">
            <div>
              <Badge>{event.category}</Badge>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-text md:text-5xl">
                {event.title}
              </h1>

              <Link
                href={`/communities/${event.communityId}`}
                className="mt-4 inline-block text-base font-semibold text-primary hover:underline"
              >
                {event.communityName}
              </Link>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
                {event.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg">
                  I&apos;m Interested
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                >
                  Share Event
                </Button>
              </div>
            </div>

            {/* Event visual */}
            <div className="flex h-72 items-center justify-center rounded-(--radius-card) bg-linear-to-br from-orange-100 to-yellow-50">
              <CalendarDays
                size={88}
                strokeWidth={1.25}
                className="text-primary"
              />
            </div>
          </div>
        </Section>
      </section>

      {/* Event information */}
      <section className="border-y border-border bg-surface-muted">
        <Section className="py-10 md:py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <EventInfo
              icon={<CalendarDays size={21} />}
              label="Date"
              value={event.date}
            />

            <EventInfo
              icon={<Clock3 size={21} />}
              label="Time"
              value={event.time}
            />

            <EventInfo
              icon={<MapPin size={21} />}
              label="Location"
              value={event.location}
            />

            <EventInfo
              icon={<Users size={21} />}
              label="Hosted by"
              value={event.communityName}
            />
          </div>
        </Section>
      </section>

      {/* Main content */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              About this event
            </p>

            <h2 className="mt-2 text-3xl font-bold text-text">
              Join the community
            </h2>

            <p className="mt-5 leading-7 text-text-muted">
              {event.description}
            </p>

            <p className="mt-4 leading-7 text-text-muted">
              Community events are a great way to meet other
              members, participate in activities and stay
              connected with everything happening around you.
            </p>

            <div className="mt-8 rounded-xl bg-orange-50 p-5">
              <div className="flex gap-3">
                <HeartHandshake
                  size={22}
                  className="mt-0.5 shrink-0 text-primary"
                />

                <div>
                  <h3 className="font-semibold text-text">
                    Everyone is welcome
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-text-muted">
                    Members and community participants are
                    welcome to join this event.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Event summary */}
          <Card className="h-fit p-6">
            <h3 className="font-semibold text-text">
              Event Details
            </h3>

            <div className="mt-5 space-y-5">
              <EventDetailRow
                icon={<CalendarDays size={18} />}
                label="Date"
                value={event.date}
              />

              <EventDetailRow
                icon={<Clock3 size={18} />}
                label="Time"
                value={event.time}
              />

              <EventDetailRow
                icon={<MapPin size={18} />}
                label="Location"
                value={event.location}
              />
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <Link
                href={`/communities/${event.communityId}`}
                className="text-sm font-semibold text-primary hover:underline"
              >
                Visit Community →
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-(--radius-card) bg-primary px-6 py-12 text-center text-white md:px-12 md:py-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            See you there
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-orange-50 md:text-base">
            Connect with your community and take part in
            this upcoming event.
          </p>

          <div className="mt-8">
            <Button
              size="lg"
              className="bg-primary-dark text-white hover:bg-orange-50"
            >
              I&apos;m Interested
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}

interface EventInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function EventInfo({
  icon,
  label,
  value,
}: EventInfoProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs text-text-muted">
          {label}
        </p>

        <p className="mt-1 truncate text-sm font-semibold text-text">
          {value}
        </p>
      </div>
    </div>
  );
}

interface EventDetailRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function EventDetailRow({
  icon,
  label,
  value,
}: EventDetailRowProps) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 text-primary">
        {icon}
      </div>

      <div>
        <p className="text-xs text-text-muted">
          {label}
        </p>

        <p className="mt-1 text-sm font-medium text-text">
          {value}
        </p>
      </div>
    </div>
  );
}