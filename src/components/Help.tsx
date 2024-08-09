import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

const Help = () => {
  return (
    <Dialog>
      <div className='flex items-center justify-center size-12 rounded-full ml-auto outline outline-1 outline-black bg-yellow-500 hover:bg-[#f8d95a] transition-colors'>
        <DialogTrigger className='bg-yellow-400 size-10 rounded-full text-black font-bold border border-black text-xl leading-[0px]'>
          ?
        </DialogTrigger>
      </div>
      <DialogContent className='sm:w-full w-[calc(100%-4rem)]'>
        <DialogHeader>
          <DialogTitle>Help</DialogTitle>
          <DialogDescription>
            Here's how to use the Pokédex!
            <br />
            <br /> Start off by selecting any filters you would like to apply to the
            Pokédex. You can filter by <strong>type</strong>,{' '}
            <strong>generation</strong>, and <strong>ability</strong>.
            <br />
            <br />
            Once you've selected your filters, you can search for a specific Pokémon
            by typing its name. Click on a Pokémon to view more details about it the
            display to the left.
            <br />
            <br />
            You can also switch between <strong>Imperial</strong> and{' '}
            <strong>Metric</strong> measurement units by clicking the toggle at the
            bottom of the screen.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Help;
