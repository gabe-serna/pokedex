import { useRef } from 'react';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

const UnitToggle = () => {
  const imperialRef = useRef(null);
  const metricRef = useRef(null);
  return (
    <ToggleGroup variant='outline' type='single' className='w-min'>
      <ToggleGroupItem ref={imperialRef} value='imperial' title='Imperial'>
        LB
      </ToggleGroupItem>
      <ToggleGroupItem ref={metricRef} value='metric' title='Metric'>
        KG
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default UnitToggle;
