"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Search modal overlay. Opens from header search icon.
 * Form submits to a placeholder search results path.
 */
export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder — wire to real search later
    onClose();
    setQuery("");
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-garden-canopy/70 px-4 pt-24 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl animate-fade-up bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-2xl text-garden-canopy">Search</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-garden-earth hover:text-garden-canopy"
            aria-label="Close search"
          >
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <label htmlFor="site-search" className="sr-only">
            Search the site
          </label>
          <input
            ref={inputRef}
            id="site-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search attractions, events, guides…"
            className="flex-1 border border-garden-sage/40 bg-garden-cream px-4 py-3 font-body text-garden-canopy outline-none focus:border-garden-moss"
          />
          <button
            type="submit"
            className="bg-garden-leaf px-5 py-3 font-body text-white transition hover:bg-garden-canopy"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
