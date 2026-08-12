import type { Config } from "tailwindcss";

/**
 * Tokens inspired by destination-garden sites:
 * teal accents for CTAs/header, charcoal footer, purple subscribe, gold back-to-top.
 * Generic brand only — not a logo/asset clone.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-garden-charcoal",
    "text-garden-purple",
    "text-garden-charcoal",
    "bg-garden-purple",
  ],
  theme: {
    extend: {
      colors: {
        garden: {
          canopy: "#1F3A36",
          leaf: "#00A19A",
          moss: "#00857C",
          sage: "#8AB8B4",
          mist: "#E6F5F4",
          cream: "#F7FBFA",
          earth: "#4A5C5A",
          bloom: "#00B4A6",
          sky: "#5BA8B0",
          ink: "#1A2E2C",
          charcoal: "#2C2C2C", // main footer bg (matches live-site pattern)
          ash: "#3A3A3A",
          purple: "#6B3D9A", // subscribe button text
          gold: "#C9A227", // back-to-top arrow
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "slide-in": "slideIn 0.3s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(1.25rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
