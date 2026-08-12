import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Theatre",
  description: "Live performances and screenings in an outdoor garden setting.",
};

export default function Page() {
  return (
    <PageShell
      title="Theatre"
      description="Live performances and screenings in an outdoor garden setting."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Theatre page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
