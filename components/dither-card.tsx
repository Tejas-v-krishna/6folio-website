import PixelDissolve from "@/components/pixel-dissolve";
import { ToggleMark } from "@/components/marks";

export type DitherCardContent = {
  index: string;
  lines: [string, string, string];
  seed: number;
  speed?: number;
};

export default function DitherCard({
  index,
  lines,
  seed,
  speed = 1,
}: DitherCardContent) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[18px] border border-ink/10 bg-[#eef1ff] transition-transform duration-300 ease-out hover:-translate-y-1.5">
      <div className="relative h-52 overflow-hidden md:h-60">
        <PixelDissolve seed={seed} speed={speed} />
        <p className="absolute left-4 top-3 text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-ink/50">
          {index}
        </p>
      </div>

      <div className="card-ink flex min-h-[240px] flex-1 flex-col justify-between p-6">
        <h3 className="text-[1.85rem] font-medium leading-[1.04] tracking-[-0.04em] text-white">
          <span className="block">{lines[0]}</span>
          <span className="block">{lines[1]}</span>
          <span className="block">{lines[2]}</span>
        </h3>
        <div className="mt-8 flex items-center justify-end gap-2 text-white">
          <ToggleMark className="h-3.5 w-8" />
          <span className="text-[0.72rem] font-semibold tracking-[-0.01em]">
            6FOLIO
          </span>
        </div>
      </div>
    </article>
  );
}
