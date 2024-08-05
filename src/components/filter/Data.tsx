import useSearch from '@/hooks/use-filter';
import { QueryContext } from './QueryContext';
import { useContext } from 'react';
import Search from '../Search';

interface Props {
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const Data = ({ setSelected }: Props) => {
  const { query } = useContext(QueryContext);
  const data = useSearch(query);
  return <Search data={data} setSelected={setSelected} />;
};
