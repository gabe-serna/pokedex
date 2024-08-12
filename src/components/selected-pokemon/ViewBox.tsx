import getStats, { Stats } from '@/lib/getStats';
import { Selected } from '@/lib/utils';
import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { UnitContext } from '../UnitContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog';
import { Button } from '../ui/button';
import Info from './Info';
import VisuallyHidden from '../ui/visually-hidden';

interface Props {
  state: Selected;
  className?: string;
}

const ViewBox = ({ state, className }: Props) => {
  const [isFetching, setIsFetching] = useState(true);
  // const [update, setUpdate] = useState(0);
  const { unit } = useContext(UnitContext);
  const glitchLeft = useRef<HTMLImageElement>(null);
  const glitchRight = useRef<HTMLImageElement>(null);
  const glitchBox = useRef<HTMLDivElement>(null);
  const name = state.name !== '' ? state.name : 'Select a Pokémon';
  const stats = useRef<Stats>({
    height: '',
    weight: '',
    types: [],
    abilities: [],
    generation: '',
    sprite: ''
  });

  useEffect(() => {
    setIsFetching(true);
    if (state.name !== '') {
      const data = getStats(state.name, unit);
      data.then(res => {
        stats.current = res;
        setIsFetching(false);
      });
    }
  }, [state, unit]);

  useEffect(() => {
    if (isFetching) return;
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
        <div className='flex flex-col items-center outline outline-2 outline-black justify-between my-4 h-[calc(100%-2rem)] sm:w-[calc(100%-2.5rem)] w-[calc(100%-5rem)] bg-slate-200 border-8 border-accent/90 rounded-md'>
          <h1 className='text-black text-left w-[calc(100%-1rem)] 3xl:text-2xl 2xl:text-lg xl:text-base lg:text-lg ml-4 mt-auto mb-2 pt-2 font-medium'>
            {name}
          </h1>
          <div className='relative grid grid-cols-[100%] grid-rows-[100%] m-4 mt-0 sm:mb-2 mb-4 aspect-square w-[calc(100%-2rem)] bg-stone-900 border-2 border-black rounded-md overflow-hidden'>
            <div className='absolute w-full h-full rounded-md z-20 passiveGlitch' />
            {stats.current.sprite != '' && (
              <>
                <img
                  className='aspect-square object-scale-down h-full mx-auto row-start-1 row-span-1 col-start-1 col-span-1 sprite z-10 saturate-0'
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
          <aside className='text-gray-500 italic px-2 w-full whitespace-nowrap 2xl:text-md 3xl:text-2xl sm:flex sm:flex-row pb-2 sm:justify-around sm:gap-1 mb-auto hidden'>
            <div className='w-full flex flex-wrap justify-center gap-x-[6px]'>
              <p className='block'>Height:</p>
              <p className='block'>{stats.current.height}</p>
            </div>
            <div className='w-full flex flex-row flex-wrap justify-center gap-x-[6px]'>
              <p className='block'>Weight:</p>
              <p className='block'>{stats.current.weight}</p>
            </div>
          </aside>
        </div>
      </div>
      <div
        id='info'
        className='sm:grid sm:grid-cols-[3fr_2fr] sm:grid-rows-[auto_1fr] h-min sm:min-h-40 w-[calc(100%-6rem)] mx-auto mt-2 mb-8 bg-accent rounded-2xl p-4 border-2 border-black row-start-3 col-start-1 hidden 2xl:mb-auto 2xl:text-2xl md:max-lg:w-[90%]'
      >
        <Info stats={stats} />
      </div>
      <div
        id='more-info'
        className='grid grid-rows-[auto_auto_auto_auto] grid-cols-1 row-start-3 col-start-1'
      >
        <MoreInfoContainer stats={stats}>
          <Info stats={stats} />
        </MoreInfoContainer>
      </div>
    </>
  );
};

const MoreInfoContainer: React.FC<{
  children?: ReactNode;
  stats: React.MutableRefObject<Stats>;
}> = ({ children, stats }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {stats.current.sprite != '' && (
        <DialogTrigger
          asChild
          className='h-[calc(100%-3rem)] w-[calc(100%-6rem)] m-auto mt-0 rounded-2xl p-4 sm:hidden flex flex-col items-center justify-center'
        >
          <Button variant='outline' className='bg-accent'>
            Click for more info
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className='w-[calc(100%-4rem)]'>
        <VisuallyHidden asChild>
          <DialogTitle>More Info</DialogTitle>
          <DialogDescription>
            Types, Weaknesses, and Abilities of your Chosen Pokemon
          </DialogDescription>
        </VisuallyHidden>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ViewBox;
