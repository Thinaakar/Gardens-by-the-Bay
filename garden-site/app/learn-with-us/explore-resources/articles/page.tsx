import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Articles",
  description: "Long-form stories on plants, ecology, and design.",
};

export default function Page() {
  return (
    <PageShell
      title="Articles"
      description="Long-form stories on plants, ecology, and design."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Articles page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
