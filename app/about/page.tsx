import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import { perspectives, values } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Six collaborators with different instincts and a shared standard. How 6FOLIO brings strategy, content, production, marketing, and digital experience into one conversation.",
  alternates: { canonical: `${siteUrl()}/about` },
};

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-rule">
        <div className="shell pt-16 pb-14 md:pt-24 md:pb-20">
          <Reveal>
            <p className="label mb-4">About 6FOLIO</p>
            <h1 className="display text-4xl md:text-6xl max-w-3xl">
              Six people. Different instincts. A shared standard.
            </h1>
            <p className="mt-6 max-w-2xl text-muted">
              We come from different parts of the creative and digital process. What brings us together is the way we approach the work: listen closely, think it through, make it with care, and keep every part connected.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <h2 className="display text-3xl md:text-4xl">
                  A better result rarely comes from one angle.
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal delay={80}>
                <p className="text-lg text-ink-soft">
                  A business might come to us because its identity feels unclear. The real issue might be the message. A campaign might look good but struggle to reach the right people. A website might attract visits but make the next step difficult.
                </p>
                <p className="mt-5 text-muted">
                  These problems do not always belong to one discipline. That is why six perspectives sit at the centre of 6FOLIO. We bring the strategy, the words, the still image, the moving image, the audience plan, and the digital experience into one conversation. Each person brings a point of view. The work gets stronger when those views meet early, not after everything has been made.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <Reveal>
            <p className="label mb-4">Six perspectives</p>
            <h2 className="display text-3xl md:text-4xl max-w-3xl">
              Six roles, one working rhythm.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px border border-rule bg-rule">
            {perspectives.map((perspective, index) => (
              <Reveal key={perspective.name} className="bg-paper p-6 md:p-8" delay={index * 60}>
                <div className="grid gap-6 md:grid-cols-12 md:items-start">
                  <div className="md:col-span-2">
                    <span className="display text-4xl text-muted">{perspective.index}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="display text-2xl">{perspective.name}</h3>
                    <p className="label mt-2">{perspective.role}</p>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-sm font-medium text-ink">{perspective.brings}</p>
                    <p className="mt-3 text-muted">{perspective.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-paper-2">
        <div className="shell py-16 md:py-24">
          <Reveal>
            <p className="label mb-4">What we value</p>
            <h2 className="display text-3xl md:text-4xl max-w-3xl">
              Shared working principles.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 60}>
                <div className="border border-rule bg-paper p-6">
                  <h3 className="display text-2xl">{value.title}</h3>
                  <p className="mt-3 text-muted">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-20">
          <Reveal>
            <h2 className="display text-3xl md:text-4xl max-w-3xl">
              Six perspectives. No six-step hand-off.
            </h2>
            <p className="mt-5 max-w-2xl text-muted">
              You work with one connected team, one shared brief, and a clear point of contact. The specialists stay close to the work, and the decisions stay connected to the reason the project exists.
            </p>
            <p className="mt-5 max-w-2xl text-sm text-muted">
              Some specialisms, including dedicated brand design leadership, specialist search work, and community management at scale, may be supported by trusted partners as the team grows. We only show a capability when we can stand behind it.
            </p>
            <Link href="/contact" className="btn btn-secondary mt-8">
              Start a conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
