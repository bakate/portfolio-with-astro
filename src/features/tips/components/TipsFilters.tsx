'use client';

import * as React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Check, ChevronsUpDown, BarChart2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsHydrated } from '@/lib/use-is-hydrated';

// Debounce utility
function debounce<F extends (...args: any[]) => any>(func: F, waitFor: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<F>) => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => void;
}

type FilterOption = {
  value: string;
  label: string;
};

export type TipsFiltersProps = {
  onSearchChange: (query: string) => void;
  onTagChange: (tag: string) => void;
  onDifficultyChange: (difficulty: string) => void;
  allTags: Array<FilterOption>;
  allDifficulties: Array<FilterOption>;
  currentSearchQuery: string;
  currentTag: string;
  currentDifficulty: string;
  texts: {
    searchLabel: string;
    searchPlaceholder: string;
    filterByTagButtonLabel: string;
    filterByDifficultyLabel: string;
    noTagFound: string;
    selectTagCommandPlaceholder: string;
    allTagsLabel: string;
    allDifficultiesLabel: string;
  };
};

export function TipsFilters({
  allTags,
  allDifficulties,
  currentSearchQuery,
  currentTag,
  currentDifficulty,
  texts,
  onSearchChange,
  onTagChange,
  onDifficultyChange,
}: TipsFiltersProps) {
  const [internalSearchQuery, setInternalSearchQuery] =
    React.useState(currentSearchQuery);
  const isHydrated = useIsHydrated();
  const [tagPopoverOpen, setTagPopoverOpen] = React.useState(false);
  const [diffPopoverOpen, setDiffPopoverOpen] = React.useState(false);

  React.useEffect(() => {
    setInternalSearchQuery(currentSearchQuery);
  }, [currentSearchQuery]);

  const debouncedSearchChange = React.useMemo(
    () => debounce(onSearchChange, 300),
    [onSearchChange]
  );

  const handleInternalSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newQuery = event.target.value;
    setInternalSearchQuery(newQuery);
    debouncedSearchChange(newQuery);
  };

  const displayTags = [{ value: '', label: texts.allTagsLabel }, ...allTags];
  const displayDifficulties = [
    { value: '', label: texts.allDifficultiesLabel },
    ...allDifficulties,
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
      <Input
        type="search"
        aria-label={texts.searchLabel}
        disabled={!isHydrated}
        placeholder={texts.searchPlaceholder}
        value={internalSearchQuery}
        onChange={handleInternalSearchChange}
        className="w-full md:max-w-xs"
      />

      <div className="flex flex-col sm:flex-row w-full md:w-auto gap-2">
        {/* Difficulty Filter */}
        <Popover open={diffPopoverOpen} onOpenChange={setDiffPopoverOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={diffPopoverOpen}
              aria-label={texts.filterByDifficultyLabel}
              disabled={!isHydrated}
              className="w-full sm:w-[180px] justify-between cursor-pointer"
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <BarChart2 className="size-4 shrink-0 opacity-50" />
                <span className="truncate">
                  {currentDifficulty &&
                  allDifficulties.find((d) => d.value === currentDifficulty)
                    ? allDifficulties.find((d) => d.value === currentDifficulty)
                        ?.label
                    : texts.filterByDifficultyLabel}
                </span>
              </div>
              <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandList>
                <CommandGroup>
                  {displayDifficulties.map((diff) => (
                    <CommandItem
                      key={diff.value}
                      value={diff.value}
                      onSelect={(val) => {
                        onDifficultyChange(
                          val === currentDifficulty ? '' : val
                        );
                        setDiffPopoverOpen(false);
                      }}
                      className="cursor-pointer"
                    >
                      <Check
                        className={cn(
                          'mr-2 size-4',
                          currentDifficulty === diff.value
                            ? 'opacity-100'
                            : 'opacity-0'
                        )}
                      />
                      {diff.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {/* Tag Filter */}
        <Popover open={tagPopoverOpen} onOpenChange={setTagPopoverOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={tagPopoverOpen}
              aria-label={texts.filterByTagButtonLabel}
              disabled={!isHydrated}
              className="w-full sm:w-[180px] justify-between cursor-pointer"
            >
              {currentTag && allTags.find((tag) => tag.value === currentTag)
                ? allTags.find((tag) => tag.value === currentTag)?.label
                : texts.filterByTagButtonLabel}
              <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder={texts.selectTagCommandPlaceholder} />
              <CommandList>
                <CommandEmpty>{texts.noTagFound}</CommandEmpty>
                <CommandGroup>
                  {displayTags.map((tag) => (
                    <CommandItem
                      key={tag.value}
                      value={tag.value}
                      onSelect={(val) => {
                        onTagChange(val === currentTag ? '' : val);
                        setTagPopoverOpen(false);
                      }}
                      className="cursor-pointer"
                    >
                      <Check
                        className={cn(
                          'mr-2 size-4',
                          currentTag === tag.value ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                      {tag.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
