import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contacts/slice';
import { selectFilter } from '../../redux/contacts/selectors';
import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import { Field, Form, Formik } from 'formik';


export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const contactsFilter = (e) => {
    console.log(e.target.value);
    dispatch(filterContacts(e.target.value));
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Box sx={{ width: 350, p: 4, }}>

          <Typography variant='h5' align={'center'} sx={{ fontWeight: 'bolder', mb: 1, textTransform: 'uppercase' }}>Contacts</Typography>


          <Typography variant='caption' sx={{m: 1, textAlign: 'center', width: 350}}>Find contacts by name</Typography>
          <Formik initialValues={{name: ''}} >
            <Form>
              <Field
                onChange={contactsFilter}
                value={filter}
                type='text'
                name='name'
                as={TextField}
                variant='outlined'
                label='Write name:'
                fullWidth
                size='small'
              />
            </Form>
          </Formik>

        </Box>
      </Box>
    </>
  );
};
