import type { Metadata } from "next";
import Link from "next/link";
import SplitReveal from "@/components/split-reveal";
import ScrollReveal from "@/components/scroll-reveal";
import { notes } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Short pieces on how 6FOLIO thinks about brand, content, production, and digital experience.",
  alternates: { canonical: `${siteUrl()}/notes` },
};

export default function NotesPage() {
  return (
    <main>
      <section className="border-b border-rule">
        <div className="shell pb-12 pt-10 md:pb-16 md:pt-16">
          <SplitReveal
            as="h1"
            text="Notes from the studio."
            className="type-hero max-w-5xl text-balance"
            type="lines"
            scroll={false}
          />
          <p className="type-body-lg mt-8 max-w-2xl text-muted">
            Short pieces on how we think about brand, content, production, and digital
            experience. No templates. No hype.
          </p>
        </div>
      </section>

      <section>
        <div className="shell py-12 md:py-16">
          <div className="border-t border-rule">
            {notes.map((note, index) => (
              <ScrollReveal
                key={note.slug}
                className="grid gap-4 border-b border-rule py-8 md:grid-cols-12 md:gap-8 md:py-10"
                delay={index * 0.06}
              >
                <div className="md:col-span-3">
                  <p className="mono">{note.date}</p>
                  <p className="mono mt-1">{note.readingTime}</p>
                </div>
                <div className="md:col-span-9">
                  <h2 className="type-h3">{note.title}</h2>
                  <p className="mt-3 max-w-2xl text-muted">{note.excerpt}</p>
                  <Link href={`/notes/${note.slug}`} className="mono link-underline mt-4 inline-block">
                    Read the note
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
