import { useContext } from 'react';
import { QueryContext } from './QueryContext';
import { Button } from '../ui/button';
import { UnitContext } from '../UnitContext';

const ClearFilters = () => {
  const { setQuery } = useContext(QueryContext);
  const { setUnit, imperialRef, metricRef } = useContext(UnitContext);
  return (
    <div
      className={`flex items-center justify-center p-0 m-0 w-[6.25rem] h-[2.25rem] sm:w-[5.25rem] sm:h-[2.25rem] md:w-[6.25rem] md:h-[2.275rem] xl:w-[6.775rem] xl:h-[2.525rem] 2xl:w-[7.75rem] 2xl:h-[2.775rem] 3xl:w-[8.5rem] 3xl:h-[3.25rem] bg-black transition-all`}
      style={{ clipPath: 'ellipse(closest-side farthest-side)' }}
    >
      <Button
        variant='secondary'
        className={`h-9 text-sm w-24 sm:w-20 sm:text-xs md:w-24 xl:text-sm 2xl:text-base 3xl:text-lg xl:w-[6.5rem] xl:h-9 2xl:w-[7.5rem] 2xl:h-[2.5rem] 3xl:w-[8.25rem] 3xl:h-[3rem] mt-0 font-normal italic text-primary-foreground/50 hover:brightness-[1.35] hover:bg-secondary transition-all`}
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
