"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNav, utilityLinks } from "@/lib/data/nav-links";
import NavDropdown from "@/components/layout/NavDropdown";
import MobileNav from "@/components/layout/MobileNav";
import BrandLogo from "@/components/layout/BrandLogo";
import SearchModal from "@/components/shared/SearchModal";

/**
 * Sticky site header — full-width gutters aligned with page content.
 */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="hidden border-b border-neutral-200 bg-white lg:block">
          <div className="site-container flex items-center justify-between gap-4 py-2">
            <ul className="flex flex-wrap items-center gap-5">
              {utilityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-xs text-neutral-600 transition hover:text-garden-canopy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-5">
              <Link
                href="/membership"
                className="font-body text-xs font-medium text-neutral-700 transition hover:text-garden-canopy"
              >
                Member Login
              </Link>
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="font-body text-xs text-neutral-600 transition hover:text-garden-canopy"
                aria-label="Open search"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="site-container flex items-center justify-between gap-3 py-3 xl:gap-4">
          <BrandLogo priority />

          <nav className="hidden min-w-0 flex-1 justify-center xl:flex" aria-label="Primary">
            <ul className="flex flex-wrap items-center justify-center">
              {mainNav.map((item) => (
                <NavDropdown key={item.label} item={item} />
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="p-2 text-neutral-800 transition hover:text-garden-canopy xl:hidden"
              aria-label="Open search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3-3" />
              </svg>
            </button>

            <Link
              href="/plan-your-visit"
              className="hidden bg-garden-purple px-5 py-2.5 font-body text-sm font-bold uppercase tracking-wide text-white transition hover:opacity-90 sm:inline-flex"
            >
              Buy Tickets
            </Link>

            <button
              type="button"
              className="p-2 text-neutral-800 xl:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={mainNav}
        utilityLinks={utilityLinks}
      />

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
