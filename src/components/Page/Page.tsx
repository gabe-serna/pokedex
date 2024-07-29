import './page.css';

interface Props {
  children?: React.ReactNode;
}

const Page = ({ children }: Props) => {
  return <div className='page'>{children}</div>;
};

export default Page;
