import type { Metadata } from "next";
import Link from "next/link";
import SplitReveal from "@/components/split-reveal";
import ScrollReveal from "@/components/scroll-reveal";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for the 6FOLIO website.",
  alternates: { canonical: `${siteUrl()}/privacy` },
};

const sections = [
  {
    title: "What we collect",
    body: "When you use the project enquiry form, we collect the name, work email, company or brand, the areas you need help with, and the details you share about your project. Budget and timeline are optional. We do not collect payment details.",
  },
  {
    title: "Why we collect it",
    body: "We use this information to understand your enquiry and respond to it. We do not use it for unrelated marketing without your permission.",
  },
  {
    title: "How long we keep it",
    body: "We keep enquiry details for as long as they are needed to manage the conversation and any resulting project. Retention periods and deletion requests should be confirmed before launch.",
  },
  {
    title: "Your rights",
    body: "You can ask what information we hold about you and request that it be corrected or removed. The process for doing so should be confirmed before the site goes live.",
  },
  {
    title: "Contact",
    body: "Contact details will be published once they are confirmed. In the meantime, use the project enquiry form.",
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <section className="border-b border-rule">
        <div className="shell pb-12 pt-10 md:pb-16 md:pt-16">
          <SplitReveal
            as="h1"
            text="How we handle your information."
            className="type-hero mt-8 max-w-5xl text-balance"
            type="lines"
            scroll={false}
          />
          <p className="type-body-lg mt-8 max-w-2xl text-muted">
            This page is a working draft. It requires legal review before the site
            collects live submissions.
          </p>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="shell py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="border-t border-rule">
              {sections.map((section, index) => (
                <ScrollReveal
                  key={section.title}
                  className="grid gap-3 border-b border-rule py-6 md:grid-cols-12 md:gap-6"
                  delay={index * 0.04}
                >
                  <h2 className="type-h4 md:col-span-4">{section.title}</h2>
                  <p className="text-sm leading-relaxed text-muted md:col-span-8">
                    {section.body}
                  </p>
                </ScrollReveal>
              ))}
            </div>
            <div className="mt-10 bg-paper-2 p-6">
              <p className="text-sm leading-relaxed text-muted">
                A full privacy policy, data-handling explanation, retention period, and
                confirmed contact route must be added before the enquiry form collects
                live submissions.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary mt-8">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
