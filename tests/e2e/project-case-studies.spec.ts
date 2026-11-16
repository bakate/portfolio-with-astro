import { test } from '@playwright/test';
import type { LanguageCode } from '@/i18n/ui';
import { createSystemUnderTest } from './support/system-under-test';

type CaseStudyPage = {
  name: string;
  slug: string;
  /** A phrase of the context section, proving the page speaks the language. */
  contextExcerpt: string;
  /** The accessible name of the architecture diagram. */
  diagramName: string;
};

type Language = {
  name: string;
  projectsPath: string;
  codeButton: string;
  sections: ReadonlyArray<{ anchor: string; heading: string }>;
  projects: { resumeStudio: CaseStudyPage; parentUp: CaseStudyPage };
};

const languages = {
  fr: {
    name: 'French',
    projectsPath: '/projects',
    codeButton: 'Voir le Code',
    sections: [
      { anchor: 'context', heading: 'Contexte' },
      { anchor: 'problem', heading: 'Problème' },
      { anchor: 'architecture', heading: 'Décisions d’architecture' },
      { anchor: 'outcome', heading: 'Résultat' },
      { anchor: 'learnings', heading: 'Enseignements' },
      { anchor: 'gallery', heading: 'Galerie' },
    ],
    projects: {
      resumeStudio: {
        name: 'Resume Studio',
        slug: 'resume-studio',
        contextExcerpt: 'adapter son CV à chaque offre',
        diagramName: 'Architecture de Resume Studio',
      },
      parentUp: {
        name: 'Parent Up',
        slug: 'parent-up',
        contextExcerpt: 'parents séparés',
        diagramName: 'Architecture de Parent Up',
      },
    },
  },
  en: {
    name: 'English',
    projectsPath: '/en/projects',
    codeButton: 'View Code',
    sections: [
      { anchor: 'context', heading: 'Context' },
      { anchor: 'problem', heading: 'Problem' },
      { anchor: 'architecture', heading: 'Architecture decisions' },
      { anchor: 'outcome', heading: 'Outcome' },
      { anchor: 'learnings', heading: 'Learnings' },
      { anchor: 'gallery', heading: 'Gallery' },
    ],
    projects: {
      resumeStudio: {
        name: 'Resume Studio',
        slug: 'resume-studio',
        contextExcerpt: 'tailoring a resume to every job posting',
        diagramName: 'Resume Studio architecture',
      },
      parentUp: {
        name: 'Parent Up',
        slug: 'parent-up',
        contextExcerpt: 'separated parents',
        diagramName: 'Parent Up architecture',
      },
    },
  },
} as const satisfies Record<LanguageCode, Language>;

for (const language of Object.values(languages)) {
  for (const project of Object.values(language.projects)) {
    const { name } = project;
    const path = `${language.projectsPath}/${project.slug}`;

    test(`Given ${name}, when a visitor reads its ${language.name} page, then the case study tells the context, the problem, the architecture decisions, the outcome and the learnings, then shows the gallery`, async ({
      page,
      request,
    }) => {
      const site = createSystemUnderTest({ page, request });
      await site.visitorOpens(path);
      await site.thenSectionsFollowInOrder(
        language.sections.map(({ anchor }) => anchor)
      );
      for (const { anchor, heading } of language.sections) {
        await site.thenSectionShows(anchor, { heading });
      }
      await site.thenSectionShows('context', {
        heading: language.sections[0].heading,
        texts: [project.contextExcerpt],
      });
    });

    test(`Given ${name}, when a visitor reads its ${language.name} page in the light theme, then the architecture diagram is drawn and legible`, async ({
      page,
      request,
    }) => {
      const site = createSystemUnderTest({ page, request });
      await site.visitorPrefersTheme('light');
      await site.visitorOpens(path);
      await site.thenArchitectureDiagramIsLegible(project.diagramName);
    });

    test(`Given ${name}, when a visitor reads its ${language.name} page in the dark theme, then the architecture diagram is drawn and legible`, async ({
      page,
      request,
    }) => {
      const site = createSystemUnderTest({ page, request });
      await site.visitorPrefersTheme('dark');
      await site.visitorOpens(path);
      await site.thenArchitectureDiagramIsLegible(project.diagramName);
    });
  }

  test(`Given Parent Up, whose repository is private, when a visitor opens its ${language.name} page, then no source code link is shown`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(`${language.projectsPath}/parent-up`);
    await site.thenPageHasNoLinkNamed(language.codeButton);
  });

  test(`Given Parent Up, which has no video yet, when a visitor opens its ${language.name} page, then no video is shown`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(`${language.projectsPath}/parent-up`);
    await site.thenPageShowsNoVideo();
  });
}

const { projectsPath, projects } = languages.fr;

test(`Given the ${projects.resumeStudio.name} page read in the light theme, when the visitor switches to the dark theme, then the architecture diagram stays legible`, async ({
  page,
  request,
}) => {
  const site = createSystemUnderTest({ page, request });
  await site.visitorPrefersTheme('light');
  await site.visitorOpens(`${projectsPath}/${projects.resumeStudio.slug}`);
  await site.visitorSwitchesTheme();
  await site.thenArchitectureDiagramIsLegible(
    projects.resumeStudio.diagramName
  );
});
