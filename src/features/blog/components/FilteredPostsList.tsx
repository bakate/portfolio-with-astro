'use client';

import * as React from 'react';
import {
  searchQueryAtom,
  selectedTagAtom,
  filteredPostIdsAtom,
  filtersInitializedAtom,
} from '@/stores/blogFilterStore';
import { BlogFilters, type BlogFiltersProps } from './BlogFilters';

export type PostDataForFilter = {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags?: Array<string>;
  body: string;
  pubDate: Date;
};

export type FilteredPostsListProps = {
  allPosts: Array<PostDataForFilter>;
  texts: BlogFiltersProps['texts'] & { noPostsFound: string };
  initialSearchQuery?: string;
  initialTag?: string;
};

export function FilteredPostsList({
  allPosts,
  texts,
  initialSearchQuery = '',
  initialTag = '',
}: FilteredPostsListProps) {
  const [searchQuery, setSearchQuery] = React.useState(initialSearchQuery);
  const [selectedTag, setSelectedTag] = React.useState(initialTag);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (searchQuery) {
      params.set('q', searchQuery);
    } else {
      params.delete('q');
    }
    if (selectedTag) {
      params.set('tag', selectedTag);
    } else {
      params.delete('tag');
    }

    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}?${params.toString()}`
    );
    searchQueryAtom.set(searchQuery);
    selectedTagAtom.set(selectedTag);
  }, [searchQuery, selectedTag]);

  React.useEffect(() => {
    let matchingPosts = allPosts;

    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      matchingPosts = matchingPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerCaseQuery) ||
          post.description.toLowerCase().includes(lowerCaseQuery) ||
          post.body.toLowerCase().includes(lowerCaseQuery)
      );
    }

    if (selectedTag) {
      matchingPosts = matchingPosts.filter((post) =>
        post.tags?.includes(selectedTag)
      );
    }

    const postIds = matchingPosts.map((post) => post.id);
    filteredPostIdsAtom.set(postIds);
    if (!filtersInitializedAtom.get()) {
      filtersInitializedAtom.set(true);
    }
  }, [allPosts, searchQuery, selectedTag]);

  // Extract unique tags for the BlogFilters component
  const uniqueTagsForFilter = React.useMemo(() => {
    const priorityTags = [
      'Angular',
      'RxJS',
      'Architecture Frontend',
      'SaaS Engineering',
    ] as const;
    const allTagsRaw = [
      ...priorityTags,
      ...allPosts.flatMap((post) => post.tags || []),
    ];

    return [...new Set(allTagsRaw)]
      .sort((firstTag, secondTag) => {
        const firstPriorityIndex = priorityTags.findIndex((priorityTag) => {
          return priorityTag.toLowerCase() === firstTag.toLowerCase();
        });
        const secondPriorityIndex = priorityTags.findIndex((priorityTag) => {
          return priorityTag.toLowerCase() === secondTag.toLowerCase();
        });

        if (firstPriorityIndex >= 0 && secondPriorityIndex >= 0) {
          return firstPriorityIndex - secondPriorityIndex;
        }

        if (firstPriorityIndex >= 0) {
          return -1;
        }

        if (secondPriorityIndex >= 0) {
          return 1;
        }

        return firstTag.localeCompare(secondTag);
      })
      .map((tag) => ({
        value: tag,
        label: tag.charAt(0).toUpperCase() + tag.slice(1),
      }));
  }, [allPosts]);

  return (
    <BlogFilters
      allTags={uniqueTagsForFilter}
      currentSearchQuery={searchQuery}
      currentTag={selectedTag}
      texts={texts}
      onSearchChange={setSearchQuery}
      onTagChange={setSelectedTag}
    />
  );
}
