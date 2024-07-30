import Dropdown from '@/components/Dropdown';
import CheckboxItem from '@/components/CheckboxItem';

const TypeDropdown = () => {
  return (
    <Dropdown
      previewText='Types'
      title='Select Type'
      description='Select which types you want to filter the Pokédex by'
    >
      <TypeList />
    </Dropdown>
  );
};

const TypeList = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-6 gap-3'>
      {/* https://gist.github.com/apaleslimghost/0d25ec801ca4fc43317bcff298af43c3 */}
      <CheckboxItem id='normal' label='Normal' color='#A8A77A' />
      <CheckboxItem id='fire' label='Fire' color='#EE8130' />
      <CheckboxItem id='water' label='Water' color='#6390F0' />
      <CheckboxItem id='electric' label='Electric' color='#F7D02C' />
      <CheckboxItem id='grass' label='Grass' color='#7AC74C' />
      <CheckboxItem id='ice' label='Ice' color='#96D9D6' />
      <CheckboxItem id='fighting' label='Fighting' color='#C22E28' />
      <CheckboxItem id='poison' label='Poison' color='#A33EA1' />
      <CheckboxItem id='ground' label='Ground' color='#E2BF65' />
      <CheckboxItem id='flying' label='Flying' color='#A98FF3' />
      <CheckboxItem id='psychic' label='Psychic' color='#F95587' />
      <CheckboxItem id='bug' label='Bug' color='#A6B91A' />
      <CheckboxItem id='rock' label='Rock' color='#B6A136' />
      <CheckboxItem id='ghost' label='Ghost' color='#735797' />
      <CheckboxItem id='dragon' label='Dragon' color='#6F35FC' />
      <CheckboxItem id='dark' label='Dark' color='#705746' />
      <CheckboxItem id='steel' label='Steel' color='#B7B7CE' />
      <CheckboxItem id='fairy' label='Fairy' color='#D685AD' />
    </div>
  );
};

export default TypeDropdown;
