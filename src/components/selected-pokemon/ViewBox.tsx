import getStats, { Stats } from '@/lib/getStats';
import { Selected, weaknesses } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import Type from './Type';

interface Props {
  state: Selected;
  className?: string;
}

const ViewBox = ({ state, className }: Props) => {
  const [isFetching, setIsFetching] = useState(true);
  const glitchLeft = useRef<HTMLImageElement>(null);
  const glitchRight = useRef<HTMLImageElement>(null);
  const glitchBox = useRef<HTMLDivElement>(null);
  const name = state.name !== '' ? state.name : 'Select a Pokémon';
  const weaknessList = new Map<string, string>();
  const stats = useRef<Stats>({
    height: '',
    weight: '',
    types: [],
    abilities: [],
    sprite: ''
  });

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

  useEffect(() => {
    if (!isFetching) return;
    glitchLeft.current?.classList.add('glitchLeft');
    glitchRight.current?.classList.add('glitchRight');
    glitchBox.current?.classList.add('glitchBox');
  }, [isFetching]);

  addEventListener('animationend', event => {
    const animationName = event.animationName;
    if (animationName.includes('glitch')) {
      const target = event.target as HTMLElement;
      target.classList.remove(`${animationName}`);
    }
  });
  return (
    <>
      <div id='view-box' className={className}>
        <div className='flex flex-col items-center my-4 h-[calc(100%-2rem)] sm:w-[calc(100%-2.5rem)] w-[calc(100%-5rem)] bg-slate-200 border-8 border-accent/90 rounded-md'>
          <h1 className='text-black text-left w-[calc(100%-1rem)] 2xl:text-3xl lg:text-xl md:text-l ml-4 my-1 font-medium'>
            {name}
          </h1>
          <div className='grid grid-cols-[100%] grid-rows-[100%] m-4 mt-0 mb-2 aspect-square  w-[calc(100%-2rem)] bg-stone-800 rounded-md overflow-hidden'>
            {stats.current.sprite != '' && (
              <>
                <img
                  className='aspect-square object-scale-down h-full mx-auto row-start-1 row-span-1 col-start-1 col-span-1 sprite z-10'
                  src={stats.current.sprite}
                  alt={`${name} Sprite`}
                />
                <div className='row-start-1 row-span-1 col-start-1 col-span-1 h-1/2 overflow-hidden z-10'>
                  <img
                    ref={glitchLeft}
                    className='aspect-square h-[200%] opacity-50 mx-auto row-start-1 row-span-1 col-start-1 col-span-1 glitchLeft'
                    src={stats.current.sprite}
                    alt='Sprite Overlay Left'
                  />
                </div>
                <div className='flex row-start-1 row-span-1 col-start-1 col-span-1 mt-auto h-1/2 overflow-hidden z-10'>
                  <img
                    ref={glitchRight}
                    className='aspect-square self-end h-[200%] opacity-50 mx-auto row-start-1 row-span-1 col-start-1 col-span-1 glitchRight'
                    src={stats.current.sprite}
                    alt='Sprite Overlay Right'
                  />
                </div>
                <div
                  ref={glitchBox}
                  className='row-start-1 row-span-1 col-start-1 col-span-1 z-0 glitchBox'
                ></div>
              </>
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
        className='sm:grid sm:grid-cols-[3fr_2fr] sm:grid-rows-[auto_1fr] h-[calc(100%-3rem)] w-[calc(100%-6rem)] mx-auto mt-2 mb-8 bg-accent rounded-2xl p-4 row-start-3 col-start-1 hidden 2xl:row-start-5 2xl:row-end-6 2xl:h-3/5 2xl:w-[calc(100%-10rem)] 2xl:mb-auto 2xl:text-2xl'
      >
        <div className='row-start-1 row-span-1 col-start-1 col-span-1 mb-1'>
          <h1 className='inline'>Types: </h1>
          {stats.current.types.map(type => {
            return <Type key={`type-${type}`}>{type}</Type>;
          })}
        </div>
        <div className='row-start-2 row-span-1 col-start-1 col-span-1 my-auto'>
          <div className='mb-1'>
            <h1 className='inline'>Weaknesses: </h1>
          </div>
          <div className='block'>
            {stats.current.types.map(type =>
              weaknesses.get(type)?.map(weakness => {
                if (weaknessList.has(weakness)) return null;
                weaknessList.set(weakness, weakness);
                return <Type key={`weakness-${weakness}`}>{weakness}</Type>;
              })
            )}
          </div>
        </div>
        <div className='row-start-1 row-span-2 col-start-2 col-span-1 pl-4'>
          <h1>Abilities: </h1>
          <ul>
            {stats.current.abilities.map(ability => {
              return (
                <li
                  key={`stats-${ability}`}
                  className='list-disc ml-4'
                >{`${ability.replace(/(^\w|-\w)/g, match =>
                  match.toUpperCase()
                )} `}</li>
              );
            })}
          </ul>
        </div>
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
