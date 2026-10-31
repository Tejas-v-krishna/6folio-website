import type { Metadata } from "next";
import WorkIndex from "@/components/work-index";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects, experiments, and self-initiated studies by 6FOLIO. Look beyond the final image and into the choices that shaped the work.",
  alternates: {
    canonical: `${siteUrl()}/work`,
  },
};

export default function WorkPage() {
  return <WorkIndex />;
}
