import { notFound } from "next/navigation";
import {
  CalendarDays,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";

import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getCommunityById } from "@/services/communityService";

interface CommunityAboutPageProps {
  params: Promise<{
    communityId: string;
  }>;
}

export default async function CommunityAboutPage({
  params,
}: CommunityAboutPageProps) {
  const { communityId } = await params;

  const community = await getCommunityById(
    communityId
  );
  
  if (!community) {
    notFound();
  }

  return (
    <main>
      {/* Introduction */}
      <section className="bg-white">
        <Section>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              About the Sangha
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-text md:text-5xl">
              {community.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-text-muted">
              {community.description}
            </p>
          </div>
        </Section>
      </section>

      {/* Community overview */}
      <section className="bg-surface-muted">
        <Section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <OverviewCard
              icon={<CalendarDays size={22} />}
              label="Established"
              value={community.establishedYear.toString()}
            />

            <OverviewCard
              icon={<Users size={22} />}
              label="Members"
              value={`${community.memberCount}`}
            />

            <OverviewCard
              icon={<MapPin size={22} />}
              label="Location"
              value={community.location}
            />

            <OverviewCard
              icon={<HeartHandshake size={22} />}
              label="Category"
              value={community.category}
            />
          </div>
        </Section>
      </section>

      {/* Mission and Vision */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="p-7 md:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-primary">
              <HeartHandshake size={25} />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-text">
              Our Mission
            </h2>

            <p className="mt-4 leading-7 text-text-muted">
              {community.mission}
            </p>
          </Card>

          <Card className="p-7 md:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-primary">
              <Users size={25} />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-text">
              Our Vision
            </h2>

            <p className="mt-4 leading-7 text-text-muted">
              {community.vision}
            </p>
          </Card>
        </div>
      </Section>

      {/* Activities */}
      <section className="bg-surface-muted">
        <Section>
          <SectionHeading
            eyebrow="What We Do"
            title="Community activities"
            description={`Some of the activities organized by ${community.name}.`}
            align="center"
          />

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {community.activities.map((activity) => (
              <div
                key={activity}
                className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-primary">
                  <HeartHandshake size={18} />
                </div>

                <span className="text-sm font-medium text-text">
                  {activity}
                </span>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* Contact */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Get in touch
            </p>

            <h2 className="mt-3 text-3xl font-bold text-text">
              Contact the community
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-text-muted">
              Have a question or want to learn more about the
              community? Get in touch with the Sangha.
            </p>
          </div>

          <Card className="p-6">
            <div className="space-y-5">
              <ContactRow
                icon={<MapPin size={19} />}
                label="Location"
                value={community.location}
              />

              <ContactRow
                icon={<Mail size={19} />}
                label="Email"
                value={community.contactEmail}
                href={`mailto:${community.contactEmail}`}
              />

              <ContactRow
                icon={<Phone size={19} />}
                label="Phone"
                value={community.contactPhone}
                href={`tel:${community.contactPhone}`}
              />
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}

interface OverviewCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function OverviewCard({
  icon,
  label,
  value,
}: OverviewCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-primary">
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

interface ContactRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: ContactRowProps) {
  const content = (
    <>
      <div className="mt-0.5 text-primary">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs text-text-muted">
          {label}
        </p>

        <p className="mt-1 wrap-break-word text-sm font-medium text-text">
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex gap-3 rounded-lg transition-colors hover:bg-orange-50"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex gap-3">
      {content}
    </div>
  );
}