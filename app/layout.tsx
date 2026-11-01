import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { site, siteUrl } from "@/lib/site";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ScrollProgress from "@/components/scroll-progress";

const sans = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="relative">
        <div className="grid-overlay" aria-hidden="true" />
        <ScrollProgress />
        <div className="relative z-10">
          <SiteHeader />
          <div className="h-[4.75rem] md:h-[5.5rem]" aria-hidden="true" />
          {children}
          <SiteFooter />
        </div>
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
