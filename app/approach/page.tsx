import type { Metadata } from "next";
import PageIntro from "@/components/page-intro";
import CtaBand from "@/components/cta-band";
import { method } from "@/content/studio";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "A shared process for keeping the business goal, creative decisions, and delivery connected from the first conversation to launch.",
};

export default function ApproachPage() {
  return (
    <>
      <PageIntro
        eyebrow="How we work"
        title="Six perspectives, moving in one direction."
        description="A strong result starts before the first design or campaign goes live. We use a shared process to keep the business goal, creative decisions, and delivery connected."
        tone="ink"
      >
        <p className="mt-6 max-w-sm border-t border-white/20 pt-4 text-[0.66rem] font-semibold uppercase leading-5 tracking-[0.09em] text-white/60">
          Not every project needs all six stages. We shape the process around
          the brief.
        </p>
      </PageIntro>

      <section className="sheet card-ink">
        <div className="sheet-pad-lg">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow eyebrow-on-dark">The working rhythm</p>
              <h2 className="display-lg mt-5 max-w-3xl">
                Listen first.
                <br />
                Stay connected.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/60 lg:col-span-4">
              The work changes from project to project. The standard does not.
              We make the objective visible, give each discipline room, and
              bring the decisions back together.
            </p>
          </div>

          <div className="relative mt-14">
            {method.map((step) => (
              <div
                key={step.number}
                className="grid gap-4 border-t border-white/20 py-7 md:grid-cols-12 md:gap-6 md:py-9"
              >
                <p className="flex items-baseline gap-2 text-[0.7rem] font-semibold tracking-[0.08em] text-white md:col-span-1">
                  {step.number}
                  <span className="text-[0.65rem] font-normal text-white/35">
                    of 06
                  </span>
                </p>
                <h2 className="text-[clamp(1.6rem,3vw,2.7rem)] font-medium leading-none tracking-[-0.05em] md:col-span-4">
                  {step.title}
                </h2>
                <p className="max-w-2xl text-sm leading-6 text-white/60 md:col-span-6 md:col-start-6">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="relative mt-8 border-t border-white/20 pt-6">
            <p className="max-w-xl text-sm leading-6 text-white/45">
              We would rather make the brief clearer than make the scope
              bigger. Every part of the work should have a reason to be there.
            </p>
          </div>
        </div>
      </section>

      <section className="sheet">
        <div className="sheet-pad-lg grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">One shared direction</p>
            <h2 className="display-lg mt-5 max-w-md">
              Close to the work. Close to each other.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="body-lg text-ink/75">
              Our size keeps the conversations close. The people shaping the
              strategy are near the people making the work. Feedback is
              specific, decisions are visible, and the final output belongs to
              one idea rather than six separate briefs.
            </p>
            <p className="body-copy mt-5 max-w-xl text-ink/65">
              That is the practical meaning of six perspectives. Not more
              layers. Fewer gaps between the thinking, the making, and the
              result.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
