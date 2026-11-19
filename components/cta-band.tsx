import Link from "next/link";
import { ArrowUpRight } from "@/components/marks";
import { SixFBoxes, SixFPattern } from "@/components/six-f";

export default function CtaBand({
  eyebrow = "Have something in mind?",
  title = "Tell us where you want to go.",
  body = "A new brand, a sharper digital presence, a campaign that needs a stronger idea, or a growth problem that needs a closer look. Tell us what is happening. We will help work out what should happen next.",
  actionLabel = "Start a conversation",
  actionHref = "/contact",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <section className="sheet hero-gradient text-white">
      <SixFPattern id="cta-pattern" className="absolute right-0 top-0 h-full w-[38%] opacity-[0.1]" />
      <div className="sheet-pad-lg relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <SixFBoxes className="h-6 w-12 text-[9px]" />
              <p className="eyebrow eyebrow-on-dark">{eyebrow}</p>
            </div>
            <h2 className="display-lg mt-6 max-w-4xl text-white">{title}</h2>
          </div>
          <div className="lg:col-span-4">
            <p className="body-copy max-w-md text-white/65">{body}</p>
            <Link href={actionHref} className="btn-pill btn-pill-light mt-6">
              {actionLabel}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
