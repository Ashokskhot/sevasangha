import { galleryImages } from "@/data/gallery";

import type { GalleryImage } from "@/types/gallery";

export async function getGalleryImages(): Promise<
  GalleryImage[]
> {
  return galleryImages;
}

export async function getGalleryImagesByCommunity(
  communityId: string
): Promise<GalleryImage[]> {
  return galleryImages.filter(
    (image) => image.communityId === communityId
  );
}