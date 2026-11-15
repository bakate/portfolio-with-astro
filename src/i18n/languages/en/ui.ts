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
          title: 'Angular State Management (NgRx, Signals)',
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
    pageTitle: 'Contact Me',
    pageDescription:
      "Let's discuss your project, a potential collaboration, or just chat about tech!",
    title: 'Contact Me',
    description:
      "Let's discuss your project, a potential collaboration, or just chat about tech!",

    formTitle: 'Send a message',
    writeToMeHeader: 'Write to me',
    letstalkHeader: "Let's talk",
    badgeResponseTime: 'Response within 24h',
    consultingValueProp:
      'Need to move fast? Book a 15 min free discovery call.',
    contactName: 'Bakate Idrissa',
    linkedInLabel: 'LinkedIn',
    professionalNetworkLabel: 'Professional Network',
    githubLabel: 'GitHub',
    openSourceLabel: 'Open Source & Code',
    socialLinksTitle: 'Find me on',

    firstNameLabel: 'First Name',
    lastNameLabel: 'Last Name',
    emailLabel: 'Email',
    companyLabel: 'Company (Optional)',
    messageLabel: 'Message',
    sendButtonLabel: 'Send',
    firstNamePlaceholder: 'Your first name',
    lastNamePlaceholder: 'Your last name',
    emailPlaceholder: 'Your email address',
    companyPlaceholder: 'Your company name',
    messagePlaceholder: 'Your message here...',
    calendarTitle: 'Schedule a Meeting',
    calendarDescription:
      'Prefer to talk live? Book a slot directly in my calendar.',
    calendarButtonLabel: 'View my availability',
    calendarLinkLabel: 'See my calendar',
    calendarPlaceHolder: 'Integration with Google Calendar coming soon...',
    orSeparatorText: 'OR',
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
} as const;
