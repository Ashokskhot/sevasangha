import Image from "next/image";

import type { GalleryImage } from "@/types/gallery";
import Link from "next/link";

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({
  images,
}: GalleryGridProps) {
  if (images.length === 0) {
    return (
      <div className="rounded-(--radius-card) border border-dashed border-border bg-surface-muted px-6 py-16 text-center">
        <h2 className="text-xl font-semibold text-text">
          No photos yet
        </h2>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-text-muted">
          Photos from this community will appear here once
          they are added.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <article
          key={image.id}
          className="group overflow-hidden rounded-(--radius-card) bg-white shadow-(--shadow-card)"
        >
          <div className="relative aspect-4/3 overflow-hidden">
            <Image
              src={image.imageUrl}
              alt={image.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-5 pb-5 pt-12">
                <p className="text-xs font-medium text-white/80">
                    {image.category}
                </p>

                <h2 className="mt-1 text-sm font-semibold text-white">
                    {image.title}
                </h2>

                <Link
                    href={`/communities/${image.communityId}`}
                    className="mt-1 inline-block text-xs font-medium text-white/80 hover:text-white hover:underline"
                >
                    View Community →
                </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}