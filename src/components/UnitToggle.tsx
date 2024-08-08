import { useRef } from 'react';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

const UnitToggle = () => {
  const imperialRef = useRef(null);
  const metricRef = useRef(null);
  return (
    <ToggleGroup variant='outline' type='single'>
      <ToggleGroupItem ref={imperialRef} value='imperial'>
        LB
      </ToggleGroupItem>
      <ToggleGroupItem ref={metricRef} value='metric'>
        KG
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default UnitToggle;
