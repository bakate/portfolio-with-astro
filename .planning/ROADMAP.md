# Roadmap: Portfolio Optimization

## Phases

| # | Phase | Goal | Requirements | Status |
|---|-------|------|--------------|--------|
| 1 | **Foundation & SEO** | Mettre en place les bases techniques et SEO. | SEO-01, SEO-02, BLOG-03 | ⏳ Pending |
| 2 | **Section Distinction** | Séparer proprement Blog et Tips. | TIPS-01, TIPS-02 | ⏳ Pending |
| 3 | **Premium Layouts** | Définir l'identité visuelle et la typographie. | BLOG-02, BLOG-04 | ⏳ Pending |
| 4 | **The Developer Experience** | Coloration syntaxique et navigation interne. | CODE-01, BLOG-01 | ⏳ Pending |
| 5 | **Interactive Concepts** | Intégration CodeSandbox et polissage. | CODE-02 | ⏳ Pending |

## Phase Details

### Phase 1: Foundation & SEO
**Goal**: Assurer que chaque article est "partageable" et dispose des métadonnées de base.
- Mise à jour du layout de base pour les Meta Tags dynamiques.
- Intégration de `reading-time` dans le pipeline de contenu Astro.
- Validation des balises OpenGraph.
**Success Criteria**:
- Les articles affichent le temps de lecture.
- Les previews LinkedIn/Twitter fonctionnent avec le titre/desc de l'article.

### Phase 2: Section Distinction
**Goal**: Clarifier la navigation entre articles longs et astuces courtes.
- Création de routes ou filtres distincts pour "Blog" et "Tips".
- Mise en avant visuelle différente (ex: liste simple pour Tips, cartes riches pour Blog).
**Success Criteria**:
- Un utilisateur peut filtrer les Tips par tag.
- La distinction visuelle est immédiate en arrivant sur la liste.

### Phase 3: Premium Layouts
**Goal**: Offrir une expérience de lecture de haut niveau.
- Intégration de polices variables (ex: Mona Sans, Inter).
- Optimisation des espacements (Tailwind 4) pour la lisibilité.
- Design de la sidebar sticky pour la navigation.
**Success Criteria**:
- Score Lighthouse "Best Practices" > 90.
- La lecture sur mobile est fluide et aérée.

### Phase 4: The Developer Experience
**Goal**: Rendre le code agréable à lire et à copier.
- Passage à Shiki pour la coloration syntaxique.
- Ajout du bouton "Copy" sur les blocs de code.
- Implémentation de la ToC automatique avec Intersection Observer.
**Success Criteria**:
- La ToC surligne la section active lors du scroll.
- Le bouton Copy fonctionne sans erreur.

### Phase 5: Interactive Concepts
**Goal**: Permettre l'expérimentation directe.
- Création du composant MDX `CodeSandbox`.
- Gestion du lazy-loading pour ne pas pénaliser le chargement.
- Revue finale d'accessibilité.
**Success Criteria**:
- Un article avec embed CodeSandbox ne ralentit pas le scroll initial.

---
*Roadmap created: 2026-04-11*
