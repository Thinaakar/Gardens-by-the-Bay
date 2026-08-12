import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  className?: string;
  imageAlt?: string;
  children?: ReactNode;
}

/**
 * Content card with optional image and link wrapper.
 * Used for attractions, events, promotions grids.
 */
export default function Card({
  title,
  description,
  image,
  href,
  className,
  imageAlt = "",
  children,
}: CardProps) {
  const content = (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md",
        className
      )}
    >
      {image && (
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-xl text-garden-canopy">{title}</h3>
        {description && (
          <p className="font-body text-sm leading-relaxed text-garden-earth/80">{description}</p>
        )}
        {children}
      </div>
    </article>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-garden-moss"
      >
        {content}
      </Link>
    );
  }

  return content;
}
