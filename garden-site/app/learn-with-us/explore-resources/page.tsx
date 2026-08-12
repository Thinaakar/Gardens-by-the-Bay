import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Explore Resources",
  description: "Articles, crafts, videos, and plant care tips.",
};

export default function Page() {
  return (
    <PageShell
      title="Explore Resources"
      description="Articles, crafts, videos, and plant care tips."
      links={[{ label: "What's Visiting", href: "/learn-with-us/explore-resources/whats-visiting" }, { label: "What's Blooming", href: "/learn-with-us/explore-resources/whats-blooming" }, { label: "Articles", href: "/learn-with-us/explore-resources/articles" }, { label: "Crafts & Worksheets", href: "/learn-with-us/explore-resources/crafts-and-worksheets" }, { label: "Comics", href: "/learn-with-us/explore-resources/comics" }, { label: "E-Books", href: "/learn-with-us/explore-resources/e-books" }, { label: "Videos", href: "/learn-with-us/explore-resources/videos" }, { label: "Plant Doctor", href: "/learn-with-us/explore-resources/plant-doctor" }]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Explore Resources page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
