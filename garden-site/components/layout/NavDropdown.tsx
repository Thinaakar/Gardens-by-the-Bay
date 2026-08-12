"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { NavItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface NavDropdownProps {
  item: NavItem;
}

/**
 * Desktop mega-style dropdown — wider panel for long destination menus.
 */
export default function NavDropdown({ item }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const children = item.children ?? [];
  const useMega = children.length > 6;

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 px-3 py-3 font-body text-xs font-bold uppercase tracking-[0.08em] text-neutral-800 transition hover:text-garden-canopy"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
      >
        {item.label}
        <span className="text-[10px]" aria-hidden="true">
          ▾
        </span>
      </button>

      {open && children.length > 0 && (
        <div
          className={cn(
            "absolute left-0 top-full z-50 border border-black/10 bg-white py-3 shadow-lg animate-fade-up",
            useMega ? "w-[min(90vw,36rem)] p-4" : "min-w-[240px]"
          )}
          role="menu"
        >
          <p className="mb-2 px-2 font-body text-sm font-bold text-garden-canopy">{item.label}</p>
          <ul className={cn(useMega ? "grid grid-cols-2 gap-x-2 gap-y-0.5" : "block")}>
            {children.map((child) => (
              <li key={child.href} role="none">
                <Link
                  href={child.href}
                  role="menuitem"
                  className="block rounded px-2 py-2 font-body text-sm text-garden-earth transition hover:bg-garden-mist hover:text-garden-canopy"
                  onClick={() => setOpen(false)}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}
