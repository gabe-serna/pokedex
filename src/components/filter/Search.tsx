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
    ? '[&>div]:bg-accent '
    : '[&>div]:bg-black/3 [&>div]:sm:bg-background [&>div]:hover:bg-accent ';
  const bgColor = isSearching ? 'bg-accent' : '';

  return (
    <Command ref={container} className='rounded-md bg-black/10 2xl:mt-4 3xl:mt-12'>
      <div className={`${background} z-30`}>
        <CommandInput
          ref={searchBar}
          placeholder='Search for a pokémon'
          className={`xl:[font-size:15px] 2xl:[font-size:18px] 3xl:[font-size:23px] ${bgColor} `}
          onClick={() => setIsSearching(true)}
        />
      </div>
      {isSearching && (
        <CommandList className='absolute h-[169px] xl:h-[171px] 2xl:h-[192px] 3xl:h-[256px] w-[calc(100%-2.5rem)] sm:w-[calc(50%-6.25rem)] 2xl:w-[calc(50%-7.25rem-1px)] 3xl:w-[calc(50%-8.25rem)] top-[calc(50%+2.75rem+1px)] sm:top-[calc(8.5rem+4px)] xl:top-36 2xl:top-[calc(10.5rem+7px)] 3xl:top-[calc(13.75rem+2px)] border-0'>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {!isLoading &&
              data.map(pokemon => (
                <CommandItem
                  key={pokemon.name}
                  className='2xl:[font-size:18px] aria-selected:border-l-1 data-[disabled]:pointer-events-auto mx-[1px]'
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
    <div className='absolute z-0 top-[calc(50%+2.75rem+1px)] sm:top-[calc(8.5rem+7px)] 2xl:top-[calc(10.5rem+2px)] 3xl:top-[calc(13.25rem+1px)] h-[168px] xl:h-[174px] 2xl:h-[200px] 3xl:h-[268px] w-[calc(100%-2.5rem)] sm:w-[calc(50%-6.5rem+1px)] 2xl:w-[calc(50%-7.5rem+1px)] 3xl:w-[calc(50%-8.5rem+1px)] bg-black/20 mx-1 border-2 2xl:border-[3px] border-black border-t-0'></div>
  );
};

const getID = (url: string) => {
  const regex = /\/(\d+)\/$/;
  const match = url.match(regex);
  return match ? parseInt(match[1]) : 0;
};

export default Search;
