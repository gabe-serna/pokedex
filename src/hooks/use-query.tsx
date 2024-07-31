import { useState } from 'react';

interface Query {
  generations: number[];
  types: string[];
}

const useQuery = (
  state: boolean,
  category: string,
  value: string,
  getQuery?: boolean
) => {
  const [query, setQuery] = useState<Query>({ generations: [], types: [] });
  if (getQuery) return query;

  let input = [];
  switch (category) {
    case 'generations':
      input = [...query.generations, parseInt(value.slice(-1))];
      if (!state)
        input = query.generations.filter(gen => gen !== parseInt(value.slice(-1)));

      setQuery({
        generations: input,
        types: [...query.types]
      });
      break;
    case 'types':
      input = [...query.types, value];
      if (!state) input = query.types.filter(type => type !== value);

      setQuery({
        generations: [...query.generations],
        types: input
      });
      break;
  }
  console.log(query);
};
export default useQuery;
