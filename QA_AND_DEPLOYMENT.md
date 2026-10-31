# 6FOLIO QA & Deployment Standards

## 1. Purpose

This document defines how the 6FOLIO website must be reviewed, tested, prepared for release, and handed over. It is written for the autonomous design and engineering agent working on the first complete website release.

The objective is not to produce a checklist that is merely marked complete. The objective is to verify that the website is credible, understandable, accessible, responsive, technically stable, and ready for the owner to review.

A successful local build does not automatically mean the website is ready for production. A page that looks complete in one desktop screenshot is not proof that its navigation, forms, mobile layouts, keyboard support, or portfolio content work.

This document must be used together with:

- `AGENTS.md`
- `6folio_agency_blueprint.md`
- `6folio_website_story_and_copy.md`
- `DESIGN_SYSTEM.md`
- `TECH_STACK.md`
- `ASSET_GUIDELINES.md`

If a direct user instruction conflicts with this document, follow the current user instruction unless it would create a security, integrity, or safety issue. Record important deviations in the final handover.

## 2. Release principles

The first release must meet these principles:

1. **Complete before flashy.** Every primary page and user journey must work before the team spends time on decorative motion.
2. **Verify, do not assume.** Run available commands, inspect rendered pages, and test real interactions.
3. **Honest status.** Do not say a form, integration, deployment, test, or external service works unless it was actually verified.
4. **No invented credibility.** Do not create fake clients, reviews, testimonials, awards, metrics, addresses, or business claims to make the site appear established.
5. **Protect the existing project.** Preserve the current repository, user work, environment, and deployment configuration unless a change is clearly necessary and approved.
6. **Local work is not publication.** A successful local implementation is ready for owner review, not automatically approved for public release.

## 3. Quality gates

Use these quality gates in order. Do not skip a gate because a later task appears more interesting.

### Gate 1: Repository and environment audit

Before testing or changing anything:

- Identify the package manager from the lockfile and use that package manager consistently.
- Inspect the scripts available in `package.json` or the equivalent project configuration.
- Identify the framework, build tool, runtime requirements, and current project structure.
- Inspect environment variable usage without printing or exposing secret values.
- Check whether the repository already has linting, formatting, type checking, unit tests, end-to-end tests, or CI workflows.
- Identify existing deployment configuration, but do not change production settings.
- Check the repository status and preserve uncommitted user changes.
- Do not delete files, lockfiles, branches, environment files, or existing workflows as a shortcut.

Record important findings and blockers in the final handover.

### Gate 2: Static code checks

Run the checks supported by the repository. Typical examples include:

- Linting.
- Type checking.
- Unit or component tests.
- Formatting check, if configured.
- Production build.

Use the project's actual scripts. Do not assume script names or add a new tool just to create the appearance of coverage.

If no relevant script exists:

- Inspect the code manually for obvious errors.
- Use the framework's existing build command where available.
- Add tests only where they provide clear value and fit the current architecture.
- Record what could not be checked and why.

Do not hide a failing check by removing the script, weakening the configuration, skipping a failing test, or changing assertions without understanding the underlying issue.

### Gate 3: Route and content completeness

Verify every intended route, including any dynamic case-study route. Check that:

- Each route loads directly, not only after navigating from the homepage.
- Browser refresh works on nested routes.
- Internal links point to the correct destination.
- The not-found route behaves sensibly.
- No essential page is blank, unfinished, or populated with generic filler.
- The page title, heading, and content match the route.
- All six service pillars are represented consistently.
- Team roles are accurate and no personal details have been invented.
- Concept projects are labelled as concept or self-initiated work everywhere they appear.
- No fictional project is presented as a verified client engagement.
- No placeholder such as `Lorem ipsum`, `TBD`, `Coming soon`, `Your text here`, or an empty project card remains in the primary experience.

Search the repository for common placeholder terms before handover. Manually review any matches to distinguish genuine content from code examples or comments.

### Gate 4: Visual and responsive review

Inspect the rendered website at a minimum of these viewport sizes:

| Device profile | Suggested viewport |
|---|---:|
| Small mobile | 360 × 800 |
| Large mobile | 390 × 844 |
| Tablet portrait | 768 × 1024 |
| Laptop | 1366 × 768 |
| Large desktop | 1440 × 900 |

These are review sizes, not the only screen sizes the layout should support.

At each relevant size, inspect:

- Header, navigation, and footer.
- Hero composition and primary call to action.
- Portfolio cards and project detail layouts.
- Service sections and long text blocks.
- Team presentation.
- Contact form and validation messages.
- Images, video, crop positions, and media loading.
- Fixed, sticky, or animated elements.

Look for:

- Horizontal page overflow.
- Text clipped, overlapping, or becoming too small.
- Navigation items colliding or becoming unreachable.
- Buttons or links too close together for touch use.
- Images stretching, becoming pixelated, or cropping important subjects.
- Empty areas caused by failed media.
- Inconsistent gutters, line lengths, or section rhythm.
- Fixed elements covering important content.
- Excessive whitespace caused by a broken grid or missing asset.
- Motion that causes layout jumps or blocks reading.

Do not solve every responsive problem by hiding content. Recompose the layout for smaller screens while keeping the important message and functionality available.

If a browser preview or automation tool is available, use it to inspect the actual rendered website. If visual inspection is unavailable, state that limitation explicitly and do not claim a visual QA pass.

### Gate 5: Interaction and user-journey tests

Test all visible controls. A control that looks interactive must perform the action its label or appearance promises.

#### Navigation

- The logo returns to the homepage.
- Desktop navigation links work.
- Mobile navigation opens, closes, and navigates correctly.
- Menus close at appropriate times, including after navigation and when the user activates the close control.
- Escape closes dismissible menus and dialogs where expected.
- Active-page indication is understandable and accessible.
- Focus remains visible when navigating with a keyboard.

#### Portfolio

- Each visible project card opens the correct case study.
- Project filters work if provided.
- Empty filter results have a useful message and a way to reset.
- Case-study navigation and back links work.
- Concept-project labels remain visible and unambiguous.
- No project result implies measured commercial performance unless it is verified.

#### Services and calls to action

- Every service link opens the correct destination or section.
- The primary contact call to action is easy to find.
- Email, telephone, and social links use real owner-provided details only.
- External links open as intended and are clearly identifiable where necessary.

#### Forms

Test the following cases:

- Empty submission.
- Invalid email format, if email is collected.
- Required field missing.
- Valid input.
- Submission pending state, if applicable.
- Successful submission, only when the backend confirms success.
- Server or network failure.
- Repeated submission or accidental double-click.

A success message must not be displayed merely because a button was clicked. When a real submission service is not configured, the UI must explain the limitation honestly and provide only a verified alternative contact method.

#### General controls

- Buttons, accordions, tabs, filters, sliders, modals, and other controls work as presented.
- Hover effects have a usable keyboard-focus equivalent.
- Focus does not become trapped outside a modal or dialog.
- Dialogs can be closed in a clear and accessible way.
- No dead buttons, links pointing to `#` without a real purpose, or fake download actions remain.

### Gate 6: Accessibility review

Use semantic HTML and check the following practical requirements:

- Every page has a clear, logical heading hierarchy.
- Main content, navigation, and footer use appropriate landmarks.
- Interactive elements are operable using a keyboard.
- Focus indicators are visible and not removed without replacement.
- Form fields have persistent labels, not placeholder-only labels.
- Error messages identify the affected field and explain how to fix it.
- Informative images have meaningful alternative text.
- Decorative images use empty alternative text when appropriate.
- Videos with meaningful speech or information have captions or an equivalent text alternative where required.
- Text and essential controls have sufficient contrast against their backgrounds.
- Meaning is not communicated by colour alone.
- Links have meaningful names and are distinguishable from surrounding text.
- Motion respects the user's reduced-motion preference.
- Content remains usable when zoomed.
- Mobile controls have comfortable touch areas and enough separation.

Automated accessibility scans may help find issues, but they do not replace keyboard and manual review. Do not claim full WCAG conformance based only on an automated score. Record the standard and scope actually checked if making a conformance statement.

### Gate 7: Performance and media review

Review performance without compromising the intended art direction.

Check:

- Large images are appropriately resized and compressed.
- Modern image formats are used when supported by the project and delivery environment.
- Responsive image sources or sizes are configured appropriately.
- Offscreen images are lazy-loaded where useful.
- The primary hero image or essential first-screen content is not unnecessarily delayed by lazy loading.
- Image dimensions or aspect ratios are reserved to reduce layout shift.
- Videos do not download large files unnecessarily before the user needs them.
- Heavy animation does not cause obvious stutter on ordinary devices.
- Third-party scripts and libraries are justified and limited.
- Fonts are loaded efficiently and do not cause avoidable layout shifts.
- Console errors and failed network requests are investigated.

If Lighthouse or another performance tool is available, run it against a production build. Review the findings, not just the headline score. Record the environment, route, and test mode. Scores vary with device, network, server, and browser conditions.

Use Core Web Vitals as an optimisation guide when real field or lab measurements are available. Do not invent scores or claim a performance target was achieved without a recorded test.

### Gate 8: SEO and social metadata review

For every important route, verify:

- A unique, useful page title exists.
- A meaningful meta description exists.
- The page has one clear primary heading.
- Heading levels are used in a logical order.
- Images have useful alt text where appropriate.
- Links use descriptive text.
- The page is indexable unless there is a clear reason to prevent indexing.
- Social sharing metadata uses accurate titles, descriptions, and image references.
- Canonical URLs are not invented. Add them only when the correct production domain is known.
- Structured data contains only verified information.
- No fake ratings, reviews, addresses, awards, or client information are included in schema markup.
- A sitemap and robots file are generated when appropriate for the framework and release environment.
- The not-found page returns an appropriate not-found status where the framework supports it.

Do not keyword-stuff titles or descriptions. Search metadata should describe the actual page and agency accurately.

### Gate 9: Security and privacy review

Before any release, check:

- No secrets, API keys, passwords, or tokens are committed to the repository.
- Server-only credentials are not exposed to browser bundles.
- Environment variable examples contain placeholder names and fake example values only, never real credentials.
- Form inputs are validated on the server when a backend exists.
- Untrusted content is not inserted into the page unsafely.
- External destinations are validated where user input could influence them.
- Dependencies are not knowingly left with critical vulnerabilities introduced by the project.
- Debug routes and test credentials are not exposed publicly.
- Personal information is not logged unnecessarily.
- Cookies, analytics, tracking, and third-party scripts are not added without owner approval and appropriate disclosure or consent requirements.
- Contact form submissions are sent only to a verified destination configured by the owner.

Do not attempt destructive security tests on production systems. Use safe local or authorised test environments only.

## 4. Recommended test matrix

Use this matrix for the first release. Mark each item as `PASS`, `FAIL`, `BLOCKED`, or `NOT APPLICABLE` and include a note for anything other than `PASS`.

| Area | Test | Expected result |
|---|---|---|
| Build | Production build | Completes without errors |
| Types | Type check, if configured | No newly introduced type errors |
| Lint | Lint command, if configured | No newly introduced lint errors |
| Routes | Open every primary route directly | Correct page renders |
| Refresh | Refresh a nested route | Route remains available |
| Navigation | Follow all primary navigation links | Correct destinations open |
| Mobile menu | Open, close, and navigate | Menu is usable and closes correctly |
| Portfolio | Open every project card | Matching case study opens |
| Concept labels | Review all concept work | Label is clear and consistent |
| Forms | Submit invalid and valid input | Validation and submission states are honest |
| Failure state | Simulate or inspect submission failure | Clear error, no false success |
| Keyboard | Navigate without a mouse | Main journeys remain operable |
| Focus | Inspect interactive controls | Focus is visible |
| Motion | Enable reduced motion | Nonessential motion is reduced or removed |
| Responsive | Inspect specified viewport sizes | No significant overflow or clipping |
| Media | Inspect image and video loading | Assets load, crop, and scale appropriately |
| Console | Inspect browser console | No unexplained project errors |
| Network | Inspect failed requests | No unexplained missing critical assets or endpoints |
| SEO | Inspect page metadata | Accurate title and description per primary route |
| Sharing | Inspect social metadata | Accurate preview content and image |
| Secrets | Scan changed files and repository diff | No real credentials exposed |
| Links | Check internal and external links | No broken or unintended destinations |
| Content | Search for placeholder text | No placeholders in primary experience |
| Integrity | Review client claims and metrics | No fabricated proof or unlabelled concept work |

## 5. Deployment preparation

Deployment is a separate action from local development. The agent may prepare the project for deployment, but must not publish it or change a live service without explicit owner approval.

### 5.1 Pre-deployment checklist

Before requesting approval:

- Confirm that the intended production branch and repository are known.
- Confirm the expected production domain, if one exists.
- Confirm the selected hosting provider and project are correct.
- Confirm required environment variable names and which environment needs each value.
- Confirm that no secret values are stored in source files or committed configuration.
- Confirm that the production build succeeds locally or in the approved CI environment.
- Confirm that required form, email, database, analytics, or other integrations are configured and tested, if applicable.
- Confirm that all links, contact details, team details, and portfolio labels are approved.
- Confirm that asset licences and usage permissions are sufficient for publication.
- Confirm that privacy policy, cookie disclosure, or other legal content is supplied where relevant. Do not invent legal advice or publish placeholder policies.
- Confirm that the owner understands what will become public.
- Prepare a concise deployment plan and rollback approach.

If a required service is not configured, clearly identify it as a pre-release task. Do not create fake credentials or dummy integrations to make the checklist appear complete.

### 5.2 Owner approval required

Obtain explicit approval before:

- Creating or changing a live deployment.
- Connecting the production domain or changing DNS.
- Replacing an existing live website.
- Changing production environment variables.
- Connecting live form delivery, analytics, advertising, payment, CRM, or email systems.
- Publishing public content that has not been approved.
- Purchasing a hosting plan, domain, asset, font, or subscription.

A previous instruction to build the website autonomously does not automatically authorise these external or public actions.

### 5.3 Deployment procedure after approval

When approval and all required configuration are available:

1. Confirm the target project, branch, domain, and environment.
2. Confirm the repository state and preserve a recovery point where the platform supports it.
3. Run the production build and relevant checks again against the final code.
4. Deploy to the approved preview or production target.
5. Wait for the hosting platform to report the deployment result. Do not assume success from a command being issued.
6. Open the deployed URL and test the homepage, primary routes, navigation, case studies, forms, media, and responsive layouts.
7. Inspect runtime errors, failed requests, and redirects.
8. Verify the production domain and HTTPS where applicable.
9. Record the deployment URL, timestamp, environment, commit or revision, and verification results.
10. If a release causes a critical issue, follow the platform's rollback procedure and notify the owner. Do not improvise destructive changes.

If deployment fails, report the actual error and keep the last known working deployment intact wherever possible.

## 6. Rollback and recovery

Before a high-impact change:

- Understand how the repository and hosting platform recover previous versions.
- Preserve user changes and existing configuration.
- Avoid destructive migrations or data changes unless explicitly approved and planned.
- Keep a record of the commit or revision associated with a deployment.

If a release breaks a primary user journey:

1. Confirm and reproduce the issue.
2. Determine whether it is caused by the latest release.
3. Prefer the hosting platform's known rollback mechanism when appropriate and authorised.
4. Verify that the recovered version works.
5. Document the issue, impact, action taken, and remaining risk.

Do not delete production data or rewrite history to conceal a failure.

## 7. First-release acceptance criteria

The 6FOLIO website may be marked **Ready for owner review** when all of the following are true:

- The full intended first-release page structure exists.
- The six service pillars are represented consistently.
- The central story, **Six perspectives. One clear direction.**, is understandable through the actual website.
- The team is represented accurately using confirmed information only.
- Portfolio index and case-study pages are complete.
- Every concept project is clearly labelled.
- No fabricated testimonials, awards, client logos, credentials, or performance metrics appear.
- Primary navigation and all visible controls have been tested.
- Forms behave honestly and do not display false success states.
- Responsive layouts have been reviewed at the required viewport sizes.
- Keyboard use, visible focus, form labels, and reduced-motion behaviour have been reviewed.
- Primary images and videos load correctly and follow the asset guidelines.
- Each primary route has accurate metadata.
- No critical console or build errors remain.
- No obvious broken links, missing critical assets, or placeholder content remain.
- Available lint, type, test, and build checks have been run and their results recorded.
- Known limitations and manual owner actions are documented.

Use **Ready for owner review**, not **Launched** or **Live**, when the website has only been built and checked locally.

A website may be marked **Ready for deployment approval** only when the pre-deployment checklist is complete and the owner has been told exactly what action will publish or change.

A website may be marked **Deployed and verified** only after an approved deployment succeeds and the live URL has been tested.

## 8. Required handover report

At the end of the build, create or update a concise handover report in the repository, for example `BUILD_REPORT.md`.

Include these sections:

### Project status

- Status: `In progress`, `Ready for owner review`, `Ready for deployment approval`, or `Deployed and verified`.
- Date of the report.
- Repository branch and revision, when available.

### What was completed

Summarise the implemented pages, shared components, interactions, visual systems, and content integration.

### Verification results

| Check | Status | Command or method | Notes |
|---|---|---|---|
| Lint | PASS / FAIL / BLOCKED / N/A | Actual command | Result |
| Type check | PASS / FAIL / BLOCKED / N/A | Actual command | Result |
| Tests | PASS / FAIL / BLOCKED / N/A | Actual command | Result |
| Production build | PASS / FAIL / BLOCKED / N/A | Actual command | Result |
| Route review | PASS / FAIL / BLOCKED / N/A | Actual method | Result |
| Responsive review | PASS / FAIL / BLOCKED / N/A | Actual viewport sizes | Result |
| Accessibility review | PASS / FAIL / BLOCKED / N/A | Actual method | Result |
| Performance review | PASS / FAIL / BLOCKED / N/A | Actual method | Result |
| SEO review | PASS / FAIL / BLOCKED / N/A | Actual method | Result |
| Interaction review | PASS / FAIL / BLOCKED / N/A | Actual method | Result |

Do not mark a check as passed if it was not run. Use `BLOCKED` or `N/A` with an explanation.

### Known issues

List unresolved bugs, visual limitations, missing assets, unconfigured integrations, and unverified behaviours. Identify their severity and likely next step.

### Owner actions

List only actions that genuinely require the owner, such as:

- Confirming real team names, biographies, and photographs.
- Approving portfolio concepts and final copy.
- Supplying a real enquiry email or business contact method.
- Providing approved licensed assets.
- Supplying integration credentials through a secure method.
- Approving a domain, hosting project, or production deployment.

Never request that the owner paste private credentials into a public source file or commit them to the repository.

## 9. Final release checklist

Use this checklist before handover:

- [ ] Repository inspected and existing user work preserved.
- [ ] All available project instruction files read.
- [ ] Primary routes load directly and refresh correctly.
- [ ] Homepage story is clear and specific to 6FOLIO.
- [ ] All six service pillars are represented accurately.
- [ ] About and team content uses confirmed information only.
- [ ] Portfolio index and case-study pages are complete.
- [ ] Concept work is clearly labelled at every relevant point.
- [ ] No fabricated client proof, awards, testimonials, or metrics.
- [ ] All visible controls and links tested.
- [ ] Forms tested for invalid input and failure states.
- [ ] No false form success state.
- [ ] Desktop, tablet, and mobile layouts reviewed.
- [ ] Keyboard navigation and focus reviewed.
- [ ] Reduced-motion behaviour reviewed.
- [ ] Image and video handling reviewed.
- [ ] Page titles, descriptions, and sharing metadata reviewed.
- [ ] No known secret or credential exposure.
- [ ] No unexplained critical console errors or failed requests.
- [ ] Lint, type, tests, and build commands run where available.
- [ ] All test results and limitations recorded.
- [ ] `BUILD_REPORT.md` created or updated.
- [ ] No live deployment or external account change made without approval.

---

## 10. The standard to remember

The goal is not to make 6FOLIO look like an agency that has already won awards. The goal is to build a website that communicates its thinking, shows its craft, treats prospective clients honestly, and gives the team a strong foundation for real work.

Do not confuse a visually impressive screenshot with a finished website. The release is complete only when the whole experience has been built, tested, reviewed, and handed over transparently.
