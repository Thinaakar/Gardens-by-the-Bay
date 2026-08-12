import type { Config } from "tailwindcss";

/**
 * Tokens aligned to gardensbythebay.com.sg:
 * Lato sans throughout, teal #0F4C48, brand purple #530F66.
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
          canopy: "#0F4C48",
          leaf: "#0F4C48",
          moss: "#0A3A37",
          sage: "#8AB8B4",
          mist: "#F5F5F5",
          cream: "#FFFFFF",
          earth: "#555555",
          bloom: "#00A19A",
          sky: "#5BA8B0",
          ink: "#333333",
          charcoal: "#2C2C2C",
          ash: "#3A3A3A",
          purple: "#530F66",
          gold: "#C9A227",
        },
      },
      fontFamily: {
        // Live site: Lato, Arial, sans-serif — use for both display & body
        display: ["var(--font-body)", "Lato", "Arial", "sans-serif"],
        body: ["var(--font-body)", "Lato", "Arial", "sans-serif"],
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
