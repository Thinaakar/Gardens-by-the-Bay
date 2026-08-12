import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Lato } from "next/font/google";
import Header from "@/components/layout/Header";
import VisitStrip from "@/components/layout/VisitStrip";
import Footer from "@/components/layout/Footer";
import MonGPTWidget from "@/components/shared/MonGPTWidget";
import "./globals.css";

/** Live site primary typeface: Lato, Arial, sans-serif */
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gardens by the Bay",
    template: "%s | Gardens by the Bay",
  },
  description:
    "Rated No. 8 World's Top Attraction by Tripadvisor 2024 Travellers' Choice, Gardens by the Bay is one of Asia's premier horticultural destinations. Discover a scenic paradise for nature and photography enthusiasts, as well as for the whole family!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={lato.variable}>
      <body className="flex min-h-screen flex-col font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <VisitStrip />
        <Footer />
        <MonGPTWidget />
      </body>
    </html>
  );
}
