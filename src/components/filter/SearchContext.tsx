import { createContext, Dispatch, SetStateAction } from 'react';

interface SearchState {
  isSearching: boolean;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
}

export const SearchContext = createContext<SearchState>({
  isSearching: false,
  setIsSearching: () => {}
});
