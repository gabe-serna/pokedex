import { useContext } from 'react';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { UnitContext } from './UnitContext';

const UnitToggle = () => {
  const { imperialRef, metricRef } = useContext(UnitContext);
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
