import getSprite from '@/lib/getSprite';
import getStats, { Stats } from '@/lib/getStats';
import { Selected, weaknesses } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import Type from './Type';

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
    <>
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
      <div
        id='info'
        className='h-[calc(100%-3rem)] w-[calc(100%-6rem)] mx-auto mt-4 mb-8 bg-accent rounded-2xl p-4 row-start-3 col-start-1 sm:block hidden 2xl:row-start-5 2xl:row-end-6 2xl:h-[calc(100%-15rem)] 2xl:w-[calc(100%-20rem)] 2xl:mb-auto 2xl:text-3xl'
      >
        <h1 className='inline'>Types: </h1>
        {stats.current.types.map(type => {
          return <Type>{type}</Type>;
        })}
        <h1>
          Weaknesses:{' '}
          {stats.current.types.map(type =>
            weaknesses
              .get(type)
              ?.map(
                weakness =>
                  `${weakness.replace(/^\w/, match => match.toUpperCase())} `
              )
          )}
        </h1>
        <h1>Abilities: </h1>
        <ul>
          {stats.current.abilities.map(ability => {
            return (
              <li className='list-disc ml-4'>{`${ability.replace(
                /(^\w|-\w)/g,
                match => match.toUpperCase()
              )} `}</li>
            );
          })}
        </ul>
      </div>
      <div
        id='more-info'
        className='h-[calc(100%-3rem)] w-[calc(100%-6rem)] m-auto mt-0 bg-accent rounded-2xl p-4 row-start-3 col-start-1 sm:hidden flex flex-col items-center justify-center'
      >
        <h1> Click for more info</h1>
      </div>
    </>
  );
};

export default ViewBox;
