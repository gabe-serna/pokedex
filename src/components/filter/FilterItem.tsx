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
        input = [...query.generations, value];
        if (!state) input = query.generations.filter(gen => gen !== value);

        setQuery({
          generations: input,
          types: [...query.types],
          abilities: [...query.abilities]
        });
        break;
      case 'types':
        input = [...query.types, value];
        if (!state) input = query.types.filter(type => type !== value);

        setQuery({
          types: input,
          generations: [...query.generations],
          abilities: [...query.abilities]
        });
        break;
      case 'abilities':
        input = [...query.abilities, value];
        if (!state) input = query.abilities.filter(ability => ability !== value);

        setQuery({
          types: [...query.types],
          generations: [...query.generations],
          abilities: input
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
    <div className='flex items-center space-x-2 2xl:space-x-3 3xl:space-x-4 2xl:py-[2px] 3xl-py-4'>
      <Checkbox
        id={id}
        className={`2xl:size-5 3xl:size-6 ${classes}`}
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
        className='text-sm xl:[font-size:15px] 2xl:[font-size:18px] 3xl:[font-size:23px] font-medium text-outline-black leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        {label}
      </label>
    </div>
  );
};

export default FilterItem;
