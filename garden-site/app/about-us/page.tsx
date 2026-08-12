import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn who we are and what shapes the gardens.",
};

export default function Page() {
  return (
    <PageShell
      title="About Us"
      description="Learn who we are and what shapes the gardens."
      links={[{ label: "Our Story", href: "/about-us/our-story" }, { label: "Our History", href: "/about-us/our-history" }, { label: "Sustainability", href: "/about-us/sustainability" }]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the About Us page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
