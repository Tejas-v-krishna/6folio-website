# 6FOLIO Technical Stack & Implementation Architecture

**Document type:** Engineering decision guide  
**Version:** 1.0  
**Status:** First-release recommendation  
**Project:** 6FOLIO agency website  
**Primary goal:** Build a fast, maintainable, responsive website with a strong editorial design and a complete portfolio experience.

---

## 1. Purpose and decision order

This document defines the recommended technical foundation for the first 6FOLIO website. It is a decision guide, not permission to rewrite an existing project unnecessarily.

Before installing packages or changing architecture, the coding agent must:

1. Inspect the repository and identify its current framework, package manager, build tools, routing, styling system, and deployment configuration.
2. Read `AGENTS.md`, `6folio_agency_blueprint.md`, `6folio_website_story_and_copy.md`, and `DESIGN_SYSTEM.md`.
3. Identify which parts of the existing implementation are sound and reusable.
4. Preserve a working existing stack unless there is a specific technical reason to change it.
5. Record major technical assumptions and any proposed migration before making a disruptive change.

The order of authority is the order defined in `AGENTS.md`. A direct user instruction takes priority over this document.

**Do not rebuild a functioning project from scratch solely to match the recommended stack below.**

---

## 2. Recommended stack for a new project

If the repository is empty or has no established application, use the following stack unless a clear compatibility issue exists.

| Layer | Recommended choice | Reason |
|---|---|---|
| Application framework | Next.js with App Router | Supports a structured multi-page site, server rendering, metadata, and deployment flexibility. |
| Language | TypeScript | Improves maintainability and catches common mistakes during development. |
| UI layer | React | Component model is suitable for reusable page sections and interactions. |
| Styling | Tailwind CSS with custom CSS where needed | Enables consistent responsive styling while allowing a distinctive visual system. |
| Motion | CSS transitions and keyframes first; GSAP only for specific art-directed sequences | Keeps ordinary interactions light and reserves advanced animation for moments that need it. |
| Icons | Small, consistent SVG icon set or a single established icon library | Avoids mixed icon styles and unnecessary visual noise. |
| Content | Typed local data and reusable page templates for the first release | Keeps sample projects and page copy easy to review without creating an unnecessary CMS dependency. |
| Forms | Accessible client-side validation plus a real form endpoint only when configured | Prevents fake submission states and unapproved collection of personal information. |
| Hosting | Vercel is a suitable option for a Next.js project | Offers a straightforward deployment path, subject to owner approval. |
| Version control | Git | Makes changes reviewable and reversible. |

Use compatible stable releases available at implementation time. Do not copy old version numbers from tutorials or force an upgrade if the existing dependency set is healthy.

### 2.1 Framework guidance

For a new Next.js project:

- Use the App Router.
- Use layouts for shared navigation, footer, and global page structure.
- Prefer server components for static content and page composition.
- Use client components only for interactions that require browser state, event handlers, or client-side APIs.
- Keep client component boundaries as small as practical.
- Use route-level metadata for titles, descriptions, and social sharing information.
- Use route segments for project case studies rather than building every project as a separate hand-coded page.
- Use the framework's current recommended image component and image configuration where appropriate.

Do not make every component a client component by default. Avoid adding an API layer or database unless the implemented features actually require one.

### 2.2 Styling guidance

- Follow `DESIGN_SYSTEM.md` as the source of truth for design tokens and visual decisions.
- Define colour, typography, spacing, radius, and layout variables centrally.
- Use Tailwind utilities for layout and common styling, but do not let the interface become a collection of arbitrary one-off class strings.
- Use reusable components for repeated patterns.
- Use CSS modules or a small number of clearly organised stylesheet files for complex art-directed effects when that improves clarity.
- Avoid introducing a second styling framework.
- Avoid using a component library's default aesthetic as the design system. The result must feel authored for 6FOLIO.

Tailwind is a utility, not a substitute for design decisions. A consistent editorial layout and thoughtful composition matter more than the number of utility classes used.

---

## 3. Core site architecture

Build the site around reusable page sections and a small number of layout primitives.

### 3.1 Recommended routes

Use the following route structure when creating a new application. If the repository already has a clear route convention, preserve it and map these pages into that structure.

```text
/
/about/
/services/
/work/
/work/[slug]/
/contact/
/privacy/              (only when a real privacy policy is supplied or reviewed)
```

The privacy route must not contain invented legal wording. Do not publish a placeholder privacy policy. Create it only when the owner supplies or approves appropriate text.

A custom not-found page should be included. Do not create additional top-level pages just to make the sitemap look larger.

### 3.2 Shared layout

The application should have a shared site layout containing:

- Global typography and design tokens.
- Header and navigation.
- Main content landmark.
- Footer.
- Global focus and reduced-motion rules.
- Metadata defaults.

The header and footer should be designed once and reused. Their appearance may adapt to the current page or background, but their behaviour should remain consistent.

### 3.3 Page composition

Use reusable sections where they represent genuine repeated patterns. Examples include:

- `PageIntro`
- `SectionHeading`
- `ProjectCard`
- `ProjectIndex`
- `CaseStudyHero`
- `CaseStudySection`
- `ServiceItem`
- `TeamRole`
- `EnquiryForm`
- `CallToAction`

Names are suggestions, not a requirement to create an oversized component library. Create a component when it improves clarity, consistency, or reuse. Do not create a component for every wrapper `div`.

### 3.4 Component boundaries

Organise components by responsibility. A useful starting point is:

```text
src/
  app/
    layout.tsx
    page.tsx
    about/
    services/
    work/
      page.tsx
      [slug]/
    contact/
  components/
    layout/
    navigation/
    sections/
    portfolio/
    forms/
    ui/
  content/
    projects.ts
    services.ts
    team.ts
  lib/
    metadata.ts
    utils.ts
  styles/
    globals.css
```

If the framework setup uses a different source directory or route convention, follow the established convention. Do not force this exact tree onto a project where it would make the code harder to understand.

---

## 4. Content and portfolio data

Keep repeated content separate from presentation. This will make it easier to edit case studies, service details, and team roles without changing the layout code.

### 4.1 Typed content records

Use TypeScript types for recurring data structures. A project record should support fields similar to:

```ts
type ProjectStatus = "concept" | "client";

type Project = {
  slug: string;
  title: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  audience?: string;
  challenge: string;
  strategicIdea: string;
  approach: string[];
  deliverables: string[];
  services: string[];
  coverImage: string;
  gallery?: string[];
  published: boolean;
};
```

Adapt the type to the actual content needs. Do not add fields that nobody will use. If a value is unknown, omit it or mark it as pending internally. Do not invent a metric to complete a schema.

### 4.2 Case-study content rules

- Use one reusable case-study template.
- Each project needs a clear context, challenge, idea, execution, and outcome or intended outcome.
- A concept project's status must be visible on its card and case-study page.
- For concept work, describe the intended outcome as a design objective or hypothesis. Never present hypothetical outcomes as measured results.
- Only show metrics when they are real, documented, and approved for publication.
- Only use client names and logos when the owner confirms the agency has permission to display them.
- Do not create fake quotes, testimonials, reviews, or client attribution.

### 4.3 Content editing approach

For the first release, local typed content is sufficient. A headless CMS is not required unless the owner specifically needs non-technical users to publish projects frequently.

Keep copy in files that are easy to edit. Avoid burying long blocks of website copy inside complex JSX or component logic.

If MDX is already in use and is working well, it can be retained for case studies or editorial pages. Do not add MDX only for fashion or convenience if simple data records are enough.

---

## 5. Motion and interaction architecture

Motion must follow the intent and constraints in `DESIGN_SYSTEM.md` and `AGENTS.md`.

### 5.1 Default approach

Use native CSS for:

- Hover and focus transitions.
- Button feedback.
- Underline and border movement.
- Simple opacity and transform transitions.
- Small interface state changes.

Use GSAP only if a specific interaction benefits from timeline control or coordinated scroll-based animation. Examples may include a carefully choreographed hero sequence, a project transition, or one meaningful visual narrative.

Do not install GSAP simply because agency websites use it. First build the complete site with static layouts and working interactions. Add a motion library only after identifying the exact interaction that requires it.

### 5.2 Motion standards

- Respect `prefers-reduced-motion`.
- Provide a usable static state when animation is unavailable or disabled.
- Do not block the visitor from reading or navigating while animations play.
- Avoid scroll hijacking and forced scroll timing.
- Avoid continuous animation without a clear purpose.
- Avoid animation that causes layout shift.
- Clean up event listeners, observers, timelines, and animation contexts when components unmount.
- Test on touch devices and lower-powered hardware.
- Keep large scroll-based sequences limited and optional.

### 5.3 Cursor and pointer effects

Do not create a custom cursor by default. If a custom pointer treatment is approved and implemented, it must:

- Never replace visible focus indicators.
- Never hide the operating system cursor where that would harm usability.
- Have a useful fallback on touch devices.
- Avoid lag, excessive scale, or distracting trailing effects.
- Not obscure labels or interactive controls.

---

## 6. Image, video, and font handling

Detailed creative and sourcing rules belong in `ASSET_GUIDELINES.md`. Until that file exists, follow these minimum rules:

- Keep project media organised by project and purpose.
- Use clear, descriptive file names.
- Prefer appropriately sized AVIF or WebP images when supported, while retaining a sensible fallback where required.
- Use responsive image sizing rather than loading oversized originals into small components.
- Set width, height, or aspect ratio to reduce layout shift.
- Lazy-load offscreen images. Do not unnecessarily lazy-load the primary hero image.
- Add descriptive alt text to informative images. Use empty alt text for decorative imagery.
- Do not use an image with a misleading subject simply because it fits the colour palette.
- Do not hotlink images from unverified websites.
- Confirm usage rights before using stock, third-party, or reference images in a published website.
- Use poster images and user-controlled playback for video. Do not autoplay audio.
- Provide a still-image or reduced-motion fallback where background video would otherwise be used.
- Use only fonts with an appropriate licence. Do not commit unlicensed font files.

Avoid adding large video files to the repository without a deliberate delivery strategy. If video is essential, assess hosting, compression, poster frames, loading behaviour, and bandwidth before implementation.

---

## 7. Forms and integrations

### 7.1 Contact form

The first release may include a contact form interface, but the form must not pretend to deliver enquiries when no submission service is configured.

Before wiring a form to a provider, the owner must approve the provider and the data handling approach. Once a real service is configured:

- Validate the input on the server as well as in the browser.
- Use clear, accessible labels and helpful error messages.
- Add reasonable spam protection without harming accessibility.
- Do not expose private credentials in client-side code.
- Do not log sensitive form contents unnecessarily.
- Show a success state only after the service confirms successful submission.
- Show a clear error state if submission fails.

Do not invent an email address or contact channel as a fallback. Use only contact details supplied by the owner.

### 7.2 Other integrations

Do not add the following without explicit owner approval and required account configuration:

- Analytics and tracking scripts.
- Advertising pixels.
- CRM or lead-management integrations.
- Email marketing platforms.
- Chat widgets that collect user data.
- Payment providers or checkout flows.
- Calendaring or booking integrations.
- Maps or location tracking.

If a future integration is requested, document what data it processes, what credentials it requires, where those credentials are stored, and how the owner can disable it.

### 7.3 Backend and database

A static or mostly server-rendered agency website does not need a database by default. Do not create a database, authentication system, admin dashboard, or custom backend unless a confirmed requirement needs it.

For the first version, local project data and a properly configured form endpoint are sufficient. Record any future CMS or database requirement as a recommendation rather than adding speculative infrastructure.

---

## 8. Environment variables and secrets

- Never hardcode API keys, tokens, passwords, or private credentials.
- Never expose server-only secrets through public environment variable prefixes.
- Include an `.env.example` file only when the application actually needs environment variables.
- Use descriptive placeholder values such as `FORM_ENDPOINT_URL=`. Never include real secrets in the example file.
- Document each required variable and which service it belongs to.
- Check that local environment files are excluded from version control.
- Do not ask the owner to paste secrets into source code or commit history.
- Do not attempt to create accounts or retrieve credentials autonomously.

If a required credential is missing, build the safe parts of the interface and clearly document the remaining setup task.

---

## 9. SEO, metadata, and social sharing

For each public route:

- Use a unique and meaningful page title.
- Write a concise, accurate meta description.
- Use a logical heading hierarchy.
- Use descriptive link labels.
- Add Open Graph and social sharing metadata.
- Use a relevant social preview image when one is available and approved.
- Set canonical URLs only after the production domain is confirmed.
- Generate a sitemap and robots instructions only when route visibility and the production configuration are understood.
- Avoid indexing private, draft, or unfinished pages.
- Add structured data only when every included fact is verified.

Do not invent an office address, telephone number, founding date, review rating, award, client list, or business registration detail for structured data.

---

## 10. Performance and accessibility engineering

Performance and accessibility must be considered during implementation, not added as a final decorative pass.

### 10.1 Performance

- Keep client-side JavaScript limited to actual interactive needs.
- Avoid duplicate libraries and redundant packages.
- Optimise images and use responsive sizes.
- Load fonts carefully and avoid unnecessary font weights.
- Reserve dimensions for images and media.
- Avoid large scripts in the critical rendering path.
- Use lazy loading for non-critical below-the-fold media.
- Avoid excessive DOM nodes and deeply nested animation wrappers.
- Use the framework's production build and test it before considering the site complete.
- Investigate major layout shifts and unnecessarily slow page transitions.

### 10.2 Accessibility

- Use semantic HTML landmarks.
- Maintain a logical heading order.
- Ensure all interactive controls work using a keyboard.
- Provide visible focus indicators.
- Use accessible labels and descriptions for forms.
- Ensure sufficient contrast for text and controls.
- Provide useful alt text for informative images.
- Respect reduced-motion preferences.
- Do not communicate meaning through colour alone.
- Ensure navigation and menus work on touch devices and with assistive technology.
- Avoid making essential information available only through hover.

### 10.3 Responsive behaviour

Test at a minimum of:

- Small mobile: approximately 360 px wide.
- Large mobile: approximately 430 px wide.
- Tablet: approximately 768 px wide.
- Laptop: approximately 1280 px wide.
- Large desktop: approximately 1440 px wide and above.

These are testing reference widths, not breakpoints that must be hardcoded. Content should reflow naturally between them. Fix horizontal overflow, clipped headings, inaccessible controls, and oversized media.

---

## 11. Code quality and repository conventions

- Use the package manager already established by the repository.
- Preserve and update the existing lockfile when dependencies change.
- Do not mix package managers.
- Use TypeScript for new application code when the project is TypeScript-based.
- Avoid `any` unless there is a documented, temporary reason.
- Keep components focused and readable.
- Extract repeated logic only when it improves clarity or prevents real duplication.
- Use descriptive names for components, variables, functions, and content records.
- Remove dead code and unused imports introduced by the work.
- Handle loading, empty, error, and success states where the interface requires them.
- Do not swallow errors silently.
- Avoid unnecessary abstractions, global state libraries, and utility packages.
- Add tests for logic or interactions where they provide meaningful confidence.
- Keep dependencies up to date only when a change is compatible and justified. Do not run broad automatic upgrades as part of an overnight build.

### 11.1 Component library decision

Do not add a large component library by default. The visual identity is bespoke, so build the necessary components to match the design system.

A small accessible primitive library may be considered if the project already uses it or a real interaction requires it. Inspect the resulting markup and styles rather than accepting default component appearance.

### 11.2 State management

Use local component state for local interactions. Use URL state when a filter or selection should be shareable or survive reloads. Do not add Redux, Zustand, or another global state library unless a genuine cross-page state requirement emerges.

---

## 12. Suggested development sequence

The agent should build in this order. This sequence is designed to produce a complete, reviewable site before investing in advanced motion.

### Phase 1: Repository and technical audit

- Inspect current files and project scripts.
- Read all project documentation that exists.
- Identify framework and package manager.
- Confirm whether the project is an existing application or a clean start.
- Document the proposed route map and implementation plan.

### Phase 2: Foundation

- Configure or verify typography and design tokens.
- Establish the shared page layout, navigation, footer, and responsive containers.
- Create core layout and UI primitives.
- Establish content data types.
- Set up route structure.

### Phase 3: Complete page implementation

- Build the homepage and its complete story sequence.
- Build the services page with all six service pillars.
- Build the about page and six team-role presentation.
- Build the portfolio index.
- Build reusable case-study pages for the concept projects.
- Build the contact page and honest form state.
- Build the not-found page.

### Phase 4: Interactions and motion

- Implement navigation and mobile menu.
- Implement project links and any necessary filters.
- Implement form validation and honest submission behaviour.
- Add small interaction feedback.
- Add only the specific motion sequences that improve the experience.
- Verify reduced-motion behaviour.

### Phase 5: Content and media integration

- Add approved brand assets and imagery.
- Apply the asset rules from `ASSET_GUIDELINES.md` when available.
- Check crop, aspect ratio, responsive sizing, and loading behaviour.
- Verify that all concept work is labelled honestly.

### Phase 6: Quality review

- Run lint, type-check, test, and production build commands that exist in the project.
- Review every route at the required viewport widths.
- Check links, controls, keyboard navigation, form states, and reduced motion.
- Review page titles, descriptions, social metadata, and image alt text.
- Record all failures and unresolved owner decisions.

### Phase 7: Handover

- Summarise what was built.
- List commands run and their results.
- List routes checked.
- Record any known issues and missing integrations.
- List credentials or approvals the owner must provide.
- Do not deploy or publish without owner approval.

---

## 13. Dependency decision checklist

Before installing any new package, answer these questions:

1. What exact feature or problem does this package solve?
2. Can the same result be achieved with the framework, browser APIs, or existing dependencies?
3. Is the package actively maintained and compatible with the repository's framework version?
4. Does it add avoidable bundle size, security exposure, licensing obligations, or complexity?
5. Is the package necessary for the first release, or can it be deferred?

If the package does not pass this check, do not install it.

Examples:

| Requirement | First choice | Add a dependency only when |
|---|---|---|
| Simple hover or reveal | CSS | The choreography genuinely exceeds CSS needs. |
| Advanced timeline | Existing animation library, if present | There is a specific timeline or scroll sequence to implement. |
| Icons | Existing icon set or inline SVG | There is no consistent, suitable source already available. |
| Form validation | Native constraints and focused validation logic | The form's complexity justifies a schema library. |
| Content management | Local typed data | Frequent non-technical publishing is a confirmed need. |
| Global state | Local state and URL parameters | Several unrelated routes must share complex state. |
| Database | No database | A confirmed feature requires persistent structured data. |

---

## 14. Definition of technical completion

The technical implementation is ready for owner review when:

- The application starts using the documented command.
- The production build completes, or any existing unrelated build failure is precisely documented.
- All required public routes load and navigate correctly.
- The layout and reusable components follow `DESIGN_SYSTEM.md`.
- The content is separated sensibly from presentation.
- All six service pillars and portfolio content are represented consistently.
- Concept work is labelled honestly.
- No fake form submission or disconnected integration is presented as functional.
- No private credentials are present in the repository.
- No unnecessary database, authentication, analytics, or third-party tracking has been added.
- Keyboard navigation, visible focus, and reduced-motion behaviour have been checked.
- The required viewport widths have been reviewed.
- Images, fonts, and video are handled responsibly.
- SEO metadata is meaningful and does not contain invented facts.
- The owner receives an accurate handover report with outstanding actions.

**The best technical stack is the simplest maintainable stack that can deliver the intended experience. The website should feel creatively ambitious to visitors and deliberately uncomplicated to maintain.**
