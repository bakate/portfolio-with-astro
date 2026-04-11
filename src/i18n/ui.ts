export const languages: Record<'fr' | 'en', { name: string; flag: string }> = {
  fr: { name: 'Français', flag: 'fr' },
  en: { name: 'English', flag: 'us' },
} as const;

export const defaultLanguage = 'fr';

export type LanguageCode = keyof typeof languages;

export const ui = {
  fr: {
    projectsContent: {
      parentUp: {
        title: 'Parent Up - Plateforme de Coparentalité',
        description: 'Plateforme de coordination pour parents séparés.',
        imageAltText: "Aperçu de l'application Parent Up",
        categoryText: 'SaaS Coparentalité',
        dateText: 'Novembre 2025',
        detailedDescription:
          'Application Next.js structurée autour des Organisations Clerk. Elle centralise la messagerie, le calendrier de garde et le suivi des incidents. Inclut une assistance juridique basée sur un moteur RAG.',
        keyFeatures: {
          authentication: {
            title: 'Accès Sécurisé',
            description:
              'Authentification via Clerk avec isolation des données par cellule familiale.',
          },
          organizationManagement: {
            title: 'Structure Familiale',
            description:
              'Modélisation des familles via Clerk Organizations. Partage des ressources entre membres autorisés.',
          },
          invitationFlow: {
            title: 'Flux d’Invitation',
            description:
              'Système automatisé pour inviter le coparent et le cercle de confiance.',
          },
          sharedCalendar: {
            title: 'Calendrier Synchrone',
            description:
              'Suivi des rendez-vous médicaux et scolaires partagé en temps réel.',
          },
          eventManagement: {
            title: 'Planning de Garde',
            description:
              'Configuration des routines et alternances avec rappels automatiques.',
          },
          childInformation: {
            title: 'Dossiers Enfants',
            description:
              'Centralisation des documents santé, scolarité et contacts d’urgence.',
          },
          incidentReporting: {
            title: 'Registre des Incidents',
            description:
              'Journal de suivi horodaté avec stockage de pièces jointes pour historique légal.',
          },
          secureMessaging: {
            title: 'Messagerie Interne',
            description:
              'Canal de communication chiffré avec notifications push.',
          },
          trustedCircle: {
            title: 'Cercle de Confiance',
            description:
              'Gestion fine des permissions pour les proches et les intervenants.',
          },
          aiLegalAssistant: {
            title: 'Assistance IA',
            description:
              'Interface de chat pour l’analyse documentaire et l’aide à la décision.',
          },
          dashboard: {
            title: 'Vue Consolidée',
            description:
              'Tableau de bord regroupant les urgences, messages et événements du jour.',
          },
        },
        galleryImages: {
          parentUpLanding: {
            alt: "Page d'accueil de Parent Up",
            caption: 'Présentation de la plateforme de coparentalité',
          },
          parentUpLanding2: {
            alt: "Deuxième aperçu de la page d'accueil",
            caption: 'Vue alternative du landing',
          },
          parentUpAuth: {
            alt: "Écran d'authentification Parent Up",
            caption: "Connexion et gestion de l'accès par famille",
          },
          parentUpInvitation: {
            alt: "Flux d'invitation via Clerk",
            caption: 'Inviter le coparent et le cercle de confiance',
          },
          parentUpDashboard: {
            alt: 'Tableau de bord familial',
            caption: 'Vue synthétique: messages, événements, incidents',
          },
          parentUpProfileFamily: {
            alt: 'Profil famille et enfants',
            caption: 'Informations et membres de la famille',
          },
          parentUpTrustedCircle: {
            alt: 'Gestion du cercle de confiance',
            caption: 'Famille élargie et intervenants',
          },
          parentUpEvents: {
            alt: 'Calendrier des événements partagés',
            caption: 'Activités scolaires, médicales, extrascolaires',
          },
          parentUpEvent2: {
            alt: 'Aperçu calendrier – exemple 2',
            caption: 'Organisation des gardes',
          },
          parentUpEvent3: {
            alt: 'Aperçu calendrier – exemple 3',
            caption: 'Rappels et notifications',
          },
          parentUpMessaging: {
            alt: 'Messagerie sécurisée',
            caption: 'Communication entre coparents',
          },
          parentUpFeedback: {
            alt: 'Feedback et rapports',
            caption: 'Retour et améliorations continues',
          },
        },
        challenges:
          'Structurer un modèle de données multi-tenants (par famille) tout en maintenant une UX fluide pour des utilisateurs sous pression.',
        learnings:
          "L'utilisation des organisations Clerk réduit la complexité du middleware de sécurité et clarifie l'ownership des données.",
      },
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
          'Une plateforme où tu peux créer, éditer et supprimer du contenu.',
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
            caption: "Trouve l'entrepôt idéal pour tes récoltes",
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
      avionics: {
        title: 'Avionics',
        description: 'Moteur de réservation de vols à haute disponibilité.',
        detailedDescription:
          "Système critique conçu en architecture hexagonale avec Effect-TS. Sépare strictement le domaine pur de l'infrastructure pour garantir un comportement déterministe sous forte charge.",
        categoryText: 'Système Distribué',
        dateText: 'Mars 2026',
        imageAltText: "Interface d'Avionics",
        galleryImages: {},
        keyFeatures: {
          monorepoArchitecture: {
            title: 'Monorepo Turborepo',
            description:
              'Partage de types et de logique métier entre services via catalogs pnpm.',
          },
          effectResilience: {
            title: 'Résilience via Effect',
            description:
              'Gestion déclarative des pannes réseau et encodage des erreurs dans le système de types.',
          },
          propertyBasedTesting: {
            title: 'Property-Based Testing',
            description:
              'Validation des invariants via fast-check pour couvrir les cas limites.',
          },
          nativeDi: {
            title: 'Injection de Dépendances',
            description:
              'Utilisation du compilateur Effect pour injecter les services sans decorators.',
          },
          frameworkAgnosticUi: {
            title: 'UI "Dumb" & XState',
            description:
              "Les composants React se limitent à l'affichage aveugle. Toute la logique, et le workflows de réservation complexes, sont orchestrés par des machines d'états déterministes (XState).",
          },
          parseDontValidate: {
            title: 'API Incassable & OpenAPI',
            description:
              'Approche "Parse, don\'t validate" propulsée par @effect/platform. Les endpoints ne lâchent aucun throw : chaque erreur métier mappe automatiquement vers les bons statuts HTTP d\'une documentation Scalar vivante.',
          },
        },
        challenges:
          "Passer d'une approche orientée objet classique à une architecture 100% fonctionnelle pour garantir l'atomicité des réservations.",
        learnings:
          "Le traitement de l'échec comme un contrat de type (et non une exception) rend le système prédictible et facile à tester.",
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
  },
  en: {
    projectsContent: {
      parentUp: {
        title: 'Parent Up',
        description: 'Coordination platform for separated parents.',
        imageAltText: 'Parent Up application preview',
        categoryText: 'Co-Parenting Platform',
        dateText: 'November 2025',
        detailedDescription:
          'Next.js application built on Clerk Organizations. Centralizes messaging, custody schedules, and incident tracking. Features an AI legal assistant powered by RAG.',
        keyFeatures: {
          authentication: {
            title: 'Secure Access',
            description:
              'Clerk-based authentication with family-level data isolation.',
          },
          organizationManagement: {
            title: 'Family Structure',
            description:
              'Data modeling using Clerk Organizations for consistent member access.',
          },
          incidentReporting: {
            title: 'Incident Logs',
            description:
              'Timestamped tracking with attachments for legal record-keeping.',
          },
          aiLegalAssistant: {
            title: 'AI Assistant',
            description: 'Document analysis and decision support interface.',
          },
          invitationFlow: {
            title: 'Co-parent Invitation Flow',
            description:
              'Invite the co-parent and trusted circle members with Clerk-managed invitations.',
          },
          sharedCalendar: {
            title: 'Shared Calendar',
            description:
              'Calendar for school, medical, and extracurricular activities synchronized within the family.',
          },
          eventManagement: {
            title: 'Event and Custody Management',
            description:
              'Plan custody schedules, events, routines with notifications and reminders.',
          },
          childInformation: {
            title: 'Child Information Sheets',
            description:
              'Health, school, sizes, contacts, and documents accessible to authorized members.',
          },

          secureMessaging: {
            title: 'Secure Messaging',
            description:
              'Communication between co-parents and trusted circle with notifications and attachments.',
          },
          trustedCircle: {
            title: 'Trusted Circle Management',
            description:
              'Manage extended family and caregivers with adjustable access rights.',
          },
          dashboard: {
            title: 'Family Dashboard',
            description:
              'Consolidated view of messages, events, incidents, and child info.',
          },
        },
        galleryImages: {
          parentUpLanding: {
            alt: 'Parent Up landing page',
            caption: 'Overview of the co-parenting platform',
          },
          parentUpLanding2: {
            alt: 'Alternate landing preview',
            caption: 'Secondary landing view',
          },
          parentUpAuth: {
            alt: 'Parent Up authentication screen',
            caption: 'Family-scoped access control',
          },
          parentUpInvitation: {
            alt: 'Clerk invitation flow',
            caption: 'Invite co-parent and trusted members',
          },
          parentUpDashboard: {
            alt: 'Family dashboard',
            caption: 'Messages, events, incidents overview',
          },
          parentUpProfileFamily: {
            alt: 'Family and children profile',
            caption: 'Family info and members',
          },
          parentUpTrustedCircle: {
            alt: 'Trusted circle management',
            caption: 'Extended family and caregivers',
          },
          parentUpEvents: {
            alt: 'Shared events calendar',
            caption: 'School, medical, extracurricular activities',
          },
          parentUpEvent2: {
            alt: 'Calendar preview – example 2',
            caption: 'Custody organization',
          },
          parentUpEvent3: {
            alt: 'Calendar preview – example 3',
            caption: 'Reminders and notifications',
          },
          parentUpMessaging: {
            alt: 'Secure messaging',
            caption: 'Communication between co-parents',
          },
          parentUpFeedback: {
            alt: 'Feedback and reports',
            caption: 'Continuous improvements and reporting',
          },
        },
        challenges:
          'Architecting a multi-tenant family model while maintaining a seamless UX for users in high-stress situations.',
        learnings:
          'Clerk Organizations significantly reduce security middleware complexity and clarify data ownership.',
      },
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
        description:
          'TerralHub is an innovative platform designed for Senegalese farmers. It enables them to easily find secure, nearby warehouses to store their harvests post-collection, significantly helping to reduce post-harvest losses. The platform also facilitates connections with reliable transporters to move agricultural products to storage locations. Farmers can make down payments for warehouse and transport bookings via PayDunya, and track available warehouse capacity in real-time.',
        imageAltText: 'TerralHub platform preview',
        categoryText: 'Logistics Platform',
        dateText: 'May 2025',
        detailedDescription:
          'TerralHub aims to revolutionize the agricultural supply chain in Senegal by directly connecting farmers to storage and transport solutions. By reducing post-harvest losses and optimizing logistics, the platform helps improve farmer incomes and strengthen food security. It integrates a secure payment system and offers real-time visibility into storage capacities, enabling effective planning.',
        keyFeatures: {
          userManagement: {
            title: 'User Account Management',
            description:
              'Secure accounts for farmers, warehouse owners, and transporters, with personalized profiles.',
          },
          roleManagement: {
            title: 'Role and Permission Management',
            description:
              'Assignment of specific roles (farmer, warehouse, transporter, admin) with tailored access rights.',
          },
          warehouseSearchAndBooking: {
            title: 'Warehouse Search and Booking',
            description:
              'Easy location of available warehouses, consultation of details (capacity, price, services), and online booking.',
          },
          transporterSearchAndBooking: {
            title: 'Transporter Search and Booking',
            description:
              'Connection with verified transporters, quote requests, and booking of transport services.',
          },
          realTimeWarehouseMonitoring: {
            title: 'Real-Time Warehouse Capacity Monitoring',
            description:
              'Live visualization of available storage space in partner warehouses.',
          },
          securePaymentGateway: {
            title: 'Secure Payment Gateway (PayDunya)',
            description:
              'Payment of down payments and services via PayDunya, with transaction tracking.',
          },
          inventoryTrackingForFarmers: {
            title: 'Inventory Tracking and Management',
            description:
              'Tools for farmers to track their stored goods and for warehouses to manage their inventory.',
          },
          pwaSupport: {
            title: 'Progressive Web App (PWA) Support',
            description:
              'Easy access and offline features via an installable PWA on mobile and desktop.',
          },
          adminDashboard: {
            title: 'Admin Dashboard',
            description:
              'Comprehensive interface for platform management, users, transactions, and disputes.',
          },
        },
        galleryImages: {
          terralHubLogin: {
            alt: 'TerralHub Login Page',
            caption: 'Secure access to the TerralHub platform',
          },
          terralHubLogistics: {
            alt: 'TerralHub Logistics Interface',
            caption: 'Management of logistics operations',
          },
          terralHubCompaniesList: {
            alt: 'List of Partner Companies on TerralHub',
            caption: 'Trusted partners for storage and transport',
          },
          terralHubCompanyDetails: {
            alt: 'Company Details on TerralHub',
            caption: 'Complete information about partners',
          },
          terralHubWarehousesList: {
            alt: 'List of Available Warehouses on TerralHub',
            caption: 'Find the ideal warehouse for your harvests',
          },
          terralHubWarehouseDetails: {
            alt: 'Warehouse Details on TerralHub',
            caption: 'Capacity, services, and rates of warehouses',
          },
          terralHubWarehousesListMapInfo: {
            alt: 'Map of Warehouses on TerralHub',
            caption: 'Geographical location of warehouses',
          },
          terralHubAboutUs: {
            alt: 'TerralHub About Us Page',
            caption: 'Our mission for Senegalese agriculture',
          },
        },
        challenges:
          'Developing a robust and accessible solution for users with varying levels of technological proficiency, while ensuring transaction security and the reliability of logistical information.',
        learnings:
          'The importance of user-centered design and close collaboration with agricultural sector stakeholders to best meet their specific needs.',
      },
      avionics: {
        title: 'Avionics',
        description: 'High-availability flight booking engine.',
        detailedDescription:
          'Mission-critical system built with Hexagonal Architecture and Effect-TS. Strictly decouples domain logic from infrastructure for deterministic behavior.',
        categoryText: 'Critical Booking Platform',
        dateText: 'March 2026',
        imageAltText: 'Avionics Interface',
        galleryImages: {},
        keyFeatures: {
          effectResilience: {
            title: 'Effect Resilience',
            description:
              'Declarative network failure management and type-level error encoding.',
          },
          nativeDi: {
            title: 'Native DI',
            description:
              'Dependency injection handled by the Effect compiler without decorators.',
          },
          monorepoArchitecture: {
            title: 'Monorepo & pnpm Catalogs',
            description:
              'Seamless sharing of domains and types between Frontend and Backend using Turborepo. Dependency versions are strictly harmonized via pnpm catalogs preventing any mismatches.',
          },
          frameworkAgnosticUi: {
            title: 'Framework Agnostic UI',
            description:
              "React components are completely 'dumb', acting only as views. Complex reservation workflows and invariants are deterministically orchestrated by XState.",
          },

          propertyBasedTesting: {
            title: 'Property-Based Testing',
            description:
              'Validation of over 30 business properties via random fuzzing and payload shrinking (fast-check), ensuring survival across edge cases conventional unit tests would miss.',
          },
          parseDontValidate: {
            title: "Parse, Don't Validate API",
            description:
              'Leveraging @effect/platform for strict schemas mapping internal business failures directly to HTTP status codes, powering an interactive, always-truthful Scalar openAPI spec.',
          },
        },
        challenges:
          'Adopting the rigor of functional languages like Rust or Scala within TypeScript. This involved unlearning conventional patterns (try/catch blocks, heavy IoC) to achieve atomic concurrency under massive booking contention using optimistic locking.',
        learnings:
          'The engineering ROI of this strictness is immense. Treating failures as a formal mathematical contract rather than an implementation detail results in a bulletproof, decoupled system.',
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
      experience: 'Experience',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    experiencePage: {
      pageTitle: 'Experience | Bakate - FullStack Developer',
      pageDescription:
        'Professional background of Bakate: 4 years at Bloomflow, then Founder of Teranga Pulse in Paris.',
      pageHeading: 'Professional Experience',
      presentLabel: 'present',
      stackLabel: 'Tech stack',
      seekingLabel: 'Open to new opportunities',
      downloadCV: 'Download Resume',
      terangaPulse: {
        company: 'Teranga Pulse',
        role: 'Founder & Full-Stack Developer',
        period: 'November 2024 – Present',
        location: 'Paris, France',
        tagline: 'Solo-preneur · Product · Tech · Ops',
        about:
          'Building and operating critical SaaS platforms. Full ownership of product, infrastructure, and software quality.',
        subRoles: [
          {
            project: 'Parent Up',
            role: 'Founder & Full-Stack Developer',
            period: 'July 2025 – Present',
          },
          {
            project: 'Terral Hub',
            role: 'Founder & Full-Stack Developer',
            period: 'November 2024 – June 2025',
          },
        ],
        achievements: {
          product: {
            title: '360° Product Ownership',
            description:
              'Roadmap, UX, architecture, security, monitoring (Sentry), and CI/CD pipelines (GitHub Actions) — fully defined and operated solo.',
          },
          backend: {
            title: 'Real-Time Backend & AI',
            description:
              'Secure messaging, Google Calendar sync, AI legal assistant via RAG (Vercel AI SDK, OpenAI, embeddings), email notifications via Resend.',
          },
          quality: {
            title: 'Design System & Testing',
            description:
              'Internal UI library, strict typing, Vitest and Convex Test coverage. Advanced auth with Clerk Organizations.',
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
        role: 'Full-Stack Developer',
        period: 'November 2020 – November 2024',
        location: 'Paris, France · Hybrid',
        tagline: 'B2B Scale-up · SaaS · 4 years',
        about:
          'Developed open innovation tools for Fortune 500 companies to manage their startup ecosystems.',
        achievements: {
          designSystem: {
            title: 'UI Industrialization (Design System)',
            description:
              'Architected a cross-project Angular component library via Storybook to ensure visual and technical alignment across several modules.',
          },
          migration: {
            title: 'TypeScript Migration & Quality',
            description:
              'Led the JS-to-TS migration of a mission-critical Next.js back-office. Secured the codebase with unit/integration tests and automated CI pipelines.',
          },
          automation: {
            title: 'Operational Impact & SaaS',
            description:
              'Built a self-service module for Customer Success, slashing complex 2-day manual workflows into instant, one-click validations.',
          },
          angular: {
            title: 'Angular Expertise (State Management)',
            description:
              'Managed complex states (NgRx, Signals) and implemented dynamic forms for professional processes with high data volumes.',
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
      pageTitle: 'Home | Bakate - FullStack Developer',
      pageDescription:
        'Welcome to the portfolio of Bakate, a FullStack developer passionate about creating innovative web experiences.',
      heroGreeting: "Hi, I'm Bakate Idrissa",
      heroSubtitlePart1: 'Full Stack Developer',
      heroSubtitlePart2: 'Architecture',
      heroIntroduction:
        'I build end-to-end web applications. I design maintainable systems using TypeScript, Angular, or Next.js.',
      heroIntroduction2:
        'I use hexagonal architecture to isolate business logic and automate quality via Vitest and GitHub Actions/CircleCI.',
      heroViewWorkButton: 'View My Work',
      heroContactButton: "Let's work together",
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
      editOnGithub: 'Edit on GitHub',
      tableOfContents: 'Table of contents',
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
      readingTimeSuffix: 'min read',
      updatedOn: 'Updated on:',
      difficultyBeginner: 'Beginner',
      difficultyIntermediate: 'Intermediate',
      difficultyAdvanced: 'Advanced',
      allDifficulties: 'All difficulties',
      filterByDifficultyLabel: 'Filter by difficulty',
      searchPlaceholder: 'Search for a tip...',
      allTagsLabel: 'All tags',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search a tag...',
      noTipsFound: 'No tips found.',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.', // For required fields (fallback)
      required_field_custom: '{fieldName} is required.',
      // String errors
      too_small_string_minimum:
        '{fieldName} must be at least {minimum} character(s:minimum) long.',
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
