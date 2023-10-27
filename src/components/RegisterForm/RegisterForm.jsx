import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { registerUser } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { selectLogIn } from '../../redux/auth/selectors';
import { toast } from 'react-toastify';
import { Box, Button, TextField, Typography } from '@mui/material';

//*formik initialValues
const initialValues = {
  name: '',
  email: '',
  password: '',
};
//*formik schema
const schema = object({
  name: string().required('Required'),
  email: string().nullable().email('Invalid email').required('Required'),
  password: string().min(8, 'min 8').max(16).required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectLogIn);

  useEffect(() => {
    isLoggedIn && navigate('/contacts');
  }, [isLoggedIn, navigate]);

  const handleSubmit = (v, a) => {
    console.log(a);
    const dataUser = {
      name: v.name,
      email: v.email,
      password: v.password,
    };
    dispatch(registerUser(dataUser)).unwrap()
      .then(() => {
        toast.success('Register success!');
      }).catch((e) => {
      console.log(e);
      toast.error('Duplicate, Email');
    });
    a.resetForm();
  };

  return (
    <>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Box sx={{ width: 350, p: 4, borderRadius: 4, boxShadow: '0px 10px 20px 2px rgba(0, 0, 0, 0.2)' }}>

          <Typography variant='h5' sx={{ fontWeight: 'bolder', mb: 1 }}>Register</Typography>

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
          >
            {({ isValid, dirty }) => (
              <Form>

                <Field
                  type={'text'}
                  name={'name'}
                  as={TextField}
                  variant='outlined'
                  label='Name:'
                  fullWidth
                  size='small'
                />
                <ErrorMessage
                  name='name'
                  render={msg => (
                    <Typography
                      variant='caption' color={'red'}
                      sx={{ ml: 1 }}>{msg}</Typography>
                  )}
                />
                <Box sx={{ mb: 2 }} />
                <Field
                  type={'text'}
                  name={'email'}
                  as={TextField}
                  variant='outlined'
                  label='Email:'
                  fullWidth
                  size='small'
                />
                <ErrorMessage
                  name='email'
                  render={msg => (
                    <Typography
                      variant='caption' color={'red'}
                      sx={{ ml: 1 }}>{msg}</Typography>
                  )}
                />
                <Box sx={{ mb: 2 }} />
                <Field
                  type={'password'}
                  name={'password'}
                  as={TextField}
                  variant='outlined'
                  label='Password:'
                  fullWidth
                  size='small'
                />
                <ErrorMessage
                  name='password'
                  render={msg => (
                    <Typography
                      variant='caption' color={'red'}
                      sx={{ ml: 1 }}>{msg}</Typography>
                  )}
                />

                <Box sx={{ mb: 2 }} />
                <Button
                  fullWidth
                  type={'submit'}
                  variant='contained'
                  size='large'
                  aria-label="register user"
                  disabled={!isValid || !dirty}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </>
  );
};
