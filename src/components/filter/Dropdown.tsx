import * as React from 'react';

import { useMediaQuery } from '@/hooks/use-media-query';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';
import { CounterBadge } from '@/components/filter/CounterBadge';
import { QueryContext } from './QueryContext';
import { useContext } from 'react';

interface Props {
  handleClick: () => void;
  previewText: string;
  title: string;
  description: string;
  category: string;
  children?: JSX.Element;
  className?: string;
}

const Dropdown = ({
  handleClick,
  previewText,
  title,
  description,
  category,
  children,
  className
}: Props) => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 640px)');
  const { query } = useContext(QueryContext);
  let amountSelected: number | null = null;
  switch (category) {
    case 'generations':
      amountSelected = query.generations.length;
      break;
    case 'types':
      amountSelected = query.types.length;
      break;
    case 'abilities':
      amountSelected = query.abilities.length;
      break;
  }
  if (amountSelected === 0) amountSelected = null;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant='outline'
            className={`sm:mr-4 md:mr-5 mt-10 sm:mt-4 xl:mt-5 2xl:mt-6 3xl:mt-8 sm:px-2 sm:py-1 sm:text-xs md:px-[0.625rem] md:py-[0.375rem] xl:text-sm xl:px-3 xl:py-[0.375rem] 2xl:text-base 2xl:px-[0.875rem] 2xl:py-[0.425rem] 3xl:text-xl 3xl:px-4 3xl:py-2 relative text-outline-black bg-[#0177A4] hover:bg-[#0793C8] outline outline-1 outline-black ${className}`}
            onClick={() => handleClick()}
          >
            {previewText}
            {amountSelected && (
              <CounterBadge variant='destructive'>{amountSelected}</CounterBadge>
            )}
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant='outline'
          className={`mr-5 mt-5 relative bg-[#0177A4] hover:bg-[#0793C8] ${className}`}
        >
          {previewText}
          {amountSelected && (
            <CounterBadge variant='destructive'>{amountSelected}</CounterBadge>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className='pt-2'>
          {children}
          <DrawerClose asChild>
            <Button variant='default'>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Dropdown;
