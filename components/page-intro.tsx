import type { ReactNode } from "react";
import { SixFBoxes, SixFPattern } from "@/components/six-f";

export default function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  tone?: "default" | "blue" | "ink";
}) {
  return (
    <section className="sheet hero-gradient text-white">
      <SixFPattern id="page-intro-pattern" className="absolute right-0 top-0 h-full w-[38%] opacity-[0.1]" />
      <div className="sheet-pad-lg relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <SixFBoxes className="h-6 w-12 text-[9px]" />
              <p className="eyebrow eyebrow-on-dark">{eyebrow}</p>
            </div>
            <h1 className="display-xl mt-7 max-w-4xl text-white">{title}</h1>
          </div>
          <div className="lg:col-span-4">
            <p className="body-lg max-w-md text-white/70">{description}</p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
