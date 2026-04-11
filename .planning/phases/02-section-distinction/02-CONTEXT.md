# Phase 2 Context: Section Distinction

## Decisions
- **Tips Layout**: Compact Feed (Option A). Tips will be displayed as rows or small list items, contrasting with the Blog's rich cards.
- **Filtering**: Add a difficulty filter (Beginner, Intermediate, Advanced) to the Tips list.
- **Navigation**: No quick toggle between Blog and Tips sections.
- **Cross-pollination**: No related tips in blog posts (and vice-versa).

## Technical Constraints
- Keep it performant (client-side filtering with NanoStores or simple React state).
- Use Tailwind 4 for the compact feed design.
- Maintain internationalization (fr/en).

## Domain Boundary
- This phase only affects the LIST views of Blog and Tips, and the specific layout of Tips cards.
- No changes to individual article content layout (reserved for Phase 3/4).

## Success Criteria
- Tips page looks distinctly different from the Blog (Compact List vs Rich Grid).
- User can filter Tips by difficulty level.
- Multi-language support for filter labels.
