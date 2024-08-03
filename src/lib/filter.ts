import { Query } from '@/components/filter/QueryContext';
import axios, { AxiosError } from 'axios';

export interface Result {
  name: string;
  url: string;
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Ability {
  slot: number;
  is_hidden: boolean;
  ability: {
    name: string;
    url: string;
  };
}

export async function filterData(
  query: Query,
  dataset: Result[],
  newData: Result[],
  signal: AbortSignal
) {
  const {
    types: selectedTypes,
    generations: selectedGens,
    abilities: selectedAbilities
  } = query;
  const promises = dataset.map(async pokemon => {
    try {
      const result = await axios.get(pokemon.url, { signal });

      //Types
      if (selectedTypes.length !== 0) {
        const types = result?.data.types as Type[];
        const matchesType = types.some(type =>
          selectedTypes.includes(type.type.name)
        );
        if (!matchesType) return;
      }

      //Abilities
      if (selectedAbilities.length !== 0) {
        const abilities = result?.data.abilities as Ability[];
        const matchesAbility = abilities.some(ability =>
          selectedAbilities.includes(ability.ability.name)
        );
        if (!matchesAbility) return;
      }

      //Generations
      if (selectedGens.length !== 0) {
        const species = await axios.get(result?.data.species.url, { signal });
        const gen = species?.data.generation.name;
        if (!selectedGens.includes(gen)) return;
      }
      console.log('matches criteria');

      newData.push(pokemon);
    } catch (error) {
      if (error instanceof AxiosError && error.message !== 'canceled')
        console.error(error);
    }
  });

  await Promise.all(promises);
  return newData;
}
