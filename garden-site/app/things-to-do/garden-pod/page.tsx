import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Garden Pod",
  description: "An elevated vantage point for quiet views across the landscape.",
};

export default function Page() {
  return (
    <PageShell
      title="Garden Pod"
      description="An elevated vantage point for quiet views across the landscape."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Garden Pod page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
