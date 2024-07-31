import { useRef, useEffect, useState } from 'react';
import Dropdown from '@/components/Dropdown';
import CheckboxItem from '@/components/CheckboxItem';
import { types } from '@/lib/utils';

interface Props {
  onSelect: (state: boolean, category: string, value: string) => void;
}

interface ListProps {
  onSelect: (state: boolean, category: string, value: string) => void;
  state: number;
}

const TypeDropdown = ({ onSelect }: Props) => {
  const [update, setUpdate] = useState(0);
  return (
    <Dropdown
      //PUT HANDLE FUNCTION IN USE EFFECT
      handleClick={() => setUpdate(update + 1)}
      previewText='Types'
      title='Select Type'
      description='Select which types you want to filter the Pokédex by'
    >
      <TypeList
        state={update}
        onSelect={(state, category, value) => onSelect(state, category, value)}
      />
    </Dropdown>
  );
};

const TypeList = ({ onSelect, state }: ListProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.childNodes.forEach(child => {
      if (child instanceof HTMLElement) {
        const type = child.innerText;
        // console.log(child);
        if (type == 'Normal') {
          const button = child.childNodes[0] as HTMLButtonElement;
          button.click();
          console.log('click');
        }
      }
    });

    return () => {
      ref.current?.childNodes.forEach(child => {
        if (child instanceof HTMLElement) {
          const type = child.innerText;
          // console.log(child);
          if (type == 'Normal') {
            const button = child.childNodes[0] as HTMLButtonElement;
            button.click();
            console.log('unclick');
          }
        }
      });
    };
  }, [state]);

  return (
    <div ref={ref} className='grid grid-cols-3 grid-rows-6 gap-3'>
      {Array.from(types.keys()).map(type => (
        <CheckboxItem
          onSelected={(state, category, value) => onSelect(state, category, value)}
          id={type}
          label={type.charAt(0).toUpperCase() + type.slice(1)}
          color={types.get(type)}
          category='types'
        />
      ))}
    </div>
  );
};

export default TypeDropdown;
