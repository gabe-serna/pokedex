import { useContext } from 'react';
import { SearchContext } from './SearchContext';
import { useMediaQuery } from '@/hooks/use-media-query';

interface Props {
  children?: string;
  className?: string;
}

const FilterTitle = ({ children, className }: Props) => {
  const { isSearching } = useContext(SearchContext);
  const isDesktop = useMediaQuery('(min-width: 640px)');
  const fullMargin = 'mt-52 2xl:mt-64 3xl:mt-80';
  const marginTop = isDesktop ? fullMargin : isSearching ? fullMargin : 'mt-14';
  return (
    <h1
      className={`scroll-m-20 text-xl sm:text-base md:text-lg xl:text-xl mt- 2xl:text-2xl 3xl:[font-size:26px] font-semibold text-outline-black tracking-tight xl:text-outline-thick xl:tracking-normal ${marginTop} ${className}`}
    >
      {children}
    </h1>
  );
};
export default FilterTitle;
