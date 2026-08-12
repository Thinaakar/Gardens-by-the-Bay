import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Visiting Guidelines",
  description: "Rules that keep the gardens safe and enjoyable for everyone.",
};

export default function Page() {
  return (
    <PageShell
      title="Visiting Guidelines"
      description="Rules that keep the gardens safe and enjoyable for everyone."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Visiting Guidelines page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
