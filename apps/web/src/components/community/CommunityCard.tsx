import Link from "next/link";
import { Building2, MapPin, Users } from "lucide-react";

import type { Community } from "@/types/community";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

interface CommunityCardProps {
  community: Community;
}

export function CommunityCard({
  community,
}: CommunityCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow duration-200 hover:shadow-(--shadow-card-hover)">
      <div className="flex h-44 items-center justify-center bg-linear-to-br from-orange-100 to-yellow-50">
        <Building2
          size={64}
          strokeWidth={1.5}
          className="text-primary"
        />
      </div>

      <div className="p-6">
        <Badge variant="secondary">
          {community.category}
        </Badge>

        <h2 className="mt-4 text-xl font-semibold text-text">
          {community.name}
        </h2>

        <div className="mt-3 flex items-center gap-2 text-sm text-text-muted">
          <MapPin size={16} />
          <span>{community.location}</span>
        </div>

        <p className="mt-3 text-sm leading-6 text-text-muted">
          {community.description}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm text-text-muted">
          <Users size={16} />
          <span>{community.memberCount} members</span>
        </div>

        <Link
          href={`/communities/${community.id}`}
          className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline"
        >
          View Community →
        </Link>
      </div>
    </Card>
  );
}