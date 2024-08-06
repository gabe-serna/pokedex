import { types } from '@/lib/utils';

interface Props {
  children: string;
}

const Type = ({ children }: Props) => {
  const color = types.get(children) as string;
  return (
    <div
      className={`inline-block py-1 px-2 mr-1 mb-2 lg:text-xs sm:text-[10px]/3 font-semibold text-primary-foreground rounded-full border border-black bg-gradient-to-t from-[${color}] from-0% via-[hsl(from_${color}_h_s_calc(l_*_0.5))] to-[${color}] to-100% text-outline-black `}
    >
      {children.toUpperCase()}
    </div>
  );
};

export default Type;
