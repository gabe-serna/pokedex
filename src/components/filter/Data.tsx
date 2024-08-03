import useSearch from '@/hooks/use-search';
import { QueryContext } from './QueryContext';
import { useContext } from 'react';
import Search from '../Search';

export const Data = () => {
  const { query } = useContext(QueryContext);
  const data = useSearch(query);
  console.log('data component rendered');
  return <Search data={data} />;
};
