"use client";

import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { footerOrgLinks, legalLinks } from "@/lib/data/nav-links";
import NewsletterForm from "@/components/shared/NewsletterForm";
import { scrollToTop } from "@/lib/utils";

/** Hardcoded hex keeps contrast stable even if a Tailwind token fails to compile */
const FOOTER_BG = "#2C2C2C";
const ICON_INK = "#2C2C2C";

const socialLinks: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3.5A4.5 4.5 0 1112 16.5 4.5 4.5 0 0112 7.5zm0 2A2.5 2.5 0 1014.5 12 2.5 2.5 0 0012 9.5zM17.5 6.8a1 1 0 11-1 1 1 1 0 011-1z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
        <path d="M18.2 2H21l-6.5 7.4L22 22h-6.2l-4.4-6.3L6 22H3.2l7-8L2 2h6.3l4 5.7L18.2 2zm-1.1 18h1.7L7 3.9H5.2L17.1 20z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M23 12.2s0-3.4-.4-5a3 3 0 00-2.1-2.1C18.8 4.6 12 4.6 12 4.6s-6.8 0-8.5.5A3 3 0 001.4 7.2C1 8.8 1 12.2 1 12.2s0 3.4.4 5a3 3 0 002.1 2.1c1.7.5 8.5.5 8.5.5s6.8 0 8.5-.5a3 3 0 002.1-2.1c.4-1.6.4-5 .4-5zM9.8 15.5v-6.6l5.7 3.3-5.7 3.3z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M9.5 15.3l-.4 4.1c.5 0 .8-.2 1.1-.5l2.6-2.5 5.4 4c1 .5 1.7.3 2-.9L22.8 4c.3-1.3-.5-1.9-1.5-1.5L2.4 9.3C1.1 9.8 1.1 10.5 2 10.8l4.9 1.5 11.3-7.1c.5-.3 1-.1.6.2L9.5 15.3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M6.5 8.5A2.5 2.5 0 114 6a2.5 2.5 0 012.5 2.5zM4.5 10h4v10h-4zm6 0h3.8v1.4h.1A4.2 4.2 0 0118.5 10C21 10 22 11.7 22 14.5V20h-4v-4.8c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V20h-4z" />
      </svg>
    ),
  },
  {
    label: "Weibo",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M17.5 9.2c.8-.1 1.5-.6 1.8-1.3.1-.3-.1-.5-.4-.4-.7.3-1.5.3-2.2 0-.3-.1-.5.1-.4.4.3.7 1 1.2 1.2 1.3zM10.2 11.5c-3.3 0-6 2-6 4.5s2.7 4.5 6 4.5 6-2 6-4.5-2.7-4.5-6-4.5zm-1.2 7.2c-1.9.3-3.5-.7-3.6-2.2-.1-1.5 1.3-3 3.2-3.3 1.9-.3 3.5.7 3.6 2.2.1 1.5-1.3 3-3.2 3.3z" />
      </svg>
    ),
  },
  {
    label: "WeChat",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M9.5 4C5.9 4 3 6.5 3 9.6c0 1.8 1 3.4 2.6 4.4L5 16.5l2.3-1.2c.7.2 1.4.3 2.2.3.2 0 .4 0 .6-.1-.1-.4-.2-.8-.2-1.2 0-3.1 2.9-5.6 6.4-5.6.2 0 .5 0 .7.1C16.2 5.9 13.1 4 9.5 4zm-2 4.2a.9.9 0 110-1.8.9.9 0 010 1.8zm4.2 0a.9.9 0 110-1.8.9.9 0 010 1.8zM21 13.2c0-2.5-2.5-4.5-5.5-4.5S10 10.7 10 13.2s2.5 4.5 5.5 4.5c.6 0 1.1-.1 1.6-.2l1.9 1-.5-1.9c1.3-.8 2-2 2-3.4zm-7.2-.2a.7.7 0 110-1.4.7.7 0 010 1.4zm3.4 0a.7.7 0 110-1.4.7.7 0 010 1.4z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M16.5 3c.4 2.2 1.8 3.8 4 4.2v2.8c-1.4 0-2.7-.4-4-1.2v6.3A6.3 6.3 0 118 8.9v2.9a3.4 3.4 0 003.3 3.4c1.8 0 3.2-1.3 3.2-3V3h2z" />
      </svg>
    ),
  },
];

/**
 * Charcoal footer matching destination-site pattern:
 * org links | newsletter | social icons | silhouette | legal bar + back-to-top.
 */
export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: FOOTER_BG }}
    >
      {/* Decorative silhouette (generic placeholder artwork) */}
      <div className="pointer-events-none absolute bottom-10 right-0 z-0 hidden w-[min(55%,30rem)] opacity-50 md:block">
        <Image
          src="/images/icons/garden-silhouette.svg"
          alt=""
          width={480}
          height={200}
          className="h-auto w-full"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-14 xl:px-6 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <nav aria-label="Footer">
              <ul className="space-y-3">
                {footerOrgLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm font-medium uppercase tracking-[0.08em] text-white transition hover:opacity-80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-10">
              <h3 className="font-body text-base font-semibold text-white">Connect with Us</h3>
              <ul className="mt-4 flex max-w-md flex-wrap gap-3">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition hover:opacity-90"
                      style={{ color: ICON_INK }}
                    >
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:justify-self-end lg:w-full lg:max-w-md">
            <NewsletterForm variant="footer" />
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <button
            type="button"
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center border border-white bg-transparent transition hover:bg-white/10"
            aria-label="Back to top"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M8 12V4M8 4L4 8M8 4l4 4"
                stroke="#C9A227"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/25 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-xs uppercase tracking-wide text-white">
            {legalLinks.map((link, i) => (
              <li key={link.label} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="text-white/50" aria-hidden="true">
                    |
                  </span>
                )}
                <Link href={link.href} className="hover:opacity-80">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="font-body text-xs text-white/90">
            18 Marina Gardens Drive, Singapore 018953
          </p>
        </div>
      </div>
    </footer>
  );
}
