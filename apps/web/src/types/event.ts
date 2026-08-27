export interface CommunityEvent {
  id: string;
  title: string;
  communityId: string;
  communityName: string;
  date: string;
  time: string;
  location: string;
  imageUrl?: string;
  description: string;
  category: string;
}