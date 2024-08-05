interface Props {
  state: string;
  className?: string;
}

const ViewBox = ({ state, className }: Props) => {
  const name = state === '' ? 'Select a Pokémon' : state;
  return (
    <div id='view-box' className={className}>
      <div className='flex flex-col items-center my-4 h-[calc(100%-2rem)] sm:w-[calc(100%-2.5rem)] w-[calc(100%-5rem)] bg-slate-200 border-8 border-accent/90 rounded-md'>
        <h1 className='text-black text-left w-[calc(100%-1rem)] 2xl:text-3xl lg:text-xl md:text-l ml-4 my-1 font-medium'>
          {name}
        </h1>
        <div className='flex items-center justify-center m-4 mt-0 sm:mb-2 h-[calc(100%-2rem)] w-[calc(100%-2rem)] bg-stone-800 rounded-md'></div>
        <aside className='text-gray-500 italic w-full 2xl:text-2xl sm:flex sm:flex-row sm:justify-around mb-2 hidden'>
          <p>Height: 1' 04"</p>
          <p>13.2 lbs</p>
        </aside>
      </div>
    </div>
  );
};

export default ViewBox;
