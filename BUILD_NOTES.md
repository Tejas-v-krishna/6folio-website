# 6FOLIO website build notes

## What was built

A complete first release of the 6FOLIO website, rebuilt around an oversized editorial identity, a warm paper and ink palette, electric blue as the signal colour, and a black pinned manifesto section.

Routes:

- `/` Home: oversized wordmark, a centred extruded hexagonal 6F mark with stone and electric blue gradients, a thin blue frame, bottom-left studio statement and CTA, bottom-right selected work card, discipline marquee, studio statement, selected work, pinned six-discipline manifesto, studio facts, questions accordion, closing CTA.
- `/work` Work index with service filters and three labelled concept projects.
- `/work/[slug]` Case-study template for Serein Objects, Goodkind Coffee, and Northstar Work.
- `/services` Six service pillars with an animated accordion.
- `/approach` The 6FOLIO Growth Loop with a pinned stage sequence, engagement formats, and example first 90 days.
- `/about` Brand story, six perspectives, values, partner capability note.
- `/contact` Project enquiry form with client and server validation and honest delivery status.
- `/privacy` Working draft privacy page.
- `/sitemap.xml`, `/robots.txt`, Open Graph image, favicon.

## Design direction

- Warm paper background, near-black ink, electric blue signal colour, with orange, mint, and dark project surfaces.
- Inter Tight for display and body, IBM Plex Mono for labels and metadata, Instrument Serif as a restrained editorial accent.
- Oversized `6FOLIO™` wordmark at the top of every page and in the blue footer.
- Thin six-column grid overlay, editorial rules, section numbering, and asymmetric project layouts.
- Original SVG project artwork rather than stock photography.
- No invented clients, metrics, testimonials, awards, contact details, team names, or outcomes.

## Motion and interaction

GSAP 3.15 and `@gsap/react` are used for:

- SplitText line reveals on page headings.
- ScrollTrigger section and row reveals.
- A pinned, scrubbed six-discipline manifesto section with an active discipline card.
- An infinite discipline marquee that slows on hover.
- Parallax on the hero sculpture, project artwork, and case-study cover.
- GSAP accordion height animation for services and questions.
- A scroll progress bar.
- A floating and rotating hero sculpture.

Reduced-motion preferences disable the animation layer. Content is never dependent on animation to be readable. SplitText headings remain visible if the animation does not run.

## Stack and commands

- Next.js 16 App Router, React 19, TypeScript.
- Tailwind CSS 4 with custom design tokens.
- GSAP 3.15, ScrollTrigger, SplitText, `@gsap/react`.
- Install: `npm install`
- Dev: `npm run dev`
- Type check: `npm run typecheck`
- Lint: `npm run lint`
- Build: `npm run build`
- Start production: `npm run start`

## Environment variables

See `.env.example`.

- `NEXT_PUBLIC_SITE_URL`: production domain without a trailing slash. Defaults to `http://localhost:3000`.
- `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, `ENQUIRY_FROM_EMAIL`: required for contact form delivery. Without them, the API returns an honest 503 and the form reports that nothing was sent.

## Verified

- `npm run typecheck` passed.
- `npm run lint` passed.
- `npm run build` passed, with all 17 routes generated.
- Browser smoke test: all routes render, no horizontal overflow at the tested width, no console errors.
- Contact API: returns 400 for invalid input and 503 for unconfigured delivery. It does not fake success.

## Remaining human decisions and assets

- Confirm final brand name styling, tagline, contact email, and social links.
- Approve team names, titles, and portraits. Portraits were not fabricated.
- Provide real project assets and verified outcomes, or approve the three concept studies as launch work.
- Provide or review a privacy policy before collecting live submissions.
- Decide pricing and budget ranges shown in the contact form.
- Approve deployment, domain, and hosting.

## Notes on document conflicts

- Service pillars follow the agency blueprint's six pillars. The website copy deck's separate photography and film sections are merged into one production pillar with two tracks, and social and community is retained as its own pillar.
- The method follows the 6FOLIO Growth Loop from the blueprint. Copy from the website story deck is mapped onto those six stages.
- Primary navigation follows the blueprint: Work, Services, Approach, About, Contact.
- The redesign follows the supplied reference image for composition and motion, using an original 6FOLIO identity rather than copying the reference's branding or content.
