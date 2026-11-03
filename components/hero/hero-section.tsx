import { GlyphDown, ReefArt } from "./glyphs";
import { RightRail } from "./right-rail";
import { TopBar } from "./top-bar";

export function HeroSection() {
  return (
    <section className="hero" aria-label="6FOLIO, an independent creative growth studio">
      <a className="skip-link" href="#approach">
        Skip to content
      </a>

      <div className="hero-surface">
        <TopBar />

        <div className="hero-art" aria-hidden="true">
          <ReefArt />
          <span className="art-grain" />
        </div>

        <div className="hero-copy">
          <h1 className="hero-title">
            Making space for transformative brands
          </h1>
          <a href="#approach" className="hero-cue" aria-label="Scroll to how 6FOLIO works">
            <GlyphDown />
          </a>
        </div>
      </div>

      <RightRail />
    </section>
  );
}
