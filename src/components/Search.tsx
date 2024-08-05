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
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ data, setSelected }: Props) => {
  const { isSearching, setIsSearching } = useContext(SearchContext);
  const isDesktop = useMediaQuery('(min-width: 640px)');

  return (
    <Command className='rounded-md bg-black/10'>
      <CommandInput
        placeholder='Search for a pokémon'
        onFocus={() => setIsSearching(true)}
        onBlur={() => setIsSearching(false)}
      />
      {isSearching && (
        <CommandList className='absolute h-[168px] w-[calc(100%-2.5rem)] top-[calc(50%+2.75rem+1px)] sm:w-[calc(50%-4.25rem)] sm:top-[calc(6.5rem+4px)]'>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {data.map(pokemon => (
              <CommandItem onSelect={event => setSelected(event)} key={pokemon.name}>
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
    <div className='absolute sm:top-[calc(6.5rem+4px)] top-[calc(50%+2.75rem+1px)] h-[168px] w-[calc(100%-2.5rem)] sm:w-[calc(50%-4.5rem)] bg-black/20 mx-1'></div>
  );
};

export default Search;
