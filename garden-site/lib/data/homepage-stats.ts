import { assets } from "@/lib/assets";

export interface HomepageStat {
  icon: string;
  heading: string;
  value: string;
  subtext?: string;
}

/** Stats band icons and copy — matches live homepage */
export const homepageStats: HomepageStat[] = [
  {
    icon: assets.icons.travellersChoice,
    heading: "Traveller's Choice",
    value: "No. 3 Top Attraction in the World",
    subtext: "TripAdvisor Travellers' Choice Award 2026",
  },
  {
    icon: assets.icons.visitors,
    heading: "Over 115 million",
    value: "visitors to date",
  },
  {
    icon: assets.icons.instagrammable,
    heading: "Top 10",
    value: "most Instagrammable places in Singapore",
    subtext: "Timeout",
  },
  {
    icon: assets.icons.plants,
    heading: "Over 1.5 million plants",
    value: "from around the world",
  },
];
