/**
 * Shared TypeScript interfaces for the garden site.
 * Replace placeholder fields with real content as needed.
 */

/** Navigation item used by Header, MobileNav, and Footer */
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

/** Single image in an attraction gallery (supports lightbox captions) */
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

/** Single attraction / experience */
export interface Attraction {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: GalleryImage[];
  hours: string;
  duration: string;
  highlights: string[];
  relatedIds: string[];
}

/** Calendar event */
export interface Event {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  /** Display time range, e.g. "9.00am - 9.00pm" */
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
  /** Optional override for date line on cards */
  dateLabel?: string;
}

/** Marketing promotion */
export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
  validUntil: string;
  /** Card ribbon label, e.g. "Attraction Promotion" */
  badge: string;
  location: string;
}

/** Newsletter form payload */
export interface NewsletterFormData {
  email: string;
}

/** Site statistic for homepage */
export interface StatItem {
  value: string;
  label: string;
}

/** Simple link pair for footers / utility menus */
export interface LinkItem {
  label: string;
  href: string;
}
