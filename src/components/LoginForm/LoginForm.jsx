import { ErrorMessage, Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/operations';
import { useNavigate } from 'react-router-dom';
import { selectLogIn } from '../../redux/selectors';
import { toast } from 'react-toastify';

//* formik initialValues
const initialValues = {
  email: '',
  password: '',
};
//* formik schema
const schema = object({
  email: string().nullable().email().required(),
  password: string().min(8).max(16).required(),
});


export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectLogIn);

  useEffect(() => {
    isLoggedIn && navigate('/contacts');
  }, [isLoggedIn, navigate]);

  const handleLogin = (v, a) => {
    const dataUser = {
      email: v.email,
      password: v.password,
    };
    // console.log(dataUser);
    dispatch(loginUser(dataUser)).unwrap()
      .then(() => {
        toast.success('Login success!');
      }).catch((e) => {
      toast.error('Login error, Email or Password wrong!');
    });
    a.resetForm();
  };

  return (
    <>
      <h2>Login</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={schema}
      >
        <Form>
          <label>
            Email:
            <Field type={'text'} name={'email'} placeholder={'email'} />
            <ErrorMessage name='email' component={'div'} />
          </label>
          <br />

          <label>
            Password:
            <Field type={'password'} name={'password'} placeholder={'******'} />
            <ErrorMessage name='password' />
          </label>
          <br />
          <button type={'submit'}>Login</button>
        </Form>
      </Formik>
    </>
  );
};
