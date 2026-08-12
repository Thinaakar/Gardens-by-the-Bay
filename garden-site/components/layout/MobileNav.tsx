"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  utilityLinks: { label: string; href: string }[];
}

/**
 * Slide-in mobile navigation drawer with expandable sections.
 */
export default function MobileNav({ isOpen, onClose, items, utilityLinks }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  function toggleSection(label: string) {
    setExpanded((prev) => (prev === label ? null : label));
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-garden-canopy/50 transition-opacity xl:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      <nav
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-[min(100%,22rem)] flex-col bg-white shadow-xl transition-transform duration-300 xl:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-garden-mist px-4 py-4">
          <span className="font-display text-lg text-garden-canopy">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-garden-earth hover:text-garden-canopy"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-2 py-4">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.label}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-3 py-3 font-body text-sm font-medium text-garden-canopy"
                  onClick={() => toggleSection(item.label)}
                  aria-expanded={expanded === item.label}
                >
                  {item.label}
                  <span aria-hidden="true">{expanded === item.label ? "−" : "+"}</span>
                </button>
                {expanded === item.label && item.children && (
                  <ul className="mb-2 ml-3 border-l border-garden-mist pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-2 font-body text-sm text-garden-earth hover:text-garden-leaf"
                          onClick={onClose}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-garden-mist pt-4">
            <p className="px-3 pb-2 font-body text-xs uppercase tracking-wider text-garden-sage">
              Quick links
            </p>
            <ul>
              {utilityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-3 py-2 font-body text-sm text-garden-earth hover:text-garden-leaf"
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-garden-mist p-4">
          <Link
            href="/membership"
            className="mb-2 block w-full bg-garden-leaf py-3 text-center font-body text-sm font-medium text-white"
            onClick={onClose}
          >
            Member Login
          </Link>
          <Link
            href="/plan-your-visit"
            className="block w-full bg-garden-bloom py-3 text-center font-body text-sm font-medium text-white"
            onClick={onClose}
          >
            Buy Tickets
          </Link>
        </div>
      </nav>
    </>
  );
}
