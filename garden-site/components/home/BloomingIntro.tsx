/**
 * "Flowers never stop blooming" — live header-text band (bold Lato, no serif italic).
 */
export default function BloomingIntro() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="site-container">
        <div className="grid gap-6 md:grid-cols-12 md:items-start md:gap-10">
          <div className="md:col-span-4">
            <h2 className="font-body text-[1.75rem] font-bold leading-tight text-garden-canopy md:text-[2.25rem]">
              Flowers never stop{" "}
              <span className="font-bold text-garden-canopy">blooming</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="font-body text-base font-bold text-garden-ink md:text-lg">
              There&apos;s always something blooming in the Gardens.
            </p>
            <p className="mt-3 font-body text-base leading-relaxed text-garden-earth md:text-[1.05rem]">
              Spend an afternoon with unusual plants from around the world in the cooled
              conservatories, swing by the OCBC Skyway for spectacular views from 22m above ground,
              and check out our ongoing programmes for a fun-filled day for the entire family!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
