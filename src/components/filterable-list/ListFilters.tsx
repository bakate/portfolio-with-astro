import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import type {
  DifficultyFilter,
  FilterableEntry,
  FilterCopy,
  FilterOption,
} from './types';

type Filters = { query: string; tag: string; difficulty: string };

/** Where each filter lives in the address. */
const paramByFilter = {
  query: 'q',
  tag: 'tag',
  difficulty: 'diff',
} as const satisfies Record<keyof Filters, string>;

const noFilters: Filters = { query: '', tag: '', difficulty: '' };

function filtersFromAddress(): Filters {
  const params = new URLSearchParams(window.location.search);
  return {
    query: params.get(paramByFilter.query) ?? '',
    tag: params.get(paramByFilter.tag) ?? '',
    difficulty: params.get(paramByFilter.difficulty) ?? '',
  };
}

function writeFiltersToAddress(filters: Filters) {
  const params = new URLSearchParams(window.location.search);
  for (const [filter, param] of Object.entries(paramByFilter)) {
    const value = filters[filter as keyof Filters];
    if (value) params.set(param, value);
    else params.delete(param);
  }
  const search = params.toString();
  window.history.replaceState(
    {},
    '',
    `${window.location.pathname}${search ? `?${search}` : ''}`
  );
}

function matches(entry: FilterableEntry, { query, tag, difficulty }: Filters) {
  return (
    entry.searchText.toLowerCase().includes(query.trim().toLowerCase()) &&
    (!tag || entry.tags.includes(tag)) &&
    (!difficulty || entry.difficulty === difficulty)
  );
}

const capitalized = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

type Props = {
  entries: ReadonlyArray<FilterableEntry>;
  copy: FilterCopy;
  difficulty?: DifficultyFilter;
};

/** The filters of a FilterableList. They show and hide its server-rendered entries. */
export function ListFilters({ entries, copy, difficulty }: Props) {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const [filters, setFilters] = React.useState<Filters>(noFilters);
  // Disabled until React takes over, so a visitor's early typing is never lost.
  const [isHydrated, setIsHydrated] = React.useState(false);

  React.useEffect(() => {
    setFilters(filtersFromAddress());
    setIsHydrated(true);
  }, []);

  React.useEffect(() => {
    if (!isHydrated) return;
    writeFiltersToAddress(filters);
    const list = rootRef.current?.closest('[data-filterable-list]');
    if (!list) return;
    const visibleIds = new Set(
      entries.filter((entry) => matches(entry, filters)).map(({ id }) => id)
    );
    list.querySelectorAll<HTMLElement>('[data-entry-id]').forEach((element) => {
      element.hidden = !visibleIds.has(element.dataset.entryId ?? '');
    });
    const empty = list.querySelector<HTMLElement>('[data-filter-empty]');
    if (empty) empty.hidden = visibleIds.size > 0;
  }, [entries, filters, isHydrated]);

  const tagOptions = React.useMemo(
    () =>
      [...new Set(entries.flatMap((entry) => entry.tags))]
        .sort((a, b) => a.localeCompare(b))
        .map((tag) => ({ value: tag, label: capitalized(tag) })),
    [entries]
  );

  const setFilter = (filter: keyof Filters) => (value: string) =>
    setFilters((current) => ({ ...current, [filter]: value }));

  return (
    <div
      ref={rootRef}
      className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row"
    >
      <Input
        type="search"
        aria-label={copy.searchLabel}
        placeholder={copy.searchPlaceholder}
        disabled={!isHydrated}
        value={filters.query}
        onChange={(event) => setFilter('query')(event.target.value)}
        className="w-full md:max-w-xs"
      />
      <div className="flex w-full flex-col gap-2 sm:flex-row md:w-auto">
        {difficulty ? (
          <Picker
            label={difficulty.label}
            allLabel={difficulty.allLabel}
            options={difficulty.options}
            value={filters.difficulty}
            onChange={setFilter('difficulty')}
            disabled={!isHydrated}
          />
        ) : null}
        <Picker
          label={copy.tagPickerLabel}
          allLabel={copy.allTagsLabel}
          options={tagOptions}
          value={filters.tag}
          onChange={setFilter('tag')}
          disabled={!isHydrated}
          search={{
            placeholder: copy.tagSearchPlaceholder,
            empty: copy.noTagFound,
          }}
        />
      </div>
    </div>
  );
}

type PickerProps = {
  label: string;
  allLabel: string;
  options: ReadonlyArray<FilterOption>;
  /** '' when nothing is picked. */
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
  /** Offers a search box inside the picker, for long option lists. */
  search?: { placeholder: string; empty: string };
};

/** A button that opens a list of options; picking the current one clears it. */
function Picker({
  label,
  allLabel,
  options,
  value,
  onChange,
  disabled,
  search,
}: PickerProps) {
  const [open, setOpen] = React.useState(false);
  const picked = options.find((option) => option.value === value);
  const choices = [{ value: '', label: allLabel }, ...options];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label={label}
          disabled={disabled}
          className="w-full justify-between sm:w-[200px]"
        >
          <span className="truncate">{picked?.label ?? label}</span>
          <ChevronsUpDown className="ml-2 size-4 shrink-0" aria-hidden />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 sm:w-[200px]">
        <Command>
          {search ? <CommandInput placeholder={search.placeholder} /> : null}
          <CommandList>
            {search ? <CommandEmpty>{search.empty}</CommandEmpty> : null}
            <CommandGroup>
              {choices.map((choice) => (
                <CommandItem
                  key={choice.value}
                  value={choice.label}
                  onSelect={() => {
                    onChange(choice.value === value ? '' : choice.value);
                    setOpen(false);
                  }}
                >
                  <Check
                    aria-hidden
                    className={cn(
                      'mr-2 size-4',
                      choice.value === value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {choice.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
