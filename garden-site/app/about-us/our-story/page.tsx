import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Our Story",
  description: "How a vision for a living landscape became a destination for all.",
};

export default function Page() {
  return (
    <PageShell
      title="Our Story"
      description="How a vision for a living landscape became a destination for all."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Our Story page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
