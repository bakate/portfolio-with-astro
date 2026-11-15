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
      'Parcours professionnel de Bakate : 4 ans chez Bloomflow, puis fondateur de Teranga Pulse à Paris.',
    pageHeading: 'Parcours Professionnel',
    presentLabel: 'présent',
    stackLabel: 'Stack utilisée',
    seekingLabel: "À l'écoute de nouvelles opportunités",
    downloadCV: 'Télécharger mon CV',
    terangaPulse: {
      company: 'Teranga Pulse',
      role: 'Fondateur & Développeur Full-Stack',
      period: "Novembre 2024 – Aujourd'hui",
      location: 'Paris, France',
      tagline: 'SaaS · Architecture · Ops',
      about:
        'Édition de plateformes SaaS critiques en solo. Maîtrise complète du cycle de vie : produit, infrastructure (CI/CD) et qualité logicielle.',
      subRoles: [
        {
          project: 'Parent Up',
          role: 'Fondateur & Développeur Full-Stack',
          period: "Juillet 2025 – Aujourd'hui",
        },
        {
          project: 'Terral Hub',
          role: 'Fondateur & Développeur Full-Stack',
          period: 'Novembre 2024 – Juin 2025',
        },
      ],
      achievements: {
        product: {
          title: 'Ownership Produit 360°',
          description:
            'Roadmap, UX, architecture, sécurité, monitoring (Sentry) et pipeline CI/CD (GitHub Actions) intégralement définis et opérés en solo.',
        },
        backend: {
          title: 'Backend Temps Réel & IA',
          description:
            'Messagerie sécurisée, sync Google Calendar, assistant juridique IA par RAG (Vercel AI SDK, OpenAI, embeddings), notifications email via Resend.',
        },
        quality: {
          title: 'Design System & Tests',
          description:
            'Librairie UI interne, typage strict, tests Vitest et Convex Test. Auth avancée avec Clerk Organizations.',
        },
      },
      technologies: [
        'Next.js',
        'TypeScript',
        'Convex',
        'Turborepo',
        'Clerk',
        'Vercel AI SDK',
        'OpenAI',
        'Resend',
        'Vitest',
        'Sentry',
        'GitHub Actions',
      ],
    },
    bloomflow: {
      company: 'Bloomflow',
      role: 'Développeur Full-Stack',
      period: 'Novembre 2020 – Novembre 2024',
      location: 'Paris, France · Hybride',
      tagline: 'Scale-up B2B · SaaS · 4 ans',
      about:
        "Développement de l'outil d'open innovation utilisé par les groupes du CAC 40 pour piloter leur écosystème startup.",
      achievements: {
        designSystem: {
          title: 'Industrialisation UI (Design System)',
          description:
            "Conception d'une librairie de composants Angular transverse via Storybook pour assurer la convergence visuelle et technique de plusieurs modules.",
        },
        migration: {
          title: 'Migration TypeScript & Qualité',
          description:
            "Pilotage de la migration JS → TS d'un back-office Next.js critique. Sécurisation globale via tests unitaires, d'intégration et pipelines CI automatisés.",
        },
        automation: {
          title: 'Impact Opérationnel & SaaS',
          description:
            "Création d'un module d'auto-service pour le Customer Success, transformant des workflows manuels complexes de 2 jours en validations instantanées.",
        },
        angular: {
          title: 'State management Angular (NgRx, Signals)',
          description:
            "Gestion d'états complexes (NgRx, Signals) et implémentation de formulaires dynamiques sur des processus métier à forts volumes de données.",
        },
      },
      technologies: [
        'Angular',
        'Next.js',
        'React',
        'TypeScript',
        'Node',
        'Express',
        'MongoDB',
        'Elastic Search',
        'PostgreSQL',
        'SQLite',
        'Jest',
        'Docker',
      ],
    },
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
    pageTitle: 'Me Contacter',
    pageDescription:
      "Discutons de ton projet, d'une collaboration potentielle, ou simplement pour échanger sur la tech !",
    title: 'Me Contacter',
    description:
      "Discutons de ton projet, d'une collaboration potentielle, ou simplement pour échanger sur la tech !",

    formTitle: 'Envoyer un message',
    writeToMeHeader: "M'écrire",
    letstalkHeader: 'Discutons',
    badgeResponseTime: 'Réponse sous 24h',
    consultingValueProp:
      "Besoin d'avancer vite ? Réserve 15 min de consulting gratuit.",
    contactName: 'Bakate Idrissa',
    linkedInLabel: 'LinkedIn',
    professionalNetworkLabel: 'Réseau Professionnel',
    githubLabel: 'GitHub',
    openSourceLabel: 'Open Source & Code',
    socialLinksTitle: 'Où me trouver',

    firstNameLabel: 'Prénom',
    lastNameLabel: 'Nom',
    emailLabel: 'Email',
    companyLabel: 'Société (Optionnel)',
    messageLabel: 'Message',
    sendButtonLabel: 'Envoyer',
    firstNamePlaceholder: 'Ton prénom',

    lastNamePlaceholder: 'Ton nom de famille',
    emailPlaceholder: 'Ton adresse e-mail',
    companyPlaceholder: 'Le nom de ton entreprise',
    messagePlaceholder: 'Ton message ici...',
    calendarTitle: 'Planifier un RDV',
    calendarDescription:
      'Tu préfères discuter de vive voix ? Réservez directement un créneau dans mon agenda.',
    calendarButtonLabel: 'Voir mes disponibilités',
    calendarLinkLabel: 'Voir mon agenda',
    calendarPlaceHolder:
      "L'intégration avec Google Calendar se fera bientôt...",
    orSeparatorText: 'OU',
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
    pageTitle: 'Page Non Trouvée',
    title: 'Oups ! Page Non Trouvée',
    message:
      "Désolé, la page que tu recherches ne semble pas exister. Vérifie l'URL ou retourne à la page d'accueil.",
    homeLink: "Retourner à l'Accueil",
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
