import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signinScheme } from '../validations/signin.validation';

import { Input, Button } from '../components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdAlternateEmail } from 'react-icons/md';

function Signin() {
  // Get some APIs to manage form
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signinScheme) });
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  // Handle data that get from form
  const handleDataForm = async (data: any) => {
    // Get email, password
    const { email, password } = data;

    // Handle login
    // const result = await dispatch(
    //   signIn({
    //     email,
    //     password,
    //   }),
    // );
    // if (result.type === 'auth/signIn/fulfilled') {
    //   // Navigate if success
    //   await dispatch(getUserInfo(axiosPrivate));
    //   if (from.includes('/signin')) from = '/';
    //   navigate(from, { replace: true });
    // } else {
    //   // Handle error
    //   setError('email', { message: ' ' });
    //   if (result.payload === 401 || result.payload === 404) {
    //     setError('password', { message: 'Sai email hoặc mật khẩu' });
    //   } else {
    //     toast.error('Lỗi gì đó đã xảy ra!', {
    //       position: 'top-right',
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: 'light',
    //     });
    //   }
  };

  return (
    <div className="h-screen mx-6 sm:mx-[100px] grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-5">
      {/* Modal */}
      <div className="min-w-[280px] col-span-4 md:px-6 md:col-start-2 lg:col-start-5 bg-white md:border md:border-br_gray my-auto py-4 rounded-lg">
        {/* Greeting */}
        <div className="flex flex-col items-center">
          <div className="w-20">
            <Link to="/">
              <img
                src="https://lh5.googleusercontent.com/5Nrz4PzGr5nz7_RVSg8wUq2f11nG7OlLQFqAV4qL95iB0B9F9mHKDPwnXW9Frq68VL-QkqaUm9r-4HO8LfFC0zY=w16383"
                alt="Company logo"
              />
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-h4 font-bold text-primary mt-2">Mừng trở lại</h1>
            <p className="text-sm text-t_gray">Hãy điền thông tin của bạn!</p>
          </div>
        </div>

        {/* Form */}
        <form className="mt-5" onSubmit={handleSubmit(handleDataForm)}>
          <div className="mt-10">
            <Input
              label="Email"
              rightIcon={<MdAlternateEmail />}
              {...register('email')}
              fancyOutlined
              fancyBackgroundColor="white"
              status={errors.email?.message ? 'error' : ''}
            />
            <p data-testid="email-error" className="text-ac_red text-sm mt-1">
              {errors.email?.message}
            </p>
          </div>

          <div className="mt-6">
            <Input
              label="Mật khẩu"
              type="password"
              {...register('password')}
              fancyOutlined
              fancyBackgroundColor="white"
              visibilityToggle
              status={errors.password?.message ? 'error' : ''}
            />
            <p data-testid="password-error" className="text-ac_red text-sm mt-1">
              {errors.password?.message}
            </p>
          </div>

          {/* actions */}
          <div className="flex justify-between mt-3">
            <div className="flex">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me" className="text-h6 ml-2 text-t_light_gray_2">
                Ghi nhớ tôi
              </label>
            </div>

            <span className="text-h6 text-primary">
              <Link to="/forget-password">Quên mật khẩu?</Link>
            </span>
          </div>

          <div className="mt-8">
            <Button width="100%" shape="rectangle" size="normal" type="primary">
              Đăng nhập
            </Button>
          </div>
        </form>

        {/* Direct sign up page */}
        <p className="text-sm text-center text-t_gray mt-5">
          Bạn chưa có tài khoản?{' '}
          <span className="text-primary font-bold">
            <Link to="/signup">Đăng ký ngay</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signin;
