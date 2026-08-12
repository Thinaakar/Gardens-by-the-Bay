import type { Promotion } from "@/lib/types";

/**
 * Placeholder promotions — generic offers only (no real bank/partner brands).
 */
export const promotions: Promotion[] = [
  {
    id: "promo-1",
    title: "Enjoy 10% off Flower Conservatory admission with Member Card",
    description: "Members save on weekday visits to the Flower Conservatory.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    ctaLabel: "View offer",
    ctaHref: "/promotions",
    validUntil: "2027-04-30",
    badge: "Attraction Promotion",
    location: "Flower Conservatory",
  },
  {
    id: "promo-2",
    title: "Enjoy 10% off Flower Conservatory admission with Guest Pass",
    description: "Present a valid guest pass for a discounted conservatory ticket.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
    ctaLabel: "View offer",
    ctaHref: "/promotions",
    validUntil: "2027-04-30",
    badge: "Attraction Promotion",
    location: "Flower Conservatory",
  },
  {
    id: "promo-3",
    title: "Enjoy 10% off Flower Conservatory admission with Partner Card",
    description: "Selected partner cards enjoy a limited-time admission discount.",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800&q=80",
    ctaLabel: "View offer",
    ctaHref: "/promotions",
    validUntil: "2027-04-30",
    badge: "Attraction Promotion",
    location: "Flower Conservatory",
  },
  {
    id: "promo-4",
    title: "Enjoy 10% off Flower Conservatory admission with Family Bundle",
    description: "Family bundle holders receive 10% off selected ticket types.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
    ctaLabel: "View offer",
    ctaHref: "/promotions",
    validUntil: "2027-03-31",
    badge: "Attraction Promotion",
    location: "Flower Conservatory",
  },
];
