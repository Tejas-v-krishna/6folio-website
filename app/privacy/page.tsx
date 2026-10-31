import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for the 6FOLIO website.",
  alternates: { canonical: `${siteUrl()}/privacy` },
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="border-b border-rule">
        <div className="shell pt-16 pb-14 md:pt-24 md:pb-20">
          <Reveal>
            <p className="label mb-4">Privacy</p>
            <h1 className="display text-4xl md:text-6xl max-w-3xl">
              How we handle your information.
            </h1>
            <p className="mt-6 max-w-2xl text-muted">
              This page is a working draft. It requires legal review before the site collects live submissions.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="shell py-16 md:py-24">
          <div className="max-w-3xl space-y-8">
            <Reveal>
              <h2 className="display text-2xl">What we collect</h2>
              <p className="mt-3 text-muted">
                When you use the project enquiry form, we collect the name, work email, company or brand, the areas you need help with, and the details you share about your project. Budget and timeline are optional. We do not collect payment details.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display text-2xl">Why we collect it</h2>
              <p className="mt-3 text-muted">
                We use this information to understand your enquiry and respond to it. We do not use it for unrelated marketing without your permission.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <h2 className="display text-2xl">How long we keep it</h2>
              <p className="mt-3 text-muted">
                We keep enquiry details for as long as they are needed to manage the conversation and any resulting project. Retention periods and deletion requests should be confirmed before launch.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <h2 className="display text-2xl">Your rights</h2>
              <p className="mt-3 text-muted">
                You can ask what information we hold about you and request that it be corrected or removed. The process for doing so should be confirmed before the site goes live.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <h2 className="display text-2xl">Contact</h2>
              <p className="mt-3 text-muted">
                Contact details will be published once they are confirmed. In the meantime, use the project enquiry form.
              </p>
            </Reveal>
            <div className="pt-4">
              <Link href="/contact" className="btn btn-secondary">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
