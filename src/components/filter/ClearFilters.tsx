import { useContext } from 'react';
import { QueryContext } from './QueryContext';
import { Button } from '../ui/button';
import { UnitContext } from '../UnitContext';

const ClearFilters = () => {
  const { setQuery } = useContext(QueryContext);
  const { setUnit, imperialRef, metricRef } = useContext(UnitContext);
  return (
    <div
      className={`flex items-center justify-center p-0 m-0 w-[6.625rem] h-[2.125rem] sm:h-[2.375rem] bg-black transition-all`}
      style={{ clipPath: 'ellipse(closest-side farthest-side)' }}
    >
      <Button
        variant='secondary'
        className={`text-xs mt-0 sm:text-sm w-[6.5rem] h-9 font-normal italic text-primary-foreground/50 hover:brightness-[1.35] hover:bg-secondary transition-all`}
        style={{ clipPath: 'ellipse(closest-side farthest-side)' }}
        onClick={() => {
          setQuery({ types: [], generations: [], abilities: [] });
          const isMetric = metricRef.current?.ariaChecked === 'true' ? true : false;
          const isImperial =
            imperialRef.current?.ariaChecked === 'true' ? true : false;
          if (isMetric) metricRef.current?.click();
          if (isImperial) imperialRef.current?.click();
          setUnit('Imperial');
        }}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default ClearFilters;
