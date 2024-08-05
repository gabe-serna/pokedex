import { ClassProps } from '@/lib/utils';

const Header = ({ className }: ClassProps) => {
  return (
    <header className={className}>
      <div className='2xl:size-28 lg:size-16 size-12 rounded-full bg-blue-500 2xl:m-8 2xl:mt-6 2xl:mr-6 lg:m-4 lg:mt-3 m-3 mt-2 border-white border-2 2xl:border-4' />
      <div className='2xl:size-11 lg:size-6 size-5 rounded-full bg-red-500 2xl:m-4 m-2' />
      <div className='2xl:size-11 lg:size-6 size-5 rounded-full bg-yellow-500 2xl:m-4 m-2' />
      <div className='2xl:size-11 lg:size-6 size-5 rounded-full bg-green-600 2xl:m-4 m-2' />
    </header>
  );
};

export default Header;
