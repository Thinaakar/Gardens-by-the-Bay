import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { assets } from "@/lib/assets";

interface BrandLogoProps {
  className?: string;
  href?: string;
  priority?: boolean;
  /** Footer variant: white wordmark on dark backgrounds */
  variant?: "default" | "footer";
}

/**
 * Site logo — GBTB landscape wordmarks from local assets.
 */
export default function BrandLogo({
  className,
  href = "/",
  priority = false,
  variant = "default",
}: BrandLogoProps) {
  const src = variant === "footer" ? assets.logo.white : assets.logo.grey;

  const logo = (
    <Image
      src={src}
      alt="Gardens by the Bay"
      width={220}
      height={64}
      priority={priority}
      className={cn(
        "h-auto w-auto max-h-10 object-contain object-left sm:max-h-12 md:max-h-14",
        className
      )}
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex shrink-0 items-center"
        aria-label="Gardens by the Bay home"
      >
        {logo}
      </Link>
    );
  }

  return logo;
}
