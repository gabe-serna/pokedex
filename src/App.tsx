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
        <Section className='grid 2xl:grid-cols-[calc(100%-8rem)_8rem] 2xl:grid-rows-[12rem_1fr_6fr_1fr_5fr] lg:grid-cols-[calc(100%-6rem)_6rem] lg:grid-rows-[7rem_2fr_1fr] md:grid-cols-[calc(100%-4rem)_4rem] md:grid-rows-[5.5rem_2fr_1fr] sm:grid-rows-[5.5rem_2fr_1fr] grid-rows-[5rem_4fr_1fr] grid-cols-1'>
          <header className='bg-accent w-full h-full p-1 flex flex-row border-b-8 border-black/20 col-start-0 col-end-2'>
            <div className='2xl:size-28 lg:size-16 size-12 rounded-full bg-blue-500 2xl:m-8 2xl:mt-6 2xl:mr-6 lg:m-4 lg:mt-3 m-3 mt-2 border-white border-2 2xl:border-4' />
            <div className='2xl:size-11 lg:size-6 size-5 rounded-full bg-red-500 2xl:m-4 m-2' />
            <div className='2xl:size-11 lg:size-6 size-5 rounded-full bg-yellow-500 2xl:m-4 m-2' />
            <div className='2xl:size-11 lg:size-6 size-5 rounded-full bg-green-600 2xl:m-4 m-2' />
          </header>
          <div
            id='side'
            className='h-full w-full bg-accent row-start-1 row-end-4 col-start-2 col-end-3 2xl:row-end-6 md:block hidden'
          ></div>
          <div
            id='view-box'
            className='flex items-center justify-center 2xl:w-[calc(100%-20rem)] lg:mx-auto lg:w-[calc(100%-6rem)] sm:my-4 sm:h-[calc(100%-2rem)] sm:mx-6 sm:w-[calc(100%-3rem)] sm:bg-slate-200 sm:border-8 sm:border-accent/90 rounded-md row-start-2 col-start-1 2xl:row-start-3 2xl:row-end-4'
          >
            <div className='flex flex-col items-center my-4 h-[calc(100%-2rem)] sm:w-[calc(100%-2.5rem)] w-[calc(100%-5rem)] bg-slate-200 border-8 border-accent/90 rounded-md'>
              <h1 className='text-black text-left w-[calc(100%-1rem)] 2xl:text-3xl lg:text-xl md:text-l ml-4 my-1 font-medium'>
                Name
              </h1>
              <div className='flex items-center justify-center m-4 mt-0 sm:mb-2 h-[calc(100%-2rem)] w-[calc(100%-2rem)] bg-stone-800 rounded-md'></div>
              <aside className='text-gray-500 italic w-full 2xl:text-2xl sm:flex sm:flex-row sm:justify-around mb-2 hidden'>
                <p>Height: 1' 04"</p>
                <p>13.2 lbs</p>
              </aside>
            </div>
          </div>
          <div
            id='info'
            className='h-[calc(100%-3rem)] w-[calc(100%-6rem)] mx-auto mt-4 mb-8 bg-accent rounded-2xl p-4 row-start-3 col-start-1 sm:block hidden 2xl:row-start-5 2xl:row-end-6 2xl:h-[calc(100%-15rem)] 2xl:w-[calc(100%-20rem)] 2xl:mb-auto 2xl:text-3xl'
          >
            <h1>Types:</h1>
            <h1>Weaknesses:</h1>
            <h1>Abilities:</h1>
          </div>
          <div
            id='more-info'
            className='h-[calc(100%-3rem)] w-[calc(100%-6rem)] m-auto bg-accent rounded-2xl p-4 row-start-3 col-start-1 sm:hidden flex flex-col items-center justify-center'
          >
            <h1> Click for more info</h1>
          </div>
        </Section>
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
