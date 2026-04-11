export const uiLabels = {
  skillsContent: {
    frontendDevelopment: {
      title: 'Développement Frontend',
      description:
        "Création d'interfaces utilisateur réactives et accessibles avec des frameworks et bibliothèques modernes.",
    },
    backendDevelopment: {
      title: 'Développement Backend',
      description:
        "Conception d'applications serveur robustes et d'API pour alimenter les applications web.",
    },
    databaseManagement: {
      title: 'Gestion de Bases de Données',
      description:
        'Conception et optimisation de schémas de bases de données pour un stockage et une récupération efficaces des données.',
    },
    uiUxDesign: {
      title: 'Conception UI/UX',
      description:
        "Création d'interfaces et d'expériences utilisateur intuitives et visuellement attrayantes.",
    },
    softwareArchitecture: {
      title: 'Architecture Logicielle',
      description:
        'Application des principes de la Clean Architecture pour des systèmes maintenables et évolutifs.',
    },
  },
  site: {
    title: 'Bakate',
    description:
      'Mon portfolio et blog technique personnel de développeur FullStack.',
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
          title: 'Expertise Angular (State Management)',
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
    pageTitle: 'Accueil | Bakate - Développeur FullStack',
    pageDescription:
      "Bienvenue sur le portfolio de Bakate, développeur FullStack passionné par la création d'expériences web innovantes.",
    heroGreeting: "Salut, c'est Bakate Idrissa",
    heroSubtitlePart1: 'Développeur FullStack',
    heroSubtitlePart2: 'Architecture',
    heroIntroduction:
      'Je développe des applications web de bout en bout. Je conçois des systèmes maintenables avec TypeScript, Angular ou Next.js.',
    heroIntroduction2:
      "J'applique l'architecture hexagonale pour isoler la logique métier. J'automatise la qualité via Vitest et GitHub Actions ou CircleCI.",
    heroViewWorkButton: 'Mes réalisations',
    heroContactButton: 'Travaillons ensemble',
    heroImageAlt:
      'Illustration représentant Bakate ou un concept de développement',
    featuredProjectsTitle: '3 derniers projets',
    featuredProjectsDescription:
      "Voici quelques projets sur lesquels j'ai récemment travaillé. N'hésitez pas à les explorer !",
    projectCardViewProject: 'Voir le projet',
    projectCardViewCode: 'Voir le code',
    imageNotAvailable: 'Image bientôt disponible',
    mySkillsTitle: 'Mes Compétences',
    mySkillsDescription:
      "Explorez l'expertise et les capacités qui définissent mon travail et ma passion.",
  },
  blogPage: {
    pageTitle: 'Mon Blog Technique',
    pageDescription:
      "Articles et réflexions sur le développement web, l'architecture logicielle, et les nouvelles technologies.",
    title: 'Mon Blog Technique',
    description:
      "Articles et réflexions sur le développement web, l'architecture logicielle, et les nouvelles technologies.",
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
    title: 'Mes Projets',
    metaTitle: 'Mes Projets | Portfolio de Bakate',
    metaDescription: 'Découvrez tous les projets de Bakate.',
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
