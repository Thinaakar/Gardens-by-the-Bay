import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of this website.",
};

export default function Page() {
  return (
    <PageShell
      title="Terms of Use"
      description="Terms governing use of this website."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Terms of Use page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
