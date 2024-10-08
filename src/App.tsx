/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { ThemeProvider } from './components/Theme-Provider';
import FilterTitle from './components/filter/FilterTitle';
import { Query, QueryContext } from './components/filter/QueryContext';
import { numbers, types, genMap, Selected } from './lib/utils';
import { Data } from './components/filter/Data';
import Section from './components/Section';
import Page from './components/Page';
import FilterDropdown from './components/filter/FilterDropdown';
import FilterItem from './components/filter/FilterItem';
import AbilityList from './components/filter/AbilityList';
import ClearFilters from './components/filter/ClearFilters';
import { SearchContext } from './components/filter/SearchContext';
import Side from './components/selected-pokemon/Side';
import ViewBox from './components/selected-pokemon/ViewBox';
import UnitToggle from './components/UnitToggle';
import { UnitContext } from './components/UnitContext';
import Help from './components/Help';
import useUnit from './hooks/use-unit';
import Header from './components/selected-pokemon/Header';

const App = () => {
  const [query, setQuery] = useState<Query>({
    types: [],
    generations: [],
    abilities: []
  });
  const [isSearching, setIsSearching] = useState(false);
  const { unit, setUnit, imperialRef, metricRef } = useUnit();
  const [selectedPokemon, setSelectedPokemon] = useState<Selected>({
    name: '',
    id: 0
  });

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Page>
        <Section className='relative grid sm:h-full h-1/2 3xl:grid-rows-[12rem_5fr_3fr] 2xl:grid-cols-[calc(100%-8rem)_8rem] 2xl:grid-rows-[9rem_5fr_3fr] lg:grid-cols-[calc(100%-6rem)_6rem] lg:grid-rows-[7rem_5fr_3fr] md:grid-cols-[calc(100%-4rem)_4rem] md:grid-rows-[5.5rem_5fr_3fr] sm:grid-rows-[5.5rem_2fr_1fr] grid-rows-[5rem_4fr_1fr] grid-cols-1'>
          <Header />
          <Side />
          <UnitContext.Provider value={{ unit, setUnit, imperialRef, metricRef }}>
            <ViewBox
              state={selectedPokemon}
              className='flex items-center justify-center mx-auto sm:my-auto 3xl:p-2 3xl:h-[calc(100%-3rem)] 2xl:w-1/2 2xl:h-[calc(100%-3rem)] 2xl:max-w-none 2xl:max-h-none xl:w-[55%] lg:w-[calc(100%-6rem)] lg:max-w-[25rem] md:w-[calc(100%-2rem)] sm:h-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] sm:max-w-[21rem] w-[calc(100%-4rem)] max-h-[20rem] sm:bg-slate-200 sm:border-8 sm:border-accent/90 sm:outline sm:outline-2 sm:outline-black rounded-md row-start-2 col-start-1'
            />
          </UnitContext.Provider>
        </Section>
        <Section className='grid grid-cols-1 grid-rows-1 sm:grid-rows-[6rem_5fr_2fr]'>
          <div className='absolute h-full w-full sm:w-1/2 row-span-1 col-span-1'>
            <svg
              className='absolute top-8 left-4 w-[calc(100%-2rem)] h-[calc(100%-4rem)] row-span-1 col-span-1 sm:block hidden '
              viewBox='0 0 600 676'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
            >
              <path
                d='M2.5 673.5V2.5C336.5 2.5 287.5 25.5 597.5 25.5V673.5H2.5Z'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </div>
          <div className='px-4 sm:px-12 2xl:px-14 3xl:px-16 col-span-1 row-span-1 sm:row-start-2 sm:row-end-3 z-20'>
            <QueryContext.Provider value={{ query, setQuery }}>
              <SearchContext.Provider value={{ isSearching, setIsSearching }}>
                <Data setSelected={setSelectedPokemon} />
                <FilterTitle>Filter by:</FilterTitle>
              </SearchContext.Provider>
              <div className='w-max'>
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
                <div className='flex flex-row items-center w-full justify-between mt-4  sm:mt-3 md:mt-3 xl:mt-4 2xl:mt-5 pr-4'>
                  <UnitContext.Provider
                    value={{ unit, setUnit, imperialRef, metricRef }}
                  >
                    <UnitToggle />
                    <ClearFilters />
                  </UnitContext.Provider>
                </div>
              </div>
            </QueryContext.Provider>
          </div>
          <div className='hidden sm:flex items-start justify-start px-4 sm:px-12 row-start-3 row-span-1 size-full '>
            <Help />
            <div className='relative w-1/3 h-1/3 mr-12 mt-auto mb-16 rounded-md bg-green-950/40 border-4 border-stone-900'>
              <div className='absolute w-full h-full rounded-md staticLeft' />
            </div>
            <div className='relative w-2/5 h-1/3 mr-12 mt-auto mb-16 rounded-md bg-green-950/40 border-4 border-stone-900'>
              <div className='absolute w-full h-full rounded-md staticRight' />
            </div>
          </div>
        </Section>
      </Page>
    </ThemeProvider>
  );
};

export default App;
