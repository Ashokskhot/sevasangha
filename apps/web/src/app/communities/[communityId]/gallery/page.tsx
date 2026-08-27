import { notFound } from "next/navigation";

import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { getCommunityById } from "@/services/communityService";
import { getGalleryImagesByCommunity } from "@/services/galleryService";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface CommunityGalleryPageProps {
  params: Promise<{
    communityId: string;
  }>;
}

export default async function CommunityGalleryPage({
  params,
}: CommunityGalleryPageProps) {
  const { communityId } = await params;

  const community = await getCommunityById(communityId);

  if (!community) {
    notFound();
  }

  const communityImages = await getGalleryImagesByCommunity(communityId);

  return (
    <main>
      <Section>
        <SectionHeading
          eyebrow="Community Gallery"
          title="Moments we share"
          description={`Explore memories and moments from ${community.name}.`}
        />

        <div className="mt-10">
          <GalleryGrid images={communityImages} />
        </div>
      </Section>
    </main>
  );
}