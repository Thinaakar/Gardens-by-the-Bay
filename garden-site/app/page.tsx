import type { Metadata } from "next";
import AlertBanner from "@/components/layout/AlertBanner";
import Hero from "@/components/home/Hero";
import AttractionsGrid from "@/components/home/AttractionsGrid";
import SustainabilityBanner from "@/components/home/SustainabilityBanner";
import BloomingIntro from "@/components/home/BloomingIntro";
import EventsCarousel from "@/components/home/EventsCarousel";
import PromotionsCarousel from "@/components/home/PromotionsCarousel";
import StatsSection from "@/components/home/StatsSection";
import InstagramFeed from "@/components/home/InstagramFeed";
import AppDownloadBanner from "@/components/home/AppDownloadBanner";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Gardens by the Bay",
  description:
    "Rated No. 8 World's Top Attraction by Tripadvisor 2024 Travellers' Choice, Gardens by the Bay is one of Asia's premier horticultural destinations. Discover a scenic paradise for nature and photography enthusiasts, as well as for the whole family!",
  openGraph: {
    title: "Gardens by the Bay",
    description:
      "One of Asia's premier horticultural destinations, Gardens by the Bay offers a scenic paradise for nature and photography lovers, as well as the whole family. Come explore its world-class attractions!",
    url: "https://www.gardensbythebay.com.sg/",
    type: "website",
    images: [
      {
        url: assets.attraction.supertreeObservatory,
        width: 1920,
        height: 1080,
        alt: "Gardens by the Bay",
      },
    ],
  },
};

/**
 * Homepage — section order mirrors gardensbythebay.com.sg:
 * alerts → hero video → attractions masonry → sustainability → blooming intro →
 * events → promotions → stats → instagram → mobile app banner.
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
      <AppDownloadBanner />
    </>
  );
}
