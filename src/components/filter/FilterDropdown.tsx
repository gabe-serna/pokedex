import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import Dropdown from '@/components/filter/Dropdown';
import { QueryContext } from './QueryContext';

interface Props {
  previewText: string;
  title: string;
  description: string;
  category: string;
  cols: number;
  rows: number;
  gap: number;
  children?: ReactNode | ReactNode[];
}

const FilterDropdown = ({
  previewText,
  title,
  description,
  category,
  cols,
  rows,
  gap,
  children
}: Props) => {
  const [displayCheckedElements, setDisplayCheckedElements] = useState(0);

  return (
    <Dropdown
      handleClick={() => setDisplayCheckedElements(displayCheckedElements + 1)}
      previewText={previewText}
      title={title}
      description={description}
    >
      <Filters
        state={displayCheckedElements}
        cols={cols}
        rows={rows}
        gap={gap}
        category={category}
        children={children}
      />
    </Dropdown>
  );
};

interface FilterProps {
  state: number;
  cols: number;
  rows: number;
  gap: number;
  category: string;
  children?: ReactNode | ReactNode[];
}

const Filters = ({ state, cols, rows, gap, category, children }: FilterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { query } = useContext(QueryContext);

  useEffect(() => {
    function checkIfSelected() {
      ref.current?.childNodes.forEach(child => {
        const button = child.childNodes[0] as HTMLButtonElement;
        switch (category) {
          case 'generations':
            if (query.generations.includes(parseInt(button.id.slice(-1)))) {
              button.click();
            }
            break;
          case 'types':
            if (query.types.includes(button.id)) {
              button.click();
            }
        }
      });
    }

    checkIfSelected();
    return () => checkIfSelected();
  }, [state]);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-${cols.toString()} grid-rows-${rows.toString()} gap-${gap.toString()}`}
    >
      {children}
    </div>
  );
};

export default FilterDropdown;
