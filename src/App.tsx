/* eslint-disable @typescript-eslint/no-unused-vars */
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

const App = () => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Page>
        <Section>Image</Section>
        <Section>
          <Search />
          <TypographyH3 className='mt-44'>Filter by:</TypographyH3>
          <TypeDropdown />
        </Section>
      </Page>
    </ThemeProvider>
  );
};

export default App;
