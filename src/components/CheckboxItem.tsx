import { Checkbox } from '@/components/ui/checkbox';

interface Props {
  id: string;
  label: string;
  color?: string;
}

const CheckboxItem = ({ id, label, color = 'var(--color-text)' }: Props) => {
  return (
    <div className='flex items-center space-x-2'>
      <Checkbox id={id} />
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
