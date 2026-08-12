import type { Promotion } from "@/lib/types";
import { assets } from "@/lib/assets";

/** Homepage promotions — copy and images from gardensbythebay.com.sg */
export const promotions: Promotion[] = [
  {
    id: "safra-fd",
    title: "Enjoy 10% off Flower Dome admission ticket with SAFRA Card",
    description: "Present a valid SAFRA card for discounted Flower Dome admission.",
    image: assets.promotions.safra,
    ctaLabel: "View offer",
    ctaHref: "/promotions",
    validUntil: "2027-04-30",
    badge: "Attraction Promotion",
    location: "Flower Dome",
  },
  {
    id: "passion-fd",
    title: "Enjoy 10% off Flower Dome admission ticket with PAssion Card",
    description: "Present a valid PAssion card for discounted Flower Dome admission.",
    image: assets.promotions.passion,
    ctaLabel: "View offer",
    ctaHref: "/promotions",
    validUntil: "2027-04-30",
    badge: "Attraction Promotion",
    location: "Flower Dome",
  },
  {
    id: "ocbc-fd",
    title: "Enjoy 10% off Flower Dome admission ticket with OCBC Credit/Debit Card",
    description: "Pay with an eligible OCBC card for discounted Flower Dome admission.",
    image: assets.promotions.ocbc,
    ctaLabel: "View offer",
    ctaHref: "/promotions",
    validUntil: "2027-04-30",
    badge: "Attraction Promotion",
    location: "Flower Dome",
  },
  {
    id: "dbs-posb-fd",
    title: "Enjoy 10% off Flower Dome admission ticket with DBS/POSB Cards",
    description: "Pay with an eligible DBS or POSB card for discounted Flower Dome admission.",
    image: assets.promotions.dbsPosb,
    ctaLabel: "View offer",
    ctaHref: "/promotions",
    validUntil: "2027-03-31",
    badge: "Attraction Promotion",
    location: "Flower Dome",
  },
];
