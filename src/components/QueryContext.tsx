import { createContext, Dispatch, SetStateAction } from 'react';

interface Query {
  generations: number[];
  types: string[];
}

interface QueryState {
  query: Query;
  setQuery: Dispatch<SetStateAction<Query>>;
}

export const QueryContext = createContext<QueryState>({
  query: { generations: [], types: [] },
  setQuery: () => {}
});
