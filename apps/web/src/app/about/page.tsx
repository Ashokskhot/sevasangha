import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  HeartHandshake,
  Image,
  Users,
} from "lucide-react";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const features = [
  {
    icon: Users,
    title: "Community Management",
    description:
      "Bring members, roles and community information together in one organized place.",
  },
  {
    icon: CalendarDays,
    title: "Events & Activities",
    description:
      "Create events, share activities and keep everyone informed about what's happening.",
  },
  {
    icon: HeartHandshake,
    title: "Seva & Contributions",
    description:
      "Make it easier for members to participate in community initiatives and contributions.",
  },
  {
    icon: Image,
    title: "Memories & Gallery",
    description:
      "Preserve and share the moments, celebrations and activities that bring communities together.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your Sangha",
    description:
      "Set up your community profile and create a digital presence for your members.",
  },
  {
    number: "02",
    title: "Connect members",
    description:
      "Bring your community together and keep important information easily accessible.",
  },
  {
    number: "03",
    title: "Grow together",
    description:
      "Organize activities, manage events and build stronger community participation.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white">
        <Section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              About SevaSangha
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-text md:text-6xl">
              Bringing communities together
            </h1>

            <p className="mt-6 text-lg leading-8 text-text-muted md:text-xl">
              SevaSangha is a community management platform
              designed to help Sanghas and community organizations
              stay connected, organized and active.
            </p>
          </div>
        </Section>
      </section>

      {/* Mission */}
      <section className="bg-surface-muted">
        <Section>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Purpose
              </p>

              <h2 className="mt-3 text-3xl font-bold text-text md:text-4xl">
                Technology that strengthens community
              </h2>

              <p className="mt-5 leading-7 text-text-muted">
                Communities have always been built around people,
                relationships and shared experiences. SevaSangha
                provides the digital tools to make managing those
                communities simpler.
              </p>

              <p className="mt-4 leading-7 text-text-muted">
                Instead of relying on scattered messages,
                spreadsheets and disconnected tools, communities
                can bring their members, events, activities and
                information together in one place.
              </p>

              <Link
                href="/communities"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Explore Communities
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="rounded-(--radius-card) bg-white p-8 shadow-(--shadow-card) md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-primary">
                <HeartHandshake size={28} />
              </div>

              <blockquote className="mt-6 text-2xl font-semibold leading-9 text-text">
                Technology should help people spend more time
                building community, not managing complexity.
              </blockquote>
            </div>
          </div>
        </Section>
      </section>

      {/* Features */}
      <Section>
        <SectionHeading
          eyebrow="What SevaSangha Provides"
          title="Everything a community needs"
          description="A shared platform for managing the everyday activities that keep a community connected."
          align="center"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-primary">
                  <Icon size={25} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-text">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-text-muted">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* How it works */}
      <section className="bg-surface-muted">
        <Section>
          <SectionHeading
            eyebrow="How It Works"
            title="Simple for every community"
            description="SevaSangha is designed to grow with your community."
            align="center"
          />

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {step.number}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-text">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* Vision */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Vision
          </p>

          <h2 className="mt-3 text-3xl font-bold text-text md:text-4xl">
            One platform, many communities
          </h2>

          <p className="mt-5 text-base leading-7 text-text-muted">
            Every Sangha has its own identity, traditions and way
            of serving its members. SevaSangha gives each
            community its own digital presence while providing a
            shared platform underneath.
          </p>

          <p className="mt-4 text-base leading-7 text-text-muted">
            Whether it is a temple organization, housing society,
            youth group, NGO or local community, the goal remains
            the same: make it easier for people to connect and
            contribute.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-primary">
        <Section>
          <div className="py-8 text-center text-white md:py-12">
            <h2 className="text-3xl font-bold md:text-4xl">
              Find your community
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-orange-50 md:text-base">
              Discover communities on SevaSangha and find a
              place to connect, participate and contribute.
            </p>

            <Link
              href="/communities"
              className="mt-8 inline-flex items-center gap-2 rounded-(--radius-button) bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-orange-50"
            >
              Explore Communities
              <ArrowRight size={17} />
            </Link>
          </div>
        </Section>
      </section>
    </main>
  );
}