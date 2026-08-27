import Image from "next/image";
import { UserRound } from "lucide-react";

import type { CommunityMember } from "@/types/member";

interface MemberCardProps {
  member: CommunityMember;
}

export function MemberCard({
  member,
}: MemberCardProps) {
  return (
    <article className="overflow-hidden rounded-(--radius-card) bg-white shadow-(--shadow-card)">
      <div className="relative aspect-square overflow-hidden bg-surface-muted">
        {member.photoUrl ? (
          <Image
            src={member.photoUrl}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-text-muted">
            <UserRound size={64} strokeWidth={1.5} />
          </div>
        )}
      </div>

      <div className="p-5">
        <h2 className="font-semibold text-text">
          {member.name}
        </h2>

        <p className="mt-1 text-sm text-primary">
          {member.role}
        </p>
      </div>
    </article>
  );
}