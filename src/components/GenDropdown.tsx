import Dropdown from '@/components/Dropdown';
import CheckboxItem from '@/components/CheckboxItem';

interface Props {
  onSelect: (state: boolean, category: string, value: string) => void;
}

const GenDropdown = ({ onSelect }: Props) => {
  return (
    <Dropdown
      handleClick={() => console.log('clicked gen')}
      previewText='Generations'
      title='Select Generation'
      description='Select which generations you want to filter the Pokédex by'
    >
      <GenList
        onSelect={(state, category, value) => onSelect(state, category, value)}
      />
    </Dropdown>
  );
};

const GenList = ({ onSelect }: Props) => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className='grid grid-cols-3 grid-rows-3 gap-6'>
      {list.map(gen => (
        <CheckboxItem
          onSelected={(state, category, value) => onSelect(state, category, value)}
          id={`gen${gen}`}
          label={`Gen ${gen}`}
          category='generations'
        />
      ))}
    </div>
  );
};

export default GenDropdown;
