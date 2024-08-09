import { Query } from '@/components/filter/QueryContext';
import { useEffect, useState } from 'react';
import { dataPromise } from '@/lib/getData';
import { filterData, Result } from '@/lib/filter';

let dataset: Result[] = [];
dataPromise.then(res => (dataset = res));

const useFilter = (query: Query) => {
  const { types, generations, abilities } = query;
  const [data, setData] = useState<Result[]>([]);

  useEffect(() => {
    console.log('Filtering data');
    let newData: Result[] = [];
    const controller = new AbortController();

    async function filter() {
      if (types.length === 0 && generations.length === 0 && abilities.length === 0) {
        setData(dataset);
        return;
      }
      setData([{ name: 'loading', url: '' }]);
      newData = await filterData(query, dataset, newData, controller.signal);
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
