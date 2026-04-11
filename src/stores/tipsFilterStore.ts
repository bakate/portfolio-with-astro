import { atom } from 'nanostores';

export const tipsSearchQueryAtom = atom('');
export const tipsSelectedTagAtom = atom('');
export const tipsSelectedDifficultyAtom = atom('');
export const filteredTipsIdsAtom = atom<string[]>([]);
export const tipsFiltersInitializedAtom = atom(false);
