interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Section = ({ children, className = '' }: Props) => {
  return <section className={`h-full ` + className}>{children}</section>;
};

export default Section;
