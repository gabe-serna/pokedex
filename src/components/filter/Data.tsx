import useFilter from '@/hooks/use-filter';
import { QueryContext } from './QueryContext';
import { useContext } from 'react';
import Search from '@/components/Search';
import { Selected } from '@/lib/utils';

interface Props {
  setSelected: React.Dispatch<React.SetStateAction<Selected>>;
}

export const Data = ({ setSelected }: Props) => {
  const { query } = useContext(QueryContext);
  const data = useFilter(query);
  return <Search data={data} setSelected={setSelected} />;
};
