import { Checkbox } from '@/components/ui/checkbox';

interface Props {
  onSelected: (state: boolean, category: string, value: string) => void;
  id: string;
  label: string;
  category: string;
  color?: string;
}

const CheckboxItem = ({
  onSelected,
  id,
  label,
  category,
  color = 'var(--color-text)'
}: Props) => {
  const handleOnClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLButtonElement;
    const state = target.ariaChecked === 'true' ? false : true;
    const category = target.getAttribute('data-category') as string;
    const value = target.id;
    onSelected(state, category, value);
  };

  return (
    <div className='flex items-center space-x-2'>
      <Checkbox
        id={id}
        data-category={category}
        onClick={event => handleOnClick(event)}
      />
      <label
        htmlFor={id}
        style={{ color: color }}
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxItem;
