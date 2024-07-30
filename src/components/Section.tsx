interface Props {
  children?: React.ReactNode;
}

const Section = ({ children }: Props) => {
  return <section className='h-full'>{children}</section>;
};

export default Section;
