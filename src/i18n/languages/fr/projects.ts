export const projectsContent = {
  parentUp: {
    title: 'Parent Up',
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
        description: 'Canal de communication chiffré avec notifications push.',
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
  resumeStudio: {
    title: 'Resume Studio',
    description:
      "Un CV adapté à chaque offre, sans inventer aucune compétence : l'IA au service d'un domaine métier isolé et testé.",
    detailedDescription:
      "Resume Studio transforme les preuves professionnelles qu'un candidat déclare en une analyse de correspondance explicable, puis en un CV adapté à une offre d'emploi, sans jamais inventer de qualification. Le domaine (exigences, couverture, score, preuves) est modélisé en DDD dans des packages séparés pour le domaine, l'application et le moteur de correspondance. Le modèle de langage n'est qu'un adaptateur derrière un port, et il ne sert qu'après avoir été qualifié par des évaluations enregistrées.",
    categoryText: 'IA et DDD',
    dateText: 'Depuis septembre 2026',
    imageAltText: "Page d'accueil de Resume Studio",
    galleryImages: {},
    keyFeatures: {
      explainableMatchScore: {
        title: 'Score de correspondance explicable',
        description:
          "Chaque exigence de l'offre est pondérée (critique, centrale ou complémentaire) et jugée couverte, partiellement couverte ou non couverte, avec les faits du candidat qui la justifient.",
      },
      noFabrication: {
        title: 'Aucune qualification inventée',
        description:
          'Chaque valeur du CV renvoie à un fait fourni par le candidat. Une compétence voisine est montrée à côté du manque, sans jamais le combler.',
      },
      modelQualification: {
        title: 'Modèle qualifié par évaluation',
        description:
          "Un modèle et ses réglages ne servent qu'après une évaluation enregistrée : rappel d'extraction, fidélité multilingue, latence, coût et sûreté de la provenance.",
      },
      processingConsent: {
        title: 'Consentement versionné',
        description:
          'Le candidat accepte une politique de traitement versionnée avant la première opération du modèle ; tout changement important demande un nouvel accord.',
      },
      dailyQuota: {
        title: 'Quota journalier',
        description:
          'Un nombre de CV gratuits par réseau et par jour, sous un plafond global, remis à zéro à minuit, heure de Paris.',
      },
      architectureRules: {
        title: 'Architecture vérifiée',
        description:
          'Les règles de dépendance entre domaine, application et adaptateurs sont vérifiées automatiquement par dependency-cruiser.',
      },
    },
    challenges:
      "Utiliser un modèle de langage sans le laisser inventer : toute correspondance proposée doit citer un texte présent à la fois dans l'offre et dans les faits du candidat.",
    learnings:
      "Traiter le modèle d'IA comme une dépendance : on le qualifie par des évaluations enregistrées, comme n'importe quel adaptateur, et changer de modèle ou de réglage oblige à le qualifier de nouveau.",
  },
  b2bOrderPlatform: {
    title: 'b2b-order-platform',
    description:
      "Socle d'une plateforme de commandes B2B : une API NestJS en DDD et architecture hexagonale, et un contrat OpenAPI partagé avec le front.",
    detailedDescription:
      "Monorepo Turborepo qui pose les fondations d'une plateforme de commandes B2B. Côté API, chaque module NestJS sépare domaine, application, infrastructure et présentation : le domaine et les cas d'usage restent en TypeScript pur, sans dépendance à Nest. Côté front, une application React et Vite dont les parcours sont orchestrés par des machines XState, avec des types générés depuis le contrat OpenAPI de l'API.",
    categoryText: 'Plateforme B2B',
    dateText: 'Juillet 2026',
    imageAltText: 'Aperçu de b2b-order-platform',
    galleryImages: {},
    keyFeatures: {
      isolatedDomain: {
        title: 'Domaine isolé',
        description:
          "Le domaine et les cas d'usage n'importent rien de NestJS ; les contrôleurs restent fins : ils valident, appellent un cas d'usage et traduisent les erreurs.",
      },
      apiContract: {
        title: "Contrat d'API vérifié",
        description:
          "L'API possède le contrat OpenAPI ; les types du front en sont générés, et une vérification échoue dès qu'ils sont périmés.",
      },
      hardenedApi: {
        title: 'API durcie',
        description:
          "En-têtes de sécurité Helmet, limitation de débit, validation Zod des requêtes, format d'erreur stable et configuration validée au démarrage.",
      },
      frontendStateMachines: {
        title: "Parcours en machines d'états",
        description:
          'Les parcours du front sont des machines XState indépendantes du framework, branchées sur React par des hooks.',
      },
    },
    challenges:
      "Garder NestJS à la périphérie : décorateurs et injection restent dans la présentation et l'infrastructure, pour que les règles métier se testent sans démarrer le framework.",
    learnings:
      "Un contrat d'API généré puis vérifié supprime toute une classe de bugs entre le front et le back.",
  },
  codeHaven: {
    title: 'Code Haven',
    description: "Une plateforme d'apprentissage pour les futurs développeurs.",
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
        description: "Intégration d'UploadThing pour le stockage des vidéos.",
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
        description: 'Gestion des commandes avec des fonctionnalités de suivi.',
      },
      inventoryManagement: {
        title: "Gestion d'Inventaire",
        description: "Gestion d'inventaire avec des fonctionnalités de suivi.",
      },
      customerSupport: {
        title: 'Support Client',
        description: 'Support client with order management.',
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
    title: 'CMS e-commerce',
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
    title: 'Terral Hub',
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
} as const;
