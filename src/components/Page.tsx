interface Props {
  children?: React.ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <div className='h-screen w-full overflow-hidden grid sm:grid-cols-2 sm:grid-rows-1 grid-cols-1 grid-rows-2'>
      {children}
    </div>
  );
};

export default Page;
