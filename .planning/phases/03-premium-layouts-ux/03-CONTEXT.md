# Phase 3 Context: Premium Layouts & UX Articles

## Decisions
- **Syntax Highlighting**: Switch to Shiki with dual theme support (Dark/Light). Use `github-dark` and `github-light` or similar clear themes.
- **Table of Contents (TOC)**: Sticky sidebar on desktop. Implement Intersection Observer for active heading tracking.
- **Layout Architecture**: 
  - Blog & Tips will share a common layout pattern: Content (Center) + TOC (Sidebar).
  - Max width for article body to optimize readability (65-75ch).
- **Interactions**: Add a "Copy" button to all code blocks.

## Technical Constraints
- Use Astro's built-in Shiki support.
- Handle TOC purely in a client-side friendly way (Intersection Observer in a `<script>` tag).
- Ensure Tailwind 4 is used for the sticky positioning and responsive layout.

## Success Criteria
- Code blocks adapt to theme switcher.
- TOC highlights the current section as the user scrolls.
- Article layout feels "premium" and spacious on desktop.
- Copy button works and provides visual feedback.
