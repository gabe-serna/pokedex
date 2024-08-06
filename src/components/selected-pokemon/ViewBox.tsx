import getSprite from '@/lib/getSprite';
import getStats, { Stats } from '@/lib/getStats';
import { Selected } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

interface Props {
  state: Selected;
  className?: string;
}

const ViewBox = ({ state, className }: Props) => {
  const [, setIsFetching] = useState(true);
  const stats = useRef<Stats>({ height: '', weight: '', types: [], abilities: [] });
  const name = state.name !== '' ? state.name : 'Select a Pokémon';

  useEffect(() => {
    setIsFetching(true);
    if (state.name !== '') {
      const data = getStats(state.name);
      data.then(res => {
        stats.current = res;
        setIsFetching(false);
        console.log('finished fetching data');
      });
    }
  }, [state]);
  const spriteURL = state.id > 0 ? getSprite(state.id) : '';
  return (
    <div id='view-box' className={className}>
      <div className='flex flex-col items-center my-4 h-[calc(100%-2rem)] sm:w-[calc(100%-2.5rem)] w-[calc(100%-5rem)] bg-slate-200 border-8 border-accent/90 rounded-md'>
        <h1 className='text-black text-left w-[calc(100%-1rem)] 2xl:text-3xl lg:text-xl md:text-l ml-4 my-1 font-medium'>
          {name}
        </h1>
        <div className='flex items-center justify-center m-4 mt-0 mb-2 h-[calc(100%-4rem)] w-[calc(100%-2rem)] bg-stone-800 rounded-md overflow-hidden'>
          {spriteURL != '' && (
            <img
              className='aspect-square object-scale-down h-full'
              src={spriteURL}
            />
          )}
        </div>
        <aside className='text-gray-500 italic w-full 2xl:text-2xl sm:flex sm:flex-row sm:justify-around mb-2 hidden'>
          <p>Height: {stats.current.height}</p>
          <p>Weight: {stats.current.weight}</p>
        </aside>
      </div>
    </div>
  );
};

export default ViewBox;
