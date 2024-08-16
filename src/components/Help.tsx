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
      <div className='absolute bottom-0 right-0 size-12 2xl:size-[3.75rem] 3xl:size-20 sm:mb-16 sm:mr-12 m-8 flex items-center justify-center rounded-full ml-auto outline outline-1 3xl:outline-2 outline-black bg-yellow-500 hover:bg-[#f8d95a] transition-colors'>
        <DialogTrigger className='bg-yellow-400 size-10 2xl:size-12 3xl:size-[4.125rem] rounded-full text-black font-bold border 3xl:border-2 border-black [font-size:1.25rem] 2xl:[font-size:1.5rem] 3xl:[font-size:1.875rem] 2xl:pl-[1px] 3xl:pl-[2px]'>
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
