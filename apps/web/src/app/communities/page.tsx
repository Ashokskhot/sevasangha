import { Search } from "lucide-react";

import { CommunityCard } from "@/components/community/CommunityCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getCommunities } from "@/services/communityService";

export default async function CommunitiesPage() {
  const communities = await getCommunities();

  return (
    <main>
      {/* Page Header */}
      <section className="bg-white">
        <Section>
          <SectionHeading
            eyebrow="Discover"
            title="Find your community"
            description="Explore communities on SevaSangha and discover the people, activities and events around you."
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
                placeholder="Search communities..."
                className="w-full bg-transparent text-sm text-text outline-none placeholder:text-text-muted"
              />
            </div>
          </div>
        </Section>
      </section>

      {/* Communities */}
      <Section>
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-text-muted">
            Showing{" "}
            <span className="font-semibold text-text">
              {communities.length}
            </span>{" "}
            communities
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((community) => (
            <CommunityCard
              key={community.id}
              community={community}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}