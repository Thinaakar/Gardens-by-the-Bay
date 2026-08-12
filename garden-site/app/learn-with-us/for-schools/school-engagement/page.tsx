import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "School Engagement",
  description: "Partnerships, teacher workshops, and outreach.",
};

export default function Page() {
  return (
    <PageShell
      title="School Engagement"
      description="Partnerships, teacher workshops, and outreach."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the School Engagement page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
