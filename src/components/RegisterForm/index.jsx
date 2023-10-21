import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { registerUser } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

//formik initialValues
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
//formik schema
  const schema = object({
    name: string().required(),
    email: string().nullable().email().required(),
    password: string().min(8).max(16).required(),
  });

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isLoggedIn = useSelector(state => state.register.isLoggedIn)

  useEffect(() => {
    // isLoggedIn && navigate('/')
  }, [ navigate])

  const handleSubmit = (v, a) => {
    const dataUser = {
      name: v.name,
      email: v.email,
      password: v.password,
    };
    dispatch(registerUser(dataUser));
    a.resetForm();
  };

  return (
    <>
      <h2>Register</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <label>
            Name:
            <Field type={'text'} name={'name'} placeholder={'Name'} />
            <ErrorMessage
              name='name'
              component={'div'}
            />
          </label>
          <br />
          <label>
            Email:
            <Field type={'text'} name={'email'} placeholder={'email'}/>
            <ErrorMessage name='email' component={'div'}/>
          </label>
          <br />

          <label>
            Password:
            <Field type={'password'} name={'password'} placeholder={'******'}/>
            <ErrorMessage name='password' />
          </label>
          <br />
          <button type={'submit'}>Submit</button>
        </Form>
      </Formik>
    </>
  );
};
