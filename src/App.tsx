import { ThemeProvider } from '@/components/Theme-Provider';
import Section from './components/Section';
import Page from './components/Page';
import Search from './components/Search';

const App = () => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Page>
        <Section>Image</Section>
        <Section>
          <Search />
        </Section>
      </Page>
    </ThemeProvider>
  );
};

export default App;
