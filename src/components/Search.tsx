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
      <div className='absolute sm:top-[calc(2.5rem+4px)] top-[calc(50%+2.75rem+1px)] h-[168px] w-[calc(100%-0.25rem)] sm:w-[calc(50%-0.25rem)] bg-black/20 ml-1'></div>
    </Command>
  );
};

export default Search;
