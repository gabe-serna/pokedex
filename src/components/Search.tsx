import { useContext } from 'react';
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

interface Props {
  data: Result[];
}

const Search = ({ data }: Props) => {
  const { isSearching, setIsSearching } = useContext(SearchContext);
  const isDesktop = useMediaQuery('(min-width: 640px)');

  return (
    <Command>
      <CommandInput
        placeholder='Search for a pokémon'
        onFocus={() => setIsSearching(true)}
        onBlur={() => setIsSearching(false)}
      />
      {isSearching && (
        <CommandList className='absolute top-[calc(50%+2.75rem+1px)] sm:w-1/2 h-[168px]'>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {/* map over pokemon list to create items */}
            {/* list should cap out at like 25 pokemon */}
            {data.map(pokemon => (
              <CommandItem key={pokemon.name}>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      )}
      {isDesktop ? <Background /> : isSearching ? <Background /> : null}
    </Command>
  );
};

const Background = () => {
  return (
    <div className='absolute sm:top-[calc(2.5rem+4px)] top-[calc(50%+2.75rem+1px)] h-[168px] w-[calc(100%-0.25rem)] sm:w-[calc(50%-0.25rem)] bg-black/20 ml-1'></div>
  );
};

export default Search;
