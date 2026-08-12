import type { LinkItem, NavItem } from "@/lib/types";

/**
 * Primary nav — mirrors a typical garden-destination IA
 * (story / things to do / plan / learn) with generic labels.
 */
export const mainNav: NavItem[] = [
  {
    label: "Our Gardens Story",
    href: "/about-us",
    children: [
      { label: "Our Gardens Story", href: "/about-us" },
      { label: "Our Story", href: "/about-us/our-story" },
      { label: "Our History", href: "/about-us/our-history" },
      { label: "Sustainability Efforts", href: "/about-us/sustainability" },
    ],
  },
  {
    label: "Things to do",
    href: "/things-to-do",
    children: [
      { label: "Flower Dome", href: "/things-to-do/attractions/flower-dome" },
      { label: "Cloud Forest", href: "/things-to-do/attractions/cloud-forest" },
      { label: "Floral Fantasy", href: "/things-to-do/attractions/floral-fantasy" },
      { label: "OCBC Skyway", href: "/things-to-do/attractions/skyway" },
      { label: "Supertree Observatory", href: "/things-to-do/attractions/observatory" },
      { label: "View all Attractions", href: "/things-to-do/attractions" },
      { label: "IMBA Theatre", href: "/things-to-do/theatre" },
      { label: "Garden Pod", href: "/things-to-do/garden-pod" },
      { label: "Art Sculptures", href: "/things-to-do/attractions/art-sculptures" },
      { label: "Calendar of Events", href: "/things-to-do/calendar-of-events" },
      { label: "Dine & Shop", href: "/things-to-do/dine-and-shop" },
    ],
  },
  {
    label: "Plan your visit",
    href: "/plan-your-visit",
    children: [
      { label: "Opening Hours & Closures", href: "/plan-your-visit/opening-hours" },
      { label: "Getting Here & Parking", href: "/plan-your-visit/getting-here" },
      { label: "Itinerary Planner", href: "/plan-your-visit/itinerary-planner" },
      { label: "Gardens Map", href: "/plan-your-visit/gardens-map" },
      { label: "Amenities & Services", href: "/plan-your-visit/amenities" },
      { label: "Information Guides", href: "/plan-your-visit/information-guides" },
      { label: "Visiting Guidelines", href: "/plan-your-visit/visiting-guidelines" },
      { label: "Mobile Apps & Travel Guide", href: "/plan-your-visit/mobile-app" },
    ],
  },
  {
    label: "Learn with us",
    href: "/learn-with-us",
    children: [
      { label: "For Schools", href: "/learn-with-us/for-schools" },
      { label: "Pre-School", href: "/learn-with-us/for-schools/pre-school" },
      { label: "Primary School", href: "/learn-with-us/for-schools/primary-school" },
      { label: "Secondary School", href: "/learn-with-us/for-schools/secondary-school" },
      { label: "School Engagement", href: "/learn-with-us/for-schools/school-engagement" },
      { label: "Learning Activities", href: "/learn-with-us/for-schools/learning-activities" },
      { label: "Explore Resources", href: "/learn-with-us/explore-resources" },
      { label: "What's Visiting", href: "/learn-with-us/explore-resources/whats-visiting" },
      { label: "What's Blooming", href: "/learn-with-us/explore-resources/whats-blooming" },
      { label: "Articles", href: "/learn-with-us/explore-resources/articles" },
      { label: "Crafts & Worksheets", href: "/learn-with-us/explore-resources/crafts-and-worksheets" },
      { label: "Comics", href: "/learn-with-us/explore-resources/comics" },
      { label: "E-Books", href: "/learn-with-us/explore-resources/e-books" },
      { label: "Videos", href: "/learn-with-us/explore-resources/videos" },
      { label: "Plant Doctor", href: "/learn-with-us/explore-resources/plant-doctor" },
    ],
  },
];

/** Top utility row — mirrors common destination-site quick links */
export const utilityLinks: LinkItem[] = [
  { label: "Be a Member", href: "/membership" },
  { label: "View Promotions", href: "/promotions" },
  { label: "eShop", href: "/things-to-do/dine-and-shop" },
  { label: "Book a Venue", href: "/book-a-venue" },
  { label: "Support Us", href: "/support-us" },
];

/** Footer org links (About / Careers / FAQ / Contact pattern) */
export const footerOrgLinks: LinkItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Careers & Scholarships", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
];

/** Kept for any secondary footer grids */
export const footerQuickLinks: { title: string; links: LinkItem[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Attractions", href: "/things-to-do/attractions" },
      { label: "Events", href: "/things-to-do/calendar-of-events" },
      { label: "Promotions", href: "/promotions" },
      { label: "Membership", href: "/membership" },
    ],
  },
  {
    title: "Visit",
    links: [
      { label: "Opening Hours", href: "/plan-your-visit/opening-hours" },
      { label: "Getting Here", href: "/plan-your-visit/getting-here" },
      { label: "Gardens Map", href: "/plan-your-visit/gardens-map" },
      { label: "Guidelines", href: "/plan-your-visit/visiting-guidelines" },
    ],
  },
];

export const legalLinks: LinkItem[] = [
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Security Advisory", href: "/privacy-policy" },
];

/** Placeholder visitor alerts (generic — replace with real notices) */
export interface SiteAlert {
  id: string;
  title: string;
  body: string;
  href?: string;
}

export const siteAlerts: SiteAlert[] = [
  {
    id: "alert-1",
    title: "Advisory for use of tripods at Disney Garden of Wonder at Floral Fantasy",
    body: "For a better visiting experience and facilitate crowd movement, we seek your kind understanding that usage of tripods and camera stands will not be permitted in Floral Fantasy.",
  },
  {
    id: "alert-2",
    title: "Bay South–Bay East Bridge Construction from 4 May 2026",
    body: "To facilitate the construction of the bridge linking Bay South Garden and Bay East Garden, there will be no access for cyclists along the Waterfront Promenade from 4 May 2026. During the construction of the bridge, cyclists heading towards Marina Barrage are advised to take an alternative route around the perimeter of Bay South Garden. Pedestrians may still access the Waterfront Promenade, with a slight diversion to their route.",
    href: "/plan-your-visit/gardens-map",
  },
];
