export const site = {
  name: "6FOLIO",
  tagline: "Six perspectives. One clear direction.",
  description:
    "6FOLIO is an independent creative growth studio bringing six complementary perspectives together to help ambitious businesses build a clear identity, communicate with purpose, and grow across digital channels.",
  shortDescription:
    "An independent creative growth studio connecting brand, content, production, marketing, and digital experience.",
  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Approach", href: "/approach" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Start a project", href: "/contact" },
} as const;

export function siteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/+$/, "");
  return "http://localhost:3000";
}
