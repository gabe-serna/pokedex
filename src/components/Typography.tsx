interface Props {
  children?: string;
  className?: string;
}

export const TypographyH1 = ({ children, className }: Props) => {
  return (
    <h1
      className={
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ' + className
      }
    >
      {children}
    </h1>
  );
};

export const TypographyH2 = ({ children, className }: Props) => {
  return (
    <h2
      className={
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ' +
        className
      }
    >
      {children}
    </h2>
  );
};

export const TypographyH3 = ({ children, className }: Props) => {
  return (
    <h3 className={'scroll-m-20 text-2xl font-semibold tracking-tight ' + className}>
      {children}
    </h3>
  );
};

export const TypographyH4 = ({ children, className }: Props) => {
  return (
    <h4 className={'scroll-m-20 text-xl font-semibold tracking-tight ' + className}>
      {children}
    </h4>
  );
};

export const TypographyP = ({ children, className }: Props) => {
  return (
    <p className={'leading-7 [&:not(:first-child)]:mt-6 ' + className}>{children}</p>
  );
};
