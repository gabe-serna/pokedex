import { createContext, Dispatch, SetStateAction } from 'react';

export interface Query {
  types: string[];
  generations: number[];
  abilities: string[];
}

interface QueryState {
  query: Query;
  setQuery: Dispatch<SetStateAction<Query>>;
}

export const QueryContext = createContext<QueryState>({
  query: { types: [], generations: [], abilities: [] },
  setQuery: () => {}
});
