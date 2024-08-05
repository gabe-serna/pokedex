import { abilities } from '@/lib/utils';
import { CommandItem } from '../ui/command';
import FilterItem from './FilterItem';

const AbilityList = () => {
  return (
    <>
      {abilities.map(ability => (
        <div key={`div-${ability}`} className='flex flex-row items-center w-full'>
          <CommandItem
            value={ability}
            className='w-full data-[disabled]:pointer-events-auto'
          >
            <FilterItem
              key={ability}
              id={ability
                .replace(/[A-Z]/g, (letter: string) => letter.toLowerCase())
                .replace(/\s+/g, '-')}
              category='abilities'
            />
            {ability}
          </CommandItem>
        </div>
      ))}
    </>
  );
};

export default AbilityList;
