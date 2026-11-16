import {
  afrikaZonAdmin,
  afrikaZonCart,
  afrikaZonFavorites,
  afrikaZonHomePage,
  afrikaZonLogin,
  afrikaZonSearch,
} from '@/assets/projects/afrikazon';
import {
  afrikaZonPreviewImage,
  cmsPreviewImage,
  codeHavenPreviewImage,
  samouraStorePreviewImage,
  terralHubPreviewImage,
  parentUpPreviewImage,
  avionicsPreviewImage,
  resumeStudioPreviewImage,
} from '@/assets/projects/all-previews';
import {
  codeHavenAuth,
  codeHavenCourse,
  codeHavenCourses,
  codeHavenEditCourse,
  codeHavenPreview,
  codeHavenProtected,
  codeHavenStudentDashboard,
  codeHavenTeacherDashboard,
} from '@/assets/projects/codehaven';
import {
  parentUpAuth,
  parentUpDashboard,
  parentUpEvent2,
  parentUpEvent3,
  parentUpEvents,
  parentUpFeedback,
  parentUpInvitation,
  parentUpLanding,
  parentUpLanding2,
  parentUpMessaging,
  parentUpProfileFamily,
  parentUpTrustedCircle,
} from '@/assets/projects/parentup';
import {
  resumeStudioIntake,
  resumeStudioLanding,
  resumeStudioProcessingPolicy,
  resumeStudioTailoredResume,
} from '@/assets/projects/resumestudio';
import {
  terralHubAboutUs,
  terralHubCompaniesList,
  terralHubCompanyDetails,
  terralHubLogin,
  terralHubLogistics,
  terralHubWarehouseDetails,
  terralHubWarehousesList,
  terralHubWarehousesListMapInfo,
} from '@/assets/projects/terralHub';

import { z } from 'zod';

// Import i18n utilities
import {
  defaultLanguage,
  ui,
  useTranslations,
  type LanguageCode,
} from '@/i18n/ui';
import type { CaseStudy, Proof, ProjectData, TranslatedProject } from './type';

/**
 * Every project, in the order a visitor sees them: highlighted projects first
 * (large cards, then compact ones), archives last.
 */
const projectsData: Array<ProjectData> = [
  {
    id: 'resumeStudio',
    slug: 'resume-studio',
    showcase: 'large',
    onHomePage: true,
    imageUrl: resumeStudioPreviewImage,
    projectUrl: 'https://resume-studio.bakateba.workers.dev/',
    codeUrl: 'https://github.com/bakate/resume-tailoring',
    tags: [
      'TypeScript',
      'DDD',
      'Hexagonal Architecture',
      'AI SDK',
      'TanStack Start',
      'Cloudflare Workers',
      'Vitest',
      'Playwright',
    ],
    category: 'AI Resume Tailoring',
    date: '2026-09-26',
    galleryImages: [
      { id: 'resumeStudioLanding', src: resumeStudioLanding },
      { id: 'resumeStudioIntake', src: resumeStudioIntake },
      { id: 'resumeStudioTailoredResume', src: resumeStudioTailoredResume },
      { id: 'resumeStudioProcessingPolicy', src: resumeStudioProcessingPolicy },
    ],
    keyFeatures: [
      { id: 'explainableMatchScore' },
      { id: 'noFabrication' },
      { id: 'modelQualification' },
      { id: 'processingConsent' },
      { id: 'dailyQuota' },
      { id: 'architectureRules' },
    ],
    technologiesUsed: [
      { id: 'typescript', name: 'TypeScript' },
      { id: 'react', name: 'React' },
      { id: 'tanstack-start', name: 'TanStack Start' },
      { id: 'vercel-ai-sdk', name: 'Vercel AI SDK' },
      { id: 'mantine', name: 'Mantine' },
      { id: 'turborepo', name: 'Turborepo' },
      { id: 'dependency-cruiser', name: 'dependency-cruiser' },
      { id: 'vitest', name: 'Vitest' },
      { id: 'playwright', name: 'Playwright' },
      { id: 'cloudflare-workers', name: 'Cloudflare Workers' },
    ],
  },
  {
    id: 'parentUp',
    slug: 'parent-up',
    showcase: 'large',
    onHomePage: true,
    imageUrl: parentUpPreviewImage,
    tags: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'shadcn/ui',
      'zod',
      'resend',
      'Turborepo',
      'convex',
      'openAI',
      'AI SDK',
      'RAG',
      'clerk',
    ],
    category: 'Co-Parenting Platform',
    date: '2025-11-01',
    galleryImages: [
      { id: 'parentUpEvent3', src: parentUpEvent3 },
      { id: 'parentUpEvent2', src: parentUpEvent2 },
      { id: 'parentUpEvents', src: parentUpEvents },
      { id: 'parentUpAuth', src: parentUpAuth },
      { id: 'parentUpInvitation', src: parentUpInvitation },
      { id: 'parentUpDashboard', src: parentUpDashboard },
      { id: 'parentUpProfileFamily', src: parentUpProfileFamily },
      { id: 'parentUpTrustedCircle', src: parentUpTrustedCircle },
      { id: 'parentUpMessaging', src: parentUpMessaging },
      { id: 'parentUpFeedback', src: parentUpFeedback },
    ],
    keyFeatures: [
      { id: 'authentication' },
      { id: 'organizationManagement' },
      { id: 'invitationFlow' },
      { id: 'sharedCalendar' },
      { id: 'eventManagement' },
      { id: 'childInformation' },
      { id: 'incidentReporting' },
      { id: 'secureMessaging' },
      { id: 'trustedCircle' },
      { id: 'aiLegalAssistant' },
      { id: 'dashboard' },
    ],
    technologiesUsed: [
      { id: 'nextjs', name: 'Next.js' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
      { id: 'shadcn-ui', name: 'shadcn/ui' },
      { id: 'openai', name: 'OpenAI' },
      { id: 'vercel-ai-sdk', name: 'Vercel AI SDK' },
      { id: 'turbo-repo', name: 'TurboRepo' },
      { id: 'jotai', name: 'Jotai' },
      { id: 'convex', name: 'Convex' },
      { id: 'clerk', name: 'Clerk' },
      { id: 'zod', name: 'Zod' },
      { id: 'vitest', name: 'Vitest' },
      { id: 'resend', name: 'Resend' },
      { id: 'next-intl', name: 'Next-Intl' },
      { id: 'vercel', name: 'Vercel' },
    ],
  },
  {
    id: 'terralhub',
    slug: 'terralhub',
    showcase: 'compact',
    onHomePage: true,
    imageUrl: terralHubPreviewImage,
    tags: ['Next.js', 'TailwindCSS', 'TypeScript', 'shadcn/ui', 'PayDunya'],
    category: 'logisticsPlatform',
    date: '2025-05-14',
    galleryImages: [
      {
        id: 'terralHubLogin',
        src: terralHubLogin,
      },
      {
        id: 'terralHubLogistics',
        src: terralHubLogistics,
      },
      {
        id: 'terralHubCompaniesList',
        src: terralHubCompaniesList,
      },
      {
        id: 'terralHubCompanyDetails',
        src: terralHubCompanyDetails,
      },
      {
        id: 'terralHubWarehousesList',
        src: terralHubWarehousesList,
      },
      {
        id: 'terralHubWarehouseDetails',
        src: terralHubWarehouseDetails,
      },
      {
        id: 'terralHubWarehousesListMapInfo',
        src: terralHubWarehousesListMapInfo,
      },
      {
        id: 'terralHubAboutUs',
        src: terralHubAboutUs,
      },
    ],
    keyFeatures: [
      { id: 'userManagement' }, // Gestion des comptes utilisateurs
      { id: 'roleManagement' }, // Gestion des rôles : agriculteurs, entrepôts, transporteurs
      { id: 'warehouseSearchAndBooking' }, // Recherche et réservation d'entrepôts
      { id: 'transporterSearchAndBooking' }, // Recherche et réservation de transporteurs
      { id: 'realTimeWarehouseMonitoring' }, // Suivi en temps réel de la capacité des entrepôts
      { id: 'securePaymentGateway' }, // Paiements d'acomptes sécurisés via PayDunya
      { id: 'inventoryTrackingForFarmers' }, // Suivi des stocks pour les agriculteurs et gestion pour les entrepôts
      { id: 'pwaSupport' }, // Accès via Progressive Web App
      { id: 'adminDashboard' }, // Tableau de bord administrateur
    ],
    technologiesUsed: [
      { id: 'nextjs', name: 'Next.js' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'tanstack-query', name: 'TanStack/React-Query' },
      { id: 'shadcn-ui', name: 'shadcn/ui' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
      { id: 'tRPC', name: 'tRPC' },
      { id: 'authjs', name: 'AuthJS' },
      { id: 'next-intl', name: 'Next-Intl' },
      { id: 'paydunya', name: 'PayDunya' },
      { id: 'vercel', name: 'Vercel' },
    ],
  },
  {
    id: 'avionics',
    slug: 'avionics',
    showcase: 'compact',
    onHomePage: true,
    imageUrl: avionicsPreviewImage,
    projectUrl: 'https://avionics-effect.vercel.app/',
    codeUrl: 'https://github.com/bakate/avionics',
    tags: [
      'React',
      'TypeScript',
      'Vite',
      'Turborepo',
      'Effect',
      'XState',
      'Hexagonal Architecture',
    ],
    category: 'Avionics Simulator',
    date: '2026-03-30',
    galleryImages: [],
    keyFeatures: [
      { id: 'monorepoArchitecture' },
      { id: 'frameworkAgnosticUi' },
      { id: 'effectResilience' },
      { id: 'propertyBasedTesting' },
      { id: 'nativeDi' },
      { id: 'parseDontValidate' },
    ],
    technologiesUsed: [
      { id: 'react', name: 'React' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'vite', name: 'Vite' },
      { id: 'turborepo', name: 'Turborepo' },
      { id: 'effect', name: 'Effect (TS)' },
      { id: 'xstate', name: 'XState' },
      { id: 'vitest', name: 'Vitest' },
      { id: 'fast-check', name: 'Fast-Check (PBT)' },
      { id: 'polar', name: 'Polar' },
      { id: 'scalar', name: 'Scalar' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
    ],
  },
  {
    id: 'b2bOrderPlatform',
    slug: 'b2b-order-platform',
    showcase: 'compact',
    codeUrl: 'https://github.com/bakate/b2b-order-platform',
    tags: [
      'NestJS',
      'TypeScript',
      'DDD',
      'Hexagonal Architecture',
      'React',
      'XState',
      'OpenAPI',
      'Turborepo',
    ],
    category: 'B2B Order Platform',
    date: '2026-07-09',
    galleryImages: [],
    keyFeatures: [
      { id: 'isolatedDomain' },
      { id: 'apiContract' },
      { id: 'hardenedApi' },
      { id: 'frontendStateMachines' },
    ],
    technologiesUsed: [
      { id: 'nestjs', name: 'NestJS' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'zod', name: 'Zod' },
      { id: 'scalar', name: 'Scalar' },
      { id: 'react', name: 'React' },
      { id: 'vite', name: 'Vite' },
      { id: 'xstate', name: 'XState' },
      { id: 'mantine', name: 'Mantine' },
      { id: 'turborepo', name: 'Turborepo' },
      { id: 'biome', name: 'Biome' },
      { id: 'vitest', name: 'Vitest' },
    ],
  },
  {
    id: 'codeHaven',
    slug: 'code-haven',
    showcase: 'archive',
    imageUrl: codeHavenPreviewImage,
    codeUrl: 'https://github.com/bakate/code-haven',
    tags: ['Next.js', 'TypeScript', 'drizzle-orm', 'postgresql'],
    category: 'LMS (Learning Management System)',
    date: '2024-07-15',
    galleryImages: [
      {
        id: 'codeHavenAuth',
        src: codeHavenAuth,
      },
      {
        id: 'codeHavenCourses',
        src: codeHavenCourses,
      },
      {
        id: 'codeHavenCourse',
        src: codeHavenCourse,
      },
      {
        id: 'codeHavenPreview',
        src: codeHavenPreview,
      },
      {
        id: 'codeHavenProtected',
        src: codeHavenProtected,
      },
      {
        id: 'codeHavenStudentDashboard',
        src: codeHavenStudentDashboard,
      },
      {
        id: 'codeHavenTeacherDashboard',
        src: codeHavenTeacherDashboard,
      },
      {
        id: 'codeHavenEditCourse',
        src: codeHavenEditCourse,
      },
    ],
    keyFeatures: [
      { id: 'authentication' },
      { id: 'dashboard' },
      { id: 'userManagement' },
      { id: 'contentEditing' },
      { id: 'progressCalculation' },
      { id: 'studentDashboard' },
      { id: 'teacherMode' },
      { id: 'createNewCourses' },
      { id: 'createNewChapters' },
      { id: 'dragAndDrop' },
      { id: 'uploadThing' },
      { id: 'mux' },
      { id: 'hlsPlayer' },
      { id: 'richTextEditor' },
    ],
    technologiesUsed: [
      { id: 'nextjs', name: 'Next.js' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'drizzle-orm', name: 'Drizzle ORM' },
      { id: 'postgresql', name: 'PostgreSQL' },
      { id: 'hono', name: 'Hono' },
      { id: 'tanstack-query', name: 'TanStack/React-Query' },
      { id: 'heroui', name: 'Hero UI' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
      { id: 'tRPC', name: 'tRPC' },
      { id: 'authjs', name: 'AuthJS' },
      { id: 'next-intl', name: 'Next-Intl' },
      { id: 'vercel', name: 'Vercel' },
      { id: 'mux', name: 'Mux' },
    ],
  },
  {
    id: 'afrikaZon',
    slug: 'afrikazon',
    showcase: 'archive',
    imageUrl: afrikaZonPreviewImage,
    projectUrl: 'https://africazon.vercel.app/',
    tags: [
      'Next.js',
      'TailwindCSS',
      'TypeScript',
      'shadcn/ui',
      'hono',
      'tanstack-query',
      'drizzle-orm',
      'postgresql',
    ],
    category: 'E-commerce Platform',
    date: '2024-03-22',
    galleryImages: [
      {
        id: 'afrikaZonHomePage',
        src: afrikaZonHomePage,
      },
      {
        id: 'afrikaZonSearch',
        src: afrikaZonSearch,
      },
      {
        id: 'afrikaZonCart',
        src: afrikaZonCart,
      },
      {
        id: 'afrikaZonFavorites',
        src: afrikaZonFavorites,
      },
      {
        id: 'afrikaZonLogin',
        src: afrikaZonLogin,
      },
      {
        id: 'afrikaZonAdmin',
        src: afrikaZonAdmin,
      },
    ], // Placeholder
    keyFeatures: [
      { id: 'authentication' },
      { id: 'checkout' },
      { id: 'productDisplay' },
      { id: 'cart' },
      { id: 'paymentProcessing' },
      { id: 'shipping' },
      { id: 'orderManagement' },
      { id: 'inventoryManagement' },
      { id: 'customerSupport' },
      { id: 'paymentProcessing' },
      { id: 'shipping' },
      { id: 'orderManagement' },
      { id: 'roleManagement' },
      { id: 'inventoryManagement' },
      { id: 'customerSupport' },
    ],
    technologiesUsed: [
      { id: 'nextjs', name: 'Next.js' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'shadcn/ui', name: 'shadcn/ui' },
      { id: 'hono', name: 'Hono' },
      { id: 'tanstack-query', name: 'TanStack/React-Query' },
      { id: 'drizzle-orm', name: 'Drizzle ORM' },
      { id: 'postgresql', name: 'PostgreSQL' },
      { id: 'vercel', name: 'Vercel' },
      { id: 'stripe', name: 'Stripe' },
      { id: 'cloudinary', name: 'Cloudinary' },
    ],
  },
  {
    id: 'samouraStore',
    slug: 'samoura-store',
    showcase: 'archive',
    imageUrl: samouraStorePreviewImage,
    projectUrl: 'https://e-commerce-cms-ney3.vercel.app/',
    codeUrl: 'https://github.com/bakate/e-commerce-store',
    tags: ['Next.js', 'TailwindCSS', 'TypeScript', 'shadcn/ui'],
    category: 'E-commerce Storefront', // Placeholder
    date: '2023-05-10', // Placeholder
    galleryImages: [], // Placeholder
    keyFeatures: [{ id: 'productDisplay' }, { id: 'cart' }],
    technologiesUsed: [
      { id: 'nextjs', name: 'Next.js' },
      { id: 'typescript', name: 'TypeScript' },
    ], // Placeholder
  },
  {
    id: 'cms',
    slug: 'cms',
    showcase: 'archive',
    imageUrl: cmsPreviewImage,
    codeUrl: 'https://github.com/bakate/e-commerce-cms',
    tags: ['Next.js', 'TailwindCSS', 'TypeScript', 'shadcn/ui'],
    category: 'Content Management System', // Placeholder
    date: '2023-04-15', // Placeholder
    galleryImages: [], // Placeholder
    keyFeatures: [{ id: 'userManagement' }, { id: 'contentEditing' }], // Placeholder with IDs
    technologiesUsed: [
      { id: 'nextjs', name: 'Next.js' },
      { id: 'typescript', name: 'TypeScript' },
    ], // Placeholder
  },
];

/** A demo or repository link is a public https URL, or absent. */
const projectLinksSchema = z.object({
  projectUrl: z.url({ protocol: /^https$/ }).optional(),
  codeUrl: z.url({ protocol: /^https$/ }).optional(),
});

export const projectsList: Array<ProjectData> = projectsData.map((project) => ({
  ...project,
  ...projectLinksSchema.parse(project),
}));

// Helper function to translate a single project
function translateProject(
  project: ProjectData,
  lang: LanguageCode
): TranslatedProject {
  type ProjectIdKey =
    keyof (typeof ui)[typeof defaultLanguage]['projectsContent'];
  const currentProjectId = project.id as ProjectIdKey;

  // Ensure fallback to defaultLanguage for the entire project's content if not found in currentLang
  const projectContentSource = ui[lang]?.projectsContent?.[currentProjectId]
    ? ui[lang].projectsContent
    : ui[defaultLanguage].projectsContent;

  const i18nData = projectContentSource[currentProjectId];
  // Content tables are typed per project, and only some carry a case study.
  const { caseStudy } = i18nData as { caseStudy?: CaseStudy };

  // Translate key features
  const keyFeaturesTranslated =
    project.keyFeatures?.map((kf) => {
      const typedKeyFeatures = i18nData?.keyFeatures as Record<
        string,
        { title: string; description: string } | undefined
      >;
      const featureTranslations = typedKeyFeatures?.[kf.id] ?? {
        title: kf.id,
        description: 'Description missing',
      };
      return {
        ...kf,
        title: featureTranslations.title,
        description: featureTranslations.description,
      };
    }) ?? [];

  const galleryImagesTranslated =
    project.galleryImages?.map((gi) => {
      const typedGalleryImages = i18nData?.galleryImages as Record<
        string,
        { alt: string; caption: string } | undefined
      >;
      const imageTranslations = typedGalleryImages?.[gi.id] ?? {
        alt: `Alt text for ${gi.id} missing`,
        caption: '',
      };
      return {
        ...gi, // This includes src and id
        alt: imageTranslations.alt,
        caption: imageTranslations.caption,
      };
    }) ?? [];

  return {
    ...project,
    title: i18nData.title,
    description: i18nData.description,
    imageAltText: i18nData.imageAltText,
    categoryText: i18nData.categoryText ?? project.category,
    dateText: i18nData.dateText ?? project.date,
    detailedDescription: i18nData.detailedDescription,
    keyFeaturesTranslated,
    galleryImagesTranslated,
    caseStudy,
    challenges: i18nData.challenges,
    learnings: i18nData.learnings,
  };
}

/** The home page's featured projects, in showcase order. */
export function getHomePageProjects(
  lang: LanguageCode | undefined
): Array<TranslatedProject> {
  return getTranslatedProjects(lang).filter((project) => project.onHomePage);
}

/** The projects page: highlighted projects first, then the Archives. */
export function getProjectsShowcase(lang: LanguageCode | undefined): {
  highlighted: Array<TranslatedProject>;
  archives: Array<TranslatedProject>;
} {
  const projects = getTranslatedProjects(lang);
  return {
    highlighted: projects.filter((project) => project.showcase !== 'archive'),
    archives: projects.filter((project) => project.showcase === 'archive'),
  };
}

// Function to get projects with translated content
export function getTranslatedProjects(
  lang: LanguageCode | undefined
): Array<TranslatedProject> {
  const currentLang = lang || defaultLanguage;
  return projectsList.map((project) => translateProject(project, currentLang));
}

// Function to get a single project by its slug (untranslated)
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsList.find((project) => project.slug === slug);
}

// Function to get a single translated project by its slug
export function getTranslatedProjectBySlug(
  slug: string,
  lang: LanguageCode | undefined
): TranslatedProject | undefined {
  const project = getProjectBySlug(slug);
  if (!project) {
    return undefined;
  }
  const currentLang = lang || defaultLanguage;
  return translateProject(project, currentLang);
}

/** The measured outcomes shown under the hero, in display order. */
export function getTranslatedProofs(
  lang: LanguageCode | undefined
): Array<Proof> {
  const t = useTranslations(lang, 'homePage');
  return [
    {
      figure: t('proofLoadTimeFigure'),
      context: t('proofLoadTimeContext'),
    },
    {
      figure: t('proofBackOfficeFigure'),
      context: t('proofBackOfficeContext'),
    },
    {
      figure: t('proofExperienceFigure'),
      context: t('proofExperienceContext'),
    },
  ];
}
