import type { ArtVariant } from "@/content/projects";
import Dither from "@/components/dither";

const artLabels: Record<ArtVariant, string> = {
  serein: "Dither field in royal blue over paper, fading from left to right",
  goodkind: "White dither wave over a royal blue field",
  northstar: "Light dither glyphs over a black field",
};

export default function ProjectArt({
  variant,
  className = "",
  showLabel = true,
}: {
  variant: ArtVariant;
  className?: string;
  showLabel?: boolean;
}) {
  return (
    <div
      className={`project-art relative h-full w-full overflow-hidden ${className}`}
      role="img"
      aria-label={artLabels[variant]}
    >
      {variant === "serein" ? (
        <div className="absolute inset-0 bg-sheet text-accent">
          <div className="absolute inset-y-0 right-0 w-[72%] p-3">
            <Dither variant="fade-right" cols={30} rows={20} />
          </div>
          {showLabel ? (
            <p className="absolute bottom-3 left-4 text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-ink/60">
              F01 / Material study
            </p>
          ) : null}
        </div>
      ) : null}

      {variant === "goodkind" ? (
        <div className="absolute inset-0 card-blue">
          <div className="absolute inset-0 p-4 text-white">
            <Dither variant="field" cols={34} rows={20} dotRadius={0.13} />
          </div>
          {showLabel ? (
            <p className="absolute bottom-3 left-4 text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-white/70">
              F02 / Ritual study
            </p>
          ) : null}
        </div>
      ) : null}

      {variant === "northstar" ? (
        <div className="absolute inset-0 card-ink">
          <div className="absolute inset-x-6 bottom-4 top-10 text-white/90">
            <Dither variant="glyph" cols={36} rows={18} dotRadius={0.17} />
          </div>
          {showLabel ? (
            <p className="absolute bottom-3 left-4 text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-white/55">
              F03 / Systems study
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
