const Info = () => {
  return (
    <>
      <div
        id='info'
        className='h-[calc(100%-3rem)] w-[calc(100%-6rem)] mx-auto mt-4 mb-8 bg-accent rounded-2xl p-4 row-start-3 col-start-1 sm:block hidden 2xl:row-start-5 2xl:row-end-6 2xl:h-[calc(100%-15rem)] 2xl:w-[calc(100%-20rem)] 2xl:mb-auto 2xl:text-3xl'
      >
        <h1>Types:</h1>
        <h1>Weaknesses:</h1>
        <h1>Abilities:</h1>
      </div>
      <div
        id='more-info'
        className='h-[calc(100%-3rem)] w-[calc(100%-6rem)] m-auto mt-0 bg-accent rounded-2xl p-4 row-start-3 col-start-1 sm:hidden flex flex-col items-center justify-center'
      >
        <h1> Click for more info</h1>
      </div>
    </>
  );
};

export default Info;
