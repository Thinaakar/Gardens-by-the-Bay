import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Primary School",
  description: "Hands-on science and nature programmes for primary students.",
};

export default function Page() {
  return (
    <PageShell
      title="Primary School"
      description="Hands-on science and nature programmes for primary students."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Primary School page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
