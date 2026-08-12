"use client";

import { useState } from "react";
import Link from "next/link";
import { siteAlerts } from "@/lib/data/nav-links";

/**
 * Alert carousel strip — compact live-site announcement pattern.
 */
export default function AlertBanner() {
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || siteAlerts.length === 0) return null;

  const alert = siteAlerts[index];

  return (
    <div className="border-b border-black/10 bg-white text-garden-ink">
      <div className="site-container flex items-start gap-3 py-3 md:items-center">
        <span className="mt-0.5 shrink-0 bg-garden-canopy px-2 py-0.5 font-body text-[10px] font-bold uppercase tracking-wider text-white md:mt-0">
          Alert
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-body text-sm font-bold text-garden-ink">{alert.title}</p>
          <p className="mt-0.5 font-body text-xs leading-relaxed text-garden-earth md:text-sm">
            {alert.body}
            {alert.href && (
              <>
                {" "}
                <Link
                  href={alert.href}
                  className="font-bold text-garden-canopy underline underline-offset-2 hover:opacity-80"
                >
                  Click here
                </Link>{" "}
                to download the diversion map.
              </>
            )}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          {siteAlerts.length > 1 && (
            <>
              <span className="hidden font-body text-xs text-garden-earth sm:inline">
                {index + 1}/{siteAlerts.length}
              </span>
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
