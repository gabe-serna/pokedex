import Dropdown from '@/components/Dropdown';
import CheckboxItem from '@/components/CheckboxItem';

const GenDropdown = () => {
  return (
    <Dropdown
      previewText='Generations'
      title='Select Generation'
      description='Select which generations you want to filter the Pokédex by'
    >
      <GenList />
    </Dropdown>
  );
};

const GenList = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className='grid grid-cols-3 grid-rows-3 gap-6'>
      {list.map(gen => (
        <CheckboxItem id={`gen${gen}`} label={`Gen ${gen}`} />
      ))}
    </div>
  );
};

export default GenDropdown;
