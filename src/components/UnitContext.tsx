import { createContext } from 'react';
import { UseUnitProps } from '@/hooks/use-unit';

export const UnitContext = createContext<UseUnitProps>({
  unit: 'Imperial',
  setUnit: () => {},
  imperialRef: { current: null },
  metricRef: { current: null }
});
