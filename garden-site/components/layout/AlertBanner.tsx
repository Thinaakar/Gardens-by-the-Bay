"use client";

import { useState } from "react";
import Link from "next/link";
import { siteAlerts } from "@/lib/data/nav-links";

/**
 * Dismissible alert strip — mirrors destination-site visitor notices.
 * Content is placeholder only.
 */
export default function AlertBanner() {
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || siteAlerts.length === 0) return null;

  const alert = siteAlerts[index];

  return (
    <div className="border-b border-garden-leaf/20 bg-garden-mist text-garden-canopy">
      <div className="mx-auto flex max-w-7xl items-start gap-3 px-4 py-3 xl:px-6 md:items-center">
        <span className="mt-0.5 shrink-0 rounded bg-garden-leaf/15 px-2 py-0.5 font-body text-[10px] font-semibold uppercase tracking-wider text-garden-moss md:mt-0">
          Alert
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-body text-sm font-medium">{alert.title}</p>
          <p className="mt-0.5 font-body text-xs leading-relaxed text-garden-earth/80 md:text-sm">
            {alert.body}
            {alert.href && (
              <>
                {" "}
                <Link href={alert.href} className="underline underline-offset-2 hover:text-garden-leaf">
                  View map
                </Link>
              </>
            )}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          {siteAlerts.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous alert"
                className="px-2 py-1 text-sm text-garden-earth hover:text-garden-canopy"
                onClick={() => setIndex((i) => (i === 0 ? siteAlerts.length - 1 : i - 1))}
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next alert"
                className="px-2 py-1 text-sm text-garden-earth hover:text-garden-canopy"
                onClick={() => setIndex((i) => (i === siteAlerts.length - 1 ? 0 : i + 1))}
              >
                ›
              </button>
            </>
          )}
          <button
            type="button"
            aria-label="Dismiss alerts"
            className="px-2 py-1 text-sm text-garden-earth hover:text-garden-canopy"
            onClick={() => setDismissed(true)}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
