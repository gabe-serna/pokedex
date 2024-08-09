import { ClassProps } from '@/lib/utils';

const Header = ({ className }: ClassProps) => {
  return (
    <header className={className}>
      <div className='3xl:size-28 2xl:size-20 lg:size-16 size-12 rounded-full bg-blue-500 3xl:m-8 3xl:mt-6 3xl:mr-6 2xl:m-6 2xl:mt-5 2xl:mr-4 lg:m-4 lg:mt-3 m-3 mt-2 border-white border-2 3xl:border-4 2xl:border-[3px] outline outline-2 outline-black' />
      <div className='3xl:size-10 2xl:size-[1.875rem] lg:size-6 size-5 rounded-full border border-black bg-red-500 3xl:m-4 2xl:m-3 2xl:mt-4 m-2' />
      <div className='3xl:size-10 2xl:size-[1.875rem] lg:size-6 size-5 rounded-full border border-black bg-yellow-500 3xl:m-4 2xl:m-3 2xl:mt-4 m-2' />
      <div className='3xl:size-10 2xl:size-[1.875rem] lg:size-6 size-5 rounded-full border border-black bg-green-600 3xl:m-4 2xl:m-3 2xl:mt-4 m-2' />
    </header>
  );
};

export default Header;
