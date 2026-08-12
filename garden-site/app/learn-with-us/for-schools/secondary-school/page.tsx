import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Secondary School",
  description: "Fieldwork and sustainability modules for secondary students.",
};

export default function Page() {
  return (
    <PageShell
      title="Secondary School"
      description="Fieldwork and sustainability modules for secondary students."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Secondary School page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
