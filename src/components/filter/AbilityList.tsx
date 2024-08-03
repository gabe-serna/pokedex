import { abilities } from '@/lib/utils';
import { CommandItem } from '../ui/command';
import FilterItem from './FilterItem';

const AbilityList = () => {
  return (
    <>
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
    </>
  );
};

export default AbilityList;
