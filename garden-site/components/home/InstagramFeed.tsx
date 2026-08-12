import Image from "next/image";
import { assets } from "@/lib/assets";

/** Local stand-ins for EmbedSocial Instagram grid on live site */
const feedImages = [
  assets.attraction.flowerDome,
  assets.attraction.cloudForest,
  assets.attraction.floralFantasy,
  assets.attraction.supertreeObservatory,
  assets.attraction.activeGarden,
  assets.banners.visitStrip,
];

/**
 * Instagram section — heading + photo grid aligned to site gutters.
 */
export default function InstagramFeed() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="site-container mb-8 text-center">
        <h2 className="font-body text-[1.75rem] font-bold text-garden-canopy md:text-[2.25rem]">
          From <span className="font-bold">our Visitors</span>
        </h2>
        <p className="mt-3 font-body text-base text-garden-earth">
          <a
            href="https://www.instagram.com/explore/tags/gardensbythebay/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-garden-canopy underline-offset-2 hover:underline"
          >
            #gardensbythebay
          </a>{" "}
          and share your Gardens moments with us on Instagram!
        </p>
      </div>
      <div className="site-container">
        <ul className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5 md:gap-3">
          {feedImages.map((src, i) => (
            <li key={i} className="relative aspect-square overflow-hidden">
              <Image
                src={src}
                alt={`Gardens visitor photo ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
