import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Book a Venue",
  description: "Weddings, corporate events, and private celebrations.",
};

export default function Page() {
  return (
    <PageShell
      title="Book a Venue"
      description="Weddings, corporate events, and private celebrations."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Book a Venue page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
