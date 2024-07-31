/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { ThemeProvider } from './components/Theme-Provider';
import Section from './components/Section';
import Page from './components/Page';
import Search from './components/Search';
import TypeDropdown from './components/TypeDropdown';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP
} from './components/Typography';
import GenDropdown from './components/GenDropdown';

interface Query {
  generations: number[];
  types: string[];
}

const App = () => {
  const [query, setQuery] = useState<Query>({ generations: [], types: [] });
  const handleSelect = (state: boolean, category: string, value: string) => {
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
  };

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Page>
        <Section>Image</Section>
        <Section>
          <Search />
          <TypographyH3 className='mt-44'>Filter by:</TypographyH3>
          <TypeDropdown
            onSelect={(state, category, value) =>
              handleSelect(state, category, value)
            }
          />
          <GenDropdown
            onSelect={(state, category, value) =>
              handleSelect(state, category, value)
            }
          />
        </Section>
      </Page>
    </ThemeProvider>
  );
};

export default App;
