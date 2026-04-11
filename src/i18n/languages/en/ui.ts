export const uiLabels = {
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
