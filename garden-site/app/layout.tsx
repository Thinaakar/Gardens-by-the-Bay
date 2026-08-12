import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Header from "@/components/layout/Header";
import VisitStrip from "@/components/layout/VisitStrip";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gardens by the Bay",
    template: "%s | Gardens by the Bay",
  },
  description:
    "Conservatories, trails, events, and visitor planning at Gardens by the Bay.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <VisitStrip />
        <Footer />
      </body>
    </html>
  );
}
