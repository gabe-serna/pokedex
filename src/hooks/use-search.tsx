import { Query } from '@/components/filter/QueryContext';
import { useEffect, useState } from 'react';
import axios from 'axios';

export interface Pokemon {
  name: string;
  url: string;
}

const useSearch = (query: Query) => {
  const { types, generations, abilities } = query;
  console.log(types, generations, abilities);
  const [data, setData] = useState<Pokemon[]>([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`)
      .then(res => {
        setData(res.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }, [query]);

  return data;
};

export default useSearch;
