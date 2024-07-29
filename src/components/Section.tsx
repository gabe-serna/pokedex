interface Props {
  children?: React.ReactNode;
}

const Section = ({ children }: Props) => {
  return <section className='border-2 border-white h-full'>{children}</section>;
};

export default Section;
