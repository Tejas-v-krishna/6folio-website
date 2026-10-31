import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import { method, engagements, firstNinetyDays } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "The 6FOLIO Growth Loop: Understand, Position, Create, Distribute, Convert, Optimise. A shared process that keeps the business goal, creative decisions, and delivery connected.",
  alternates: { canonical: `${siteUrl()}/approach` },
};

export default function ApproachPage() {
  return (
    <main>
      <section className="border-b border-rule">
        <div className="shell pt-16 pb-14 md:pt-24 md:pb-20">
          <Reveal>
            <p className="label mb-4">How we work</p>
            <h1 className="display text-4xl md:text-6xl max-w-3xl">
              Six perspectives, moving in one direction.
            </h1>
            <p className="mt-6 max-w-2xl text-muted">
              A strong result starts before the first design or campaign goes live. We use a shared process to keep the business goal, creative decisions, and delivery connected.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-12 md:py-16">
          <Reveal>
            <p className="label mb-4">The 6FOLIO Growth Loop</p>
            <h2 className="display text-3xl md:text-4xl max-w-3xl">
              Understand to Optimise.
            </h2>
            <p className="mt-5 max-w-2xl text-muted">
              Every project begins with a business problem and ends with a review of what changed. A beautiful campaign is not automatically a successful campaign. The work is judged against the goal agreed with the client.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="shell py-12 md:py-16">
          <ol className="border-t border-rule">
            {method.map((stage) => (
              <li key={stage.name} className="border-b border-rule">
                <div className="grid gap-8 py-12 md:grid-cols-12 md:py-16">
                  <div className="md:col-span-3">
                    <Reveal>
                      <span className="display text-6xl text-muted">{stage.index}</span>
                      <p className="label mt-3">{stage.name}</p>
                    </Reveal>
                  </div>
                  <div className="md:col-span-9">
                    <Reveal delay={80}>
                      <h2 className="display text-3xl md:text-4xl">{stage.headline}</h2>
                      <p className="mt-5 text-muted max-w-3xl">{stage.description}</p>
                      <div className="mt-6 grid gap-2 md:grid-cols-2">
                        <div>
                          <p className="label">Output</p>
                          <p className="mt-1 text-sm text-ink-soft">{stage.output}</p>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-muted">
            Not every project needs all six stages or all six disciplines. We shape the team and process around the brief.
          </p>
        </div>
      </section>

      <section className="border-t border-rule bg-paper-2">
        <div className="shell py-16 md:py-20">
          <Reveal>
            <p className="label mb-4">Engagement formats</p>
            <h2 className="display text-3xl md:text-4xl max-w-3xl">
              Two simple ways to work together.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {engagements.map((engagement, index) => (
              <Reveal key={engagement.title} delay={index * 80}>
                <div className="border border-rule bg-paper p-6 md:p-8">
                  <h3 className="display text-2xl">{engagement.title}</h3>
                  <p className="mt-4 text-muted">{engagement.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="shell py-16 md:py-20">
          <Reveal>
            <p className="label mb-4">Example first 90 days</p>
            <h2 className="display text-3xl md:text-4xl max-w-3xl">
              A planning model, not a promise.
            </h2>
            <p className="mt-5 max-w-2xl text-muted">
              This is an example planning model, not a promise that every project can be completed in 90 days.
            </p>
          </Reveal>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-rule">
                  <th className="label py-3 pr-6">Period</th>
                  <th className="label py-3 pr-6">Focus</th>
                  <th className="label py-3">Typical activities</th>
                </tr>
              </thead>
              <tbody>
                {firstNinetyDays.map((row) => (
                  <tr key={row.period} className="border-b border-rule align-top">
                    <td className="py-4 pr-6 text-sm font-medium text-ink">{row.period}</td>
                    <td className="py-4 pr-6 text-sm text-ink-soft">{row.focus}</td>
                    <td className="py-4 text-sm text-muted">{row.activities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-rule bg-ink text-paper">
        <div className="shell py-16 md:py-20">
          <Reveal>
            <h2 className="display text-3xl md:text-4xl text-paper max-w-3xl">
              Have a challenge of your own?
            </h2>
            <p className="mt-5 max-w-xl text-paper/70">
              Tell us what is not working or what you are trying to build. We can help identify the right scope before recommending a solution.
            </p>
            <Link
              href="/contact"
              className="btn bg-paper text-ink border-paper hover:bg-accent hover:text-paper hover:border-accent mt-8"
            >
              Start a conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
