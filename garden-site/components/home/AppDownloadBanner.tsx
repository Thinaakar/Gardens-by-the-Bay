import Image from "next/image";
import { assets } from "@/lib/assets";

/**
 * Mobile app download banner — matches live homepage.
 */
export default function AppDownloadBanner() {
  return (
    <section className="border-t border-black/5 bg-garden-mist">
      <div className="site-container flex flex-col items-center gap-8 py-12 md:flex-row md:justify-between md:py-14">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="font-body text-xl font-bold text-garden-canopy md:text-2xl">
            Download the Gardens by the Bay Mobile App to enhance your Garden experience!
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="https://apps.apple.com/sg/app/gardens-by-the-bay/id1490838037"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-garden-canopy px-5 py-2.5 font-body text-sm font-bold text-white transition hover:opacity-90"
            >
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.gardensbythebay.supertree"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-garden-canopy px-5 py-2.5 font-body text-sm font-bold text-garden-canopy transition hover:bg-garden-canopy/5"
            >
              Google Play
            </a>
          </div>
        </div>
        <div className="relative h-48 w-64 shrink-0 md:h-56 md:w-72">
          <Image
            src={assets.mobileApp}
            alt="Gardens by the Bay mobile app"
            fill
            sizes="288px"
            className="object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
}
