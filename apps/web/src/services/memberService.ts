import { communityMembers } from "@/data/members";

import type { CommunityMember } from "@/types/member";

export async function getMembersByCommunity(
  communityId: string
): Promise<CommunityMember[]> {
  return communityMembers.filter(
    (member) => member.communityId === communityId
  );
}