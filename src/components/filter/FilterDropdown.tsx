import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import Dropdown from '@/components/filter/Dropdown';
import { QueryContext } from './QueryContext';
import Scroll from './Scroll';

interface Props {
  previewText: string;
  title: string;
  description: string;
  category: string;
  isScroll?: boolean | null;
  scrollText?: string;
  cols?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  children?: JSX.Element | undefined;
}

const FilterDropdown = ({
  previewText,
  title,
  description,
  category,
  isScroll = null,
  scrollText = '',
  cols = 3,
  gap = 3,
  children
}: Props) => {
  const [displayCheckedElements, setDisplayCheckedElements] = useState(0);

  return (
    <Dropdown
      handleClick={() => setDisplayCheckedElements(displayCheckedElements + 1)}
      previewText={previewText}
      title={title}
      description={description}
      category={category}
    >
      {!isScroll ? (
        <Filters
          state={displayCheckedElements}
          cols={cols}
          gap={gap}
          category={category}
          children={children}
        />
      ) : (
        <Scroll
          state={displayCheckedElements}
          category={category}
          scrollText={scrollText}
          children={children}
        />
      )}
    </Dropdown>
  );
};

interface FilterProps {
  state: number;
  cols: number;
  gap: number;
  category: string;
  children?: ReactNode | ReactNode[];
}

const Filters = ({ state, cols, gap, category, children }: FilterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { query } = useContext(QueryContext);
  const gapClass = `gap-${gap.toString()}`;
  const colsClass = `grid-cols-${cols.toString()}`;

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
    <div ref={ref} className={`grid ${colsClass} ${gapClass}`}>
      {children}
    </div>
  );
};

export default FilterDropdown;
