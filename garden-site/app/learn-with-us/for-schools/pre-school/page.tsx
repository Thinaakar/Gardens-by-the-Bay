import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Pre-School",
  description: "Sensory exploration programmes for early learners.",
};

export default function Page() {
  return (
    <PageShell
      title="Pre-School"
      description="Sensory exploration programmes for early learners."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Pre-School page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
