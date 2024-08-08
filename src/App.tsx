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
import { numbers, types, genMap, Selected } from './lib/utils';
import { Data } from './components/filter/Data';
import Section from './components/Section';
import Page from './components/Page';
import FilterDropdown from './components/filter/FilterDropdown';
import FilterItem from './components/filter/FilterItem';
import AbilityList from './components/filter/AbilityList';
import ClearFilters from './components/filter/ClearFilters';
import { SearchContext } from './components/SearchContext';
import Header from './components/selected-pokemon/Header';
import Side from './components/selected-pokemon/Side';
import ViewBox from './components/selected-pokemon/ViewBox';
import UnitToggle from './components/UnitToggle';

const App = () => {
  const [query, setQuery] = useState<Query>({
    types: [],
    generations: [],
    abilities: []
  });
  const [isSearching, setIsSearching] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<Selected>({
    name: '',
    id: 0
  });

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Page>
        <Section className='grid 3xl:grid-rows-[12rem_5fr_3fr] 2xl:grid-cols-[calc(100%-8rem)_8rem] 2xl:grid-rows-[10rem_5fr_3fr] lg:grid-cols-[calc(100%-6rem)_6rem] lg:grid-rows-[7rem_5fr_3fr] md:grid-cols-[calc(100%-4rem)_4rem] md:grid-rows-[5.5rem_5fr_3fr] sm:grid-rows-[5.5rem_2fr_1fr] grid-rows-[5rem_4fr_1fr] grid-cols-1'>
          <Header className='bg-accent w-full h-full p-1 flex flex-row border-b-8 border-black/20 col-start-0 col-end-2' />
          <Side className='h-full w-full bg-accent row-start-1 row-end-4 col-start-2 col-end-3 2xl:row-end-6 md:block hidden' />
          <ViewBox
            state={selectedPokemon}
            className='flex items-center justify-center mx-auto sm:my-auto 2xl:w-3/5 2xl:h-[calc(100%-3rem)] 2xl:max-w-none 2xl:max-h-none xl:w-[55%] lg:w-[calc(100%-6rem)] lg:max-w-[25rem] md:w-[calc(100%-2rem)] sm:h-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] sm:max-w-[21rem] w-[calc(100%-3rem)] max-h-[20rem] sm:bg-slate-200 sm:border-8 sm:border-accent/90 rounded-md row-start-2 col-start-1'
          />
        </Section>
        <Section className='grid grid-cols-1 grid-rows-1 sm:grid-rows-[4rem_5fr_2fr]'>
          <div className=' px-4 sm:px-8 col-span-1 row-span-1 sm:row-start-2 sm:row-end-3'>
            <QueryContext.Provider value={{ query, setQuery }}>
              <SearchContext.Provider value={{ isSearching, setIsSearching }}>
                <Data setSelected={setSelectedPokemon} />
                <TypographyH3>Filter by:</TypographyH3>
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
          </div>
          <div className='flex items-center justify-center row-start-3 row-span-1 size-full'>
            <UnitToggle />
          </div>
        </Section>
      </Page>
    </ThemeProvider>
  );
};

export default App;
