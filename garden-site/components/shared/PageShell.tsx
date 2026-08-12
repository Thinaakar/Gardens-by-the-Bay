/**
 * Shared interior page scaffold used across static content routes.
 * Keeps layout consistent while remaining easy to replace with real content.
 */
import Link from "next/link";
import type { ReactNode } from "react";

export interface PageShellLink {
  label: string;
  href: string;
}

interface PageShellProps {
  title: string;
  description: string;
  links?: PageShellLink[];
  children?: ReactNode;
}

export default function PageShell({ title, description, links, children }: PageShellProps) {
  return (
    <div className="bg-garden-cream">
      <header className="border-b border-garden-mist bg-garden-leaf">
        <div className="mx-auto max-w-7xl px-4 py-16 xl:px-6 md:py-20">
          <h1 className="font-display text-4xl text-white md:text-5xl">{title}</h1>
          <p className="mt-3 max-w-2xl font-body text-lg text-garden-mist">{description}</p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-12 xl:px-6 md:py-16">
        {children}

        {links && links.length > 0 && (
          <nav aria-label="Related pages" className="mt-10">
            <h2 className="mb-4 font-display text-2xl text-garden-canopy">Explore further</h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block border border-garden-sage/30 bg-white px-5 py-4 font-body text-garden-leaf transition hover:border-garden-leaf hover:bg-garden-mist"
                  >
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
