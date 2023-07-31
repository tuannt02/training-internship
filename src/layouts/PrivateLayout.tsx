import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

function PrivateLayout({ children }: Props): JSX.Element {
  const accessToken = null;
  const location = useLocation();

  return !accessToken ? (
    <div className="h-[calc(100vh-60px)] flex">
      <h3 className="italic font-semibold m-auto">
        Vui lòng{' '}
        <Link
          to="/signin"
          state={{
            from: location,
          }}
          className="text-primary underline"
        >
          đăng nhập
        </Link>{' '}
        để truy cập
      </h3>
    </div>
  ) : (
    <>{children}</>
  );
}

export default PrivateLayout;
