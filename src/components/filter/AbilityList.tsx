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
            className='w-[calc(100%-2px)] 2xl:w-[calc(100%-3px)] 2xl:[font-size:18px] data-[disabled]:pointer-events-auto 2xl:py-3'
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
