import type { Attraction } from "@/lib/types";
import { assets } from "@/lib/assets";

/**
 * Attraction data — homepage images from local assets.
 */
export const attractions: Attraction[] = [
  {
    id: "flower-dome",
    slug: "flower-dome",
    title: "Flower Dome",
    shortDescription: "The only season here is Spring.",
    description:
      "Step into a vast glass conservatory showcasing plants from Mediterranean and semi-arid regions. Rotating seasonal displays keep the experience fresh throughout the year.",
    image: assets.attraction.flowerDome,
    gallery: [
      {
        id: "fd-1",
        src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&q=80",
        alt: "Colourful seasonal blooms inside the conservatory",
        caption: "Seasonal bloom display",
      },
      {
        id: "fd-2",
        src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
        alt: "Lush greenery lining a glasshouse walkway",
        caption: "Glasshouse walkway",
      },
      {
        id: "fd-3",
        src: "https://images.unsplash.com/photo-1465146633011-14f8e0781093?w=1200&q=80",
        alt: "Close-up of flowering plants",
        caption: "Close-up flora",
      },
      {
        id: "fd-4",
        src: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=1200&q=80",
        alt: "Sunlit floral arrangement",
        caption: "Sunlit arrangement",
      },
    ],
    hours: "9:00 AM – 9:00 PM daily",
    duration: "45–60 minutes",
    highlights: ["Seasonal floral displays", "Climate-controlled comfort", "Guided plant talks"],
    relatedIds: ["cloud-forest", "floral-fantasy", "art-sculptures"],
  },
  {
    id: "cloud-forest",
    slug: "cloud-forest",
    title: "Cloud Forest",
    shortDescription: "Wander past the misty veil.",
    description:
      "Experience a cool, misty highland environment featuring rare orchids, ferns, and a dramatic indoor waterfall. Walk the elevated trail for panoramic views of the canopy below.",
    image: assets.attraction.cloudForest,
    gallery: [
      {
        id: "cc-1",
        src: "https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&q=80",
        alt: "Mist drifting through a dense forest canopy",
        caption: "Morning mist",
      },
      {
        id: "cc-2",
        src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80",
        alt: "Sunbeams through tall trees",
        caption: "Canopy light",
      },
      {
        id: "cc-3",
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
        alt: "Foggy hillside forest landscape",
        caption: "Highland atmosphere",
      },
    ],
    hours: "9:00 AM – 9:00 PM daily",
    duration: "45–60 minutes",
    highlights: ["Indoor waterfall", "Elevated walkway", "Cool highland climate"],
    relatedIds: ["flower-dome", "skyway", "observatory"],
  },
  {
    id: "floral-fantasy",
    slug: "floral-fantasy",
    title: "Floral Fantasy",
    shortDescription: "Immersive themed floral chambers with light and scent.",
    description:
      "Wander through themed floral chambers combining living plants, art installations, and sensory design. Each chamber tells a story through colour, fragrance, and form.",
    image: assets.attraction.floralFantasy,
    gallery: [
      {
        id: "ff-1",
        src: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1200&q=80",
        alt: "Vibrant floral installation in a themed chamber",
        caption: "Themed chamber",
      },
      {
        id: "ff-2",
        src: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=1200&q=80",
        alt: "Artistic floral arrangement",
        caption: "Floral artistry",
      },
      {
        id: "ff-3",
        src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&q=80",
        alt: "Colourful flower field inspired display",
        caption: "Colour story",
      },
    ],
    hours: "10:00 AM – 7:00 PM daily",
    duration: "30–45 minutes",
    highlights: ["Themed chambers", "Sensory experiences", "Family-friendly"],
    relatedIds: ["flower-dome", "art-sculptures"],
  },
  {
    id: "skyway",
    slug: "skyway",
    title: "Sky Walkway",
    shortDescription: "An elevated walkway with sweeping views of the gardens.",
    description:
      "Cross a gently arched elevated walkway connecting the garden's iconic structures. Enjoy open-air views of the landscape, waterfront, and city skyline.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    gallery: [
      {
        id: "sw-1",
        src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80",
        alt: "Elevated view across green landscape",
        caption: "Open-air panorama",
      },
      {
        id: "sw-2",
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
        alt: "Wide landscape vista from height",
        caption: "Horizon views",
      },
      {
        id: "sw-3",
        src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80",
        alt: "Mountain and sky vista",
        caption: "Skyline moment",
      },
    ],
    hours: "9:00 AM – 9:00 PM daily",
    duration: "20–30 minutes",
    highlights: ["Panoramic views", "Open-air experience", "Photo opportunities"],
    relatedIds: ["observatory", "cloud-forest", "art-sculptures"],
  },
  {
    id: "observatory",
    slug: "observatory",
    title: "Supertree Observatory",
    shortDescription: "Set your sights higher.",
    description:
      "Ascend to a high lookout platform for unforgettable sunset and evening views. Pair your visit with the nightly light experience across the garden grounds.",
    image: assets.attraction.supertreeObservatory,
    gallery: [
      {
        id: "ob-1",
        src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&q=80",
        alt: "Starry night sky above the gardens",
        caption: "Night sky",
      },
      {
        id: "ob-2",
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
        alt: "Sunset over distant peaks",
        caption: "Golden hour",
      },
      {
        id: "ob-3",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
        alt: "High lookout over layered terrain",
        caption: "Lookout platform",
      },
    ],
    hours: "9:00 AM – 9:00 PM daily (last entry 8:00 PM)",
    duration: "30–45 minutes",
    highlights: ["Sunset views", "Night light experience", "Elevator access available"],
    relatedIds: ["skyway", "cloud-forest"],
  },
  {
    id: "art-sculptures",
    slug: "art-sculptures",
    title: "Art & Sculptures",
    shortDescription: "Outdoor art trail weaving through lawns and groves.",
    description:
      "Discover large-scale outdoor sculptures and installations placed throughout the gardens. The trail is free to explore and changes periodically with visiting artists.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1600&q=80",
    gallery: [
      {
        id: "as-1",
        src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200&q=80",
        alt: "Outdoor sculpture against a bright sky",
        caption: "Outdoor sculpture",
      },
      {
        id: "as-2",
        src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&q=80",
        alt: "Art installation in an open landscape",
        caption: "Trail installation",
      },
      {
        id: "as-3",
        src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&q=80",
        alt: "Colourful outdoor art moment",
        caption: "Seasonal piece",
      },
    ],
    hours: "Outdoor areas open 5:00 AM – 2:00 AM",
    duration: "Self-paced",
    highlights: ["Free outdoor trail", "Rotating installations", "Family-friendly"],
    relatedIds: ["flower-dome", "floral-fantasy", "skyway"],
  },
];

/** Look up an attraction by its URL slug */
export function getAttractionBySlug(slug: string): Attraction | undefined {
  return attractions.find((a) => a.slug === slug);
}

/** Resolve related attractions from an ID list */
export function getRelatedAttractions(ids: string[]): Attraction[] {
  return attractions.filter((a) => ids.includes(a.id));
}
