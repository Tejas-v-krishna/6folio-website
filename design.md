# 6FOLIO Design Direction

**Status:** Concept direction for review, not final build spec
**Source:** Reference video (legencymedia.com walkthrough, 171s screen recording) plus `6folio_agency_blueprint.md`, `6folio_website_story_and_copy.md`, `DESIGN_SYSTEM.md`, `TECH_STACK.md`
**Goal:** Capture why the reference feels premium and immersive, then translate it into an original 6FOLIO system. Do not clone Legency.

## 1. What the reference video shows

The video is a scroll and navigation tour of Legency Media, a Webflow Enterprise B2B agency.

Observed sequence:

1. **Floating pill header.** White rounded bar, logo left, centered `Menu` trigger with hamburger lines, right side split CTA: solid blue `Get in touch` plus white arrow tile.
2. **Fullscreen menu overlay.** Large white rounded sheet. Left column: Site links (Home, About, How we work, Case studies, Blog, Resources, Get in touch). Right: three service columns labeled `WEBSITES`, `SEARCH and AI`, `CONVERSION` with title plus one line description each. Bottom: black strip with `Let's talk about your next priorities.` plus split CTA. LinkedIn icon bottom left.
3. **Black hero.** Headline: `The Webflow Enterprise partner for B2B marketing teams.` First two lines white, last line lavender. Small muted subcopy. Client logo row (`Kaptea, Adaptive, CAVALRY, LEVIN`, second row `SENTRIX, dYdX, ChannelSight.ai, rivo`).
4. **Editorial proof sections on off white.** Left sticky headline (`One system, built once and extended since.`) with right stacked white cards. Case style layout with small meta labels (`The Solution`).
5. **Blue feature split.** Heading `Webflow, search and conversion`. Large card split in two: left solid royal blue with `01` pill and `A website your team can update`, right halftone pixel field with oversized pale arrow.
6. **Track record band (black).** Three dark cards: `62m+` search impressions, `1+ years` relationships, pipeline influenced. Small centered eyebrow `Track record`.
7. **Retainers (off white).** Three pricing cards: `Core` and `Velocity` white, `Premium` black with blue pill. Each with `What's Included` list, small icons, bottom black or blue split CTA `Discuss your requirements`.
8. **Testimonials (off white).** `Testimonials` plus `1 / 3` and circle arrows. Large light grey quote card, big readable serif free sans quote, author plus company logo right aligned.
9. **Journal teasers.** Three article cards with image top, meta date plus tag, title, `Read the article` blue link.
10. **Mega footer CTA (black and blue).** Giant arched white text `Get in touch` on a curve, blue halftone dot globe behind, centered royal blue square with pixel logo, subhead `Let's talk about your next priorities.`, white split CTA. This is the signature moment.
11. **Pixel-block page transitions.** The other signature: blue, black, white, and grey squares cascade across the screen during navigation and section changes. Not a flat wipe. Destination pages also paint onto a blue base while loading.
12. **Scroll scatter headings.** Section headlines break into letters that float and settle with scroll. Used on nearly every major heading (featured project, selected work, readability score, evidence band).
13. **Angled marquee band.** A tilted infinite text strip dividing sections.
14. **Case cards with blue action bars.** Stat block on top, blue bar with client name plus white `Read the case study` split button.
15. **Featured project band.** Dark section with client logo, scatter headline, and supporting copy.
16. **Contact page.** Space backdrop with glassy dark card. Left: headline, copy, book a call link, logos, testimonial. Right: 3-step form card (`Your details`, `Your project`, `Budget and timing`) with step tabs, boxed fields, privacy note, and blue Continue plus arrow.
17. **Solid blue footer.** Dense five column sitemap plus badge column, location line, and legal bar. Not black.
18. **How We Work page.** Off white hero, blue eyebrow, huge black headline, 3 pillar cards with blue icon tiles, evidence band, checklist card, FAQ accordion.
19. **Blog.** Index with featured article card (duotone image, tag, date, excerpt, split button) and article pages with sticky `On this page` table of contents. Deferred for 6FOLIO v1.
13. **Persistent badge.** Bottom right `Webflow Premium Partner Enterprise` pill, always visible.

## 2. Why it feels premium

Not the content. The craft system:

* **Two tone rhythm:** strict alternation of near black (`#06060B` approx) and warm off white (`#F4F3EF`). No mid grey pages. Each section feels like a chapter change.
* **One action color:** royal blue (`#1A2BFF` approx) used only for primary CTA, eyebrows, icon tiles, and the final footer world. Never as body text or background wash.
* **Oversized grotesk:** headlines at `letter-spacing -0.05em`, `line-height 0.86 to 0.92`, weight 650 to 750. Short lines. Maximum three lines per viewport.
* **Split button pattern:** every primary action is two joined rectangles, label plus arrow (`separate arrow tile in contrasting color`). Consistent across header, cards, footer.
* **Contained radius:** pill header (`radius 12 to 16px`), large menu sheet (`radius 16 to 20px`), cards (`radius 12px`), icon tiles (`radius 6px`). No fully round pills except small tags like `Core`, `Premium`.
* **Halftone pixel texture:** dotted grid used as depth, not gradient orbs or glass. Glitch dashes plus big flat arrow give motion without video.
* **Proof before pitch:** numbers, process, article system, partner badge. The site earns the giant CTA.
* **Motion restraint:** one idea per viewport. Letter scatter on one heading, arch text on footer, wipe on route change. Everything else is simple opacity and translate.

## 3. What to borrow, what to reinvent

Borrow the principles:

* Floating utility header with integrated menu trigger.
* Full menu as a real sitemap preview, not just links.
* Black and paper chapter rhythm for pacing.
* Split CTA as the single conversion component.
* Mega footer as brand memory moment.
* Blue wipe for route transitions.
* Scroll triggered type detail on one moment per page, not everywhere.

Reinvent for 6FOLIO, because we are not a Webflow B2B shop:

* Legency sells one stack (Webflow, SEO, CRO). 6FOLIO sells six connected disciplines. Our story needs convergence, not a feature list.
* Legency voice is enterprise and metric led. 6FOLIO voice is studio, editorial, human. We need serif contrast, real process photography, concept project honesty.
* Legency imagery is abstract blue tech. 6FOLIO imagery must be photographic, tactile, project specific. Our color should come from work, not from a blue wash.
* Do not copy: pixel logo, arrow glitch art, `Premium Partner` badge pattern, exact menu columns, testimonial card, retainer cards, footer arch curve with blue square. Learn pacing, create our own signature.

## 4. 6FOLIO visual system proposal

### 4.1 Positioning in one line

`Six perspectives. One clear direction.` Every visual choice should show many inputs converging into one clear output.

### 4.2 Color

Current repo (`app/globals.css`) already uses paper `#F2F0E9`, ink `#0A0A0A`, accent blue `#1A2BFF`. `DESIGN_SYSTEM.md` proposes accent `#E45B3B`.

Recommendation for review:

* Keep `paper: #F2F0E9` and `ink: #0A0A0A`. They match the reference rhythm and the current code.
* Keep `accent blue #1A2BFF` as primary action, because the team already leans that way and the video validates its contrast on both black and paper.
* Demote `DESIGN_SYSTEM.md` orange `#E45B3B` to project level accent or remove, to avoid two competing signals. Record this as a decision needed before build.
* Add `lavender: #C9C9F5` for secondary headline line on black, `graphite: #131316` for dark cards, `rule: #D1CDC2` for hairlines, `muted: #6F6D66`.
* No gradients. No glass. Blue used sparingly: CTA, eyebrow, focus, active index, footer world. Project pages may introduce their own contained palette inside the case cover only.

Contrast check required before ship for blue on black, blue on white, white on blue.

### 4.3 Typography

Keep two family system from `DESIGN_SYSTEM.md`, tuned toward reference tightness:

* Display: Inter Tight or Space Grotesk style grotesk, 700, `letter-spacing -0.055em`, `line-height 0.86`. Use for hero, section titles, footer mega.
* Body and meta: Inter, 400 and 500. Meta labels: `0.68rem, uppercase, 0.08em tracking`.
* Editorial accent: Instrument Serif italic, used once per hero or section for a single word or phrase (for example the word `clear` in `One clear direction`). This is our main differentiator from Legency, which is all sans.
* Scale: hero `clamp(2.9rem, 8.4vw, 8.4rem)`, H2 `clamp(2.2rem, 5.8vw, 5.4rem)`, mega footer `clamp(3.4rem, 15vw, 15rem)` with arch treatment, body large `1.12 to 1.42rem`.

### 4.4 Layout and shape

* Container: `max 1600px`, gutter `clamp(1.1rem, 3.5vw, 2.75rem)`.
* Grid: 12 col desktop, 8 tablet, 4 mobile. Let selected media break the text column for editorial energy.
* Radius: header pill 12px, menu sheet 16px, content cards 12px, small icon tiles 6px, tag pills full round only for status (`Concept project`, `Core`). No large round hero card.
* Borders: 1px hairlines for editorial separation. No glow or gradient stroke.
* Grain overlay at 3 to 4 percent opacity plus halftone dot field reserved for two moments: services convergence graphic and final CTA. Do not spray dots everywhere.

### 4.5 Signature motifs (original, not copied)

1. **Convergence lines.** Six thin rules entering from different angles, exiting as one horizontal rule. Used once in hero and once in process. Replaces Legency pixel arrow.
2. **Perspective index `01 to 06`.** Persistent small `01 / 06` marker during six discipline scroll, subtle, keyboard accessible.
3. **Arch CTA type.** Giant `Tell us where you want to go.` set on a gentle upward arc in footer, over a halftone field. Structure inspired by reference, wording and typography ours.
4. **Split CTA.** Label block plus arrow block, same component everywhere. Primary: blue label plus white arrow. On dark: white label plus blue arrow. On paper secondary: ink label plus outline arrow.

### 4.6 Icon and media direction

* One line icon set, 1.5px stroke, no emoji, no mixed filled and outline.
* Photography first: product detail, process, portrait, environment. Varied ratios (`4:5` portrait, `16:9` film, `1:1` detail). Consistent grade per project, not one filter site wide.
* No fake dashboards, no stock handshakes, no AI humans presented as team. Concept work labeled `Concept project` on card, cover, and metadata.
* Video: muted, poster first, controls for story pieces, never autoplay with sound, static fallback for reduced motion.

## 5. Global components

**Site header:** floating white pill, 6F monogram left, center `Menu` trigger, right split CTA `Start a project`. Shrinks on scroll, remains keyboard operable, active route state visible. Mobile: same pill, menu opens full sheet.

**Menu overlay:** large white sheet. Left: Work, Services, About, Contact, plus `Start a project`. Right: six disciplines with one line outcome each (not feature dump). Bottom black strip with closing line plus CTA. Must close on route change, Escape, and focus trap while open.

**Hero pattern (home):** black. Eyebrow `INDEPENDENT CREATIVE GROWTH STUDIO`. H1 `Six perspectives. One clear direction.` with serif italic on `clear`. Subcopy two lines max. Two CTAs: primary split, secondary text link `Explore the work`. Below: convergence line graphic plus small line `Six collaborators. Connected disciplines.` No client logo wall at launch because we have no verified clients. Replace with `Selected studies` strip.

**Chapter sections:** alternate black and paper. Each opens with blue eyebrow, H2, one paragraph. Generous vertical rhythm `clamp(4rem, 9vw, 9rem)`.

**Project cards:** varied sizes in a 12 col grid, strong cover, title, type, 2 to 4 service tags, one sentence, visible `Concept project` badge. Whole card link accessible, arrow shift on hover, image scale `1.025` max.

**Process:** six rows `Listen, Find the focus, Shape the idea, Make the work, Put it to work, Learn and improve` with sticky `01 to 06` index. Static readable without JS.

**Footer CTA:** black, halftone field, arch mega type, centered monogram block, supporting line, white split CTA. Footer below: brand line, nav, contact placeholder, copyright. No invented email, phone, or socials.

## 6. Motion and interaction

Stack already in repo: Next.js, GSAP plus ScrollTrigger, Lenis smooth scroll, Three (reserve only if needed).

Allowed:

* Blue route wipe 500 to 700ms, `cubic-bezier(0.22, 1, 0.36, 1)`.
* Hero line mask reveal on load, under 800ms.
* Scroll fade and 24px rise for section intros, once.
* One per letter stagger per page max (process heading or footer arch).
* Marquee for arch footer text on scroll (translate, not rotate on mobile).
* Card hover: image scale plus arrow nudge, 220 to 260ms.
* Menu open: sheet scale 0.98 to 1 plus fade, 380ms.

Forbidden: scroll hijack, horizontal lock, cursor replacement, autoplay audio, long stagger chains, parallax that breaks reading.

Reduced motion: disable wipe, scatter, marquee, parallax. Show final state immediately. Keep all content accessible. Grain hidden.

Performance: no large video in first viewport on mobile, lazy below fold, reserve aspect ratios to avoid shift, single motion library for scroll work, CSS for the rest.

## 7. Page art direction (summary, full IA to follow)

* **Home:** black hero, paper intro manifesto, black selected work (3 concepts), paper six disciplines index, black process loop, paper team teaser, black mega CTA.
* **Work index:** paper hero `The thinking behind the finished thing.`, editorial varied grid, filter by discipline only if more than 6 projects, honest badges.
* **Case study:** cover with status, brief, opportunity, direction, work gallery with captions, two detail notes, intended measure (not fake results), next project CTA. Each concept has its own palette inside cover only.
* **Services:** paper intro plus six numbered sections with deliverables and cross links (`Brand direction` needs `Content`, `Photography` feeds `Social`, etc.). Close with `Not sure which service you need` CTA.
* **About:** story, six roles as perspectives (Builder, Observer, Director, Growth Thinker, Story Editor, Connector) without invented names or portraits, values, working rhythm.
* **Contact:** short form (name, work email, company, need multi select, project text, budget optional, timeline optional), honest states, no fake success, privacy note.

Full sitemap, copy blocks, and component specs will be defined in the next step (pages and UX plan).

## 8. What makes this better than a clone

* Editorial serif contrast the reference lacks.
* Convergence story instead of stack pitch.
* Photography led, not abstract blue led.
* Honest portfolio system for a new studio with no clients yet.
* Tighter accessibility: visible focus, keyboard menu, reduced motion, semantic headings.
* No invented proof: no fake logos, testimonials, metrics, partner badges.

## 9. Open decisions for owner

1. Confirm accent: keep royal blue `#1A2BFF` (current code and reference validated) or revert to `DESIGN_SYSTEM.md` burnt orange `#E45B3B`.
2. Confirm brand styling: `6FOLIO` all caps as in copy deck.
3. Confirm tagline lock: `Six perspectives. One clear direction.`
4. Confirm three concept projects (Serein Objects, Goodkind Coffee, Northstar Work) or replace.
5. Supply real contact email destination and social URLs, or keep explicit placeholders.
6. Approve convergence line motif and arch footer as signature moments.

Next step: pages and UX content plan, then build.
