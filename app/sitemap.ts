import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { notes, projects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const routes = ["/", "/work", "/services", "/approach", "/about", "/notes", "/contact", "/privacy"];
  const staticEntries = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.7,
  }));
  const projectEntries = projects.map((project) => ({
    url: `${base}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  const noteEntries = notes.map((note) => ({
    url: `${base}/notes/${note.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));
  return [...staticEntries, ...projectEntries, ...noteEntries];
}
