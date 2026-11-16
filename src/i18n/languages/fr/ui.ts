export const uiLabels = {
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
    heroImageAlt: 'Portrait de Bakate Idrissa, souriant',
    proofTitle: 'En production, en chiffres',
    proofLoadTimeFigure: '7-8 s → moins de 2 s',
    proofLoadTimeContext: 'Chargement du module analytique chez Bloomflow',
    proofBackOfficeFigure: '2 jours → quelques clics',
    proofBackOfficeContext: 'Outil interne de back-office',
    proofExperienceFigure: '5 ans',
    proofExperienceContext:
      'de SaaS en production, dont 4 ans chez Bloomflow pour Bayer, Unilever, HSBC',
    featuredProjectsTitle: 'Projets phares',
    featuredProjectsDescription:
      'Des produits livrés de bout en bout, avec un domaine métier isolé et testé.',
    experience: {
      title: 'Expérience',
      description:
        'Plus de cinq ans à livrer des produits SaaS, du domaine métier à la production.',
      cta: 'Voir tout mon parcours',
      entries: [
        {
          company: 'leZèbre Tech',
          role: 'Software Engineer',
          period: 'Juillet 2026 – octobre 2026',
          summary:
            "Services backend NestJS en architecture hexagonale et DDD, TDD au quotidien, tests d'acceptation Gherkin, revues de code et accompagnement des développeurs juniors.",
        },
        {
          company: 'Teranga Pulse',
          role: 'Fondateur et Software Engineer Full-Stack',
          period: 'Novembre 2024 – juin 2026',
          summary:
            "Deux MVP livrés seul, de l'architecture à la production : Parent Up, plateforme de coparentalité avec un assistant juridique IA, et Terral Hub, logistique agricole au Sénégal.",
        },
        {
          company: 'Bloomflow',
          role: 'Software Engineer Full-Stack',
          period: 'Novembre 2020 – novembre 2024',
          summary:
            "4 ans sur un SaaS B2B d'open innovation : écrans métier à gros volumes de données pour Bayer, Unilever et HSBC, en Angular puis en React et Next.js.",
        },
      ],
    },
    howIWork: {
      title: 'Comment je travaille',
      description:
        "Une méthode qui ne dépend pas du framework : le métier d'abord, prouvé par les tests.",
      practices: [
        {
          title: 'DDD et architecture hexagonale',
          description:
            "Le domaine métier vit à l'écart de l'infrastructure, derrière des ports et des adaptateurs. Il se teste sans base de données et ne dépend pas du framework, NestJS comme Express.",
        },
        {
          title: "TDD et tests d'acceptation Gherkin",
          description:
            "J'écris le test avant le code. Les scénarios Gherkin décrivent le comportement attendu dans les mots du produit, pour que produit et technique s'accordent avant la première ligne.",
        },
        {
          title: "L'IA là où elle sert",
          description:
            "RAG et embeddings en production, avec l'assistant juridique de Parent Up, et des spécifications assistées par LLM avant d'écrire le code.",
        },
      ],
      careerChangeTitle: 'Avant le code, la vente',
      careerChange:
        "J'ai passé 10 ans dans la vente avant de me reconvertir au développement en 2020. J'en garde le sens du produit et la relation client : je comprends le problème avant de choisir la solution, et je parle aussi bien aux équipes métier qu'aux développeurs.",
    },
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
    videoTitle: 'Vidéo de présentation',
    contextTitle: 'Contexte',
    problemTitle: 'Problème',
    architectureTitle: 'Décisions d’architecture',
    outcomeTitle: 'Résultat',
    caseStudyLearningsTitle: 'Enseignements',
    diagramName: 'Architecture de {project}',
  },
  projectsPage: {
    title: 'Projets',
    metaTitle: 'Projets Full-Stack TypeScript | Bakate Idrissa Ba',
    metaDescription:
      'Resume Studio, Parent Up, Terral Hub et Avionics : des produits livrés de bout en bout, avec un domaine métier isolé et testé.',
    featuredTitle: 'Projets mis en avant',
    featuredDescription:
      'Des produits livrés de bout en bout, avec un domaine métier isolé et testé.',
    archivesTitle: 'Archives',
    archivesDescription: 'Des projets plus anciens, gardés pour mémoire.',
  },
  projectCard: {
    viewProject: 'Voir le projet',
    viewDemo: 'Démo',
    viewCode: 'Code source',
    technologies: 'Technologies',
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
    required_field_custom: 'Le {fieldName} est requis.',
    // String errors
    too_small_string_minimum:
      'Le {fieldName} doit contenir au moins {minimum} caractère(s:minimum).',
    too_big_string_maximum: 'Ne doit pas dépasser {maximum} caractères.',
    invalid_string_email: 'Adresse e-mail invalide.',
    invalid_string_url: 'URL invalide.',
    invalid_string_uuid: 'UUID invalide.',
    // You can add more specific messages as needed
  },
} as const;
