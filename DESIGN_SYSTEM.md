# 6FOLIO Design System

**Document type:** Visual direction and interface standards  
**Version:** 1.0  
**Status:** First-release design specification  
**Brand idea:** Six perspectives. One clear direction.

---

## 1. Purpose of this document

This document defines the visual language and reusable interface rules for the first 6FOLIO website. It should help the design and engineering work feel like one considered system rather than a set of individually styled pages.

The website should feel like an independent creative-growth studio with a strong editorial eye. It should communicate clarity, collaboration, craft, visual intelligence, and commercial understanding.

The site can be visually ambitious. The system itself should remain understandable and practical to implement. A first release must have a complete experience across all important pages before advanced effects are introduced.

If the repository already contains a deliberate, approved brand identity, preserve it and map these tokens to it. Do not overwrite approved brand assets simply to match provisional values in this document. Where no approved system exists, use the proposal below as the starting point and keep the implementation easy to update.

## 2. Creative direction

### 2.1 The intended feeling

The website should feel:

- Editorial, not corporate-template-like.
- Contemporary, but not dependent on short-lived visual trends.
- Human, with a sense of the six collaborators behind the work.
- Confident, without behaving like an award-winning agency before the agency has earned those credentials.
- Graphic and tactile, with strong type, deliberate composition, and purposeful imagery.
- Precise, with careful spacing, alignment, transitions, and responsive behaviour.
- Commercially aware, showing that creative work connects to real business needs.

### 2.2 Design statement

**Make the work speak. Make the story easy to follow. Let the details prove the care.**

Typography, composition, image sequencing, and language should carry most of the visual identity. Animation should support the story and give the interface rhythm. Decoration must have a reason to exist.

### 2.3 Visual references and originality

Use respected digital studios and award-recognised websites as references for principles such as editorial pacing, art direction, image sequencing, interaction quality, and typography. Do not reproduce another studio's exact layouts, copy, graphics, signature transitions, or brand system.

Every final page should feel specifically designed for 6FOLIO. The number six is a meaningful part of the brand story, not an excuse to repeat six cards, six dots, or the numeral 6 as decoration in every section.

---

## 3. Proposed foundation: colour

The first-release palette is intentionally restrained. It uses a warm paper surface, near-black typography, quiet neutrals, and one controlled signal colour. The portfolio imagery should provide most of the colour variation.

These values are proposed starting tokens, not a claim that the brand's final identity has been approved. Keep them in one central token file so they can be changed without editing individual components.

| Token | Hex value | Primary use |
|---|---:|---|
| `--color-ink` | `#171715` | Main text, dark sections, navigation on light surfaces |
| `--color-paper` | `#F4F1EA` | Main warm background |
| `--color-white` | `#FFFFFF` | Clean surfaces, reversed text where appropriate |
| `--color-muted` | `#77766F` | Secondary text and supporting information |
| `--color-line` | `#D8D4CB` | Dividers, borders, subtle rules |
| `--color-panel` | `#EAE6DD` | Quiet alternate section surface |
| `--color-accent` | `#E45B3B` | Small highlights, links, selected states, key markers |
| `--color-accent-strong` | `#C8442B` | Accent hover and pressed states, after contrast checks |

### 3.1 Colour rules

- Use `paper` and `ink` as the primary brand pairing.
- Use the accent colour sparingly. It should help visitors identify an action, marker, or important moment, not become a background colour across the whole website.
- Use white when a project image, media frame, or content treatment needs a cleaner field.
- Use `panel` to distinguish sections without adding unnecessary cards.
- Use `line` for structural separators, not as decorative framing around every element.
- Do not add a second bright accent colour unless a real portfolio project requires it within its own project art direction.
- Do not use gradients as a default background treatment.
- Do not use transparency, blur, glow, or glass effects as substitutes for hierarchy.
- Check every foreground/background combination for accessible contrast before shipping.

### 3.2 Dark sections

Dark sections may use `ink` as a full-bleed surface with white or paper text. Use them selectively to create contrast and pacing. Do not automatically make the whole site dark simply because dark agency websites are common.

On dark surfaces:

- Main text: `--color-white` or `--color-paper`.
- Supporting text: a tested light neutral, approximately `#BDBAB2`.
- Dividers: a tested dark neutral, approximately `#393936`.
- Accent: use `--color-accent` only when the contrast remains clear.

### 3.3 Semantic colours

Use semantic colours only where the interface needs them, such as form feedback. Keep them separate from the brand accent.

| State | Suggested token | Usage |
|---|---|---|
| Success | `#287A52` | Confirmed form submission or completed action |
| Warning | `#94651C` | A recoverable issue requiring attention |
| Error | `#B33B32` | Validation errors and failed actions |
| Information | `#315E83` | Helpful neutral information |

Do not communicate a state using colour alone. Pair it with text or an appropriate accessible icon.

---

## 4. Typography

Typography should feel editorial and distinctive while remaining highly readable. Avoid using a different typeface for every visual idea.

### 4.1 Typeface pairing

Use a two-family system:

1. **Primary sans-serif:** Inter. Use for navigation, body copy, labels, buttons, metadata, and most headings.
2. **Editorial accent:** Instrument Serif, used selectively for a short phrase, a single highlighted word, or an occasional display moment where contrast adds meaning.

Do not use the serif for long paragraphs, form labels, navigation, or dense metadata. It is an accent, not a second competing system.

Use locally available, properly licensed font files when the project includes them. If the fonts are not present, load them through the project's established font strategy only when network loading is acceptable. Include sensible fallbacks. Do not download font files from unverified sources or commit fonts without checking their licence.

Suggested fallbacks:

```css
--font-sans: "Inter", "Helvetica Neue", Arial, sans-serif;
--font-editorial: "Instrument Serif", Georgia, serif;
```

If the approved logo or wordmark uses another typeface, do not use that typeface for all interface text by default.

### 4.2 Typeface usage

- Display headlines: Inter, with careful weight and line-break control.
- Occasional editorial emphasis: Instrument Serif, preferably regular or italic, and only on a short phrase.
- Section titles: Inter, generally medium or semibold.
- Body copy: Inter regular.
- Metadata and navigation: Inter medium, with restrained letter spacing.
- Buttons: Inter medium or semibold.

Avoid using all caps for long headings. All-caps labels may be used for small overlines, but keep them readable and do not over-track the letters.

### 4.3 Type scale

Use fluid type sizes where suitable. The following values are starting points, not rigid limits. Adjust line breaks and maximum widths based on actual content.

| Role | Suggested size | Line height | Typical weight |
|---|---:|---:|---|
| Hero display | `clamp(3.5rem, 8vw, 8rem)` | 0.92–1.02 | 500–650 |
| Page title | `clamp(3rem, 6vw, 6rem)` | 0.95–1.05 | 500–650 |
| Section title | `clamp(2rem, 3.6vw, 4rem)` | 1.0–1.12 | 500–600 |
| Subheading | `clamp(1.25rem, 2vw, 1.75rem)` | 1.15–1.3 | 500–600 |
| Body large | `1.125rem` | 1.45–1.6 | 400 |
| Body | `1rem` | 1.5–1.7 | 400 |
| Small | `0.875rem` | 1.4–1.55 | 400–500 |
| Label | `0.75rem` | 1.3–1.4 | 500–600 |

### 4.4 Line length and wrapping

- Long-form paragraphs should generally stay around 55–75 characters per line on desktop.
- Use narrower text measures for manifesto-style statements and short introductions.
- Avoid very wide paragraphs across a full desktop viewport.
- Balance hero line breaks intentionally. Do not allow a headline to wrap into an awkward orphan word on common viewport widths.
- Prefer natural line breaks over manually inserting many `<br>` elements. Use explicit breaks only when they are part of an intentional art-directed layout.
- Do not shrink text excessively to make an overloaded layout fit. Improve the layout or edit the copy.

---

## 5. Layout system

The overall layout should combine an orderly grid with occasional asymmetry. The grid provides consistency; carefully chosen deviations give the site character.

### 5.1 Main container

Use a shared responsive container. Suggested starting point:

```css
:root {
  --page-gutter: clamp(1.25rem, 4vw, 4.5rem);
  --content-max: 90rem;
}

.container {
  width: min(calc(100% - (2 * var(--page-gutter))), var(--content-max));
  margin-inline: auto;
}
```

The content maximum may be adjusted after testing the actual wordmark, media, and grid. Avoid stretching text content to the full media width.

### 5.2 Grid

- Desktop: use a 12-column grid for major layouts.
- Tablet: use 8 columns or a simplified flexible grid.
- Mobile: use 4 columns, with clear side gutters.
- Use consistent gutters within a page. A starting range is 16–28px depending on viewport width.
- Let selected images or colour fields break out of the text container when that creates a purposeful composition.
- Keep text alignment, section edges, and page rhythm consistent even when individual sections are asymmetric.

### 5.3 Spacing scale

Use a spacing scale based on multiples of four. Prefer these tokens over arbitrary one-off values.

| Token | Value |
|---|---:|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-8` | `32px` |
| `--space-10` | `40px` |
| `--space-12` | `48px` |
| `--space-16` | `64px` |
| `--space-20` | `80px` |
| `--space-24` | `96px` |
| `--space-28` | `112px` |
| `--space-32` | `128px` |

Use fluid section spacing where the content benefits from it, for example `clamp(4rem, 9vw, 9rem)`. Do not make every section the same height. Let the amount and importance of the content determine the rhythm.

### 5.4 Section rhythm

- Establish a clear introduction for every major section.
- Give sections enough breathing room to feel intentional.
- Alternate dense and quiet moments to create pace.
- Use full-width media or colour blocks selectively to break up repeated text-and-image layouts.
- Do not force every section into the same two-column template.
- Ensure the page still reads clearly when animations are disabled.

### 5.5 Responsive breakpoints

Use the existing project's breakpoint conventions if they are consistent. Otherwise start with:

| Name | Width | Main behaviour |
|---|---:|---|
| Small mobile | `< 480px` | Single-column content, reduced display scale, compact navigation |
| Mobile / large mobile | `480–767px` | Flexible one-column layouts, selected two-column small elements |
| Tablet | `768–1023px` | Simplified grid, reduced media offsets, less complex navigation |
| Desktop | `1024–1439px` | Full editorial layouts and grid compositions |
| Wide desktop | `1440px+` | Constrain text and content, use extra width for composition rather than oversized paragraphs |

Do not design only for the exact breakpoint values. Test between them to catch awkward intermediate layouts.

---

## 6. Shape, borders, and surfaces

The brand should feel precise and editorial. Use shape intentionally rather than softening every element.

### 6.1 Corner radius

Suggested radius tokens:

| Token | Value | Use |
|---|---:|---|
| `--radius-none` | `0px` | Editorial frames, rules, edge-to-edge media |
| `--radius-xs` | `2px` | Small controls and subtle surfaces |
| `--radius-sm` | `4px` | Buttons, input fields, compact UI |
| `--radius-md` | `8px` | Occasional media or functional panel |

Avoid large rounded cards, capsule-shaped containers, and excessive pill treatments. A pill can be used for a genuinely compact status or category label, but it should not become the site's default shape language.

### 6.2 Borders and dividers

- Prefer fine, low-contrast rules for separating editorial sections.
- Use stronger borders only for interactive controls or clear grouping.
- Align rules to the grid.
- Avoid outlining every image, card, or text block.
- Do not use glowing borders or gradient strokes.

### 6.3 Shadows

The default shadow is none. Use a restrained shadow only when an element genuinely needs elevation, such as a menu floating above content. Do not add shadows to every card or image.

---

## 7. Image and media direction

Photography and moving image are central to the agency's story. Media should feel art-directed, not like filler added to make a page look expensive.

### 7.1 Image principles

- Prioritise original photography, commissioned work, properly licensed media, or intentionally created concept-project assets.
- Select imagery because it supports the subject and narrative, not because it looks fashionable.
- Maintain deliberate colour treatment and tonal consistency within each project.
- Mix close detail, human moments, environmental frames, and wide compositions where useful.
- Show the work at a size that allows its craft to be appreciated.
- Avoid irrelevant business-meeting stock photos, generic laptop mockups, anonymous hands typing, and random abstract 3D graphics.
- Do not use assets with visible watermarks or unclear usage rights.
- Do not imply that a generated or stock image is a real photograph from a client engagement.

### 7.2 Aspect ratio guidance

These are flexible patterns, not a mandate that every project image use the same crop.

| Media role | Suggested ratio |
|---|---|
| Main project cover | `4:3`, `3:2`, or a deliberate portrait crop |
| Editorial portrait | `3:4` or `4:5` |
| Wide campaign / film frame | `16:9` or `2:1` |
| Detail image | Native ratio where composition benefits |
| Social content preview | Use the actual platform's relevant ratio when showing a platform mock-up |

Use `object-fit: cover` only when the crop preserves the subject. Use `contain` where the entire object, packaging, logo, or designed artefact must remain visible.

### 7.3 Media performance

- Use responsive image sources where the framework supports them.
- Define image dimensions or aspect ratios to reduce layout shift.
- Lazy-load below-the-fold images.
- Prioritise the main hero image only when it materially affects the first view.
- Do not lazy-load the primary above-the-fold visual if doing so harms the initial experience.
- Use modern image formats when available and supported.
- Compress video and do not autoplay heavy background video on mobile by default.
- Respect reduced-data and reduced-motion preferences where practical.
- Include useful alt text for meaningful images. Use empty alt text for decorative media.

### 7.4 Project-specific art direction

Each portfolio project should have its own coherent visual direction while still sitting comfortably within the 6FOLIO site. A project may use its own palette, typography, and media treatment inside its case study. The navigation and global interface should remain recognisably 6FOLIO.

---

## 8. The number six as a design device

The number six should connect the six collaborators and the connected service model. It must not become a repetitive graphic gimmick.

Good uses:

- A six-part process that explains how the disciplines work together.
- A subtle six-column or six-step visual when the content genuinely supports it.
- Six team roles shown as an interdependent system rather than six identical profile cards.
- A small six-part marker or progress indicator in a relevant interaction.
- Editorial numbering from 01 to 06 where it improves scanning.

Avoid:

- Repeating six dots in every section.
- Making every component hexagonal.
- Putting the number 6 into every heading.
- Creating an arbitrary six-step process that does not match the real way the team works.
- Treating the six team roles as a claim that the agency has six full-time employees if the working arrangement is different.

The guiding test: if the number six were removed from a decorative element, would the design still communicate something useful? If not, reconsider the element.

---

## 9. Core component standards

These standards guide implementation. Follow the existing component architecture where appropriate and avoid duplicating patterns that already work.

### 9.1 Navigation

- Keep the wordmark clear and recognisable.
- Provide direct routes to Work, Services, About, and Contact. Use a sensible mobile menu when the full navigation no longer fits.
- Make the header usable with keyboard and touch.
- Give the active route a subtle, visible state.
- The menu must open and close predictably, close after selecting a route where appropriate, and expose correct accessibility attributes.
- Do not make the navigation dependent on scroll animation to remain usable.

### 9.2 Hero

- Lead with one clear statement, not a stack of competing slogans.
- Add a concise explanation of what 6FOLIO does and who it helps.
- Provide one primary action and, when useful, one secondary action.
- Use one strong art-directed visual or a deliberate typographic composition.
- The hero must communicate the studio's offer without requiring the visitor to decode an abstract animation.
- Keep the first viewport legible on a typical laptop and mobile screen.

### 9.3 Portfolio cards

- Make the project title, project type, and concept/client status easy to identify.
- Use a strong image or intentional typographic cover.
- Avoid putting every card inside an identical rounded rectangle.
- Use varied but related layouts, with a consistent grid and metadata treatment.
- Make the entire card or its explicit link operable by keyboard and pointer.
- Ensure hover effects have a visible keyboard equivalent.
- Do not fabricate results or client status.

### 9.4 Case-study page

A reusable case study should support the following sequence where relevant:

1. Project title and status, such as `Concept project` or verified client work.
2. Short project summary.
3. Project facts that are known and can be verified.
4. The challenge or opportunity.
5. Audience and context.
6. The central idea or strategy.
7. Creative direction and production.
8. The digital, content, or campaign execution.
9. Outputs and deliverables.
10. Results only when real and attributable. Otherwise describe the intended outcome or learning.
11. Related work or a next-step contact action.

The layout should feel like a crafted editorial story, not a checklist with ten identical cards. Use image sequencing, typography, captions, and whitespace to build the narrative.

### 9.5 Services list

- Describe each service in plain language.
- Explain the business problem it helps solve.
- Show selected deliverables without turning the page into an endless inventory.
- Make the connection between service disciplines clear.
- Use a list, index, or editorial composition before considering six separate cards.
- Provide a relevant enquiry action.

### 9.6 Team presentation

- Show each role's perspective and contribution.
- Use real names and approved biographies only when supplied.
- If names or portraits are not available, use role-based presentation without invented identities.
- Show how the roles collaborate, not just what each person does separately.
- Avoid six identical profile tiles if another composition tells the story better.

### 9.7 Buttons and links

- Button labels should describe the action: `Start a project`, `Explore the work`, `Discuss your brief`.
- Use one primary button style and a limited number of secondary treatments.
- Links within editorial copy should be visually identifiable.
- Avoid vague labels such as `Click here` or `Learn more` when a specific action can be named.
- Include hover, focus-visible, active, and disabled states where relevant.
- Never show a pointer cursor on a non-interactive element.

### 9.8 Forms

- Use visible labels, not placeholder-only labels.
- Group related fields logically.
- Provide clear required/optional indicators.
- Explain validation errors near the relevant field.
- Show a success message only after a real successful submission.
- If no working submission service is configured, explain the limitation and document what must be connected. Do not fake a successful enquiry.

### 9.9 Footer

- Repeat the core navigation in a useful, compact structure.
- Include a clear enquiry action.
- Include only verified contact and social details.
- Keep legal and copyright information accurate.
- Make the footer feel like a considered ending to the page, not a dumping ground for links.

---

## 10. Motion and interaction

Motion should have a clear purpose: reveal content, establish hierarchy, connect related elements, or make a transition feel considered. Stillness is also a design choice.

### 10.1 Motion principles

- Use motion sparingly and consistently.
- Keep most transitions short and responsive.
- Prefer opacity and small positional changes over large scale transformations.
- Avoid animating layout-heavy properties when a transform or opacity can achieve the same result.
- Do not delay access to content while waiting for a long entrance animation.
- Avoid scroll hijacking and forced scroll sequences.
- Never make essential information visible only after an animation.
- Keep hover transitions subtle and fast.
- Ensure the site works when motion is reduced or disabled.

### 10.2 Suggested motion tokens

| Token | Suggested duration | Typical use |
|---|---:|---|
| `--motion-fast` | `120ms` | Hover and small control feedback |
| `--motion-base` | `220ms` | Buttons, links, compact UI transitions |
| `--motion-medium` | `380ms` | Image reveals and section transitions |
| `--motion-slow` | `600ms` | A rare, deliberate hero or editorial transition |

Use a small, consistent set of easing curves. For example:

```css
:root {
  --ease-standard: cubic-bezier(0.2, 0.7, 0.2, 1);
  --ease-emphasis: cubic-bezier(0.16, 1, 0.3, 1);
}
```

Do not make every item animate with a different delay. Avoid long stagger sequences that turn reading into waiting.

### 10.3 Reduced motion

Support `prefers-reduced-motion: reduce`. In reduced-motion mode:

- Remove non-essential parallax and scroll-based motion.
- Replace large movement with simple state changes where needed.
- Disable looping decorative motion.
- Keep all content and interactions available.

### 10.4 Cursor and scroll effects

Custom cursors are not required. Add one only if it provides clear feedback and never replaces the platform cursor's affordances. Do not use scroll effects that make the page difficult to navigate, read, or operate on touch devices.

---

## 11. Iconography and graphic elements

- Use one coherent icon family if icons are genuinely needed.
- Prefer a consistent, restrained line style.
- Use icons to support meaning, not as filler for every service or heading.
- Do not mix filled, outlined, 3D, emoji, and hand-drawn icon styles without a clear art direction.
- Do not use icons as the only label for important navigation or actions.
- Create bespoke graphic elements only when they reinforce the 6FOLIO story or a specific project.
- Keep decorative graphics away from text if they reduce contrast or reading comfort.

---

## 12. Accessibility standards

Accessibility is part of the visual system, not a final clean-up task.

- Use semantic headings in a logical order.
- Ensure sufficient colour contrast for body text, labels, buttons, and focus indicators.
- Do not rely on colour alone to communicate state or meaning.
- Provide visible `:focus-visible` styles for keyboard navigation.
- Ensure buttons and links have clear accessible names.
- Make all navigation, forms, filters, accordions, and menus keyboard operable.
- Use appropriate labels and error messaging for form controls.
- Add useful alt text to meaningful images.
- Avoid text embedded in images when it can be rendered as actual text.
- Ensure videos do not autoplay with sound.
- Respect reduced-motion preferences.
- Check text size and contrast on real mobile viewports.
- Keep touch targets comfortably usable. Aim for approximately 44 by 44 CSS pixels where practical.

The implementation should aim for WCAG 2.2 AA conformance, while recognising that automated checks alone cannot establish full accessibility compliance. Run manual keyboard and screen-reader checks where tools and time permit.

---

## 13. Content presentation rules

The supplied `6folio_website_story_and_copy.md` is the content source of truth. This design system controls how that content is presented, not a reason to rewrite it into generic agency language.

- Keep headlines focused and specific.
- Avoid stacking multiple slogans in one viewport.
- Break long explanations into a readable hierarchy.
- Use short metadata labels and meaningful captions.
- Preserve the distinction between concept work and paid client work.
- Never add fake metrics, awards, logos, testimonials, or client claims to improve visual balance.
- Do not use em dashes in newly written site copy. Use commas, full stops, colons, or parentheses instead.
- Do not insert Lorem ipsum or generic placeholder copy into a page presented as complete.

If copy does not fit, revise the composition first. Only edit supplied copy when necessary, and preserve its intended meaning and voice.

---

## 14. Design anti-patterns to avoid

The following choices are explicitly discouraged unless a specific, justified project requirement calls for them:

- Generic dark agency template with a neon gradient hero.
- Glassmorphism panels and frosted floating navigation.
- Random floating spheres, blobs, stars, and abstract 3D objects.
- Excessive blur, glow, or gradient text.
- A wall of identical rounded cards.
- Six identical service cards used as the main creative idea.
- Random icons beside every heading.
- Oversized mockups with no connection to the project.
- Stock photos of generic teams in meetings.
- Decorative statistics or invented counters.
- Scroll-triggered text effects that make reading uncomfortable.
- Custom cursor effects that reduce usability.
- Carousels used where a clear grid or editorial sequence is better.
- Autoplaying video backgrounds on every page.
- Fake loading screens and artificial page delays.
- Huge claims unsupported by project evidence.
- Desktop-only layouts that collapse poorly on mobile.

Before adding a visual effect, answer three questions:

1. What does it communicate?
2. What does it improve for the visitor?
3. Would the page be clearer or stronger without it?

If there is no useful answer, leave it out.

---

## 15. Suggested CSS token starter

This is an implementation starting point. Adapt naming to the existing repository and keep tokens centralised.

```css
:root {
  /* Colour */
  --color-ink: #171715;
  --color-paper: #F4F1EA;
  --color-white: #FFFFFF;
  --color-muted: #77766F;
  --color-line: #D8D4CB;
  --color-panel: #EAE6DD;
  --color-accent: #E45B3B;
  --color-accent-strong: #C8442B;

  /* Typography */
  --font-sans: "Inter", "Helvetica Neue", Arial, sans-serif;
  --font-editorial: "Instrument Serif", Georgia, serif;

  /* Layout */
  --page-gutter: clamp(1.25rem, 4vw, 4.5rem);
  --content-max: 90rem;
  --grid-gap: clamp(1rem, 2vw, 1.75rem);

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-28: 7rem;
  --space-32: 8rem;

  /* Shape */
  --radius-none: 0;
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 8px;

  /* Motion */
  --motion-fast: 120ms;
  --motion-base: 220ms;
  --motion-medium: 380ms;
  --motion-slow: 600ms;
  --ease-standard: cubic-bezier(0.2, 0.7, 0.2, 1);
  --ease-emphasis: cubic-bezier(0.16, 1, 0.3, 1);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--color-ink);
  background: var(--color-paper);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Do not paste this snippet blindly if the repository uses an existing token system. Merge the values into the existing approach and avoid duplicate or conflicting global styles.

---

## 16. First-release page design checklist

### Home

- [ ] The first viewport communicates what 6FOLIO does.
- [ ] The six-perspective story is clear without a long explanation.
- [ ] The primary call to action is visible and works.
- [ ] Selected work is presented with clear project status.
- [ ] Services feel connected rather than like unrelated menu items.
- [ ] The team story makes collaboration understandable.
- [ ] The final enquiry action is clear.

### Work index

- [ ] Projects are easy to scan.
- [ ] Project type and concept/client status are visible.
- [ ] The grid or editorial sequence has deliberate rhythm.
- [ ] Filters, if present, work with pointer and keyboard.
- [ ] Empty and no-results states are considered.

### Case study

- [ ] The story has a beginning, middle, and end.
- [ ] The challenge, idea, and execution are understandable.
- [ ] Media supports the story and is not decorative filler.
- [ ] Results are factual or clearly described as intended outcomes.
- [ ] Concept status is visible wherever required.
- [ ] The next action is clear.

### Services

- [ ] Each service explains the problem it helps solve.
- [ ] Deliverables are clear and realistic.
- [ ] The relationships between disciplines are visible.
- [ ] Enquiry actions work.

### About / team

- [ ] The six collaborators are represented honestly.
- [ ] Role descriptions use supplied facts only.
- [ ] The shared process is clear.
- [ ] The presentation does not rely on fabricated portraits or biographies.

### Contact

- [ ] Form labels and validation are clear.
- [ ] Submission status is honest.
- [ ] No contact details have been invented.
- [ ] The page works on mobile and keyboard.

### Shared interface

- [ ] Navigation and footer work on every route.
- [ ] Active, hover, focus, and disabled states are consistent.
- [ ] Typography and spacing are consistent.
- [ ] Motion respects reduced-motion settings.
- [ ] No horizontal overflow exists at common viewport widths.
- [ ] Contrast and keyboard access have been checked.

---

## 17. Definition of done

The design system is successfully implemented when:

1. The core colour, typography, spacing, layout, and motion tokens are centralised.
2. Reusable interface components follow consistent visual rules.
3. The home, work, case-study, services, about, and contact experiences feel like one coherent brand.
4. The number six supports the story without becoming a repeated decorative gimmick.
5. The design works across mobile, tablet, and desktop layouts.
6. All key interactions have clear and usable states.
7. Accessibility and reduced-motion considerations are included from the beginning.
8. The result looks art-directed and specific to 6FOLIO rather than like a generic agency template.
9. No unverified identity claims, project results, awards, testimonials, or client relationships have been introduced.
10. The implementation has been reviewed against this document and any deviations are documented with a reason.

**Final design principle:** 6FOLIO should look like six thoughtful people made something together, not like a template tried to look expensive.
