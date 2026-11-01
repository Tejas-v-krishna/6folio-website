import Link from "next/link";
import ProjectArtwork from "@/components/project-artwork";

export default function StudioCard() {
  return (
    <Link
      href="/work"
      className="group relative block overflow-hidden border border-paper/20 bg-ink text-paper"
      aria-label="View selected work"
    >
      <div className="aspect-[16/10]">
        <ProjectArtwork
          variant="northstar"
          scene={1}
          ariaLabel="Abstract cover artwork from the Northstar Work concept project"
          className="h-full w-full opacity-80 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>

      <div className="absolute inset-0 flex items-end justify-between gap-4 p-4">
        <p className="type-h4 text-paper">View work</p>
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-paper/40 text-lg transition-colors group-hover:bg-paper group-hover:text-ink"
          aria-hidden="true"
        >
          ↗
        </span>
      </div>
    </Link>
  );
}
