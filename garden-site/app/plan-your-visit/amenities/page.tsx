import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Amenities",
  description: "Restrooms, first aid, lockers, accessibility, and more.",
};

export default function Page() {
  return (
    <PageShell
      title="Amenities"
      description="Restrooms, first aid, lockers, accessibility, and more."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Amenities page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
