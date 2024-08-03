import axios from 'axios';
import { Result } from './filter';

async function getData(): Promise<Result[]> {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`
    );
    return res.data.results as Result[];
  } catch (err) {
    console.error(err);
    return [];
  }
}

export const dataPromise: Promise<Result[]> = getData();
