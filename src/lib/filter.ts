import axios from 'axios';

export interface Result {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export async function filterTypes(
  selectedTypes: string[],
  dataset: Result[],
  newData: Result[],
  signal: AbortSignal
) {
  const promises = dataset.map(async pokemon => {
    try {
      const result = await axios.get(pokemon.url, { signal });

      if (selectedTypes.length !== 0) {
        const types = result?.data.types as Type[];
        types.forEach(type => {
          // console.log(type);
          if (selectedTypes.includes(type.type.name)) {
            console.log('type match');
            newData.push(pokemon);
          }
        });
      }
    } catch (err) {
      console.error(err);
    }
  });

  await Promise.all(promises);
  return newData;
}
