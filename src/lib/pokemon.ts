// export interface Pokemon {
//   abilities: Ability[];
//   base_experience: number;
//   cries: {
//     latest: string;
//     legacy: string;
//   };
// }

import { Query } from '@/components/filter/QueryContext';
import { AxiosResponse } from 'axios';
import { Result } from './getData';

// interface Ability {
//   ability: {
//     name: string;
//     url: string;
//   };
//   is_hidden: boolean;
//   slot: number;
// }

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export function filterTypes(
  query: Query,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result: void | AxiosResponse<any, any>,
  newData: Result[],
  pokemon: Result
) {
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
}
