import { ErrorMessage, Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { selectLogIn } from '../../redux/auth/selectors';
import { toast } from 'react-toastify';
import { Box, Button, TextField, Typography } from '@mui/material';

//* formik initialValues
const initialValues = {
  email: '',
  password: '',
};
//* formik schema
const schema = object({
  email: string().nullable().email('Invalid email').required('Required'),
  password: string().min(8, 'min 8').max(16).required('Required'),
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
    dispatch(loginUser(dataUser)).unwrap()
      .then(() => {
        toast.info('Login success!');
      }).catch((e) => {
      toast.error('Login error, Email or Password wrong!');
    });
    a.resetForm();
  };


  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Box sx={{ width: 350, p: 4,  borderRadius: 4, boxShadow: '0px 10px 20px 2px rgba(0, 0, 0, 0.2)' }}>

          <Typography variant="h5" sx={{fontWeight: 'bolder', mb: 1}}>Login</Typography>

          <Formik
            initialValues={initialValues}
            onSubmit={handleLogin}
            validationSchema={schema}
          >
            {({ isValid, dirty }) => (
              <Form>
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
                  aria-label="login user"
                  disabled={!isValid || !dirty}
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </>
  );
};
