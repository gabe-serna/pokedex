import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { toggleVariants } from '@/components/ui/toggle';
import { UnitContext } from '../UnitContext';

interface ToggleContext {
  size: 'default' | 'sm' | 'lg' | null | undefined;
  variant: 'default' | 'outline' | null | undefined;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

const ToggleGroupContext = React.createContext<ToggleContext>({
  size: 'default',
  variant: 'default',
  state: 0,
  setState: () => {}
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => {
  const [state, setState] = React.useState(0);
  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      className={cn('flex items-center justify-center gap-2', className)}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, state, setState }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
});

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);
  const border = React.useRef<HTMLDivElement>(null);
  const reference = ref as React.MutableRefObject<HTMLButtonElement> | null;
  const { setUnit } = React.useContext(UnitContext);

  React.useEffect(() => {
    const toggle = reference?.current?.getAttribute('data-state');
    if (border.current === null) return;
    if (toggle === 'on') {
      border.current.dataset.state = 'on';
      setUnit(reference?.current?.title as string);
    } else {
      border.current.dataset.state = 'off';
    }
  }, [context.state, reference]);
  return (
    <div
      ref={border}
      className='size-10 xl:size-11 2xl:size-12 3xl:size-14 p-1 3xl:p-[5px] rounded-md data-[state=off]:bg-stone-600 data-[state=off]:hover:bg-stone-400 data-[state=on]:bg-stone-600 data-[state=on]:hover:bg-stone-500 transition-colors outline outline-2 outline-black'
      data-state='off'
    >
      <ToggleGroupPrimitive.Item
        ref={ref}
        onClick={() => context.setState(context.state + 1)}
        className={cn(
          toggleVariants({
            variant: context.variant || variant,
            size: context.size || size
          }),
          'h-full w-full text-xs xl:text-sm 2xl:text-base 3xl:text-lg text-outline-black bg-stone-500 hover:bg-stone-500 data-[state=on]:bg-stone-700 data-[state=on]:text-stone-400 data-[state=on]:shadow-[inset_0px_3px_4px_rgba(0,0,0,0.3)]',
          className
        )}
        {...props}
      >
        {children}
      </ToggleGroupPrimitive.Item>
    </div>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
