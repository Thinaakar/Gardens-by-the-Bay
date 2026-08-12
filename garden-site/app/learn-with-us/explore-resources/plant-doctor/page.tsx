import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Plant Doctor",
  description: "Tips for diagnosing common houseplant and garden issues.",
};

export default function Page() {
  return (
    <PageShell
      title="Plant Doctor"
      description="Tips for diagnosing common houseplant and garden issues."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Plant Doctor page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
