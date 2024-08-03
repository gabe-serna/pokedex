import useSearch from '@/hooks/use-filter';
import { QueryContext } from './QueryContext';
import { useContext } from 'react';
import Search from '../Search';

export const Data = () => {
  const { query } = useContext(QueryContext);
  const data = useSearch(query);
  return <Search data={data} />;
};
