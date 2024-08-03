import { abilities } from '@/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '../ui/command';
import FilterItem from './FilterItem';

const AbilityList = () => {
  return (
    <Command>
      <CommandInput placeholder='Search for an ability' />
      <CommandList className='h-[168px] sm:h-[136px]'>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {abilities.map(ability => (
            <div className='flex flex-row items-center w-full'>
              <CommandItem
                key={ability}
                value={ability}
                className='w-full aria-selected:bg-accent-muted data-[disabled]:pointer-events-auto'
              >
                <FilterItem id={ability} category='abilities' />
                {ability}
              </CommandItem>
            </div>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default AbilityList;
