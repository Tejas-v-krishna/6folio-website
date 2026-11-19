import type { Metadata } from "next";
import PageIntro from "@/components/page-intro";
import ContactForm from "@/components/contact-form";
import DitherCard from "@/components/dither-card";
import { ToggleMark } from "@/components/marks";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell 6FOLIO about the business, what you are trying to change, and where you feel stuck.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        tone="blue"
        eyebrow="Start here"
        title="Tell us what you have in mind."
        description="You do not need a finished brief. Tell us a little about the business, what you are trying to change, and where you feel stuck. We will take it from there."
      >
        <p className="mt-6 border-t border-white/20 pt-4 text-[0.66rem] font-semibold uppercase leading-5 tracking-[0.09em] text-white/70">
          A short enquiry is enough
        </p>
      </PageIntro>

      <section className="sheet">
        <div className="sheet-pad-lg">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <ToggleMark className="h-4 w-9 text-ink" />
                <p className="eyebrow">Start a project</p>
              </div>
              <h2 className="display-md mt-5 max-w-xl">
                A first conversation, in three parts.
              </h2>
            </div>
            <p className="micro micro-muted max-w-sm lg:col-span-4">
              Three short cards on what a first conversation covers. Move your
              pointer across the pixels to stir the field.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            <DitherCard
              index="01 / The problem"
              lines={["Tell us", "what is", "happening."]}
              seed={7}
              speed={1}
            />
            <DitherCard
              index="02 / The focus"
              lines={["We find", "the focus", "with you."]}
              seed={23}
              speed={1.25}
            />
            <DitherCard
              index="03 / The step"
              lines={["Leave with", "a clear", "next step."]}
              seed={41}
              speed={0.85}
            />
          </div>
        </div>
      </section>

      <section className="sheet">
        <div className="sheet-pad-lg">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <ToggleMark className="h-4 w-9 text-ink" />
                <p className="eyebrow">Enquiry form</p>
              </div>
              <h2 className="display-md mt-5 max-w-xl">Project enquiry</h2>
            </div>
            <p className="micro micro-muted max-w-sm lg:col-span-4">
              Short, clear, and honest about what happens next.
            </p>
          </div>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="sheet">
        <div className="sheet-pad-lg">
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="eyebrow">What happens next</p>
              <h2 className="display-md mt-5 max-w-xl">
                A clear first conversation.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <ol className="grid gap-5">
                <li className="border-t border-ink/15 pt-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.09em] text-ink/50">
                    01
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/70">
                    We review the details and work out whether the brief is a good
                    fit.
                  </p>
                </li>
                <li className="border-t border-ink/15 pt-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.09em] text-ink/50">
                    02
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/70">
                    We arrange a first conversation to understand the problem,
                    audience, and desired outcome.
                  </p>
                </li>
                <li className="border-t border-ink/15 pt-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.09em] text-ink/50">
                    03
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/70">
                    We propose a scoped next step only when the work is clear
                    enough to price and plan.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
