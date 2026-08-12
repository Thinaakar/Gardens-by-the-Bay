import { assets } from "@/lib/assets";

export interface HomepageAttraction {
  id: string;
  title: string;
  tagline?: string;
  href: string;
  image: string;
  /** Masonry layout modifiers matching live site grid */
  layout: "tall" | "default" | "wide" | "link";
}

/** Homepage masonry attraction tiles — order and layout match gardensbythebay.com.sg */
export const homepageAttractions: HomepageAttraction[] = [
  {
    id: "active-garden",
    title: "Active Garden & PropNex Family Zone",
    href: "/things-to-do/attractions",
    image: assets.attraction.activeGarden,
    layout: "tall",
  },
  {
    id: "cloud-forest",
    title: "Cloud Forest",
    tagline: "Wander past the misty veil.",
    href: "/things-to-do/attractions/cloud-forest",
    image: assets.attraction.cloudForest,
    layout: "default",
  },
  {
    id: "floral-fantasy",
    title: "Floral Fantasy",
    tagline: "The stuff dreams are made of.",
    href: "/things-to-do/attractions/floral-fantasy",
    image: assets.attraction.floralFantasy,
    layout: "default",
  },
  {
    id: "flower-dome",
    title: "Flower Dome",
    tagline: "The only season here is Spring.",
    href: "/things-to-do/attractions/flower-dome",
    image: assets.attraction.flowerDome,
    layout: "wide",
  },
  {
    id: "supertree-observatory",
    title: "Supertree Observatory",
    tagline: "Set your sights higher.",
    href: "/things-to-do/attractions/observatory",
    image: assets.attraction.supertreeObservatory,
    layout: "wide",
  },
  {
    id: "view-all",
    title: "View other Attractions",
    href: "/things-to-do/attractions",
    image: "",
    layout: "link",
  },
];
