# Requirements: Blog & Tips Optimization

## v1 Requirements

### Blog Excellence
- [ ] **BLOG-01**: Le système doit générer automatiquement une table des matières (ToC) à partir des titres (H2, H3) de l'article.
- [ ] **BLOG-02**: Le layout des articles doit utiliser une typographie premium (optimisation des interlignes, choix de polices variables type Inter/Mona Sans).
- [ ] **BLOG-03**: Chaque article doit afficher un temps de lecture estimé automatique.
- [ ] **BLOG-04**: Mise en place d'une navigation "sticky" pour la ToC sur desktop.

### Tips & Snippets
- [ ] **TIPS-01**: Créer une distinction visuelle et structurelle claire entre les articles de fond (Blog) et les astuces rapides (Tips).
- [ ] **TIPS-02**: Les Tips doivent être filtrables par technologie (tags).

### Code Experience
- [ ] **CODE-01**: Intégration de Shiki pour une coloration syntaxique de haute qualité avec support du bouton "Copy".
- [ ] **CODE-02**: Création d'un composant MDX réutilisable pour intégrer des CodeSandbox de manière performante (lazy-loading).

### SEO & Social
- [ ] **SEO-01**: Les pages d'articles doivent avoir des Meta Tags dynamiques (title, description) basés sur le frontmatter.
- [ ] **SEO-02**: Support de base pour les images OpenGraph (images par défaut ou spécifiques par article).

## v2 Requirements (Deferred)
- **BLOG-05**: Recherche plein texte dans le blog.
- **BLOG-06**: Refactoring de la structure i18n (`ui.ts`).
- **SEO-03**: Génération automatique d'images OG dynamiques via Satori.

## Out of Scope
- Gestion des commentaires (trop de maintenance).
- Intégration de newsletters.

---
*Requirements defined: 2026-04-11*
