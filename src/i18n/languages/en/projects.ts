export const projectsContent = {
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
  bloomflow: {
    title: 'Bloomflow - B2B Open Innovation SaaS',
    description:
      '4 years of Angular development on a complex B2B SaaS used by large enterprise groups.',
    imageAltText: 'Bloomflow platform preview',
    categoryText: 'B2B SaaS',
    dateText: 'November 2020 - November 2024',
    detailedDescription:
      'At Bloomflow, I worked for 4 years on a B2B open innovation SaaS platform used by large enterprise groups to manage startup ecosystems, challenges, internal programs, and collaboration workflows. My work focused heavily on the Angular ecosystem: critical modules, NgRx state management, RxJS, design system, frontend industrialization, and TypeScript migration.',
    keyFeatures: {
      angularModules: {
        title: 'Critical Angular Modules',
        description:
          'Built and evolved data-heavy business modules for enterprise workflows.',
      },
      stateManagement: {
        title: 'NgRx State Management',
        description:
          'Managed complex UI states with NgRx, RxJS, and reactive patterns to keep screens predictable.',
      },
      designSystem: {
        title: 'Design System',
        description:
          'Contributed to a shared Angular component library to align product UX across modules.',
      },
      typescriptMigration: {
        title: 'TypeScript Migration',
        description:
          'Helped secure the codebase progressively through TypeScript, tests, and CI pipelines.',
      },
      customerSuccessAutomation: {
        title: 'Operational Industrialization',
        description:
          'Automated internal workflows to reduce manual operations for Customer Success teams.',
      },
      enterpriseScale: {
        title: 'Enterprise Context',
        description:
          'Worked on a product used by complex organizations with reliability and maintainability constraints.',
      },
    },
    galleryImages: [],
    challenges:
      'Scaling a rich B2B SaaS application without degrading frontend readability, UI consistency, or critical workflow stability.',
    learnings:
      'A mature Angular application requires strong discipline: module boundaries, explicit state, strict typing, reusable components, and technical debt handled before it blocks the product.',
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
        description: 'Dashboard with user management and course management.',
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
        description: 'Progress calculation with course progress calculation.',
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
        description: 'Easy cart management and personalized recommendations.',
      },
    },
    galleryImages: [],
    challenges: 'Optimizing display performance for a large product catalog.',
    learnings:
      'Caching and progressive loading techniques are crucial for e-commerce.',
  },
  cms: {
    title: 'Content Management System (CMS)',
    description: 'A platform where you can create, edit, and delete content.',
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
} as const;
