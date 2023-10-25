// import { AiFillDelete } from 'react-icons/ai';
// import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, getAllContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import { selectContacts, selectError, selectFilter, selectIsLoading } from '../../redux/contacts/selectors';
import { toast } from 'react-toastify';
import { Box, Button, Grid, List, ListItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Loader } from '../Loader/Loader';
// import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContacts(id));
    toast.info('Contact removed!');
  };

  const contactsFilterResult = contacts?.filter(el => {
    return el.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: 400, px: 4 }}>
          <List>
            {isLoading && <Loader/>}
            {error && <Typography variant='h6' align={'center'}>{error}</Typography>}
            {contactsFilterResult && !isLoading && contactsFilterResult.map(({ id, name, number }) => (

              <ListItem key={id} disablePadding >
                <Grid container spacing={1} sx={{display: 'flex', alignItems: 'center'}}>
                  <Grid item xs={6} >
                    <Typography >{name}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>{number}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Button onClick={() => handleDelete(id)}>
                      <DeleteIcon />
                      {/*<DeleteOutlinedIcon />*/}
                    </Button>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
};
