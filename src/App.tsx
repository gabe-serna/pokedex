/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { ThemeProvider } from './components/Theme-Provider';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP
} from './components/Typography';
import { Query, QueryContext } from './components/filter/QueryContext';
import { numbers, types, genMap } from './lib/utils';
import { Data } from './components/filter/Data';
import Section from './components/Section';
import Page from './components/Page';
import FilterDropdown from './components/filter/FilterDropdown';
import FilterItem from './components/filter/FilterItem';
import AbilityList from './components/filter/AbilityList';
import ClearFilters from './components/filter/ClearFilters';
import { SearchContext } from './components/SearchContext';

const App = () => {
  const [query, setQuery] = useState<Query>({
    types: [],
    generations: [],
    abilities: []
  });
  const [isSearching, setIsSearching] = useState(false);

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Page>
        <Section>Image</Section>
        <Section>
          <QueryContext.Provider value={{ query, setQuery }}>
            <SearchContext.Provider value={{ isSearching, setIsSearching }}>
              <Data />
              <TypographyH3 className='mt-44'>Filter by:</TypographyH3>
            </SearchContext.Provider>
            <FilterDropdown
              previewText='Types'
              title='Select Type'
              description='Choose which types to filter the Pokédex by'
              category='types'
              cols={3}
              gap={3}
            >
              <>
                {Array.from(types.keys()).map(type => (
                  <FilterItem
                    id={type}
                    key={type}
                    label={type.charAt(0).toUpperCase() + type.slice(1)}
                    category='types'
                    color={types.get(type)}
                  />
                ))}
              </>
            </FilterDropdown>
            <FilterDropdown
              previewText='Generations'
              title='Select Generation'
              description='Choose which generations to filter the Pokédex by'
              category='generations'
              cols={3}
              gap={6}
            >
              <>
                {numbers.map(gen => (
                  <FilterItem
                    id={`generation-${genMap.get(gen)}`}
                    key={`generation-${gen}`}
                    label={`Gen ${gen}`}
                    category='generations'
                  />
                ))}
              </>
            </FilterDropdown>
            <FilterDropdown
              previewText='Abilities'
              title='Select Abilites'
              description='Choose which abilites to filter the Pokédex by'
              category='abilities'
              isScroll={true}
              scrollText='Search for an ability'
            >
              <AbilityList />
            </FilterDropdown>
            <ClearFilters />
          </QueryContext.Provider>
        </Section>
      </Page>
    </ThemeProvider>
  );
};

export default App;
