import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";

import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { getGalleryImages } from "@/services/galleryService";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default async function GalleryPage() {
  const galleryImages = await getGalleryImages();

  return (
    <main>
      {/* Hero */}
      <section className="bg-white">
        <Section>
          <SectionHeading
            eyebrow="Community Gallery"
            title="Moments from our communities"
            description="Explore celebrations, activities, seva and memorable moments shared by communities across SevaSangha."
            align="center"
          />
        </Section>
      </section>

      {/* Gallery */}
      <section className="bg-surface-muted">
        <Section>
          {galleryImages.length > 0 ? (
            <>
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                    <Camera size={20} />
                  </div>

                  <p className="text-sm text-text-muted">
                    Showing{" "}
                    <span className="font-semibold text-text">
                      {galleryImages.length}
                    </span>{" "}
                    community photos
                  </p>
                </div>
              </div>

              <GalleryGrid images={galleryImages} />
            </>
          ) : (
            <div className="rounded-(--radius-card) border border-dashed border-border bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-primary">
                <Camera size={26} />
              </div>

              <h2 className="mt-5 text-xl font-semibold text-text">
                No photos yet
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-text-muted">
                Community photos will appear here as Sanghas
                start sharing their activities and events.
              </p>
            </div>
          )}
        </Section>
      </section>

      {/* CTA */}
      <Section>
        <div className="rounded-(--radius-card) bg-secondary px-6 py-12 text-center text-white md:px-12 md:py-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            Discover a community near you
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-green-50 md:text-base">
            Explore communities, discover their activities and
            become part of something meaningful.
          </p>

          <Link
            href="/communities"
            className="mt-8 inline-flex items-center gap-2 rounded-(--radius-button) bg-white px-6 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-green-50"
          >
            Explore Communities
            <ArrowRight size={17} />
          </Link>
        </div>
      </Section>
    </main>
  );
}