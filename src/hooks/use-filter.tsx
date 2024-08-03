import { Query } from '@/components/filter/QueryContext';
import { useEffect, useState } from 'react';
import { dataPromise } from '@/lib/getData';
import { filterTypes, Result } from '@/lib/filter';

let dataset: Result[] = [];
dataPromise.then(res => (dataset = res));

const useFilter = (query: Query) => {
  const { types, generations, abilities } = query;
  const [data, setData] = useState<Result[]>([]);

  // This useEffect should start by looping through each element of the dataset,
  // checking if the filter criteria are met, and then finishing with setData(new data)
  useEffect(() => {
    console.log('Filtering data');
    let newData: Result[] = [];
    const controller = new AbortController();

    async function filter() {
      if (types.length === 0 && generations.length === 0 && abilities.length === 0) {
        setData(dataset);
        return;
      }
      newData = await filterTypes(types, dataset, newData, controller.signal);
      // await filterGenerations(query, dataset, newData);
      // await filterAbilities(query, dataset, newData);

      setData(newData);
    }

    filter();
    return () => {
      console.log('Cancelling API calls');
      controller.abort();
    };
  }, [query, dataset]);

  return data;
};

export default useFilter;
