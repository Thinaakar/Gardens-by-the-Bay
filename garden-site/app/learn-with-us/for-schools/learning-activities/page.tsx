import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Learning Activities",
  description: "Self-guided and facilitator-led activity packs.",
};

export default function Page() {
  return (
    <PageShell
      title="Learning Activities"
      description="Self-guided and facilitator-led activity packs."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Learning Activities page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
