export const uiLabels = {
  site: {
    title: 'Bakate Idrissa Ba | Software Engineer Full-Stack TypeScript',
    description:
      'Portfolio of Bakate Idrissa Ba, Software Engineer Full-Stack TypeScript: SaaS products end to end, with an isolated, tested business domain (DDD, hexagonal architecture, TDD).',
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
    pageTitle: 'Experience | Bakate Idrissa',
    pageDescription:
      'Background of Bakate Idrissa, Full-Stack TypeScript Software Engineer: leZèbre Tech, founder of Teranga Pulse, 4 years at Bloomflow.',
    pageHeading: 'Professional experience',
    stackLabel: 'Stack',
    seekingLabel: 'Open to new opportunities.',
    downloadCV: 'Download my CV',
    entries: [
      {
        company: 'leZèbre Tech',
        role: 'Software Engineer',
        period: 'July 2026 – October 2026',
        location: 'Antony, France',
        summary: 'NestJS backend services with hexagonal architecture and DDD.',
        highlights: [
          'Isolated the business domain from infrastructure through ports and adapters, for testable, maintainable code.',
          'Practiced TDD daily and wrote Gherkin acceptance tests to align product and engineering on expected behavior.',
          'Mentored junior developers through code reviews.',
          'Wrote specifications with LLMs and Linear; shipped lean, incremental releases.',
        ],
        technologies: [
          'NestJS',
          'TypeScript',
          'Node.js',
          'DDD',
          'Hexagonal architecture',
          'TDD',
          'Gherkin',
        ],
      },
      {
        company: 'Teranga Pulse',
        role: 'Founder and Full-Stack Software Engineer',
        period: 'November 2024 – June 2026',
        location: 'Paris / Dakar',
        summary: 'Shipped two MVPs solo, from architecture to production.',
        highlights: [
          'Parent Up (co-parenting): Next.js and TypeScript in a Turborepo monorepo, real-time Convex backend, secure messaging, Google Calendar sync, restricted-access documents and an AI legal assistant (RAG, embeddings, Vercel AI SDK, OpenAI).',
          'Terral Hub (agricultural logistics, Senegal): platform connecting farmers, warehouses and carriers, with booking, real-time capacity tracking, PayDunya payments and an offline-first PWA for low-connectivity areas.',
          'UI built with Tailwind and shadcn/ui, forms with React Hook Form + Zod; signed, idempotent webhooks (Clerk, Convex); Vitest, GitHub Actions CI/CD, Sentry.',
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
        role: 'Full-Stack Software Engineer',
        period: 'November 2020 – November 2024',
        location: 'Paris',
        summary: 'B2B open-innovation SaaS for large enterprises, 4 years.',
        highlights: [
          'Built complex, data-heavy business screens for enterprise clients (Bayer, Unilever, HSBC, Orange, Chanel), in Angular and then React / Next.js.',
          "Reworked the analytics module's loading strategy so each chart and map renders as soon as it is ready, cutting load time from 7–8 s to under 2 s.",
          'Built internal tools and TypeScript / Node.js scripts that turned a critical 2-day manual task into a few clicks in the back office (Next.js).',
          'Designed a design system and internal UI library shared across product teams.',
          'Helped set up an NgRx store (Redux pattern) on the front end to centralize state and avoid redundant API calls.',
          'Automated tests (Jest, Testing Library) in CI; worked in a Kubernetes environment and configured client instances hosted on AWS, OVH and Azure.',
          'Monthly on-call rotation ("Houston"): single point of contact for production bugs, prioritized with the PM, fixed critical issues, shipped the release and briefed Customer Success.',
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
      'Bakate Idrissa Ba, Software Engineer Full-Stack TypeScript: I build SaaS products end to end, with an isolated, tested business domain (DDD, hexagonal architecture, TDD), Next.js and Angular interfaces, and AI where it actually helps.',
    heroPitch:
      'I build SaaS products end to end: an isolated, tested business domain (DDD, hexagonal architecture, TDD), whatever the framework (NestJS, Express…), Next.js and Angular interfaces, and AI where it actually helps.',
    heroAvailability: 'Available · Hybrid Île-de-France / remote',
    heroBookCallButton: 'Book a 15-min call',
    heroDownloadCvButton: 'Download my CV',
    heroImageAlt: 'Portrait of Bakate Idrissa, smiling',
    proofTitle: 'In production, by the numbers',
    proofLoadTimeFigure: '7-8 s → under 2 s',
    proofLoadTimeContext: 'Analytics module load time at Bloomflow',
    proofBackOfficeFigure: '2 days → a few clicks',
    proofBackOfficeContext: 'Internal back-office tool',
    proofExperienceFigure: '5 years',
    proofExperienceContext:
      'of SaaS in production, including 4 at Bloomflow for Bayer, Unilever, HSBC',
    featuredProjectsTitle: 'Featured projects',
    featuredProjectsDescription:
      'Products delivered end to end, around an isolated, tested business domain.',
    experience: {
      title: 'Experience',
      description:
        'Over five years shipping SaaS products, from the business domain to production.',
      cta: 'See my full background',
      entries: [
        {
          company: 'leZèbre Tech',
          role: 'Software Engineer',
          period: 'July 2026 – October 2026',
          summary:
            'NestJS backend services with hexagonal architecture and DDD, daily TDD, Gherkin acceptance tests, code reviews and mentoring of junior developers.',
        },
        {
          company: 'Teranga Pulse',
          role: 'Founder and Full-Stack Software Engineer',
          period: 'November 2024 – June 2026',
          summary:
            'Two MVPs shipped solo, from architecture to production: Parent Up, a co-parenting platform with an AI legal assistant, and Terral Hub, agricultural logistics in Senegal.',
        },
        {
          company: 'Bloomflow',
          role: 'Full-Stack Software Engineer',
          period: 'November 2020 – November 2024',
          summary:
            '4 years on a B2B open-innovation SaaS: data-heavy business screens for Bayer, Unilever and HSBC, in Angular and then React and Next.js.',
        },
      ],
    },
    howIWork: {
      title: 'How I work',
      description:
        'A method that does not depend on the framework: the business first, proven by tests.',
      practices: [
        {
          title: 'DDD and hexagonal architecture',
          description:
            'The business domain lives apart from the infrastructure, behind ports and adapters. It is tested without a database and does not depend on the framework, NestJS or Express alike.',
        },
        {
          title: 'TDD and Gherkin acceptance tests',
          description:
            'I write the test before the code. Gherkin scenarios describe the expected behaviour in the product’s own words, so product and engineering agree before the first line.',
        },
        {
          title: 'AI where it actually helps',
          description:
            'RAG and embeddings in production, with the Parent Up legal assistant, and LLM-assisted specifications before writing the code.',
        },
      ],
      careerChangeTitle: 'Before code, sales',
      careerChange:
        'I spent 10 years in sales before moving into software engineering in 2020. It gave me product sense and a feel for client relationships: I understand the problem before choosing the solution, and I talk to business teams as easily as to developers.',
    },
  },
  blogPage: {
    pageTitle: 'Angular, RxJS, and Frontend Architecture Blog',
    pageDescription:
      'Articles about Angular, RxJS, Frontend Architecture, SaaS Engineering, TypeScript, and web development.',
    title: 'Angular & SaaS Engineering Blog',
    description:
      'Technical notes about Angular, RxJS, frontend architecture, and SaaS product engineering.',
    angularArticlesTitle: 'Angular Articles',
    angularArticlesDescription:
      'Angular, RxJS, Frontend Architecture, and SaaS Engineering content comes first.',
    featuredArticlesTitle: 'Featured Articles',
    allArticlesTitle: 'All articles',
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
    pageTitle: 'Contact | Bakate Idrissa',
    pageDescription:
      'Book a 15-minute call or write to Bakate Idrissa, Full-Stack TypeScript Software Engineer. Also available for freelance missions.',
    title: 'Get in touch',
    description:
      'A role, a project or a technical question: the simplest way is to book 15 minutes. Prefer writing? The form is right below.',
    freelanceLine: 'Also available for freelance missions.',
    bookingTitle: 'Book a call',
    bookingDescription: '15 minutes on video, at a time that suits you.',
    bookingLinkLabel: 'Book a 15-min call',
    formHeading: 'Write to me',
    responseTime: 'Reply within 24 hours.',
    elsewhereLabel: 'Also on',
    linkedInLabel: 'LinkedIn',
    githubLabel: 'GitHub',

    firstNameLabel: 'First name',
    lastNameLabel: 'Last name',
    emailLabel: 'Email',
    companyLabel: 'Company (optional)',
    messageLabel: 'Message',
    sendButtonLabel: 'Send',
    firstNamePlaceholder: 'Your first name',
    lastNamePlaceholder: 'Your last name',
    emailPlaceholder: 'Your email address',
    companyPlaceholder: 'Your company name',
    messagePlaceholder: 'Your message here...',
    toastSuccessMessageSent: 'Message sent successfully!',
    toastErrorFailedToSend: 'Failed to send the message.',
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
    videoTitle: 'Video walkthrough',
    contextTitle: 'Context',
    problemTitle: 'Problem',
    architectureTitle: 'Architecture decisions',
    outcomeTitle: 'Outcome',
    caseStudyLearningsTitle: 'Learnings',
    diagramName: '{project} architecture',
  },
  projectsPage: {
    title: 'Projects',
    metaTitle: 'Full-Stack TypeScript Projects | Bakate Idrissa Ba',
    metaDescription:
      'Resume Studio, Parent Up, Terral Hub and Avionics: products delivered end to end, around an isolated, tested business domain.',
    featuredTitle: 'Featured projects',
    featuredDescription:
      'Products delivered end to end, around an isolated, tested business domain.',
    archivesTitle: 'Archives',
    archivesDescription: 'Older projects, kept for the record.',
  },
  projectCard: {
    viewProject: 'View project',
    viewDemo: 'Demo',
    viewCode: 'Source code',
    technologies: 'Technologies',
  },
  notFoundPage: {
    pageTitle: 'Page not found | Bakate Idrissa',
    title: 'Page not found',
    message:
      'This address does not lead to any page. It may have moved, or contain a typo.',
    homeLink: 'Back to the home page',
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
    difficultyLevel: 'Level',
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
    required_field_custom: 'The {fieldName} is required.',
    // String errors
    too_small_string_minimum:
      'The {fieldName} must be at least {minimum} character(s:minimum) long.',
    too_big_string_maximum: 'Must be no more than {maximum} characters long.',
    invalid_string_email: 'Invalid email address.',
    invalid_string_url: 'Invalid URL.',
    invalid_string_uuid: 'Invalid UUID.',
    // You can add more specific messages as needed
  },
} as const;
