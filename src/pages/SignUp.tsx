import { Link } from 'react-router-dom';
import { Input, Button } from '../components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupScheme } from '../validations/signup.validation';
import { MdAlternateEmail } from 'react-icons/md';

function SignUp() {
  // Get some APIs to manage form
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupScheme) });

  // Handle data that get from form
  const handleDataForm = async (data: any) => {
    const { email, password, passwordConfirmation } = data;

    // const result = await dispatch(
    //   signUp({
    //     email,
    //     password,
    //     passwordConfirmation,
    //     firstname,
    //     lastname,
    //   }),
    // );
    // if (result.type === 'auth/signUp/fulfilled') {
    //   // Register the user on firebase
    //   registerUser(email, password);
    //   toast.success('Đăng ký tài khoản thành công, vui lòng đăng nhập!');
    //   // Navigate if success
    //   navigate('/signin');
    // } else {
    //   // Conflict
    //   switch (result.payload) {
    //     case 409:
    //       setError('email', { message: 'Email đã tồn tại' });
    //       break;
    //     default:
    //       toast.error('Lỗi gì đó đã xảy ra!', {
    //         position: 'top-right',
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: 'light',
    //       });
    //   }
    // }
  };

  return (
    <div className="h-screen mx-6 sm:mx-[100px] lg:mx-[20px] xl:mx-[100px] grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-5">
      {/* Modal */}
      <div className="col-span-4 md:px-5 md:col-start-2 lg:col-start-5 bg-white md:border md:border-br_gray my-auto py-4 rounded-lg">
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
            <h1 className="text-h4 font-bold text-primary mt-2">Tạo tài khoản mới</h1>
            <p className="text-sm text-t_gray">Chào mừng đến với Vitalify Asia</p>
          </div>
        </div>

        {/* Form */}
        <form className="mt-3" onSubmit={handleSubmit(handleDataForm)}>
          <div className="mt-10">
            <Input
              label="Email"
              rightIcon={<MdAlternateEmail />}
              {...register('email')}
              fancyOutlined
              fancyBackgroundColor="white"
              status={errors.email?.message ? 'error' : ''}
            />
            <p className="text-ac_red text-sm mt-1">{errors.email?.message}</p>
          </div>

          <div className="mt-6">
            <Input
              label="Mật khẩu"
              type="password"
              visibilityToggle
              {...register('password')}
              fancyOutlined
              fancyBackgroundColor="white"
              status={errors.password?.message ? 'error' : ''}
            />
            <p className="text-ac_red text-sm mt-1">{errors.password?.message}</p>
          </div>

          <div className="mt-6">
            <Input
              label="Xác nhận mật khẩu"
              type="password"
              visibilityToggle
              {...register('passwordConfirmation')}
              fancyOutlined
              fancyBackgroundColor="white"
              status={errors.passwordConfirmation?.message ? 'error' : ''}
            />
            <p className="text-ac_red text-sm mt-1">{errors.passwordConfirmation?.message}</p>
          </div>

          <div className="mt-10">
            <Button shape="rectangle" size="normal" type="primary" width="100%">
              Đăng ký ngay
            </Button>
          </div>
        </form>

        {/* Direct sign in page */}
        <p className="text-sm text-center text-t_gray mt-3">
          Đã có tài khoản?{' '}
          <span className="text-primary font-bold">
            <Link to="/signin">Đăng nhập ngay</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
