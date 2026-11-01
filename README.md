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

- `/`
- `/work`
- `/work/serein-objects`
- `/work/goodkind-coffee`
- `/work/northstar-work`
- `/services`
- `/approach`
- `/about`
- `/contact`
- `/privacy`

## Content notes

- All three portfolio projects are independent concept studies and are labelled as such in the interface.
- No client names, testimonials, performance results, awards, team names, or contact details are invented.
- Team roles are shown without fabricated biographies or portraits.
- See `BUILD_NOTES.md` for outstanding assets, decisions, and verification results.
