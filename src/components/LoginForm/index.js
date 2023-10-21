import { ErrorMessage, Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/operations';

//formik initialValues
const initialValues = {
  email: '',
  password: '',
};
//formik schema
const schema = object({
  email: string().nullable().email().required(),
  password: string().min(8).max(16).required(),
});


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = (v, a) => {
    const dataUser = {
      email: v.email,
      password: v.password,
    };
    console.log(dataUser);
    dispatch(loginUser(dataUser));
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
