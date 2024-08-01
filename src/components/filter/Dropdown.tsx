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
}

const Dropdown = ({
  handleClick,
  previewText,
  title,
  description,
  category,
  children
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
  }
  if (amountSelected === 0) amountSelected = null;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant='outline'
            className='mr-5 relative'
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
        <Button variant='outline' className='mr-5 relative'>
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
