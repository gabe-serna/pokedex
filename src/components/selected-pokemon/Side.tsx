const Side = () => {
  return (
    <svg
      className='w-full h-full row-start-1 row-end-4 col-start-2 col-end-3 md:block hidden'
      viewBox='0 0 96 721'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='none'
    >
      <rect
        // Middle
        x='5.5'
        y='0.5'
        width='85'
        height='720'
        fill='#4F1D1F'
        stroke='black'
      />
      <path
        //Bottom Bar
        d='M0.5 668.5H95.5V720.5H0.5V668.5Z'
        fill='hsl(var(--accent))'
        stroke='black'
        stroke-width='2'
      />
      <path d='M7 676H89' stroke='#451B1D' stroke-width='2' stroke-linecap='round' />
      <path
        // Top Bar
        d='M0.5 0.5H95.5V128.5H0.5V0.5Z'
        fill='hsl(var(--accent))'
        stroke='black'
        stroke-width='2'
      />
      <path d='M7 121H89' stroke='#451B1D' stroke-width='2' stroke-linecap='round' />
    </svg>
  );
};

export default Side;
