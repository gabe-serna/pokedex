import { useContext, useEffect, useRef } from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList
} from '../ui/command';
import { QueryContext } from './QueryContext';

interface Props {
  state: number;
  category: string;
  scrollText: string;
  children?: JSX.Element | undefined;
}

const Scroll = ({ state, category, scrollText, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { query } = useContext(QueryContext);

  useEffect(() => {
    function checkIfSelected() {
      const parent = ref.current?.childNodes[0] as HTMLDivElement;
      parent?.childNodes.forEach(child => {
        let div = child.childNodes[0] as HTMLDivElement;
        div = div.childNodes[0] as HTMLDivElement;
        const button = div.childNodes[0] as HTMLButtonElement;

        switch (category) {
          case 'abilities': {
            if (query.abilities.includes(button.id)) {
              button.click();
            }
          }
        }
      });
    }

    checkIfSelected();
    return () => checkIfSelected();
  }, [state]);

  return (
    <Command>
      <div className='[&>div]:bg-accent'>
        <CommandInput
          placeholder={scrollText}
          className='xl:[font-size:15px] 2xl:[font-size:18px] 3xl:[font-size:23px] bg-transparent'
        />
      </div>
      <CommandList className='h-[168px] sm:h-[141px] 2xl:h-[192px] 3xl:h-[240px] w-[calc(100%-0.5rem)] mx-1 bg-black/20 border-2 2xl:border-[3px] border-t-0 2xl:border-t-0'>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup className='px-0' ref={ref}>
          {children}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Scroll;
