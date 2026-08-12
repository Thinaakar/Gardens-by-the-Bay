import Image from "next/image";

/** Placeholder Instagram-style grid images */
const feedImages = [
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80",
];

/**
 * Placeholder Instagram feed grid (static images — connect API later).
 */
export default function InstagramFeed() {
  return (
    <section className="bg-garden-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 xl:px-6">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl text-garden-canopy md:text-4xl">
            From <span className="italic text-garden-leaf">our visitors</span>
          </h2>
          <p className="mt-2 font-body text-garden-earth/80">
            Tag{" "}
            <a href="#" className="text-garden-leaf underline-offset-2 hover:underline">
              #gardensbythebay
            </a>{" "}
            and share your garden moments with us.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3">
          {feedImages.map((src, i) => (
            <li key={i} className="relative aspect-square overflow-hidden">
              <Image
                src={src}
                alt={`Garden photo ${i + 1}`}
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
