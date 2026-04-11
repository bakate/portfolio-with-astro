# Phase 01: Foundation & SEO - Plan

**Status:** Ready to execute
**Wave:** 1
**Autonomous:** true

## 1. Context & Scope
- **Goal**: Implement high-quality SEO meta tags, automatic reading time, and internationalization base for articles.
- **Decision Source**: [01-CONTEXT.md](file://src/.planning/phases/01-foundation-seo/01-CONTEXT.md)
- **Design Source**: [01-UI-SPEC.md](file://src/.planning/phases/01-foundation-seo/01-UI-SPEC.md)

## 2. Technical Stack Changes
- Add `reading-time` (3.7.1)
- Add `mdast-util-to-string` (5.0.0)

## 3. Implementation Tasks

### Wave 1: Infrastructure & Data
1. [ ] **Dependencies**: Install required packages.
   <task>
   <read_first>package.json</read_first>
   <action>bun add reading-time mdast-util-to-string</action>
   <acceptance_criteria>package.json contains reading-time and mdast-util-to-string</acceptance_criteria>
   </task>

2. [ ] **Astro Config**: Add Remark plugin for reading time.
   <task>
   <read_first>astro.config.mjs</read_first>
   <action>
   Implémenter le plugin remark dans `astro.config.mjs` qui calcule le temps de lecture et l'ajoute au frontmatter (data).
   Code : 
   ```javascript
   import { toString } from 'mdast-util-to-string';
   import getReadingTime from 'reading-time';

   export function remarkReadingTime() {
     return function (tree, { data }) {
       const textOnPage = toString(tree);
       const readingTime = getReadingTime(textOnPage);
       data.astro.frontmatter.readingTime = readingTime.text;
     };
   }
   ```
   </action>
   <acceptance_criteria>astro.config.mjs contains remarkReadingTime and is used in markdown configuration</acceptance_criteria>
   </task>

3. [ ] **Content Schema**: Update config for mandatory fields.
   <task>
   <read_first>src/content/config.ts</read_first>
   <action>
   Mettre à jour `src/content/config.ts` pour rendre `description` obligatoire dans les collections `blog` et `tips`.
   Ajouter un champ `image` optionnel (z.string().optional()).
   </action>
   <acceptance_criteria>src/content/config.ts schema for blog/tips has mandatory description and optional image</acceptance_criteria>
   <requirements>REQ-01, REQ-02</requirements>
   </task>

### Wave 2: Layout & UI
4. [ ] **Layout Update**: Meta Tags & I18n SEO.
   <task>
   <read_first>src/layouts/BaseLayout.astro</read_first>
   <action>
   Mettre à jour `BaseLayout.astro` pour :
   1. Générer dynamiquement les balises `og:title`, `og:description`, `og:image`, `og:type` (article si blog/tips).
   2. Générer les balises `<link rel="alternate" hreflang="..." />` pour toutes les langues supportées.
   3. Utiliser les fallbacks i18n depuis `ui.ts` pour le titre/desc global.
   </action>
   <acceptance_criteria>BaseLayout.astro renders OG tags and alternate hreflang tags</acceptance_criteria>
   <requirements>SEO-01, SEO-02</requirements>
   </task>

5. [ ] **Reading Time Component**: Display UI.
   <task>
   <read_first>src/layouts/BaseLayout.astro</read_first>
   <action>
   Créer `src/components/ReadingTime.astro` qui affiche le temps de lecture formaté avec un emoji café ☕.
   Mettre à jour les écrans d'articles personnels pour l'intégrer.
   </action>
   <acceptance_criteria>ReadingTime component exists and is used in article layouts</acceptance_criteria>
   <requirements>BLOG-03</requirements>
   </task>

## 4. Verification Plan

### Automated Checks
- [ ] `npm run build` passes with content validation.
- [ ] Check rendered source for `og:image` and `hreflang`.

### Manual UAT
- [ ] Share a blog post link to LinkedIn/Twitter preview tool.
- [ ] Verify "X min read" text appears on articles.

---
*Plan created: 2026-04-11*
