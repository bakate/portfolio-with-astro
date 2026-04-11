'use client';

import * as React from 'react';
import {
  tipsSearchQueryAtom,
  tipsSelectedTagAtom,
  tipsSelectedDifficultyAtom,
  filteredTipsIdsAtom,
  tipsFiltersInitializedAtom,
} from '@/stores/tipsFilterStore';
import { TipsFilters, type TipsFiltersProps } from './TipsFilters';

export type TipDataForFilter = {
  id: string;
  title: string;
  description: string;
  tags?: Array<string>;
  difficulty?: string;
  body: string;
};

export type FilteredTipsListProps = {
  allTips: Array<TipDataForFilter>;
  texts: TipsFiltersProps['texts'] & { 
    noTipsFound: string;
    difficultyBeginner: string;
    difficultyIntermediate: string;
    difficultyAdvanced: string;
  };
  lang: string;
  initialSearchQuery?: string;
  initialTag?: string;
  initialDifficulty?: string;
};

export function FilteredTipsList({
  allTips,
  texts,
  lang,
  initialSearchQuery = '',
  initialTag = '',
  initialDifficulty = '',
}: FilteredTipsListProps) {
  const [searchQuery, setSearchQuery] = React.useState(initialSearchQuery);
  const [selectedTag, setSelectedTag] = React.useState(initialTag);
  const [selectedDifficulty, setSelectedDifficulty] = React.useState(initialDifficulty);

  React.useEffect(() => {
    // Update URL when filters change
    const params = new URLSearchParams(window.location.search);
    if (searchQuery) params.set('q', searchQuery); else params.delete('q');
    if (selectedTag) params.set('tag', selectedTag); else params.delete('tag');
    if (selectedDifficulty) params.set('diff', selectedDifficulty); else params.delete('diff');

    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    
    tipsSearchQueryAtom.set(searchQuery);
    tipsSelectedTagAtom.set(selectedTag);
    tipsSelectedDifficultyAtom.set(selectedDifficulty);
  }, [searchQuery, selectedTag, selectedDifficulty]);

  const filteredTips = React.useMemo(() => {
    let tips = allTips;

    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      tips = tips.filter(
        (tip) =>
          tip.title.toLowerCase().includes(lowerCaseQuery) ||
          tip.description.toLowerCase().includes(lowerCaseQuery) ||
          tip.body.toLowerCase().includes(lowerCaseQuery)
      );
    }

    if (selectedTag) {
      tips = tips.filter((tip) => tip.tags?.includes(selectedTag));
    }

    if (selectedDifficulty) {
      tips = tips.filter((tip) => tip.difficulty === selectedDifficulty);
    }

    const tipIds = tips.map((p) => p.id);
    filteredTipsIdsAtom.set(tipIds);
    if (!tipsFiltersInitializedAtom.get()) {
      tipsFiltersInitializedAtom.set(true);
    }
    return tips;
  }, [allTips, searchQuery, selectedTag, selectedDifficulty]);

  const uniqueTagsForFilter = React.useMemo(() => {
    const allTagsRaw = allTips.flatMap((tip) => tip.tags || []);
    return [...new Set(allTagsRaw)].sort().map((tag) => ({
      value: tag,
      label: tag.charAt(0).toUpperCase() + tag.slice(1),
    }));
  }, [allTips]);

  const difficultyOptions = React.useMemo(() => {
    return [
      { value: 'beginner', label: texts.difficultyBeginner },
      { value: 'intermediate', label: texts.difficultyIntermediate },
      { value: 'advanced', label: texts.difficultyAdvanced },
    ];
  }, [texts]);

  return (
    <TipsFilters
      allTags={uniqueTagsForFilter}
      allDifficulties={difficultyOptions}
      currentSearchQuery={searchQuery}
      currentTag={selectedTag}
      currentDifficulty={selectedDifficulty}
      texts={texts}
      onSearchChange={setSearchQuery}
      onTagChange={setSelectedTag}
      onDifficultyChange={setSelectedDifficulty}
    />
  );
}
