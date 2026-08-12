import { assets } from "@/lib/assets";

/**
 * Full-bleed hero — live masthead: video + bold Lato headline bottom-left.
 */
export default function Hero() {
  return (
    <section className="relative min-h-[70svh] w-full overflow-hidden md:min-h-[80svh]">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          aria-hidden
        >
          <source src={assets.video.hero} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
      </div>

      <div className="relative site-container flex min-h-[70svh] flex-col justify-end pb-14 pt-24 md:min-h-[80svh] md:pb-16">
        <h1 className="max-w-3xl animate-fade-up font-body text-[2.25rem] font-bold leading-[1.15] text-white sm:text-5xl md:text-[3.5rem] lg:text-[4rem]">
          Where Wonder Blooms
        </h1>
      </div>
    </section>
  );
}
