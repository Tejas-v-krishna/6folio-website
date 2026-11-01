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

      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div className="flex items-center justify-between">
          <span className="mono text-paper/60">Selected work</span>
          <span className="mono text-paper/60">03</span>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mono text-paper/50">Concept studies</p>
            <p className="type-h4 mt-1 text-paper">View the work</p>
          </div>
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-paper/40 text-lg transition-colors group-hover:bg-paper group-hover:text-ink"
            aria-hidden="true"
          >
            ↗
          </span>
        </div>
      </div>
    </Link>
  );
}
