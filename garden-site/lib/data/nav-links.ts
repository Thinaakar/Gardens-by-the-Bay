import type { LinkItem, NavItem } from "@/lib/types";

/**
 * Primary nav — mirrors a typical garden-destination IA
 * (story / things to do / plan / learn) with generic labels.
 */
export const mainNav: NavItem[] = [
  {
    label: "Our Garden Story",
    href: "/about-us",
    children: [
      { label: "Our Garden Story", href: "/about-us" },
      { label: "Our Story", href: "/about-us/our-story" },
      { label: "Our History", href: "/about-us/our-history" },
      { label: "Sustainability Efforts", href: "/about-us/sustainability" },
    ],
  },
  {
    label: "Things to Do",
    href: "/things-to-do",
    children: [
      { label: "Flower Conservatory", href: "/things-to-do/attractions/flower-dome" },
      { label: "Cloud Canopy", href: "/things-to-do/attractions/cloud-forest" },
      { label: "Floral Fantasy", href: "/things-to-do/attractions/floral-fantasy" },
      { label: "Sky Walkway", href: "/things-to-do/attractions/skyway" },
      { label: "Garden Observatory", href: "/things-to-do/attractions/observatory" },
      { label: "View all Attractions", href: "/things-to-do/attractions" },
      { label: "Theatre", href: "/things-to-do/theatre" },
      { label: "Garden Pod", href: "/things-to-do/garden-pod" },
      { label: "Art & Sculptures", href: "/things-to-do/attractions/art-sculptures" },
      { label: "Calendar of Events", href: "/things-to-do/calendar-of-events" },
      { label: "Dine & Shop", href: "/things-to-do/dine-and-shop" },
    ],
  },
  {
    label: "Plan Your Visit",
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
    label: "Learn With Us",
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
    title: "Photography reminder",
    body: "For a smoother visit, tripods and camera stands are not permitted in Floral Fantasy during peak hours.",
  },
  {
    id: "alert-2",
    title: "Pathway diversion",
    body: "Temporary works along the waterfront may require a short pedestrian diversion. Cyclists should use the marked alternative route.",
    href: "/plan-your-visit/gardens-map",
  },
];
