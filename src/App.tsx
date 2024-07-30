/* eslint-disable @typescript-eslint/no-unused-vars */
import { ThemeProvider } from './components/Theme-Provider';
import Section from './components/Section';
import Page from './components/Page';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP
} from './components/Typography';

const App = () => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Page>
        <Section>Image</Section>
        <Section>
          <Search />
          {/* margin is built into typography h3 pls change */}
          <TypographyH3>Filter by:</TypographyH3>
          <Dropdown title='Type' />
        </Section>
      </Page>
    </ThemeProvider>
  );
};

export default App;
