"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GlyphArrow, GlyphSearch } from "./glyphs";

/*
 * Right rail. Facts only come from the supplied brand story: six
 * collaborators, six disciplines, one shared direction. No invented
 * clients, results, awards, or testimonials anywhere on this rail.
 */
const IMPACT_STATS = [
  { value: 6, label: "Collaborators, each bringing a different discipline" },
  { value: 6, label: "Disciplines working as one connected process" },
  { value: 1, label: "Shared direction behind every decision" },
];

export function RightRail() {
  const [statIndex, setStatIndex] = useState(0);

  /* Respect reduced motion: stop the auto-advance, keep dots interactive. */
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;
    const id = window.setInterval(
      () => setStatIndex((current) => (current + 1) % IMPACT_STATS.length),
      6500
    );
    return () => window.clearInterval(id);
  }, []);

  const stat = IMPACT_STATS[statIndex];

  return (
    <aside className="hero-rail" aria-label="Studio highlights">
      <button type="button" className="rail-search" aria-label="Search the site">
        <GlyphSearch />
      </button>

      <div className="impact" aria-label={`${stat.value} — ${stat.label}`} aria-live="polite">
        <span className="impact-number">{stat.value}</span>
        <p className="impact-label">{stat.label}</p>
        <div className="impact-dots" role="group" aria-label="Choose a studio fact">
          {IMPACT_STATS.map((item, index) => (
            <button
              key={index}
              type="button"
              className={`impact-dot${index === statIndex ? " is-active" : ""}`}
              aria-label={`Show fact ${index + 1} of ${IMPACT_STATS.length}`}
              aria-pressed={index === statIndex}
              onClick={() => setStatIndex(index)}
            />
          ))}
        </div>
      </div>

      <Link
        href="/work"
        className="tile tile-photo"
        aria-label="Selected work: six perspectives, one portfolio. Go to the work index."
      >
        <span className="tile-media">
          <span className="tile-kicker">Selected work</span>
          <span className="tile-title">Six perspectives, one portfolio</span>
          <span className="tile-num">CASE STUDIES</span>
        </span>
        <span className="tile-arrow" aria-hidden="true">
          <GlyphArrow />
        </span>
      </Link>

      <Link
        href="/services"
        className="tile tile-green"
        aria-label="Services: six disciplines, one direction. Go to services."
      >
        <span className="tile-media">
          <span className="tile-kicker">
            <span className="tile-kicker-accent">6FOLIO:</span> Six disciplines,
            one direction
          </span>
          <span className="tile-title">Strategy to delivery, connected</span>
          <span className="tile-num">WHAT WE DO</span>
        </span>
        <span className="tile-arrow" aria-hidden="true">
          <GlyphArrow />
        </span>
      </Link>
    </aside>
  );
}
