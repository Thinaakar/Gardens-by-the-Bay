import AlertBanner from "@/components/layout/AlertBanner";
import Hero from "@/components/home/Hero";
import AttractionsGrid from "@/components/home/AttractionsGrid";
import SustainabilityBanner from "@/components/home/SustainabilityBanner";
import BloomingIntro from "@/components/home/BloomingIntro";
import EventsCarousel from "@/components/home/EventsCarousel";
import PromotionsCarousel from "@/components/home/PromotionsCarousel";
import StatsSection from "@/components/home/StatsSection";
import InstagramFeed from "@/components/home/InstagramFeed";

/**
 * Homepage — section order mirrors a typical destination gardens site:
 * alerts → hero → attractions → sustainability → blooming intro →
 * events → promotions → stats → visitor photos.
 * Branding and copy remain generic placeholders.
 */
export default function HomePage() {
  return (
    <>
      <AlertBanner />
      <Hero />
      <AttractionsGrid />
      <SustainabilityBanner />
      <BloomingIntro />
      <EventsCarousel />
      <PromotionsCarousel />
      <StatsSection />
      <InstagramFeed />
    </>
  );
}
