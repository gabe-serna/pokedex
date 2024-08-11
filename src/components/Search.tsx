import { useContext, useRef } from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';
import { Result } from '@/lib/filter';
import { SearchContext } from './SearchContext';
import { Selected } from '@/lib/utils';

interface Props {
  data: Result[];
  setSelected: React.Dispatch<React.SetStateAction<Selected>>;
}

const Search = ({ data, setSelected }: Props) => {
  const { isSearching, setIsSearching } = useContext(SearchContext);
  const container = useRef<HTMLDivElement>(null);
  const searchBar = useRef<HTMLInputElement>(null);
  const isDesktop = useMediaQuery('(min-width: 640px)');
  const isLoading = data[0]?.name === 'loading';

  addEventListener('click', event => {
    if (container.current && !container.current.contains(event.target as Node)) {
      searchBar.current?.blur();
      setIsSearching(false);
    }
  });

  const background = isSearching
    ? '[&>div]:bg-accent'
    : '[&>div]:bg-black/3 [&>div]:sm:bg-background [&>div]:hover:bg-accent';

  return (
    <Command ref={container} className='rounded-md bg-black/10'>
      <div className={background}>
        <CommandInput
          ref={searchBar}
          placeholder='Search for a pokémon'
          style={
            isSearching ? { backgroundColor: 'hsl(var(--accent)) !important' } : {}
          }
          onClick={() => setIsSearching(true)}
        />
      </div>
      {isSearching && (
        <CommandList className='absolute h-[168px] w-[calc(100%-2.5rem)] top-[calc(50%+2.75rem+1px)] sm:w-[calc(50%-6.25rem)] sm:top-[calc(8.5rem+4px)] border-0'>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {!isLoading &&
              data.map(pokemon => (
                <CommandItem
                  key={pokemon.name}
                  className='aria-selected:border-l-1 data-[disabled]:pointer-events-auto'
                  onSelect={event => {
                    setSelected({
                      name: event,
                      id: getID(pokemon.url)
                    });
                  }}
                >
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </CommandItem>
              ))}
            {isLoading && <CommandItem className='loading'>Filtering</CommandItem>}
          </CommandGroup>
        </CommandList>
      )}
      {isDesktop ? <Background /> : isSearching ? <Background /> : null}
    </Command>
  );
};

const Background = () => {
  return (
    <div className='absolute sm:top-[calc(8.5rem+5px)] top-[calc(50%+2.75rem+1px)] h-[168px] w-[calc(100%-2.5rem)] sm:w-[calc(50%-6.5rem)] bg-black/20 mx-1 border border-black border-t-0'></div>
  );
};

const getID = (url: string) => {
  const regex = /\/(\d+)\/$/;
  const match = url.match(regex);
  return match ? parseInt(match[1]) : 0;
};

export default Search;
