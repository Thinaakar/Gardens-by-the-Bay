"use client";

import { useState, FormEvent } from "react";
import type { NewsletterFormData } from "@/lib/types";
import { cn } from "@/lib/utils";

interface NewsletterFormProps {
  className?: string;
  variant?: "default" | "footer";
}

/**
 * Newsletter signup with typed form state.
 * Footer variant: white SUBSCRIBE button with purple label (destination-site pattern).
 */
export default function NewsletterForm({
  className = "",
  variant = "default",
}: NewsletterFormProps) {
  const [form, setForm] = useState<NewsletterFormData>({ email: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const isFooter = variant === "footer";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm({ email: "" });
  }

  return (
    <form onSubmit={handleSubmit} className={cn(className)} noValidate>
      <label
        htmlFor="newsletter-email"
        className={cn(
          "mb-4 block font-body leading-relaxed",
          isFooter ? "text-base text-white md:text-lg" : "text-sm text-garden-mist"
        )}
      >
        {isFooter
          ? "Sign up for our newsletter to stay abreast of happenings in the Gardens!"
          : "Subscribe to our newsletter"}
      </label>

      <div className={cn("flex flex-col gap-3", isFooter ? "max-w-md" : "sm:flex-row")}>
        <input
          id="newsletter-email"
          type="email"
          required
          value={form.email}
          onChange={(e) => {
            setForm({ email: e.target.value });
            setStatus("idle");
          }}
          placeholder="your@email.com"
          className={cn(
            "w-full px-4 py-3 font-body text-sm outline-none",
            isFooter
              ? "border border-white/40 bg-white/5 text-white placeholder:text-white/55 focus:border-white"
              : "border border-garden-sage/30 bg-garden-canopy/40 text-white placeholder:text-garden-sage focus:border-garden-sage"
          )}
          aria-describedby="newsletter-status"
        />
        <button
          type="submit"
          className={cn(
            "font-body text-sm font-semibold uppercase tracking-wide transition",
            isFooter
              ? "bg-white px-10 py-3.5 hover:bg-[#F0F0F0]"
              : "bg-garden-bloom px-5 py-2.5 text-white hover:bg-garden-moss"
          )}
          style={isFooter ? { color: "#6B3D9A" } : undefined}
        >
          Subscribe
        </button>
      </div>

      <p id="newsletter-status" className="mt-2 min-h-[1.25rem] font-body text-xs" role="status">
        {status === "success" && <span className="text-[#A8D5D1]">Thanks for subscribing!</span>}
        {status === "error" && <span className="text-amber-300">Please enter a valid email.</span>}
      </p>
    </form>
  );
}
