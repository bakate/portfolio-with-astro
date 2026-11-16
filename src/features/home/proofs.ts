import { useTranslations, type LanguageCode } from '@/i18n/ui';

/** A measured outcome shown under the hero: the figure, then what it measures. */
export type Proof = {
  figure: string;
  context: string;
};

/** The measured outcomes shown under the hero, in display order. */
export function getTranslatedProofs(lang: LanguageCode): Array<Proof> {
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
