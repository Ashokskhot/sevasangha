import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">
              SevaSangha
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-6 text-text-muted">
              Serving Communities Digitally. A simple platform
              that helps communities stay connected, organized
              and transparent.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Explore
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link href="/communities">Communities</Link>
              <Link href="/events">Events</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/about">About</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">
              Community
            </h3>

            <p className="mt-4 text-sm leading-6 text-text-muted">
              Discover communities, participate in events
              and stay connected with the people around you.
            </p>
          </div>
        </div>

        <div className="border-t border-border py-5 text-center text-sm text-text-muted">
          © {new Date().getFullYear()} SevaSangha. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}