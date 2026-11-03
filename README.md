# 6FOLIO

The first website release for 6FOLIO, an independent creative growth studio built around six connected perspectives.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- GSAP 3.15 with ScrollTrigger and SplitText
- Typed local content in `lib/content.ts`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Environment

Copy `.env.example` to `.env.local` and fill in the values you have.

- `NEXT_PUBLIC_SITE_URL`
- `RESEND_API_KEY`
- `ENQUIRY_TO_EMAIL`
- `ENQUIRY_FROM_EMAIL`

The contact form validates enquiries on the client and server. It only reports success when the delivery provider accepts the message. Without provider credentials it returns an honest "not configured" state and sends nothing.

## Routes

- `/` (placeholder; sections to be built one by one)

## Content notes

- Docs in `design.md`, `pages-ux-plan.md`, and `site-content.md` hold the approved direction and copy.
- No client names, testimonials, performance results, awards, team names, or contact details are invented.
- See `BUILD_NOTES.md` for current status.
