# 6FOLIO website build notes

## What was built

A complete first release of the 6FOLIO website, following the agency blueprint and website story documents.

Routes:

- `/` Home: hero, intro, selected work, six capabilities, growth loop, team teaser, closing CTA.
- `/work` Work index with service filters and three labelled concept projects.
- `/work/[slug]` Reusable case-study template for Serein Objects, Goodkind Coffee, and Northstar Work.
- `/services` Six service pillars with deliverables.
- `/approach` The 6FOLIO Growth Loop, engagement formats, example first 90 days.
- `/about` Brand story, six perspectives, values, partner capability note.
- `/contact` Project enquiry form with validation and honest delivery status.
- `/privacy` Working draft privacy page.
- `/sitemap.xml`, `/robots.txt`, Open Graph image, favicon.

## Design and technical decisions

- Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4.
- Fonts: Instrument Serif (display), Inter Tight (sans), IBM Plex Mono (labels).
- Palette: warm bone paper, ink, one cobalt accent. No gradients, glassmorphism, or decorative blobs.
- Motion: CSS and IntersectionObserver only. No heavy animation library, to keep bundle small. Reduced-motion respected.
- Images: original abstract SVG artwork per project, labelled as concept work. No stock photography.
- Contact form: validates on client and server. Delivery uses Resend only when configured. Otherwise returns 503 and the UI reports that no message was sent.
- No em dashes in copy. No invented clients, metrics, testimonials, awards, contact details, or team names.

## Commands

- Install: `npm install`
- Dev: `npm run dev`
- Type check: `npm run typecheck`
- Lint: `npm run lint`
- Build: `npm run build`
- Start production: `npm run start`

## Environment variables

See `.env.example`.

- `NEXT_PUBLIC_SITE_URL`: production domain without trailing slash. Defaults to `http://localhost:3000`.
- `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, `ENQUIRY_FROM_EMAIL`: required for contact form delivery.

## Remaining human decisions and assets

- Confirm final brand name styling, tagline, and contact email and social links.
- Approve team names, titles, and portraits. Portraits were not fabricated.
- Provide real project assets and verified outcomes, or approve the three concept studies as launch work.
- Provide or review a privacy policy before collecting live submissions.
- Decide pricing and budget ranges shown in the contact form.
- Approve deployment, domain, and hosting.

## Conflicts resolved

- Service pillars follow the agency blueprint's six pillars. The website copy deck's separate photography and film sections were merged into one production pillar with two tracks, and social and community was retained as its own pillar.
- The method follows the 6FOLIO Growth Loop from the blueprint. Copy from the website story deck was mapped onto those six stages.
- The primary navigation follows the blueprint: Work, Services, Approach, About, Contact.
- The hero uses the website story deck's headline "Six perspectives. One clear direction." with its supporting line.
