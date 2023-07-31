import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function DefaultLayout({ children }: Props): JSX.Element {
  return (
    <>
      <div>{children}</div>;
    </>
  );
}

export default DefaultLayout;
