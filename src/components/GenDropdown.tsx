import Dropdown from '@/components/Dropdown';
import CheckboxItem from '@/components/CheckboxItem';
import { useContext, useEffect, useRef, useState } from 'react';
import { QueryContext } from './QueryContext';

const GenDropdown = () => {
  const [update, setUpdate] = useState(0);

  return (
    <Dropdown
      handleClick={() => setUpdate(update + 1)}
      previewText='Generations'
      title='Select Generation'
      description='Select which generations you want to filter the Pokédex by'
    >
      <GenList state={update} />
    </Dropdown>
  );
};

interface Props {
  state: number;
}

const GenList = ({ state }: Props) => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const ref = useRef<HTMLDivElement>(null);
  const { query } = useContext(QueryContext);

  useEffect(() => {
    function checkIfSelected() {
      ref.current?.childNodes.forEach(child => {
        const button = child.childNodes[0] as HTMLButtonElement;
        const gen = parseInt(button.id.slice(-1));
        if (query.generations.includes(gen)) {
          button.click();
        }
      });
    }

    checkIfSelected();
    return () => checkIfSelected();
  }, [state]);

  return (
    <div ref={ref} className='grid grid-cols-3 grid-rows-3 gap-6'>
      {list.map(gen => (
        <CheckboxItem
          id={`gen${gen}`}
          key={`gen${gen}`}
          label={`Gen ${gen}`}
          category='generations'
        />
      ))}
    </div>
  );
};

export default GenDropdown;
