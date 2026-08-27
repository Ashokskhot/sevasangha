import { communities } from "@/data/communities";

import type { Community } from "@/types/community";

export async function getCommunities(): Promise<Community[]> {
  return communities;
}

export async function getCommunityById(
  communityId: string
): Promise<Community | null> {
  const community = communities.find(
    (item) => item.id === communityId
  );

  return community ?? null;
}