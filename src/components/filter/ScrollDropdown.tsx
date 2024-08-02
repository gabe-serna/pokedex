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

type Status = {
  value: string;
  label: string;
};

const statuses: Status[] = [
  {
    value: 'backlog',
    label: 'Backlog'
  },
  {
    value: 'todo',
    label: 'Todo'
  },
  {
    value: 'in progress',
    label: 'In Progress'
  },
  {
    value: 'extra',
    label: 'extra'
  },
  {
    value: 'extra1',
    label: 'extra1'
  },
  {
    value: 'canceled',
    label: 'Canceled'
  }
];

export function ScrollDropdown() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(null);

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
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant='outline' className='w-[150px] justify-start'>
          {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className='mt-4 border-t'>
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({
  setOpen,
  setSelectedStatus
}: {
  setOpen: (open: boolean) => void;
  setSelectedStatus: (status: Status | null) => void;
}) {
  return (
    <Command>
      <CommandInput placeholder='Search for an ability' />
      <CommandList className='h-[136px]'>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {statuses.map(status => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={value => {
                setSelectedStatus(
                  statuses.find(priority => priority.value === value) || null
                );
                setOpen(false);
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
