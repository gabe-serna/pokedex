import { createContext, Dispatch, SetStateAction } from 'react';

interface UnitState {
  unit: string;
  setUnit: Dispatch<SetStateAction<string>>;
}

export const UnitContext = createContext<UnitState>({
  unit: 'Imperial',
  setUnit: () => {}
});
