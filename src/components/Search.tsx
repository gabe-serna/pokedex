import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';
import { useState } from 'react';

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Command>
      <CommandInput
        placeholder='Search for a pokémon'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isFocused && (
        <CommandList className='absolute top-[calc(50%+2.75rem+1px)] sm:w-1/2 h-[168px]'>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem>Bulbasaur</CommandItem>
            <CommandItem>Ivysaur</CommandItem>
            <CommandItem>Big Bertha</CommandItem>
            <CommandItem>Charmander</CommandItem>
            <CommandItem>Charmelon</CommandItem>
            <CommandItem>Charizard</CommandItem>
          </CommandGroup>
        </CommandList>
      )}
    </Command>
  );
};

export default Search;
