import { useRef, useState } from 'react';

export interface UseUnitProps {
  unit: string;
  setUnit: React.Dispatch<React.SetStateAction<string>>;
  imperialRef: React.MutableRefObject<HTMLButtonElement | null>;
  metricRef: React.MutableRefObject<HTMLButtonElement | null>;
}

const useUnit = () => {
  const [unit, setUnit] = useState('Imperial');
  const imperialRef = useRef<HTMLButtonElement>(null);
  const metricRef = useRef<HTMLButtonElement>(null);
  return { unit, setUnit, imperialRef, metricRef } as UseUnitProps;
};

export default useUnit;
