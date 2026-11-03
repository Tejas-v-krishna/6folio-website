# 6FOLIO Pages and UX Content Plan

**Status:** Approved direction for first release build
**Sources:** `design.md`, `6folio_agency_blueprint.md`, `6folio_website_story_and_copy.md`, `DESIGN_SYSTEM.md`, current repo state
**Current repo note:** `app/page.tsx` is a clean slate placeholder. `components/site-header.tsx` is a dark floating pill nav with pixel mark and expandable menu. `app/layout.tsx` uses Inter Tight. Build will reuse header pattern and rebuild pages below.

## 1. Final sitemap for v1

Primary nav: Work, Services, Approach, About, Contact. CTA: Start a project.

Routes:

* `/` Home. Full story in one scroll.
* `/work` Work index. Three concept studies, clearly labeled.
* `/work/[slug]` Case study template. Slugs: `serein-objects`, `goodkind-coffee`, `northstar-work`.
* `/services` Services overview with six anchored sections.
* `/approach` Growth Loop method plus engagement formats.
* `/about` Story, six perspectives, values, collaboration note.
* `/contact` Enquiry form with honest states.
* `/privacy` Publish only after owner approves text. If no approved text, omit route and link, show contact privacy note only.
* 404: `This page took a different turn.` plus `Back to the homepage`.

Deferred: `/notes` or blog. Reason: docs forbid empty blog cards to look busy. Add only when there is one genuinely useful article. Current header links to `/notes`, remove for v1 or point to Work until Notes exists.

## 2. Global UX system

**Header:** Keep floating pill behavior from current code. White pill on paper sections, dark pill on black sections or keep single dark pill for consistency. Left: 6F monogram. Center: Menu trigger. Right: split CTA `Start a project` plus arrow tile. Mobile: same pill, full sheet menu.

**Menu overlay:** Full sitemap preview, not just links.
Left column: Work, Services, Approach, About, Contact.
Right column: six disciplines with one line outcome each.
Bottom strip: black with `Tell us where you want to go.` plus split CTA.
Behavior: close on route change, Escape key, backdrop click. Focus trap while open. Active route dot.

**Split CTA component:** `SplitButton` with variants `primary` (blue label, white arrow), `onDark` (white label, blue arrow), `secondary` (ink outline). Used everywhere, no other button styles.

**Chapter rhythm:** Alternate paper and ink sections. Eyebrow in blue, H2 tight grotesk, one paragraph max. Spacing `clamp(4rem, 9vw, 9rem)`.

**Footer mega CTA:** Black. Arch headline `Tell us where you want to go.` Instrument Serif italic on `where`. Halftone dot field. Center monogram block. Subcopy from closing CTA. White split CTA. Below: solid blue sitemap footer with Index, Disciplines, and Studio columns plus legal bar. No fake badges or location.

**Transitions:** Pixel-block reveal on page load and route change, blue squares with random stagger under 700ms. Scatter letter settle on signature headings via scroll scrub. One angled marquee band as a section divider. Respect reduced motion: show final state, no blocks, no marquee.

## 3. Home `/`

Objective: explain what 6FOLIO does, show six minds converging, prove craft, drive to Work and Contact.

Sections:

1. **Hero (black)**
   Eyebrow: INDEPENDENT CREATIVE GROWTH STUDIO
   H1: `Six perspectives. One clear direction.` Serif italic on `clear`.
   Sub: `We bring strategy, content, photography, film, marketing, and digital experience together to help ambitious businesses make their next move with clarity.`
   Primary: `Explore our work` to `/work`. Secondary text link: `Tell us what you are building` to `/contact`.
   Small line: `Six collaborators. Connected disciplines. Work with a reason behind it.`
   Visual: convergence lines motif, six thin rules becoming one. No stock photo here, typography carries it.
   Mobile: stack CTAs full width, reduce mega to 15vw min, keep line breaks clean.

2. **Intro (paper)**
   Eyebrow: THE IDEA BEHIND 6FOLIO
   H2: `One brief. Six ways of looking at it.`
   Body: `A brand is not built in separate pieces. The words affect the visuals. The visuals shape the campaign. The campaign leads people to an experience. The experience decides whether they stay, enquire, or leave.`
   Body 2: `We bring the people behind those decisions into the same conversation. That means fewer disconnected outputs and more thought behind how everything fits together.`
   Link: `Get to know the team` to `/about`.
   Component: `IntroStatement` with thin rule and issue number.

3. **Selected work (black)**
   Eyebrow: SELECTED WORK
   H2: `Made with intent. Built around the brief.`
   Sub: `A look at the ideas, decisions, and craft behind our work.`
   Cards (3): Serein Objects, Goodkind Coffee, Northstar Work. Each: cover, title, type, 2 to 4 tags, one sentence, badge `Concept project`.
   Copy per story deck:
   Serein: `A visual and digital identity for a homeware concept built around useful objects, honest materials, and quieter design.`
   Goodkind: `A campaign concept that follows the people, places, and small rituals behind a neighbourhood coffee brand.`
   Northstar: `A launch experience for a fictional software product, built to make its value easier to grasp and its next step easier to take.`
   CTA: `See all work` to `/work`.
   Interaction: varied grid sizes, image scale 1.025 on hover, arrow nudge. Keyboard operable cards.

4. **Capabilities (paper)**
   Eyebrow: WHAT WE BRING TO THE TABLE
   H2: `Six disciplines. One connected process.`
   Sub: `We do not treat each service as an isolated hand off. We look at the full journey, then bring in the right mix of people.`
   Six numbered rows 01 to 06 with persistent `01 / 06` index:
   01 Brand direction: `Find the point of view.` plus typical work line.
   02 Content and storytelling: `Give the brand something worth saying.`
   03 Photography: `Make the details visible.`
   04 Film and motion: `Put the idea in motion.`
   05 Marketing and growth: `Put the work in front of the right people.`
   06 Web and digital experience: `Make the next step easy.`
   Use exact typical work lists from copy deck, collapsed on mobile as accordion.
   CTA: `Talk through a project` to `/contact`.

5. **Method teaser (black)**
   Eyebrow: HOW WE WORK
   H2: `Six perspectives, moving in one direction.`
   Six steps in one line flow: Listen, Find the focus, Shape the idea, Make the work, Put it to work, Learn and improve. One sentence each from copy deck.
   Note: `Not every project needs all six stages or all six disciplines. We shape the team and process around the brief.`
   Link: `How we work` to `/approach`.

6. **About teaser (paper)**
   Eyebrow: A TEAM OF DIFFERENT MINDS
   H2: `We work better when the perspectives meet.`
   Body: `We are six collaborators with different skills and a shared respect for good work.`
   CTA: `Meet 6FOLIO` to `/about`.
   Visual: no fake portraits. Process detail or typographic composition.

7. **Closing CTA:** global footer mega CTA.

## 4. Work index `/work`

Objective: scan fast, understand status honestly.

Hero (paper):
Eyebrow: SELECTED WORK AND STUDIES
H1: `The thinking behind the finished thing.`
Sub: `A collection of projects, experiments, and self initiated studies. Look beyond the final image and into the choices that shaped the work.`

Grid: editorial varied ratios, not uniform cards. Filters: omit for v1 (only 3 projects). Add filter only when catalog exceeds 6.

Card fields: title, type and industry, tags, one sentence, badge `Independent concept project by 6FOLIO`, cover image.
Empty state: `New work is taking shape. Check back soon.`

Close with footer mega CTA.

## 5. Case study `/work/[slug]`

Single reusable `CaseStudyLayout`. Same structure for all three, distinct cover art direction per project.

Cover: title, type, industry, services involved, badge `Concept project`, hero image or film poster.
01 The brief: fictional brief stated plainly.
02 The opportunity: what could be clearer or more distinctive.
03 The direction: central idea in project specific language.
04 The work: outputs with labeled gallery and captions (identity, photo, video, copy, web).
05 The details: two or three decisions (format choice, structure, page flow).
06 The outcome or intended measure: `If launched, success would be measured by` plus proposed measures. Never present as achieved results.
07 Next: `Have a challenge of your own. Let us look at it from six angles.` plus CTA to `/contact` and `Back to all work`.

Project angles:
Serein Objects (lifestyle home goods): brand direction, photography, content, ecommerce experience. Calm, tactile, quiet.
Goodkind Coffee (food and beverage): campaign, film, stills, social rollout. Ritual, people, place.
Northstar Work (SaaS): positioning, landing structure, UX writing, form flow, analytics plan. Clear, systematic.

Each cover gets its own contained palette inside the cover only. Site chrome stays 6FOLIO.

## 6. Services `/services`

Objective: explain problems solved, deliverables, connections.

Hero (paper):
Eyebrow: OUR CAPABILITIES
H1: `The right mix of thinking and making.`
Sub: `Some projects need a clear identity. Some need a sharper idea. Others need a better website or content. We bring the right disciplines together around the problem.`

Intro: `Built to connect, not to sit in silos.` plus `You can work with us on one focused requirement or across a larger project.`

Six sections, numbered, each: purpose headline, plain language body from copy deck, `Can include` list, cross link (`Needs words. See Content. Needs reach. See Marketing.`), small visual or typographic mark.
Order: Brand direction, Content and storytelling, Photography, Film and motion, Marketing and growth, Web and digital experience.

Close: `Not sure which service you need.` plus `That is a useful place to start. Tell us what is not working.` CTA `Talk to the team` to `/contact`.

Interaction: sticky section nav with `01 to 06` progress on desktop, accordion on mobile.

## 7. Approach `/approach`

Objective: show process discipline without sounding corporate.

Hero:
Eyebrow: HOW WE WORK
H1: `Understand, position, create, distribute, convert, optimise.` Or story deck version `Six perspectives, moving in one direction.` Pick one, keep consistent with Home teaser. Recommended: story deck H2 for continuity.
Sub: `A strong result starts before design goes live. We keep business goal, creative decisions, and delivery connected.`

Loop six stages with outputs from blueprint:
1 Understand (discovery, problem, audience assumptions)
2 Position (message, creative direction, channel plan)
3 Create (identity, content, web components)
4 Distribute (publish, launch, tracking check)
5 Convert (fix friction in message, page, form)
6 Optimise (report, insights, next test plan)

Formats: two cards. Project engagements (defined scope, milestones, handover). Ongoing growth partnerships (monthly scope, priorities, check ins). Note: `Never imply every client needs all six services every month.`

90 day example table from blueprint, labeled as example model, not promise.

CTA to `/contact`.

## 8. About `/about`

Objective: human story without fabrication.

Hero:
Eyebrow: ABOUT 6FOLIO
H1: `Six people. Different instincts. A shared standard.`
Sub: `We come from different parts of the creative and digital process. What brings us together is how we approach the work: listen closely, think it through, make it with care, and keep every part connected.`

Story: `A better result rarely comes from one angle.` plus three paragraphs from copy deck.

Six perspectives grid (roles only, no invented names or photos):
Builder, Observer, Director, Growth Thinker, Story Editor, Connector. Each with two line role description from deck.

Values: Clear thinking, Care for the craft, Useful collaboration, Honest outcomes, Work with a purpose. One line each.

Collaboration note: `Six perspectives. No six step hand off. You work with one connected team, one shared brief, and a clear point of contact.`

CTA: `Start a conversation` to `/contact`.

## 9. Contact `/contact`

Objective: low friction enquiry with honest delivery.

Hero:
Eyebrow: START HERE
H1: `Tell us what you have in mind.`
Sub: `You do not need a finished brief. Tell us about the business, what you are trying to change, and where you feel stuck.`

Form fields: Name, Work email, Company or brand, What do you need help with (multi select: Brand direction, Content and copy, Photography, Film and motion, Marketing and growth, Website and digital experience, Not sure yet), Project details textarea, Budget optional, Desired start optional.
Submit: `Send project enquiry`. Loading: `Sending your enquiry...` Success: `Thanks. Your message is on its way.` Error: `Something did not go through. Please try again.`
Validation client plus server. No success state unless API confirms. If env missing, show honest notice plus `ENQUIRY_TO_EMAIL` setup note in build docs, never invent an email in UI.
Privacy note plus link to `/privacy` when approved.

Aside: what happens next (review details, reply using provided contact, no pitch needed).

## 10. Component build list

Layout: `SiteHeader`, `MenuOverlay`, `SiteFooter`, `MegaCTA`, `SplitButton`, `SectionHeading`, `PageIntro`.
Home: `HeroConvergence`, `IntroStatement`, `SelectedWork`, `ProjectCard`, `DisciplineIndex`, `MethodTeaser`, `TeamTeaser`.
Portfolio: `ProjectIndex`, `CaseStudyLayout`, `CaseGallery`, `OutcomeBlock`, `RelatedWork`.
Services: `ServiceSection`, `ServiceNav`, `ConnectionLink`.
Content: `PerspectiveCard`, `ValueRow`, `EnquiryForm`, `FaqAccordion` (if needed).
UI: `Badge` (Concept project), `Chip`, `Field`, `HalftoneField`, `GrainOverlay`, `RouteWipe`.

Keep in `components/` by folder: layout, navigation, sections, portfolio, forms, ui. Content in typed local files: `content/projects.ts`, `content/services.ts`, `content/team.ts`.

## 11. Build order

1. Tokens, fonts, header, footer, SplitButton, SectionHeading.
2. Home full sequence with real copy.
3. Work index plus case template with three concepts.
4. Services plus Approach.
5. About plus Contact with honest API state.
6. 404, metadata, OG image, favicon, sitemap.
7. Motion pass, reduced motion check, responsive check 360, 430, 768, 1280, 1440.
8. Lint, typecheck, build, keyboard and contrast review.

Done means: all routes work, no fake proof, no placeholder text in primary pages, contact never fakes success, mobile checked, checks pass.
