'use client';

import * as React from 'react';

import { useMediaQuery } from '@/hooks/use-media-query';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog';
import { abilities } from '@/lib/utils';
// import { Filter } from 'lucide-react';
import FilterItem from './FilterItem';

export function ScrollDropdown() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant='outline'
            className='mr-5 relative'
            // onClick={() => handleClick()}
          >
            Abilities
            {/* {amountSelected && (
              <CounterBadge variant='destructive'>{amountSelected}</CounterBadge>
            )} */}
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Select Abilites</DialogTitle>
            <DialogDescription>
              Choose which abilites to filter the Pokédex by
            </DialogDescription>
          </DialogHeader>
          <StatusList />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant='outline' className='w-[150px] justify-start'>
          Abilities
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className='mt-4 border-t'>
          <StatusList />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList() {
  return (
    <Command>
      <CommandInput placeholder='Search for an ability' />
      <CommandList className='h-[136px]'>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {abilities.map(ability => (
            <div className='flex flex-row items-center w-full'>
              <CommandItem
                key={ability}
                value={ability}
                className='w-full aria-selected:bg-accent-muted data-[disabled]:pointer-events-auto'
              >
                <FilterItem id={ability} category='abilities' />
                {ability}
              </CommandItem>
            </div>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
