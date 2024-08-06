import { types } from '@/lib/utils';

interface Props {
  children: string;
}

const Type = ({ children }: Props) => {
  const color = types.get(children) as string;
  return (
    <div
      className={`inline py-1 px-2 mr-1 text-xs font-semibold text-primary-foreground rounded-full border border-black bg-gradient-to-t from-[${color}] from-0% via-[hsl(from_${color}_h_s_calc(l_/_2))] to-[${color}] to-100%`}
    >
      {children.toUpperCase()}
    </div>
  );
};

export default Type;
