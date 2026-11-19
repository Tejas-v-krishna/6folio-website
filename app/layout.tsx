import type { Metadata, Viewport } from "next";
import { Caveat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import SmoothScroll from "@/components/smooth-scroll";
import RevealController from "@/components/reveal-controller";
import AsciiPreloader from "@/components/ascii-preloader";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const script = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title: {
    default: "6FOLIO | Six perspectives. One clear direction.",
    template: "%s | 6FOLIO",
  },
  description:
    "6FOLIO is an independent creative growth studio bringing six perspectives to brand, content, production, marketing, and digital experience.",
  applicationName: "6FOLIO",
  openGraph: {
    title: "6FOLIO | Six perspectives. One clear direction.",
    description:
      "An independent creative growth studio bringing six perspectives to one clear direction.",
    type: "website",
    siteName: "6FOLIO",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "6FOLIO engraved portrait hero with the line six perspectives, one clear direction.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "6FOLIO | Six perspectives. One clear direction.",
    description:
      "An independent creative growth studio bringing six perspectives to one clear direction.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1636f8",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${script.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;transform:none!important} .ascii-preloader{display:none!important}"}</style>
        </noscript>
        <AsciiPreloader />
        <SiteHeader />
        <main id="main" className="page-stack">
          {children}
        </main>
        <SiteFooter />
        <SmoothScroll />
        <RevealController />
      </body>
    </html>
  );
}
