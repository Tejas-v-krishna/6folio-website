import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SplitReveal from "@/components/split-reveal";
import ScrollReveal from "@/components/scroll-reveal";
import { notes } from "@/lib/content";
import { siteUrl } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.excerpt,
    alternates: { canonical: `${siteUrl()}/notes/${note.slug}` },
  };
}

export default async function NotePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) notFound();

  return (
    <main>
      <section className="border-b border-rule">
        <div className="shell pb-12 pt-10 md:pb-16 md:pt-16">
          <Link href="/notes" className="mono link-underline">
            Back to notes
          </Link>
          <div className="mt-10 max-w-3xl">
            <p className="mono">
              {note.date} / {note.readingTime}
            </p>
            <SplitReveal
              as="h1"
              text={note.title}
              className="type-hero mt-4 text-balance"
              type="lines"
              scroll={false}
            />
            <p className="type-body-lg mt-6 text-muted">{note.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-24">
          <div className="mx-auto max-w-2xl space-y-6">
            {note.body.map((paragraph, index) => (
              <ScrollReveal key={index} delay={index * 0.04}>
                <p className="type-body-lg leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h2 className="type-h2">Have a question of your own?</h2>
            </div>
            <div className="md:col-span-4 md:justify-self-end">
              <Link href="/contact" className="btn btn-primary">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
