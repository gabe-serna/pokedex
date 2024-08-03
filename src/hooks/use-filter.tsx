import { Query } from '@/components/filter/QueryContext';
import { useEffect, useState } from 'react';
import { Result, dataPromise } from '@/lib/getData';
import { Type } from '@/lib/pokemon';
import axios from 'axios';

let dataset: Result[] = [];
dataPromise.then(res => (dataset = res));

const useFilter = (query: Query) => {
  // let dataset: Result[] = [];
  // const { types, generations, abilities } = query;
  console.log('Filtering data');
  const [data, setData] = useState<Result[]>([]);

  // This useEffect should start by looping through each element of the dataset,
  // checking if the filter criteria are met, and then finishing with setData(new data)
  useEffect(() => {
    const newData: Result[] = [];
    async function filterTypes() {
      const promises = dataset.map(async pokemon => {
        try {
          const result = await axios
            .get(pokemon.url)
            .catch(err => console.error(err));

          //Types
          if (query.types.length !== 0) {
            const types = result?.data.types as Type[];
            types.forEach(type => {
              // console.log(type);
              if (query.types.includes(type.type.name)) {
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
      console.log('NEW DATA: ', newData);
      newData.length > 0 ? setData(newData) : setData(dataset);
    }
    filterTypes();
  }, [query]);

  return data;
};

export default useFilter;
