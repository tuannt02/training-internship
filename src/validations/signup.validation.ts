import * as yup from 'yup';

export const signupScheme = yup.object().shape({
  email: yup
    .string()
    .required('Email không được để trống.')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Email vừa nhập không đúng định dạng',
    ),
  password: yup
    .string()
    .trim()
    .required('Mật khẩu không được để trống.')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Mật khẩu phải chứa ít nhất 8 ký tự; bao gồm 1 hoa, 1 thường, 1 số và 1 ký tự đặc biệt',
    ),
  passwordConfirmation: yup
    .string()
    .required('Vui lòng nhập trường này !')
    .oneOf([yup.ref<string>('password')], 'Mật khẩu nhập lại phải trùng với mật khẩu vừa nhập'),
});
