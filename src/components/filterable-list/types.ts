/** What the filters know about one entry of the list. */
export type FilterableEntry = {
  /** Matches the `filterId` the entry was rendered with. */
  id: string;
  /** Everything a search may match: title, description, body. */
  searchText: string;
  tags: ReadonlyArray<string>;
  difficulty?: string;
};

export type FilterOption = { value: string; label: string };

export type FilterCopy = {
  searchLabel: string;
  searchPlaceholder: string;
  tagPickerLabel: string;
  allTagsLabel: string;
  tagSearchPlaceholder: string;
  noTagFound: string;
  /** Shown when no entry matches, or when the list is empty. */
  noResults: string;
};

/** A second picker, offered only by lists whose entries have a difficulty. */
export type DifficultyFilter = {
  label: string;
  allLabel: string;
  options: ReadonlyArray<FilterOption>;
};
