import { HeroSection } from "@/components/hero/hero-section";

export default function HomePage() {
  return (
      <main>
        <HeroSection />

      <section id="approach" className="below-fold" aria-label="How 6FOLIO works">
        <div className="below-inner">
          <h2 className="below-lead">
            Six disciplines. One connected process.{" "}
            <span className="muted-lead">
              Every decision serves the same objective, from first brief to final
              delivery.
            </span>
          </h2>
          <p className="below-note">
            Next section: selected work and the enquiry path are designed after
            the hero is signed off.
          </p>
        </div>
      </section>
    </main>
  );
}
