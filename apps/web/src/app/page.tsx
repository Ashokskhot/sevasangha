import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { events } from "@/data/events";
import {
  featuredCommunities,
  platformFeatures,
} from "@/data/home";
import { Building2, CalendarDays, Clock3, MapPin } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-orange-100 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-green-100 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-8 md:gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <Badge variant="primary">
              Community • Service • Togetherness
            </Badge>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl">
              Serving
              <span className="text-primary">
                {" "}
                Communities
              </span>
              <br />
              Digitally.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-text-muted">
              Bring your community together, celebrate events,
              stay connected with members, and make every
              contribution count.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/communities"
                className="inline-flex items-center justify-center rounded-(--radius-button) bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary-dark"
              >
                Explore Communities
              </Link>

              <Button
                variant="outline"
                size="lg"
              >
                Learn More
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-text-muted">
              <span>✓ Community focused</span>
              <span>✓ Simple to use</span>
              <span>✓ Built for everyone</span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="mx-auto max-w-md">
              <Card className="overflow-hidden p-0">
                <div className="bg-primary px-6 py-8 text-white">
                  <p className="text-sm opacity-90">
                    Your Community
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    Together We Serve
                  </h2>

                  <p className="mt-2 text-sm opacity-90">
                    Connect • Participate • Serve
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 p-6">
                  <div className="rounded-xl bg-orange-50 p-4">
                    <div className="text-2xl">
                      <Icon name="community" size={24} className="text-primary" />
                    </div>

                    <p className="mt-2 text-sm font-semibold">
                      Members
                    </p>

                    <p className="mt-1 text-xs text-text-muted">
                      Stay connected
                    </p>
                  </div>

                  <div className="rounded-xl bg-green-50 p-4">
                    <div className="text-2xl">
                      <Icon name="events" size={24} className="text-primary" />
                    </div>

                    <p className="mt-2 text-sm font-semibold">
                      Events
                    </p>

                    <p className="mt-1 text-xs text-text-muted">
                      Join together
                    </p>
                  </div>

                  <div className="rounded-xl bg-yellow-50 p-4">
                    <div className="text-2xl">
                      <Icon name="contributions" size={24} className="text-primary" />
                    </div>

                    <p className="mt-2 text-sm font-semibold">
                      Contributions
                    </p>

                    <p className="mt-1 text-xs text-text-muted">
                      Serve together
                    </p>
                  </div>

                  <div className="rounded-xl bg-blue-50 p-4">
                    <div className="text-2xl">
                      <Icon name="gallery" size={24} className="text-primary" />
                    </div>

                    <p className="mt-2 text-sm font-semibold">
                      Memories
                    </p>

                    <p className="mt-1 text-xs text-text-muted">
                      Share moments
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <Section>
        <SectionHeading
          eyebrow="Everything Together"
          title="Built for communities"
          description="Simple tools that help your community stay connected, organized and active."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {platformFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl">
                <Icon name={feature.icon} size={24} />
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-text-muted">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Communities */}
      <section className="bg-white">
        <Section>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Discover"
              title="Find your community"
              description="Explore communities that are part of SevaSangha."
            />

            <Link
              href="/communities"
              className="inline-flex items-center justify-center rounded-(--radius-button) border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-orange-50"
            >
              View All Communities
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredCommunities.map((community) => (
              <Card
                key={community.id}
                className="overflow-hidden transition-shadow duration-200 hover:shadow-(--shadow-card-hover)"
              >
                <div className="flex h-44 items-center justify-center bg-linear-to-br from-orange-100 to-yellow-50">
                  <div className="text-6xl">
                    <Building2 size={64} strokeWidth={1.5} className="text-primary" />
                  </div>
                </div>

                <div className="p-6">
                  <Badge variant="secondary">
                    Community
                  </Badge>

                  <h3 className="mt-4 text-xl font-semibold">
                    {community.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-primary">
                    {community.location}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-text-muted">
                    {community.description}
                  </p>

                  <Link
                    href={`/communities/${community.id}`}
                    className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline"
                  >
                    View Community →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </section>

      {/* Upcoming Events */}
      <section className="bg-surface-muted">
        <Section>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Upcoming"
              title="What's happening"
              description="Stay connected with upcoming events and activities from our communities."
            />

            <Link
              href="/events"
              className="inline-flex items-center justify-center rounded-(--radius-button) border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-orange-50"
            >
              View All Events
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {events.slice(0, 3).map((event) => (
              <Card
                key={event.id}
                className="p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-primary">
                    <CalendarDays size={24} />
                  </div>

                  <div>
                    <Badge>
                      {event.category}
                    </Badge>

                    <h3 className="mt-3 text-lg font-semibold text-text">
                      {event.title}
                    </h3>

                    <Link
                      href={`/communities/${event.communityId}`}
                      className="mt-1 block text-sm font-medium text-primary hover:underline"
                    >
                      {event.communityName}
                    </Link>
                  </div>
                </div>

                <div className="mt-5 space-y-2 text-sm text-text-muted">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 size={16} />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </section>

      {/* Connection CTA */}
      <Section>
        <div className="overflow-hidden rounded-(--radius-card) bg-secondary px-6 py-12 text-center text-white md:px-12 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-100">
            Stay Connected
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold md:text-4xl">
            Strong communities start with people coming together.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-green-50 md:text-base">
            Discover events, participate in activities and
            stay connected with your community.
          </p>

          <div className="mt-8">
            <Link
              href="/communities"
              className="inline-flex items-center justify-center rounded-(--radius-button) bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary-dark"
            >
              Explore Communities
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}