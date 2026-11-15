export const uiLabels = {
  skillsContent: {
    angularExpertise: {
      title: 'Angular en production',
      description:
        'Développement Angular en production : composants, RxJS, NgRx, Signals, performance et state management.',
    },
    saasEngineering: {
      title: 'SaaS Engineering',
      description:
        'Architecture frontend, APIs, temps réel, CI/CD, monitoring et tests pour des produits B2B maintenables.',
    },
    productEngineering: {
      title: 'Product Engineering',
      description:
        'Capacité à transformer un problème métier en MVP, valider avec les utilisateurs et porter une feature de bout en bout.',
    },
  },
  site: {
    title: 'Bakate Idrissa Ba | Software Engineer Full-Stack TypeScript',
    description:
      'Portfolio de Bakate Idrissa Ba, Software Engineer Full-Stack TypeScript : produits SaaS de bout en bout, domaine métier isolé et testé (DDD, architecture hexagonale, TDD).',
  },
  nav: {
    home: 'Accueil',
    blog: 'Blog',
    contact: 'Contact',
    projects: 'Projets',
    tips: 'Astuces',
    experience: 'Expérience',
  },
  footer: {
    rights: 'Tous droits réservés.',
  },
  experiencePage: {
    pageTitle: 'Expérience | Bakate Idrissa',
    pageDescription:
      'Parcours de Bakate Idrissa, Software Engineer Full-Stack TypeScript : leZèbre Tech, fondateur de Teranga Pulse, 4 ans chez Bloomflow.',
    pageHeading: 'Parcours professionnel',
    stackLabel: 'Stack',
    seekingLabel: "À l'écoute de nouvelles opportunités.",
    downloadCV: 'Télécharger mon CV',
    entries: [
      {
        company: 'leZèbre Tech',
        role: 'Software Engineer',
        period: 'Juillet 2026 – octobre 2026',
        location: 'Antony',
        summary: 'Services backend NestJS en architecture hexagonale et DDD.',
        highlights: [
          "Domaine métier isolé de l'infrastructure par des ports et adaptateurs, pour un code testable et maintenable.",
          "TDD au quotidien et tests d'acceptation Gherkin pour aligner produit et technique sur le comportement attendu.",
          'Revues de code et accompagnement des développeurs juniors.',
          'Spécifications assistées par LLM et Linear ; livraisons incrémentales.',
        ],
        technologies: [
          'NestJS',
          'TypeScript',
          'Node.js',
          'DDD',
          'Architecture hexagonale',
          'TDD',
          'Gherkin',
        ],
      },
      {
        company: 'Teranga Pulse',
        role: 'Fondateur et Software Engineer Full-Stack',
        period: 'Novembre 2024 – juin 2026',
        location: 'Paris / Dakar',
        summary: "Deux MVP livrés en solo, de l'architecture à la production.",
        highlights: [
          'Parent Up (coparentalité) : Next.js et TypeScript en monorepo Turborepo, backend temps réel Convex, messagerie sécurisée, synchronisation Google Calendar, documents à accès restreint et assistant juridique IA (RAG, embeddings, Vercel AI SDK, OpenAI).',
          'Terral Hub (logistique agricole, Sénégal) : plateforme reliant agriculteurs, entrepôts et transporteurs, avec réservation, suivi des capacités en temps réel, paiements PayDunya et PWA offline-first pour les zones à faible connectivité.',
          'UI en Tailwind et shadcn/ui, formulaires React Hook Form + Zod ; webhooks signés et idempotents (Clerk, Convex) ; tests Vitest, CI/CD GitHub Actions, Sentry.',
        ],
        technologies: [
          'Next.js',
          'TypeScript',
          'Convex',
          'Turborepo',
          'Clerk',
          'Vercel AI SDK',
          'OpenAI',
          'Tailwind CSS',
          'Vitest',
          'GitHub Actions',
          'Sentry',
        ],
      },
      {
        company: 'Bloomflow',
        companyUrl: 'https://www.bloomflow.com/',
        role: 'Software Engineer Full-Stack',
        period: 'Novembre 2020 – novembre 2024',
        location: 'Paris',
        summary: "SaaS B2B d'open innovation pour grands groupes, 4 ans.",
        highlights: [
          'Écrans métier complexes à gros volumes de données pour des grands comptes (Bayer, Unilever, HSBC, Orange, Chanel), en Angular puis en React / Next.js.',
          "Refonte du chargement du module analytique : chaque graphique et carte s'affiche dès qu'il est prêt, temps de chargement ramené de 7-8 s à moins de 2 s.",
          'Outils internes TypeScript / Node.js : une tâche de 2 jours ramenée à quelques clics dans le back-office (Next.js).',
          "Conception d'un design system et d'une librairie UI interne partagés entre les équipes produit.",
          "Contribution à la mise en place d'un store NgRx côté front pour centraliser l'état et éviter les requêtes inutiles.",
          'Tests Jest et Testing Library en CI ; environnement Kubernetes, instances clients sur AWS, OVH et Azure.',
          'Astreinte mensuelle « Houston » : bugs de production, priorisation avec le PM, correctifs, mise en production et brief du Customer Success.',
        ],
        technologies: [
          'Angular',
          'NgRx',
          'React',
          'Next.js',
          'TypeScript',
          'Node.js',
          'Express',
          'MongoDB',
          'PostgreSQL',
          'Jest',
          'Storybook',
          'Kubernetes',
        ],
      },
    ],
  },
  homePage: {
    pageTitle: 'Bakate Idrissa Ba | Software Engineer Full-Stack TypeScript',
    pageDescription:
      'Bakate Idrissa Ba, Software Engineer Full-Stack TypeScript : je conçois des produits SaaS de bout en bout, avec un domaine métier isolé et testé (DDD, architecture hexagonale, TDD), des interfaces Next.js et Angular, et l’IA là où elle sert vraiment.',
    heroPitch:
      "Je conçois des produits SaaS de bout en bout : un domaine métier isolé et testé (DDD, architecture hexagonale, TDD), quel que soit le framework (NestJS, Express…), des interfaces Next.js et Angular, et l'IA là où elle sert vraiment.",
    heroAvailability: 'Disponible · Hybride Île-de-France / remote',
    heroBookCallButton: 'Réserver 15 min',
    heroDownloadCvButton: 'Télécharger mon CV',
    heroImageAlt:
      'Illustration représentant Bakate ou un concept de développement',
    featuredProjectsTitle: 'Projets SaaS principaux',
    featuredProjectsDescription:
      'Des produits SaaS livrés en production, de la conception au déploiement.',
    projectCardViewProject: 'Voir le projet',
    projectCardViewCode: 'Voir le code',
    imageNotAvailable: 'Image bientôt disponible',
    bloomflowTitle: '4 ans sur un SaaS B2B utilisé par des groupes du CAC40',
    bloomflowDescription:
      "Chez Bloomflow, j'ai contribué à une plateforme Angular complexe pour l'open innovation : modules critiques, design system, industrialisation frontend et migration TypeScript.",
    bloomflowCta: 'Voir mon expérience',
    mySkillsTitle: 'Compétences clés',
    mySkillsDescription:
      'Un domaine métier isolé et testé, des interfaces solides, et un produit livré de bout en bout.',
  },
  blogPage: {
    pageTitle: 'Blog Angular, RxJS et Architecture Frontend',
    pageDescription:
      'Articles sur Angular, RxJS, Architecture Frontend, SaaS Engineering, TypeScript et développement web.',
    title: 'Blog Angular & SaaS Engineering',
    description:
      'Retours techniques sur Angular, RxJS, architecture frontend et construction de produits SaaS.',
    angularArticlesTitle: 'Articles Angular',
    angularArticlesDescription:
      'Les contenus Angular, RxJS, Architecture Frontend et SaaS Engineering passent en premier.',
    featuredArticlesTitle: 'Featured Articles',
    allArticlesTitle: 'Tous les articles',
    comingSoon:
      'Les articles de blog apparaîtront ici bientôt. Revenez plus tard !',
    heroImageAlt: "Image de couverture pour l'article : ",
    publishedOn: 'Publié le : ',
    readMore: 'Lire la suite',
    readingTimeSuffix: 'min de lecture',
    searchPlaceholder: 'Rechercher des articles...',
    filterByTagButtonLabel: 'Filtrer par tag',
    noTagFound: 'Aucun tag trouvé.',
    selectTagCommandPlaceholder: 'Rechercher un tag...',
    allTagsLabel: 'Tous les tags',
    noPostsFound: 'Aucun article trouvé.',
  },
  blogPost: {
    publishedOn: 'Publié le : ',
    updatedOn: 'Mis à jour le : ',
    heroImageAlt: "Image de couverture pour l'article : ",
    backToList: 'Retour à la liste des articles',
    readingTimeSuffix: 'min de lecture',
    relatedPostsTitle: 'Je te recommande aussi :',
    readMore: 'Lire la suite',
    editOnGithub: 'Proposer une modification sur GitHub',
    tableOfContents: 'Table des matières',
  },
  toc: {
    title: "Sommaire de l'article",
  },
  contactPage: {
    pageTitle: 'Contact | Bakate Idrissa',
    pageDescription:
      'Réserver un appel de 15 minutes ou écrire à Bakate Idrissa, Software Engineer Full-Stack TypeScript. Disponible aussi en mission freelance.',
    title: 'Me contacter',
    description:
      'Un poste, un projet ou une question technique : le plus simple est de réserver 15 minutes. Tu préfères écrire ? Le formulaire est juste en dessous.',
    freelanceLine: 'Disponible aussi en mission freelance.',
    bookingTitle: 'Réserver un appel',
    bookingDescription: "15 minutes en visio, à l'horaire qui t'arrange.",
    bookingLinkLabel: 'Réserver 15 min',
    formHeading: "M'écrire",
    responseTime: 'Réponse sous 24 h.',
    elsewhereLabel: 'Aussi sur',
    linkedInLabel: 'LinkedIn',
    githubLabel: 'GitHub',

    firstNameLabel: 'Prénom',
    lastNameLabel: 'Nom',
    emailLabel: 'Email',
    companyLabel: 'Société (optionnel)',
    messageLabel: 'Message',
    sendButtonLabel: 'Envoyer',
    firstNamePlaceholder: 'Ton prénom',
    lastNamePlaceholder: 'Ton nom de famille',
    emailPlaceholder: 'Ton adresse e-mail',
    companyPlaceholder: 'Le nom de ton entreprise',
    messagePlaceholder: 'Ton message ici...',
    toastSuccessMessageSent: 'Message envoyé avec succès !',
    toastErrorFailedToSend: "Échec de l'envoi du message.",
    toastErrorUnexpected: "Une erreur inattendue s'est produite.",
    toastErrorDetails: "Détails de l'erreur:",
    toastErrorValidationFailed: 'Validation du formulaire échouée.',
  },
  projectDetailPage: {
    backToProjects: 'Retour aux Projets',
    categoryLabel: 'Catégorie :',
    dateLabel: 'Date :',
    aboutTitle: 'À propos de ce projet',
    keyFeaturesTitle: 'Fonctionnalités Clés',
    galleryTitle: 'Galerie',
    challengesTitle: 'Défis Rencontrés',
    learningsTitle: 'Leçons Apprises',
    visitProjectButton: 'Visiter le Projet',
    viewCodeButton: 'Voir le Code',
  },
  projectsPage: {
    title: 'Projets SaaS',
    metaTitle: 'Projets SaaS Full-Stack TypeScript | Bakate Idrissa Ba',
    metaDescription:
      'Parent Up, Bloomflow et Terral Hub : projets SaaS B2B, Full-Stack TypeScript et architecture produit.',
    featuredTitle: 'Projets mis en avant',
    featuredDescription:
      'Les trois preuves les plus cohérentes avec mon positionnement Full-Stack TypeScript et SaaS B2B.',
    archivesTitle: 'Autres projets',
    archivesDescription:
      'Archives et projets secondaires, utiles pour montrer la polyvalence FullStack sans diluer le message principal.',
    noProjects: 'Aucun projet à afficher pour le moment.',
    noProjectsDescription:
      "Il semble que tu n'aies pas encore de projets à afficher.",
  },
  notFoundPage: {
    pageTitle: 'Page introuvable | Bakate Idrissa',
    title: 'Page introuvable',
    message:
      'Cette adresse ne mène à aucune page. Elle a peut-être changé, ou contient une faute de frappe.',
    homeLink: "Retour à l'accueil",
  },

  tipsPage: {
    metaTitle: 'Astuces de Développement | Bakate Ba',
    metaDescription:
      'Découvrez des astuces et conseils rapides sur le développement web et la cloud computing.',
    description:
      'Découvrez des astuces et conseils rapides sur le développement web et la cloud computing.',
    title: 'Nos Dernières Astuces',
    noTips: 'Aucune astuce à afficher pour le moment.',
    readTip: "Lire l'astuce",
    backToList: 'Retour à la liste des astuces',
    featuredTips: 'Astuces recommandées',
    allTips: 'Toutes les astuces',
    tipsAvailable: 'astuces disponibles',
    tipAvailable: 'astuce disponible',
    editOnGithub: 'Modifier sur GitHub',
    readingTimeSuffix: 'min de lecture',
    updatedOn: 'Mis à jour le :',
    difficultyBeginner: 'Débutant',
    difficultyIntermediate: 'Intermédiaire',
    difficultyAdvanced: 'Avancé',
    allDifficulties: 'Toutes les difficultés',
    filterByDifficultyLabel: 'Filtrer par difficulté',
    difficultyLevel: 'Niveau',
    searchPlaceholder: 'Rechercher une astuce...',
    allTagsLabel: 'Tous les tags',
    filterByTagButtonLabel: 'Filtrer par tag',
    noTagFound: 'Aucun tag trouvé.',
    selectTagCommandPlaceholder: 'Rechercher un tag...',
    noTipsFound: 'Aucune astuce trouvée.',
  },
  zodErrors: {
    // Common errors
    invalid_type: 'Type invalide.',
    invalid_type_received_undefined: 'Ce champ est requis.', // For required fields (fallback)
    required_field_custom: '{fieldName} est requis.',
    // String errors
    too_small_string_minimum:
      '{fieldName} doit contenir au moins {minimum} caractère(s:minimum).',
    too_big_string_maximum: 'Ne doit pas dépasser {maximum} caractères.',
    invalid_string_email: 'Adresse e-mail invalide.',
    invalid_string_url: 'URL invalide.',
    invalid_string_uuid: 'UUID invalide.',
    // You can add more specific messages as needed
  },
} as const;
