import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  fallback: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
  display: "swap",
});

const editorial = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "6FOLIO | Six perspectives. One clear direction.",
  description:
    "6FOLIO is an independent creative growth studio. Six disciplines bound into one connected direction for ambitious businesses, from first idea to complete brand experience.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${editorial.variable}`}>
      <body>{children}</body>
    </html>
  );
}
