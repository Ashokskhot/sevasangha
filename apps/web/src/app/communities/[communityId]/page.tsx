import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  HeartHandshake,
  Image as ImageIcon,
  MapPin,
  Users,
} from "lucide-react";
import { notFound } from "next/navigation";

import { CommunityHero } from "@/components/community/CommunityHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { MemberCard } from "@/components/member/MemberCard";
import { EventCard } from "@/components/event/EventCard";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { getCommunityById } from "@/services/communityService";
import { getEventsByCommunity } from "@/services/eventService";
import { getGalleryImagesByCommunity } from "@/services/galleryService";
import { getMembersByCommunity } from "@/services/memberService";

interface CommunityPageProps {
  params: Promise<{
    communityId: string;
  }>;
}

export default async function CommunityPage({
  params,
}: CommunityPageProps) {
  const { communityId } = await params;

  const community = await getCommunityById(
    communityId
  );
  
  if (!community) {
    notFound();
  }

  const communityEvents = (
    await getEventsByCommunity(communityId)
  ).slice(0, 3);

  const communityGallery = (
    await getGalleryImagesByCommunity(communityId)
  ).slice(0, 4);

  const communityMembersList = (
    await getMembersByCommunity(communityId)
  ).slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <CommunityHero community={community} />

      {/* About preview */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              About Our Sangha
            </p>

            <h2 className="mt-3 text-3xl font-bold text-text md:text-4xl">
              Growing together through service
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-text-muted">
              {community.description}
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-text-muted">
              {community.mission}
            </p>

            <Link
              href={`/communities/${community.id}/about`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Learn more about us
              <ArrowRight size={17} />
            </Link>
          </div>

          <Card className="p-6">
            <div className="grid grid-cols-2 gap-5">
              <Stat
                icon={<CalendarDays size={20} />}
                value={community.establishedYear.toString()}
                label="Established"
              />

              <Stat
                icon={<Users size={20} />}
                value={`${community.memberCount}+`}
                label="Members"
              />

              <Stat
                icon={<HeartHandshake size={20} />}
                value={`${community.activities.length}`}
                label="Activities"
              />

              <Stat
                icon={<MapPin size={20} />}
                value={community.location.split(",")[0]}
                label="Location"
              />
            </div>
          </Card>
        </div>
      </Section>

      {/* Events */}
      <section className="bg-surface-muted">
        <Section>
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="What's Happening"
              title="Upcoming events"
              description="Join us in our upcoming community activities and celebrations."
            />

            <Link
              href={`/communities/${community.id}/events`}
              className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline sm:flex"
            >
              View all events
              <ArrowRight size={17} />
            </Link>
          </div>

          {communityEvents.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {communityEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                />
              ))}
            </div>
          ) : (
            <EmptySection
              icon={<CalendarDays size={24} />}
              title="No upcoming events"
              description="New community events will appear here."
            />
          )}

          <Link
            href={`/communities/${community.id}/events`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary sm:hidden"
          >
            View all events
            <ArrowRight size={17} />
          </Link>
        </Section>
      </section>

      {/* Activities */}
      <Section>
        <SectionHeading
          eyebrow="Our Activities"
          title="What we do"
          description="Our community comes together through activities, service and shared experiences."
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {community.activities.map((activity) => (
            <div
              key={activity}
              className="flex items-center gap-4 rounded-xl border border-border bg-white p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-primary">
                <HeartHandshake size={21} />
              </div>

              <span className="text-sm font-semibold text-text">
                {activity}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <section className="bg-surface-muted">
        <Section>
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Our Memories"
              title="Recent moments"
              description="A glimpse into the celebrations and activities of our community."
            />

            <Link
              href={`/communities/${community.id}/gallery`}
              className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline sm:flex"
            >
              View gallery
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10">
            {communityGallery.length > 0 ? (
              <GalleryGrid images={communityGallery} />
            ) : (
              <EmptySection
                icon={<ImageIcon size={24} />}
                title="No photos yet"
                description="Community memories will appear here."
              />
            )}
          </div>

          <Link
            href={`/communities/${community.id}/gallery`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary sm:hidden"
          >
            View gallery
            <ArrowRight size={17} />
          </Link>
        </Section>
      </section>

      {/* Committee */}
      <Section>
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Our Community"
            title="Meet our committee"
            description="The people who help organize and serve our community."
          />

          <Link
            href={`/communities/${community.id}/members`}
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline sm:flex"
          >
            View all members
            <ArrowRight size={17} />
          </Link>
        </div>

        {communityMembersList.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {communityMembersList.map((member) => (
              <MemberCard
                key={member.id}
                member={member}
              />
            ))}
          </div>
        ) : (
          <EmptySection
            icon={<Users size={24} />}
            title="Committee information coming soon"
            description="Our community committee information will appear here."
          />
        )}

        <Link
          href={`/communities/${community.id}/members`}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary sm:hidden"
        >
          View all members
          <ArrowRight size={17} />
        </Link>
      </Section>

      {/* Contact */}
      <section className="bg-primary">
        <Section>
          <div className="grid gap-8 text-white md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-100">
                Get in touch
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Be part of our community
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-orange-50">
                Learn more about {community.name} and discover
                how you can participate in our activities.
              </p>
            </div>

            <div className="flex md:justify-end">
              <Link
                href={`/communities/${community.id}/about`}
                className="inline-flex items-center gap-2 rounded-(--radius-button) bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-orange-50"
              >
                Contact Community
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </Section>
      </section>
    </main>
  );
}

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function Stat({
  icon,
  value,
  label,
}: StatProps) {
  return (
    <div>
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-primary">
        {icon}
      </div>

      <p className="mt-3 text-xl font-bold text-text">
        {value}
      </p>

      <p className="mt-1 text-xs text-text-muted">
        {label}
      </p>
    </div>
  );
}

interface EmptySectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function EmptySection({
  icon,
  title,
  description,
}: EmptySectionProps) {
  return (
    <div className="rounded-(--radius-card) border border-dashed border-border bg-white px-6 py-12 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-primary">
        {icon}
      </div>

      <h3 className="mt-4 font-semibold text-text">
        {title}
      </h3>

      <p className="mt-2 text-sm text-text-muted">
        {description}
      </p>
    </div>
  );
}