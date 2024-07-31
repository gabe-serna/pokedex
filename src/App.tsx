/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useState } from 'react';
import { ThemeProvider } from './components/Theme-Provider';
import Section from './components/Section';
import Page from './components/Page';
import Search from './components/Search';
import TypeDropdown from './components/TypeDropdown';
import GenDropdown from './components/GenDropdown';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP
} from './components/Typography';
import { QueryContext } from './components/QueryContext';

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
            <TypeDropdown />
            <GenDropdown />
          </QueryContext.Provider>
        </Section>
      </Page>
    </ThemeProvider>
  );
};

export default App;
