import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import { selectContacts, selectError, selectFilter, selectIsLoading } from '../../redux/contacts/selectors';
import { Box, List, Typography } from '@mui/material';
import { Loader } from '../Loader/Loader';
import { ContactOne } from '../ContactOne/ContactOne';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);



  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const contactsFilterResult = contacts?.filter(el => {
    return el.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: 420, px: 4 }}>
          <List>
            {isLoading && <Loader />}
            {error && <Typography variant='h6' align={'center'}>{error}</Typography>}
            {contactsFilterResult && !isLoading && contactsFilterResult.map(({ id, name, number }) => (
                <ContactOne key={id} id={id} name={name} number={number}/>
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
};
