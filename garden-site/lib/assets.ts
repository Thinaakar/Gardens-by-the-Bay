/**
 * Local asset paths under public/assets/.
 * Mirrors gardensbythebay.com.sg homepage media.
 */
const base = "/assets/images";

export const assets = {
  logo: {
    grey: `${base}/logo/GBTB_grey_landscape_logo.png`,
    white: `${base}/logo/GBTB_white_landscape_logo.png`,
  },
  video: {
    hero: "/assets/videos/hero-branding.mp4",
  },
  attraction: {
    activeGarden: `${base}/attraction/1920x1080-propnex-family-zone.jpg`,
    cloudForest: `${base}/attraction/cloud-forest-night-main.jpg`,
    floralFantasy: `${base}/attraction/floral-fantasy-main.jpg`,
    flowerDome: `${base}/attraction/flower-dome-main.jpg`,
    supertreeObservatory: `${base}/attraction/supertree-observatory-main.jpg`,
    kingfisherWetlands: `${base}/attraction/kw-1000x1000-thumb.jpg`,
  },
  banners: {
    sustainability: `${base}/banners/susnew-full-width-banner-1920x600.jpg`,
    visitStrip: `${base}/home/overview-of-gardens-attractions.jpg`,
  },
  events: {
    lilytopia: `${base}/events/2026-Lilytopia-Website-Thumbnail-1x1.jpg`,
    disneyGarden: `${base}/events/Disney_Garden_of_Wonder-Thumb-with_disclaimer.jpg`,
    jurassicWorld: `${base}/events/jurassic-world-experience-1080x1080.jpg`,
    plantsmansFair: `${base}/events/PlantsmansFair_Thumbnail_square_1x1.jpg`,
    borealis: `${base}/events/2025-Borealis-visual-v4-square.jpg`,
    gardenRhapsody: `${base}/events/image.jpg`,
  },
  promotions: {
    safra: `${base}/promotion/2025-SAFRA-Flower-Dome-promotion-Tile-Thumbnail-square-1080x1080.jpg`,
    passion: `${base}/promotion/2025-passion-fd-promo-thumbnail-1080x1080.png`,
    ocbc: `${base}/promotion/2025-ocbc-attractions-bundle-promotion-thumbnail-1080x1080.jpg`,
    dbsPosb: `${base}/promotion/2026-Mar-POSBpromo-Thumbnail-1080x1080.jpg`,
  },
  icons: {
    travellersChoice: `${base}/icon/page-number-one-destination.svg`,
    visitors: `${base}/icon/50-million-visitors.svg`,
    instagrammable: `${base}/icon/world-top-10-v2.svg`,
    plants: `${base}/icon/million-plants.svg`,
  },
  mobileApp: `${base}/plan-your-visit-and-mobile/GB-mobile-app-visual-NoBackground.jpg`,
} as const;
