import axios from 'axios';
import spriteNotFound from '../assets/not_found.png';

export interface Stats {
  height: string;
  weight: string;
  types: string[];
  abilities: string[];
  generation: string;
  sprite: string;
}

const getStats = async (name: string, unit: string): Promise<Stats> => {
  const abilitiesMap = new Map<string, string>();
  try {
    const result = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    let abilities: string[] = result.data.abilities.map(
      (ability: { ability: { name: string } }) => {
        if (abilitiesMap.has(ability.ability.name)) return '';
        abilitiesMap.set(ability.ability.name, ability.ability.name);
        return ability.ability.name;
      }
    );
    abilities = abilities.filter((ability: string) => ability !== '');
    const types: string[] = result.data.types.map(
      (types: { type: { name: string } }) => types.type.name
    );
    const height = getHeight(result.data.height, unit);
    const weight = getWeight(result.data.weight, unit);

    const species = await axios.get(result?.data.species.url);
    const generation: string = species?.data.generation.name;

    const url: string | null =
      result.data.sprites.other['official-artwork'].front_default;
    const sprite = url ? url : spriteNotFound;
    return { height, weight, types, abilities, generation, sprite };
  } catch (error) {
    console.error(error);
    return {
      height: '',
      weight: '',
      types: [],
      abilities: [],
      generation: '',
      sprite: ''
    };
  }
};

export default getStats;

const getHeight = (height: number, unit: string): string => {
  if (unit === 'Imperial') {
    const feet = Math.floor(height / 3.048);
    const inches = Math.round(height * 3.937 - feet * 12);
    return `${feet}' ${inches}"`;
  }

  //Unit is Metric
  height = height / 10;
  return `${height} m`;
};

const getWeight = (weight: number, unit: string): string => {
  if (unit === 'Imperial') return `${Math.round(weight * 0.2205)} lbs`;

  //Unit is Metric
  return `${weight / 10} kg`;
};
