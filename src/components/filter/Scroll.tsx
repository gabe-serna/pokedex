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
      <CommandInput placeholder={scrollText} />
      <CommandList className='h-[168px] sm:h-[136px]'>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup ref={ref}>{children}</CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Scroll;
