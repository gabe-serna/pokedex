import { useRef, useEffect, useState, useContext } from 'react';
import Dropdown from '@/components/Dropdown';
import FilterItem from '@/components/FilterItem';
import { types } from '@/lib/utils';
import { QueryContext } from './QueryContext';

const TypeDropdown = () => {
  const [displayCheckedElements, setDisplayCheckedElements] = useState(0);
  return (
    <Dropdown
      handleClick={() => setDisplayCheckedElements(displayCheckedElements + 1)}
      previewText='Types'
      title='Select Type'
      description='Select which types you want to filter the Pokédex by'
    >
      <TypeList state={displayCheckedElements} />
    </Dropdown>
  );
};

interface Props {
  state: number;
}

const TypeList = ({ state }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { query } = useContext(QueryContext);

  useEffect(() => {
    function checkIfSelected() {
      ref.current?.childNodes.forEach(child => {
        const button = child.childNodes[0] as HTMLButtonElement;
        if (query.types.includes(button.id)) {
          button.click();
        }
      });
    }

    checkIfSelected();
    return () => checkIfSelected();
  }, [state]);

  return (
    <div ref={ref} className='grid grid-cols-3 grid-rows-6 gap-3'>
      {Array.from(types.keys()).map(type => (
        <FilterItem
          id={type}
          key={type}
          label={type.charAt(0).toUpperCase() + type.slice(1)}
          category='types'
          color={types.get(type)}
        />
      ))}
    </div>
  );
};

export default TypeDropdown;
