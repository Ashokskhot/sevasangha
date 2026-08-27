import { notFound } from "next/navigation";

import { CommunityHeader } from "@/components/community/CommunityHeader";
import { communities } from "@/data/communities";

interface CommunityLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    communityId: string;
  }>;
}

export default async function CommunityLayout({
  children,
  params,
}: CommunityLayoutProps) {
  const { communityId } = await params;

  const community = communities.find(
    (item) => item.id === communityId
  );

  if (!community) {
    notFound();
  }

  return (
    <>
      <CommunityHeader community={community} />

      {children}
    </>
  );
}