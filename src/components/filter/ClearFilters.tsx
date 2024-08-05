import { useContext } from 'react';
import { QueryContext } from './QueryContext';
import { Button } from '../ui/button';

const ClearFilters = () => {
  const { setQuery } = useContext(QueryContext);
  return (
    <Button
      variant='secondary'
      className={`block text-xs sm:text-sm w-25 h-9 font-normal italic text-primary-foreground/50 hover:brightness-[1.35] hover:bg-secondary transition-all`}
      style={{ clipPath: 'ellipse(closest-side farthest-side)' }}
      onClick={() => {
        setQuery({ types: [], generations: [], abilities: [] });
      }}
    >
      Clear Filters
    </Button>
  );
};

export default ClearFilters;
