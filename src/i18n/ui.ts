export const languages: Record<'fr' | 'en', { name: string; flag: string }> = {
  fr: { name: 'Français', flag: 'fr' },
  en: { name: 'English', flag: 'us' },
} as const;

export const defaultLanguage = 'fr';

export type LanguageCode = keyof typeof languages;

export const ui = {
  fr: {
    projectsContent: {
      codeHaven: {
        title: 'Code Haven',
        description:
          "Une plateforme d'apprentissage pour les futurs développeurs.",
        imageAltText: 'Image du projet Code Haven',
        categoryText: 'Application Web',
        dateText: '2024',
        detailedDescription:
          "Code Haven est une initiative visant à fournir une plateforme d'apprentissage complète et interactive pour les développeurs en herbe et confirmés. Elle propose des cours structurés, des exercices pratiques et un suivi personnalisé.",
        keyFeatures: {
          authentication: {
            title: 'Authentification avec Auth.js',
            description:
              'Authentification sécurisée via un lien magique ou Google.',
          },
          dashboard: {
            title: 'Tableau de Bord',
            description:
              'Tableau de bord avec des fonctionnalités de suivi et de gestion des cours.',
          },
          userManagement: {
            title: 'Gestion des Utilisateurs',
            description: 'Gestion des utilisateurs avec des rôles différents.',
          },
          contentEditing: {
            title: 'Édition de Contenu',
            description:
              'Édition de contenu avec des fonctionnalités de suivi et de gestion des cours.',
          },
          progressCalculation: {
            title: 'Calcul de Progression',
            description:
              'Calcul de progression avec des fonctionnalités de suivi et de gestion des cours.',
          },
          studentDashboard: {
            title: 'Tableau de Bord Étudiant',
            description:
              'Tableau de bord étudiant avec des fonctionnalités de suivi et de gestion des cours.',
          },
          teacherMode: {
            title: 'Mode Enseignant',
            description:
              'Mode enseignant avec des fonctionnalités de suivi et de gestion des cours.',
          },
          createNewCourses: {
            title: 'Création de Cours',
            description:
              'Création de cours avec des fonctionnalités de suivi et de gestion des cours.',
          },
          createNewChapters: {
            title: 'Création de Chapitres',
            description:
              'Création de chapitres avec des fonctionnalités de suivi et de gestion des cours.',
          },
          dragAndDrop: {
            title: 'Glisser-Déposer',
            description:
              'Glisser-déposer pour organiser les cours et les chapitres.',
          },
          uploadThing: {
            title: 'Intégration UploadThing',
            description:
              "Intégration d'UploadThing pour le stockage des vidéos.",
          },
          mux: {
            title: 'Intégration Mux',
            description: "Intégration d'Mux pour le stockage des vidéos.",
          },
          hlsPlayer: {
            title: 'Lecteur HLS',
            description: 'Lecteur HLS pour la lecture des vidéos.',
          },
          richTextEditor: {
            title: 'Éditeur de Texte Riche',
            description: 'Éditeur de texte riche pour la création de cours.',
          },
        },
        galleryImages: {
          codeHavenAuth: {
            alt: "Texte alternatif pour l'image d'authentification de CodeHaven",
            caption: "Légende pour l'image d'authentification",
          },
          codeHavenCourses: {
            alt: "Texte alternatif pour l'image des cours de CodeHaven",
            caption: "Légende pour l'image des cours",
          },
          codeHavenCourse: {
            alt: "Texte alternatif pour l'image d'un cours spécifique de CodeHaven",
            caption: "Légende pour l'image d'un cours",
          },
          codeHavenPreview: {
            alt: "Texte alternatif pour l'aperçu d'un cours CodeHaven",
            caption: "Légende pour l'image d'aperçu",
          },
          codeHavenProtected: {
            alt: 'Texte alternatif pour une page protégée de CodeHaven',
            caption: "Légende pour l'image d'une page protégée",
          },
          codeHavenStudentDashboard: {
            alt: 'Texte alternatif pour le tableau de bord étudiant de CodeHaven',
            caption: 'Légende pour le tableau de bord étudiant',
          },
          codeHavenTeacherDashboard: {
            alt: 'Texte alternatif pour le tableau de bord enseignant de CodeHaven',
            caption: 'Légende pour le tableau de bord enseignant',
          },
          codeHavenEditCourse: {
            alt: "Texte alternatif pour la page d'édition de cours de CodeHaven",
            caption: "Légende pour la page d'édition de cours",
          },
        },
        challenges:
          'Le principal défi a été de concevoir une expérience utilisateur à la fois riche et intuitive pour différents niveaux de compétence.',
        learnings:
          "Ce projet a renforcé l'importance d'une architecture modulaire et de tests continus pour assurer la qualité.",
      },
      afrikaZon: {
        title: 'AfrikaZon',
        description:
          "Une plateforme e-commerce où l'on peut acheter des vêtements africains.",
        imageAltText: 'Image du projet AfrikaZon',
        categoryText: 'Plateforme E-commerce',
        dateText: '2024',
        detailedDescription:
          "AfrikaZon connecte les créateurs de mode africaine avec un marché global. La plateforme met l'accent sur l'authenticité et la promotion des talents locaux.",
        keyFeatures: {
          authentication: {
            title: 'Authentification',
            description:
              'Authentification sécurisée via email et mot de passe avec one-time password.',
          },
          checkout: {
            title: 'Processus de Paiement',
            description: 'Processus de paiement sécurisé via Stripe.',
          },
          productDisplay: {
            title: 'Affichage des Produits',
            description:
              'Affichage des produits avec des fonctionnalités de recherche et de tri.',
          },
          cart: {
            title: "Panier d'Achat",
            description:
              "Panier d'achat avec des fonctionnalités de gestion des produits.",
          },
          paymentProcessing: {
            title: 'Traitement des Paiements',
            description: 'Traitement des paiements sécurisé via Stripe.',
          },
          shipping: {
            title: 'Gestion des Expéditions',
            description:
              'Gestion des expéditions avec des fonctionnalités de suivi.',
          },
          orderManagement: {
            title: 'Gestion des Commandes',
            description:
              'Gestion des commandes avec des fonctionnalités de suivi.',
          },
          inventoryManagement: {
            title: "Gestion d'Inventaire",
            description:
              "Gestion d'inventaire avec des fonctionnalités de suivi.",
          },
          customerSupport: {
            title: 'Support Client',
            description: 'Support client avec des fonctionnalités de suivi.',
          },
          roleManagement: {
            title: 'Gestion des Rôles',
            description:
              'Gestion des rôles (admin, client) avec des fonctionnalités de suivi.',
          },
        },
        galleryImages: [],
        challenges:
          "L'intégration logistique pour une livraison internationale fiable a été un défi majeur.",
        learnings:
          "L'importance de comprendre les nuances culturelles et les attentes des utilisateurs sur différents marchés.",
      },
      samouraStore: {
        title: 'Samoura Store',
        description:
          "Une plateforme e-commerce où l'on peut acheter des vêtements.",
        imageAltText: 'Image du projet Samoura Store',
        categoryText: 'Boutique E-commerce',
        dateText: '2023',
        detailedDescription:
          "Samoura Store est une boutique en ligne moderne offrant une sélection de vêtements et accessoires. L'accent est mis sur une expérience d'achat rapide et agréable.",
        keyFeatures: {
          productDisplay: {
            title: 'Catalogue Produits Dynamique',
            description:
              'Présentation attrayante des produits avec filtres et options de tri avancées.',
          },
          cart: {
            title: "Panier d'Achat Intelligent",
            description:
              'Gestion facile du panier et recommandations personnalisées.',
          },
        },
        galleryImages: [],
        challenges:
          "Optimiser les performances d'affichage pour un grand catalogue de produits.",
        learnings:
          "Les techniques de mise en cache et de chargement progressif sont cruciales pour l'e-commerce.",
      },
      cms: {
        title: 'Système de Gestion de Contenu (CMS)',
        description:
          'Une plateforme où vous pouvez créer, éditer et supprimer du contenu.',
        imageAltText: 'Image du projet CMS',
        categoryText: 'Outil de Productivité',
        dateText: '2023',
        detailedDescription:
          "Ce CMS a été développé pour offrir une solution flexible et puissante pour la gestion de contenu web. Il permet une personnalisation poussée et une interface d'administration intuitive.",
        keyFeatures: {
          userManagement: {
            title: 'Gestion des Rôles Utilisateurs',
            description:
              "Contrôle d'accès granulaire basé sur les rôles pour la sécurité et la collaboration.",
          },
          contentEditing: {
            title: 'Éditeur WYSIWYG Avancé',
            description:
              'Création et modification de contenu riche sans nécessiter de compétences techniques.',
          },
        },
        galleryImages: [],
        challenges:
          'Assurer la sécurité des données et prévenir les vulnérabilités courantes des CMS.',
        learnings:
          "Une conception d'API bien pensée est essentielle pour l'extensibilité et l'intégration tierce.",
      },
      terralhub: {
        title: 'TerralHub - Plateforme Logistique Agricole',
        description: `TerralHub est une plateforme innovante conçue pour les agriculteurs sénégalais. Elle leur permet de trouver facilement des entrepôts sécurisés à proximité pour stocker leurs récoltes après la moisson, contribuant ainsi à réduire significativement les pertes post-récolte. La plateforme facilite également la mise en relation avec des transporteurs fiables pour acheminer les produits agricoles vers les lieux de stockage. Les agriculteurs peuvent effectuer des paiements d'acomptes pour les réservations d'entrepôts et de transport via PayDunya, et suivre en temps réel la capacité disponible des entrepôts.`,
        imageAltText: 'Aperçu de la plateforme TerralHub',
        categoryText: 'Plateforme Logistique',
        dateText: 'Mai 2025',
        detailedDescription: `TerralHub vise à révolutionner la chaîne d'approvisionnement agricole au Sénégal en connectant directement les agriculteurs aux solutions de stockage et de transport. En réduisant les pertes post-récolte et en optimisant la logistique, la plateforme contribue à améliorer les revenus des agriculteurs et à renforcer la sécurité alimentaire. Elle intègre un système de paiement sécurisé et offre une visibilité en temps réel sur les capacités de stockage, permettant une planification efficace.`,
        keyFeatures: {
          userManagement: {
            title: 'Gestion des Comptes Utilisateurs',
            description:
              "Comptes sécurisés pour agriculteurs, propriétaires d'entrepôts et transporteurs, avec profils personnalisés.",
          },
          roleManagement: {
            title: 'Gestion des Rôles et Permissions',
            description:
              "Attribution de rôles spécifiques (agriculteur, entrepôt, transporteur, admin) avec des droits d'accès adaptés.",
          },
          warehouseSearchAndBooking: {
            title: "Recherche et Réservation d'Entrepôts",
            description:
              "Localisation facile d'entrepôts disponibles, consultation des détails (capacité, prix, services) et réservation en ligne.",
          },
          transporterSearchAndBooking: {
            title: 'Recherche et Réservation de Transporteurs',
            description:
              'Mise en relation avec des transporteurs vérifiés, demande de devis et réservation de services de transport.',
          },
          realTimeWarehouseMonitoring: {
            title: 'Suivi en Temps Réel de la Capacité des Entrepôts',
            description:
              "Visualisation en direct de l'espace de stockage disponible dans les entrepôts partenaires.",
          },
          securePaymentGateway: {
            title: 'Passerelle de Paiement Sécurisée (PayDunya)',
            description:
              "Paiement d'acomptes et de services via PayDunya, avec suivi des transactions.",
          },
          inventoryTrackingForFarmers: {
            title: 'Suivi des Stocks et Gestion',
            description:
              'Outils pour les agriculteurs pour suivre leurs stocks entreposés et pour les entrepôts pour gérer leur inventaire.',
          },
          pwaSupport: {
            title: 'Support Progressive Web App (PWA)',
            description:
              'Accès facile et fonctionnalités hors-ligne via une PWA installable sur mobile et bureau.',
          },
          adminDashboard: {
            title: 'Tableau de Bord Administrateur',
            description:
              'Interface complète pour la gestion de la plateforme, des utilisateurs, des transactions et des litiges.',
          },
        },
        galleryImages: {
          terralHubLogin: {
            alt: 'Page de connexion de TerralHub',
            caption: 'Accès sécurisé à la plateforme TerralHub',
          },
          terralHubLogistics: {
            alt: 'Interface de logistique de TerralHub',
            caption: 'Gestion des opérations logistiques',
          },
          terralHubCompaniesList: {
            alt: 'Liste des entreprises partenaires sur TerralHub',
            caption: 'Partenaires de confiance pour le stockage et transport',
          },
          terralHubCompanyDetails: {
            alt: "Détails d'une entreprise sur TerralHub",
            caption: 'Informations complètes sur les partenaires',
          },
          terralHubWarehousesList: {
            alt: 'Liste des entrepôts disponibles sur TerralHub',
            caption: "Trouvez l'entrepôt idéal pour vos récoltes",
          },
          terralHubWarehouseDetails: {
            alt: "Détails d'un entrepôt sur TerralHub",
            caption: 'Capacité, services et tarifs des entrepôts',
          },
          terralHubWarehousesListMapInfo: {
            alt: 'Carte des entrepôts sur TerralHub',
            caption: 'Localisation géographique des entrepôts',
          },
          terralHubAboutUs: {
            alt: 'Page À Propos de TerralHub',
            caption: "Notre mission pour l'agriculture sénégalaise",
          },
        },
        challenges:
          'Développer une solution robuste et accessible pour des utilisateurs avec différents niveaux de maîtrise technologique, tout en assurant la sécurité des transactions et la fiabilité des informations logistiques.',
        learnings:
          "L'importance d'une conception centrée sur l'utilisateur et d'une collaboration étroite avec les acteurs du secteur agricole pour répondre au mieux à leurs besoins spécifiques.",
      },
    },
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
    },
    footer: {
      rights: 'Tous droits réservés.',
    },
    homePage: {
      pageTitle: 'Accueil | Bakate - Développeur FullStack',
      pageDescription:
        "Bienvenue sur le portfolio de Bakate, développeur FullStack passionné par la création d'expériences web innovantes.",
      heroGreeting: "Salut, c'est Bakate",
      heroSubtitlePart1: 'Développeur FullStack',
      heroSubtitlePart2: 'Passionné UI/UX',
      heroIntroduction:
        "Je suis un Développeur FullStack et mordu de UI/UX basé à Paris. J'adore créer des expériences numériques qui sont à la fois belles, fonctionnelles et centrées sur l'utilisateur. Fort d'une solide expérience en technologies front-end et back-end, je m'efforce de construire des solutions qui ne sont pas seulement techniquement robustes, mais aussi intuitives et engageantes pour les utilisateurs.",
      heroViewWorkButton: 'Mes réalisations',
      heroContactButton: 'Me contacter',
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
      firstNameLabel: 'Prénom',
      lastNameLabel: 'Nom',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Envoyer',
      firstNamePlaceholder: 'Ton prénom',

      lastNamePlaceholder: 'Ton nom de famille',
      emailPlaceholder: 'Ton adresse e-mail',
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
        "Il semble que vous n'ayez pas encore de projets à afficher.",
    },
    notFoundPage: {
      pageTitle: 'Page Non Trouvée',
      title: 'Oups ! Page Non Trouvée',
      message:
        "Désolé, la page que vous recherchez ne semble pas exister. Vérifiez l'URL ou retournez à la page d'accueil.",
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
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Type invalide.',
      invalid_type_received_undefined: 'Ce champ est requis.', // For required fields (fallback)
      required_field_custom: 'Le champ {fieldName} est requis.',
      // String errors
      too_small_string_minimum: 'Doit contenir au moins {minimum} caractères.',
      too_big_string_maximum: 'Ne doit pas dépasser {maximum} caractères.',
      invalid_string_email: 'Adresse e-mail invalide.',
      invalid_string_url: 'URL invalide.',
      invalid_string_uuid: 'UUID invalide.',
      // You can add more specific messages as needed
    },
  },
  en: {
    projectsContent: {
      codeHaven: {
        title: 'Code Haven',
        description: 'A learning platform for aspiring developers.',
        imageAltText: 'Code Haven project image',
        categoryText: 'Web Application',
        dateText: '2024',
        detailedDescription:
          'Code Haven is an initiative to provide a comprehensive and interactive learning platform for budding and experienced developers. It offers structured courses, practical exercises, and personalized tracking.',
        keyFeatures: {
          authentication: {
            title: 'Authentication',
            description:
              'Authentication with email and password with one-time password.',
          },
          dashboard: {
            title: 'Dashboard',
            description:
              'Dashboard with user management and course management.',
          },
          userManagement: {
            title: 'User Management',
            description: 'User management with role management.',
          },
          contentEditing: {
            title: 'Content Editing',
            description: 'Content editing with course editing.',
          },
          progressCalculation: {
            title: 'Progress Calculation',
            description:
              'Progress calculation with course progress calculation.',
          },
          studentDashboard: {
            title: 'Student Dashboard',
            description: 'Student dashboard with course progress tracking.',
          },
          teacherMode: {
            title: 'Teacher Mode',
            description: 'Teacher mode with course creation and management.',
          },
          createNewCourses: {
            title: 'Create New Courses',
            description: 'Create new courses with chapter creation.',
          },
          createNewChapters: {
            title: 'Create New Chapters',
            description: 'Create new chapters with lesson creation.',
          },
          dragAndDrop: {
            title: 'Drag and Drop',
            description:
              'Drag and drop functionality for course and chapter creation.',
          },
          uploadThing: {
            title: 'UploadThing Integration',
            description: 'UploadThing integration for file upload.',
          },
          mux: {
            title: 'Mux Integration',
            description: 'Mux integration for video upload.',
          },
          hlsPlayer: {
            title: 'HLS Player',
            description: 'HLS player for video playback.',
          },
          richTextEditor: {
            title: 'Rich Text Editor',
            description: 'Rich text editor for course and chapter creation.',
          },
        },
        galleryImages: {
          codeHavenAuth: {
            alt: 'Alt text for CodeHaven authentication image',
            caption: 'Caption for authentication image',
          },
          codeHavenCourses: {
            alt: 'Alt text for CodeHaven courses image',
            caption: 'Caption for courses image',
          },
          codeHavenCourse: {
            alt: 'Alt text for CodeHaven specific course image',
            caption: 'Caption for specific course image',
          },
          codeHavenPreview: {
            alt: 'Alt text for CodeHaven course preview image',
            caption: 'Caption for course preview image',
          },
          codeHavenProtected: {
            alt: 'Alt text for CodeHaven protected page image',
            caption: 'Caption for protected page image',
          },
          codeHavenStudentDashboard: {
            alt: 'Alt text for CodeHaven student dashboard image',
            caption: 'Caption for student dashboard image',
          },
          codeHavenTeacherDashboard: {
            alt: 'Alt text for CodeHaven teacher dashboard image',
            caption: 'Caption for teacher dashboard image',
          },
          codeHavenEditCourse: {
            alt: 'Alt text for CodeHaven edit course page image',
            caption: 'Caption for edit course page image',
          },
        },
        challenges:
          'The main challenge was designing a user experience that is both rich and intuitive for different skill levels.',
        learnings:
          'This project reinforced the importance of modular architecture and continuous testing to ensure quality.',
      },
      afrikaZon: {
        title: 'AfrikaZon',
        description: 'An e-commerce platform to buy African clothing.',
        imageAltText: 'AfrikaZon project image',
        categoryText: 'E-commerce Platform',
        dateText: '2024',
        detailedDescription:
          'AfrikaZon connects African fashion designers with a global market. The platform emphasizes authenticity and the promotion of local talent.',
        keyFeatures: {
          authentication: {
            title: 'Authentication',
            description:
              'Authentication with email and password with one-time password.',
          },
          checkout: {
            title: 'Checkout Process',
            description: 'Checkout process with payment processing.',
          },
          productDisplay: {
            title: 'Product Display',
            description: 'Product display with search and sorting.',
          },
          cart: {
            title: 'Shopping Cart',
            description: 'Shopping cart with product management.',
          },
          paymentProcessing: {
            title: 'Payment Processing',
            description: 'Payment processing with Stripe integration.',
          },
          shipping: {
            title: 'Shipping Management',
            description: 'Shipping management with order management.',
          },
          orderManagement: {
            title: 'Order Management',
            description: 'Order management with inventory management.',
          },
          inventoryManagement: {
            title: 'Inventory Management',
            description: 'Inventory management with order management.',
          },
          customerSupport: {
            title: 'Customer Support',
            description: 'Customer support with order management.',
          },
          roleManagement: {
            title: 'Role Management',
            description: 'Role management with order management.',
          },
        },
        galleryImages: [],
        challenges:
          'Integrating logistics for reliable international delivery was a major challenge.',
        learnings:
          'The importance of understanding cultural nuances and user expectations in different markets.',
      },
      samouraStore: {
        title: 'Samoura Store',
        description: 'An e-commerce platform to buy clothing.',
        imageAltText: 'Samoura Store project image',
        categoryText: 'E-commerce Storefront',
        dateText: '2023',
        detailedDescription:
          'Samoura Store is a modern online boutique offering a selection of clothing and accessories. The focus is on a fast and enjoyable shopping experience.',
        keyFeatures: {
          productDisplay: {
            title: 'Dynamic Product Catalog',
            description:
              'Attractive product presentation with advanced filters and sorting options.',
          },
          cart: {
            title: 'Intelligent Shopping Cart',
            description:
              'Easy cart management and personalized recommendations.',
          },
        },
        galleryImages: [],
        challenges:
          'Optimizing display performance for a large product catalog.',
        learnings:
          'Caching and progressive loading techniques are crucial for e-commerce.',
      },
      cms: {
        title: 'Content Management System (CMS)',
        description:
          'A platform where you can create, edit, and delete content.',
        imageAltText: 'CMS project image',
        categoryText: 'Productivity Tool',
        dateText: '2023',
        detailedDescription:
          'This CMS was developed to offer a flexible and powerful solution for web content management. It allows for extensive customization and an intuitive administration interface.',
        keyFeatures: {
          userManagement: {
            title: 'User Role Management',
            description:
              'Granular role-based access control for security and collaboration.',
          },
          contentEditing: {
            title: 'Advanced WYSIWYG Editor',
            description:
              'Create and modify rich content without requiring technical skills.',
          },
        },
        galleryImages: [],
        challenges:
          'Ensuring data security and preventing common CMS vulnerabilities.',
        learnings:
          'A well-thought-out API design is essential for extensibility and third-party integration.',
      },
      terralhub: {
        title: 'TerralHub - Agricultural Logistics Platform',
        description: 'TerralHub is an innovative platform designed for Senegalese farmers. It enables them to easily find secure, nearby warehouses to store their harvests post-collection, significantly helping to reduce post-harvest losses. The platform also facilitates connections with reliable transporters to move agricultural products to storage locations. Farmers can make down payments for warehouse and transport bookings via PayDunya, and track available warehouse capacity in real-time.',
        imageAltText: 'TerralHub platform preview',
        categoryText: 'Logistics Platform',
        dateText: 'May 2025',
        detailedDescription: 'TerralHub aims to revolutionize the agricultural supply chain in Senegal by directly connecting farmers to storage and transport solutions. By reducing post-harvest losses and optimizing logistics, the platform helps improve farmer incomes and strengthen food security. It integrates a secure payment system and offers real-time visibility into storage capacities, enabling effective planning.',
        keyFeatures: {
          userManagement: { title: 'User Account Management', description: 'Secure accounts for farmers, warehouse owners, and transporters, with personalized profiles.' },
          roleManagement: { title: 'Role and Permission Management', description: 'Assignment of specific roles (farmer, warehouse, transporter, admin) with tailored access rights.' },
          warehouseSearchAndBooking: { title: 'Warehouse Search and Booking', description: 'Easy location of available warehouses, consultation of details (capacity, price, services), and online booking.' },
          transporterSearchAndBooking: { title: 'Transporter Search and Booking', description: 'Connection with verified transporters, quote requests, and booking of transport services.' },
          realTimeWarehouseMonitoring: { title: 'Real-Time Warehouse Capacity Monitoring', description: 'Live visualization of available storage space in partner warehouses.' },
          securePaymentGateway: { title: 'Secure Payment Gateway (PayDunya)', description: 'Payment of down payments and services via PayDunya, with transaction tracking.' },
          inventoryTrackingForFarmers: { title: 'Inventory Tracking and Management', description: 'Tools for farmers to track their stored goods and for warehouses to manage their inventory.' },
          pwaSupport: { title: 'Progressive Web App (PWA) Support', description: 'Easy access and offline features via an installable PWA on mobile and desktop.' },
          adminDashboard: { title: 'Admin Dashboard', description: 'Comprehensive interface for platform management, users, transactions, and disputes.' },
        },
        galleryImages: {
          terralHubLogin: { alt: 'TerralHub Login Page', caption: 'Secure access to the TerralHub platform' },
          terralHubLogistics: { alt: 'TerralHub Logistics Interface', caption: 'Management of logistics operations' },
          terralHubCompaniesList: { alt: 'List of Partner Companies on TerralHub', caption: 'Trusted partners for storage and transport' },
          terralHubCompanyDetails: { alt: 'Company Details on TerralHub', caption: 'Complete information about partners' },
          terralHubWarehousesList: { alt: 'List of Available Warehouses on TerralHub', caption: 'Find the ideal warehouse for your harvests' },
          terralHubWarehouseDetails: { alt: 'Warehouse Details on TerralHub', caption: 'Capacity, services, and rates of warehouses' },
          terralHubWarehousesListMapInfo: { alt: 'Map of Warehouses on TerralHub', caption: 'Geographical location of warehouses' },
          terralHubAboutUs: { alt: 'TerralHub About Us Page', caption: 'Our mission for Senegalese agriculture' },
        },
        challenges: "Developing a robust and accessible solution for users with varying levels of technological proficiency, while ensuring transaction security and the reliability of logistical information.",
        learnings: "The importance of user-centered design and close collaboration with agricultural sector stakeholders to best meet their specific needs.",
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Frontend Development',
        description:
          'Building responsive and accessible user interfaces with modern frameworks and libraries.',
      },
      backendDevelopment: {
        title: 'Backend Development',
        description:
          'Creating robust server-side applications and APIs to power web applications.',
      },
      databaseManagement: {
        title: 'Database Management',
        description:
          'Designing and optimizing database schemas for efficient data storage and retrieval.',
      },
      uiUxDesign: {
        title: 'UI/UX Design',
        description:
          'Creating intuitive and visually appealing user interfaces and experiences.',
      },
      softwareArchitecture: {
        title: 'Software Architecture',
        description:
          'Applying Clean Architecture principles for maintainable and scalable systems.',
      },
    },
    site: {
      title: 'Bakate',
      description:
        'My personal technical portfolio and blog as a FullStack Developer.',
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
      contact: 'Contact',
      projects: 'Projects',
      tips: 'Tips',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    homePage: {
      pageTitle: 'Home | Bakate - FullStack Developer',
      pageDescription:
        'Welcome to the portfolio of Bakate, a FullStack developer passionate about creating innovative web experiences.',
      heroGreeting: "Hi, I'm Bakate",
      heroSubtitlePart1: 'Full Stack Developer',
      heroSubtitlePart2: 'UI/UX Enthusiast',
      heroIntroduction:
        "I'm a passionate Full Stack Developer and UI/UX enthusiast based in Paris. I love creating beautiful, functional, and user-centered digital experiences. With a strong foundation in both front-end and back-end technologies, I strive to build solutions that are not only technically sound but also intuitive and engaging for users.",
      heroViewWorkButton: 'View My Work',
      heroContactButton: 'Get In Touch',
      heroImageAlt: 'Illustration representing Bakate or a development concept',
      featuredProjectsTitle: '3 latest projects',
      featuredProjectsDescription:
        "Here are some of the projects I've recently worked on. Feel free to explore!",
      projectCardViewProject: 'View Project',
      projectCardViewCode: 'View Code',
      imageNotAvailable: 'Image not available for now',
      mySkillsTitle: 'My Skills',
      mySkillsDescription:
        'Explore the expertise and abilities that define my work and passion.',
    },
    blogPage: {
      pageTitle: 'My Technical Blog',
      pageDescription:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      title: 'My Technical Blog',
      description:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      comingSoon: 'Blog posts will appear here soon. Check back later!',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Published on: ',
      readMore: 'Read more',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search articles...',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No posts found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Back to blog list',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'Continue Reading',
      readMore: 'Read more',
    },
    contactPage: {
      pageTitle: 'Contact Me',
      pageDescription:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",

      title: 'Contact Me',
      description:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",
      formTitle: 'Send a message',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Send',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: 'Your message here...',
      calendarTitle: 'Schedule a Meeting',
      calendarDescription:
        'Prefer to talk live? Book a slot directly in my calendar.',
      calendarButtonLabel: 'See my availability',
      calendarLinkLabel: 'See my calendar',
      calendarPlaceHolder:
        'The integration with Google Calendar will be soon...',
      orSeparatorText: 'OR',
      toastSuccessMessageSent: 'Message sent successfully!',
      toastErrorFailedToSend: 'Failed to send message.',
      toastErrorUnexpected: 'An unexpected error occurred.',
      toastErrorDetails: 'Error details:',
      toastErrorValidationFailed: 'Form validation failed.',
    },
    projectDetailPage: {
      backToProjects: 'Back to Projects',
      categoryLabel: 'Category:',
      dateLabel: 'Date:',
      aboutTitle: 'About this project',
      keyFeaturesTitle: 'Key Features',
      galleryTitle: 'Gallery',
      challengesTitle: 'Challenges',
      learningsTitle: 'Learnings',
      visitProjectButton: 'Visit Project',
      viewCodeButton: 'View Code',
    },
    projectsPage: {
      title: 'My Projects',
      metaTitle: "My Projects | Bakate's Portfolio",
      metaDescription: "Discover all of Bakate's projects.",
      noProjects: 'No projects to display at the moment.',
      noProjectsDescription:
        "It seems that you don't have any projects to display at the moment.",
    },
    notFoundPage: {
      pageTitle: 'Page Not Found',
      title: 'Oops! Page Not Found',
      message:
        'Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.',
      homeLink: 'Return to Homepage',
    },

    tipsPage: {
      metaTitle: 'Development Tips | Bakate Ba',
      metaDescription:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      title: 'Latest Tips',
      description:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      noTips: 'No tips to display at the moment.',
      readTip: 'Read tip',
      backToList: 'Back to list',
      featuredTips: 'Featured Tips',
      allTips: 'All Tips',
      tipsAvailable: 'tips available',
      tipAvailable: 'tip available',
      editOnGithub: 'Edit on GitHub',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.', // For required fields (fallback)
      required_field_custom: 'The {fieldName} field is required.',
      // String errors
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
      // You can add more specific messages as needed
    },
  },
} as const;

export const getLanguageName = (lang: LanguageCode) => languages[lang];

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  lang: LanguageCode | undefined,
  feature: F
) {
  const currentLanguage = lang || defaultLanguage;

  // Get the available keys for this feature from the default language
  type AvailableKeys = keyof UISchema[typeof defaultLanguage][F];

  return function t(key: AvailableKeys): string {
    // Safely access the translation, falling back to default language if necessary
    const featureTranslations =
      ui[currentLanguage]?.[
        feature as keyof (typeof ui)[typeof currentLanguage]
      ];
    if (featureTranslations && key in featureTranslations) {
      return featureTranslations[
        key as keyof typeof featureTranslations
      ] as string;
    }

    // Fallback to default language
    return ui[defaultLanguage][feature][
      key as keyof (typeof ui)[typeof defaultLanguage][F]
    ] as string;
  };
}
