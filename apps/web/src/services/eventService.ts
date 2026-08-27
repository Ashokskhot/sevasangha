import { events } from "@/data/events";

import type { CommunityEvent } from "@/types/event";

export async function getEvents(): Promise<CommunityEvent[]> {
  return events;
}

export async function getEventsByCommunity(
  communityId: string
): Promise<CommunityEvent[]> {
  return events.filter(
    (event) => event.communityId === communityId
  );
}

export async function getEventById(
  eventId: string
): Promise<CommunityEvent | null> {
  const event = events.find(
    (item) => item.id === eventId
  );

  return event ?? null;
}