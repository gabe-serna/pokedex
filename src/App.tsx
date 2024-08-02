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
import Section from './components/Section';
import Page from './components/Page';
import Search from './components/Search';
import { ScrollDropdown } from './components/filter/ScrollDropdown';
import FilterDropdown from './components/filter/FilterDropdown';
import FilterItem from './components/filter/FilterItem';
import { QueryContext } from './components/filter/QueryContext';
import { numbers, types } from './lib/utils';

interface Query {
  generations: number[];
  types: string[];
}

const App = () => {
  const [query, setQuery] = useState<Query>({ generations: [], types: [] });

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Page>
        <Section>Image</Section>
        <Section>
          <Search />
          <TypographyH3 className='mt-44'>Filter by:</TypographyH3>
          <QueryContext.Provider value={{ query, setQuery }}>
            <FilterDropdown
              previewText='Types'
              title='Select Type'
              description='Choose which types to filter the Pokédex by'
              category='types'
              cols={3}
              gap={3}
            >
              {Array.from(types.keys()).map(type => (
                <FilterItem
                  id={type}
                  key={type}
                  label={type.charAt(0).toUpperCase() + type.slice(1)}
                  category='types'
                  color={types.get(type)}
                />
              ))}
            </FilterDropdown>
            <FilterDropdown
              previewText='Generations'
              title='Select Generation'
              description='Choose which generations to filter the Pokédex by'
              category='generations'
              cols={3}
              gap={6}
            >
              {numbers.map(gen => (
                <FilterItem
                  id={`gen${gen}`}
                  key={`gen${gen}`}
                  label={`Gen ${gen}`}
                  category='generations'
                />
              ))}
            </FilterDropdown>
            <ScrollDropdown />
          </QueryContext.Provider>
        </Section>
      </Page>
    </ThemeProvider>
  );
};

export default App;
