import { Checkbox } from '@/components/ui/checkbox';
import { QueryContext } from './QueryContext';
import { useContext, useEffect, useState } from 'react';

export interface FilterItemProps {
  id: string;
  category: string;
  label?: string;
  color?: string;
}

const FilterItem = ({ id, label = '', category, color = '' }: FilterItemProps) => {
  const { query, setQuery } = useContext(QueryContext);

  const handleQuery = (state: boolean, category: string, value: string) => {
    let input = [];
    switch (category) {
      case 'generations':
        input = [...query.generations, parseInt(value.slice(-1))];
        if (!state)
          input = query.generations.filter(gen => gen !== parseInt(value.slice(-1)));

        setQuery({
          generations: input,
          types: [...query.types]
        });
        break;
      case 'types':
        input = [...query.types, value];
        if (!state) input = query.types.filter(type => type !== value);

        setQuery({
          generations: [...query.generations],
          types: input
        });
        break;
    }
  };

  const [mounted, setMounted] = useState(false);
  let classes;
  if (color !== '') {
    classes = `border-[${color}] data-[state=checked]:bg-[${color}]`;
  }
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 200);
  }, []);

  return (
    <div className='flex items-center space-x-2'>
      <Checkbox
        id={id}
        className={classes}
        data-category={category}
        onClick={event => {
          if (mounted) {
            const target = event.target as HTMLButtonElement;
            const state = target.ariaChecked === 'true' ? false : true;
            const category = target.getAttribute('data-category') as string;
            const value = target.id;
            handleQuery(state, category, value);
          }
        }}
      />
      <label
        htmlFor={id}
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        {label}
      </label>
    </div>
  );
};

export default FilterItem;
