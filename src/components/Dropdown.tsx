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
import CheckboxItem from '@/components/CheckboxItem';

interface Props {
  title: string;
}

const Dropdown = ({ title }: Props) => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant='outline'>{title}</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Select Type</DialogTitle>
            <DialogDescription>
              Select which types you want to filter the Pokédex by
            </DialogDescription>
          </DialogHeader>
          <TypeList />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant='outline'>{title}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle>Select Type</DrawerTitle>
          <DrawerDescription>
            Select which types you want to filter the Pokédex by
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className='pt-2'>
          <TypeList />
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
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

export default Dropdown;
