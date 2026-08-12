"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainNav, utilityLinks } from "@/lib/data/nav-links";
import NavDropdown from "@/components/layout/NavDropdown";
import MobileNav from "@/components/layout/MobileNav";
import SearchModal from "@/components/shared/SearchModal";

/**
 * Sticky site header patterned after destination gardens sites:
 * utility row → logo + uppercase primary nav → purple Buy Tickets.
 */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="hidden border-b border-neutral-200 bg-white lg:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 xl:px-6">
            <ul className="flex flex-wrap items-center gap-5">
              {utilityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-xs text-neutral-600 transition hover:text-[#0F4C48]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-5">
              <Link
                href="/membership"
                className="font-body text-xs font-medium text-neutral-700 transition hover:text-[#0F4C48]"
              >
                Member Login
              </Link>
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="font-body text-xs text-neutral-600 transition hover:text-[#0F4C48]"
                aria-label="Open search"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 xl:gap-4 xl:px-6">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 shrink-0"
            aria-label="Gardens by the Bay home"
          >
            <Image
              src="/images/logo/logo.svg"
              alt="Gardens by the Bay"
              width={44}
              height={44}
              className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
              priority
            />
            <span className="max-w-[7.5rem] font-display text-sm leading-tight tracking-tight text-neutral-900 xs:max-w-none sm:max-w-[9rem] sm:text-base md:max-w-none md:text-lg lg:text-xl">
              Gardens by the Bay
            </span>
          </Link>

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
              className="p-2 text-neutral-800 transition hover:text-[#0F4C48] xl:hidden"
              aria-label="Open search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3-3" />
              </svg>
            </button>

            <Link
              href="/plan-your-visit"
              className="hidden px-5 py-2.5 font-body text-sm font-semibold uppercase tracking-wide text-white transition hover:opacity-90 sm:inline-flex"
              style={{ backgroundColor: "#6B3D9A" }}
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
