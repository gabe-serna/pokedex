import axios from 'axios';

export interface Stats {
  height: string;
  weight: string;
  types: string[];
  // weaknesses: string[];
  abilities: string[];
}

const getStats = async (name: string): Promise<Stats> => {
  try {
    const result = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    const abilities: string[] = result.data.abilities.map(
      (ability: { ability: { name: string } }) => ability.ability.name
    );
    const types: string[] = result.data.types.map(
      (types: { type: { name: string } }) => types.type.name
    );
    let height = result.data.height;
    const feet = Math.floor(height / 3.048);
    const inches = Math.round(height * 3.937 - feet * 12);
    console.log(`height: ${height}, feet ${feet}, inches ${inches}`);
    height = `${feet}' ${inches}"`;

    const weight = `${Math.round(result.data.weight * 0.2205)} lbs`;
    return { height, weight, types, abilities };
  } catch (error) {
    console.error(error);
    return { height: '', weight: '', types: [], abilities: [] };
  }
};

export default getStats;
