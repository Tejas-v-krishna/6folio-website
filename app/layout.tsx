import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";

const sans = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "6FOLIO",
  description: "6FOLIO is an independent creative growth studio.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <SiteHeader />
        <div className="h-[4.75rem] md:h-[5.5rem]" aria-hidden="true" />
        <main>{children}</main>
      </body>
    </html>
  );
}
