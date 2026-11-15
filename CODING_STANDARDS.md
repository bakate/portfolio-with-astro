# Coding standards

Rules for writing code in this repository, for humans and agents alike. `AGENTS.md` covers the stack, commands and layout; this file covers how to write.

## Tests are behaviour scenarios

Every test is a scenario a Product Manager could read to confirm a behaviour, so that code can change entirely while its tests stay.

The only test level is Playwright end-to-end, in `tests/e2e/`, run against the built site (`pnpm test:e2e`).

A repository script (such as `scripts/check-external-links.mjs`) is tested the same way, as a black box: its scenarios hand it a built site and read back what its user sees (its report and exit code), through its own `create<Script>UnderTest` helper in `tests/e2e/support/`. Third-party sites are played by local stand-in servers, so the PR suite never depends on the internet.

- **What it observes.** A test goes through the built site and reads what a visitor or a crawler sees: the pages, their visible text, links and metadata, the HTTP responses, the files served. It imports no component, calls no function from `src/`, and reads no CSS class. It finds elements by role, accessible name or visible text; a section is reached through its stable anchor (`#hero`), which is part of the page's public surface.
- **Its name.** A `Given …, when …, then …` sentence in the words of `GLOSSARY.md` (once it exists) and of the site itself (visitor, page, hero, project, CV, booking page), legible in the runner's output.
- **Its body.** Given builders, one action, then checks, all helpers of `createSystemUnderTest` in `tests/e2e/support/system-under-test.ts`. Selectors, requests, crawling, parsing and assertions stay in those helpers; the body reads as the scenario.
- **Its value.** It goes red when the behaviour it names breaks. Expected values are written out (texts, URLs, file names), not worked out as the code does: a test does not import strings or constants from `src/`. Importing a type is fine, for example `satisfies Record<LanguageCode, …>`, which makes the compiler demand a scenario for every locale. A scenario on a file the site serves (a CV, the share image) requests the real file.

This rule overrides any general guideline to share constants between production code and tests.
