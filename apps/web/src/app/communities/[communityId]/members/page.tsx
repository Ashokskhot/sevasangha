import { Users } from "lucide-react";
import { notFound } from "next/navigation";

import { MemberCard } from "@/components/member/MemberCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getCommunityById } from "@/services/communityService";
import { getMembersByCommunity } from "@/services/memberService";

interface CommunityMembersPageProps {
  params: Promise<{
    communityId: string;
  }>;
}

export default async function CommunityMembersPage({
  params,
}: CommunityMembersPageProps) {
  const { communityId } = await params;

  const community = await getCommunityById(communityId);

  if (!community) {
    notFound();
  }

  const members = await getMembersByCommunity(communityId);

  return (
    <main>
      <Section>
        <SectionHeading
          eyebrow="Community Members"
          title="Meet the people behind the community"
          description={`Meet the office bearers and committee members of ${community.name}.`}
          align="center"
        />

        {members.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {members.map((member) => (
              <MemberCard
                key={member.id}
                member={member}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-(--radius-card) border border-dashed border-border bg-surface-muted px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-primary">
              <Users size={26} />
            </div>

            <h2 className="mt-5 text-xl font-semibold text-text">
              Member information coming soon
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-text-muted">
              The community committee and member information
              will appear here once it has been added.
            </p>
          </div>
        )}
      </Section>
    </main>
  );
}