import type { Metadata } from "next";
import Image from "next/image";
import { events } from "@/lib/data/events";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Calendar of Events",
  description: "Festivals, workshops, and evening experiences throughout the year.",
};

export default function CalendarOfEventsPage() {
  return (
    <PageShell
      title="Calendar of Events"
      description="Festivals, workshops, and evening experiences throughout the year."
    >
      <ul className="space-y-6">
        {events.map((event) => (
          <li
            key={event.id}
            className="grid overflow-hidden bg-white sm:grid-cols-[240px_1fr]"
          >
            <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[160px]">
              <Image
                src={event.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 240px"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="font-body text-xs uppercase tracking-wider text-garden-moss">
                {event.category}
              </p>
              <h2 className="mt-1 font-display text-2xl text-garden-canopy">{event.title}</h2>
              <p className="mt-2 font-body text-sm text-garden-earth/80">{event.description}</p>
              <ul className="mt-4 space-y-1 font-body text-sm text-garden-leaf">
                <li>{event.dateLabel ?? event.date}</li>
                <li>{event.time}</li>
                <li>{event.location}</li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
