import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { toast } from 'react-toastify';
import {  string, object } from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

//* formik initialValues
const initialValues = {
  name: '',
  number: '',
};
//* formik schema
const schema = object({
  name: string('Invalid name').required('Required'),
  number: string('Invalid number').required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (v, a) => {
    const newContacts = {
      name: v.name,
      number: v.number,
    };
    if (v.name.trim() === '' || v.number.trim() === '') {
      return toast.warning('Please write First name Last name and number');
    }
    const isDoubleName = contacts.find(el => el.name === v.name);
    if (isDoubleName) {
      return toast.warning(`${v.name} is already in contacts`);
    }
    dispatch(addContacts(newContacts));

    a.resetForm();
    toast.info('Contacts add!');
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Box sx={{ width: 350, p: 4, borderRadius: 4, boxShadow: '0px 10px 20px 2px rgba(0, 0, 0, 0.2)' }}>

          <Typography variant='h5' align={'center'} sx={{ fontWeight: 'bolder', mb: 1, textTransform: 'uppercase' }}>Add contacts</Typography>

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
          >
            {({ isValid, dirty }) => (
            <Form>
              <Field
                type='text'
                name='name'
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
                type='tel'
                name='number'
                as={TextField}
                variant='outlined'
                label='Number:'
                fullWidth
                size='small'
              />
              <ErrorMessage
                name='number'
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
                aria-label="add contact"
                disabled={!isValid || !dirty}
              >
                Add contact
              </Button>
            </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </>
  );
};
