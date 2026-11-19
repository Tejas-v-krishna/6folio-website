import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/page-intro";
import CtaBand from "@/components/cta-band";
import { ArrowUpRight, ToggleMark } from "@/components/marks";
import { teamRoles, values } from "@/content/studio";

export const metadata: Metadata = {
  title: "About",
  description:
    "6FOLIO is six collaborators with different instincts and one shared standard for clear thinking, careful craft, and useful work.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About 6FOLIO"
        title="Six people. Different instincts. A shared standard."
        description="We come from different parts of the creative and digital process. What brings us together is the way we approach the work: listen closely, think it through, make it with care, and keep every part connected."
      >
        <div className="mt-6 flex items-center gap-4 border-t border-ink/15 pt-4">
          <ToggleMark className="h-4 w-9 text-ink" />
          <p className="text-[0.66rem] font-semibold uppercase leading-5 tracking-[0.09em] text-muted">
            Six perspectives
            <br />
            One clear direction
          </p>
        </div>
      </PageIntro>

      <section className="sheet">
        <div className="sheet-pad-lg grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">The story</p>
            <h2 className="display-lg mt-5 max-w-md">
              A better result rarely comes from one angle.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className="body-lg">
              A business might come to us because its identity feels unclear.
              The real issue might be the message. A campaign might look good
              but struggle to reach the right people. A website might attract
              visits but make the next step difficult.
            </p>
            <p className="body-copy mt-6 max-w-2xl">
              These problems do not always belong to one discipline. That is
              why six perspectives sit at the centre of 6FOLIO. We bring the
              strategy, the words, the still image, the moving image, the
              audience plan, and the digital experience into one conversation.
            </p>
            <p className="body-copy mt-4 max-w-2xl">
              Each person brings a point of view. The work gets stronger when
              those views meet early, not after everything has been made.
            </p>
          </div>
        </div>
      </section>

      <section className="sheet card-blue">
        <div className="sheet-pad-lg relative overflow-hidden">
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow eyebrow-on-blue">
                Six roles, one working rhythm
              </p>
              <h2 className="display-lg mt-5 max-w-3xl">
                Different disciplines.
                <br />
                Shared direction.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/80 lg:col-span-4">
              The roles below describe how the team works, not a claim about
              individual biographies. Names and personal details will only be
              added when the team confirms them.
            </p>
          </div>

          <div className="relative mt-12">
            {teamRoles.map((role) => (
              <article
                key={role.number}
                className="grid gap-4 border-t border-white/20 py-7 md:grid-cols-12 md:gap-6"
              >
                <p className="text-[0.7rem] font-semibold tracking-[0.08em] text-white/70 md:col-span-1">
                  {role.number}
                </p>
                <div className="md:col-span-4">
                  <h3 className="text-[clamp(1.45rem,2.4vw,2.15rem)] font-medium tracking-[-0.05em] text-white">
                    {role.perspective}
                  </h3>
                  <p className="mt-1 text-[0.67rem] font-semibold uppercase tracking-[0.08em] text-white/85">
                    {role.role}
                  </p>
                </div>
                <p className="max-w-xl text-sm leading-6 text-white/75 md:col-span-6 md:col-start-6">
                  {role.contribution}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sheet">
        <div className="sheet-pad-lg">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow">What we value</p>
              <h2 className="display-lg mt-5 max-w-3xl">
                A shared standard,
                <br />
                not a shared style.
              </h2>
            </div>
            <p className="body-copy max-w-md lg:col-span-4">
              We do not need everyone to think the same way. We do need everyone
              to care about the same things.
            </p>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div key={value.title} className="border-t border-rule pt-4">
                <p className="text-[0.68rem] font-semibold tracking-[0.08em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-[1.4rem] font-medium tracking-[-0.04em]">
                  {value.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sheet card-ink">
        <div className="sheet-pad-lg">
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-3">
              <ToggleMark className="h-4 w-9 text-white" />
            </div>
            <div className="lg:col-span-6">
              <p className="eyebrow eyebrow-on-dark">About page close</p>
              <h2 className="display-md mt-5 max-w-xl">
                Six perspectives. No six-step hand-off.
              </h2>
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <p className="text-sm leading-6 text-white/85">
                One connected team, one shared brief, and a clear point of
                contact.
              </p>
              <Link href="/contact" className="btn-pill btn-pill-light mt-5">
                Start a conversation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Work with 6FOLIO"
        title="Bring the problem. We will bring the perspectives."
        body="A new brand, a sharper digital presence, a campaign that needs a stronger idea, or a growth problem that needs a closer look."
      />
    </>
  );
}
