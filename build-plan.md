# 6FOLIO Build Plan

**Docs in force:** `AGENTS.md`, `6folio_agency_blueprint.md`, `6folio_website_story_and_copy.md`, `DESIGN_SYSTEM.md`, `TECH_STACK.md`, `ASSET_GUIDELINES.md`, `QA_AND_DEPLOYMENT.md`, plus `design.md`, `pages-ux-plan.md`, `site-content.md`, `asset-register.md`.
**Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind 4, GSAP plus ScrollTrigger plus SplitText plus Lenis (already installed). No new dependencies without passing the dependency checklist.

## Decisions locked before build

1. Accent stays royal blue `#1A2BFF` (current code plus reference validated). Orange `#E45B3B` retired unless owner objects.
2. `/notes` removed from v1 nav (docs forbid empty blog cards). Header menu updated accordingly.
3. `/privacy` ships only with approved text. Until then, no route, contact page carries the privacy note.
4. All portfolio work labeled `Concept project`. No metrics presented as results.

## Phase 1: Foundation

* `lib/content.ts`: typed records for projects (3), services (6), perspectives (6), method steps, microcopy. Status type `concept` only for v1.
* `components/ui/*`: `SplitButton`, `SectionHeading`, `Badge`, `HalftoneField`, `RouteWipe`.
* `components/brand/*`: `Monogram`, `Convergence`.
* `components/site-footer.tsx`: brand line, nav, contact placeholder, copyright.
* `app/layout.tsx`: metadata defaults, header plus footer, main landmark.
* `components/site-header.tsx`: remove Notes link, keep dark pill behavior.
* Accept: typecheck passes, header and footer render at 360 and 1440, no overflow.

## Phase 2: Home `/`

Sections per `pages-ux-plan.md` section 3 with copy from `site-content.md` section 2. Components: `HeroConvergence`, `IntroStatement`, `SelectedWork` plus `ProjectCard`, `DisciplineIndex`, `MethodTeaser`, `TeamTeaser`, global `MegaCTA`.
Accept: story reads without scrolling tricks, CTAs route correctly, reduced motion shows final state.

## Phase 3: Work plus case template

* `app/work/page.tsx`: hero plus editorial grid of 3 concept cards.
* `app/work/[slug]/page.tsx`: one `CaseStudyLayout` with 7 sections, per project palette confined to cover, intended measures phrased as hypotheses.
* Accept: every card opens its case, badges visible on card and cover, back link works, direct URL load works.

## Phase 4: Services plus Approach

* `app/services/page.tsx`: hero plus 6 anchored `ServiceSection` plus sticky `ServiceNav` (desktop) and accordion (mobile).
* `app/approach/page.tsx`: loop stages with outputs, formats, 90 day example labeled as model.
* Accept: anchors navigate, six pillars consistent with Home, no implication of guaranteed results.

## Phase 5: About plus Contact plus site chrome

* `app/about/page.tsx`: story, six role cards, values, partner note, close.
* `app/contact/page.tsx` plus `app/api/enquiry/route.ts`: client and server validation, honest 503 when env missing, success only on provider accept. `EnquiryForm` with labels, errors, pending state.
* `app/not-found.tsx`, `app/sitemap.ts`, `app/robots.ts`, OG image route.
* README routes verified against reality.
* Accept: invalid submit shows field errors, unconfigured backend shows honest notice, no fake success path exists.

## Phase 6: Motion, responsive, QA

Motion per `design.md` section 5, all gated on `prefers-reduced-motion`. Viewports 360, 390, 768, 1366, 1440. Run `npm run typecheck`, `npm run lint`, `npm run build`. Manual keyboard pass, focus visibility, contrast spot check, console clean. Record results in `BUILD_NOTES.md` handover format per `QA_AND_DEPLOYMENT.md` section 8.

## Commands

`npm install`, `npm run dev`, `npm run typecheck`, `npm run lint`, `npm run build`, `npm run start`.
