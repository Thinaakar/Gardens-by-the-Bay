import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common visitor questions.",
};

export default function Page() {
  return (
    <PageShell
      title="FAQ"
      description="Answers to common visitor questions."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the FAQ page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
