type Props = {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode;
};

function DefaultLayout({ children }: Props): JSX.Element {
  return (
    <>
      <div>{children}</div>;
    </>
  );
}

export default DefaultLayout;
