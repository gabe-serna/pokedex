import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const types = new Map<string, string>();
/* https://gist.github.com/apaleslimghost/0d25ec801ca4fc43317bcff298af43c3 */
types.set('normal', '#A8A77A');
types.set('fire', '#EE8130');
types.set('water', '#6390F0');
types.set('electric', '#F7D02C');
types.set('grass', '#7AC74C');
types.set('ice', '#96D9D6');
types.set('fighting', '#C22E28');
types.set('poison', '#A33EA1');
types.set('ground', '#E2BF65');
types.set('flying', '#A98FF3');
types.set('psychic', '#F95587');
types.set('bug', '#A6B91A');
types.set('rock', '#B6A136');
types.set('ghost', '#735797');
types.set('dragon', '#6F35FC');
types.set('dark', '#705746');
types.set('steel', '#B7B7CE');
types.set('fairy', '#D685AD');
