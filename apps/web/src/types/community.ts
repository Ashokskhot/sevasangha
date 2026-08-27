export interface Community {
  id: string;
  name: string;
  category: string;
  location: string;
  description: string;
  memberCount: number;

  establishedYear: number;
  mission: string;
  vision: string;
  activities: string[];

  contactEmail: string;
  contactPhone: string;

  heroImageUrl: string;
  logoUrl?: string;
}