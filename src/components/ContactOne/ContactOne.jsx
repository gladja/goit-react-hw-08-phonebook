import { Button, Grid, ListItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { deleteContacts, updateContacts } from '../../redux/contacts/operations';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

export const ContactOne = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState(name);
  const [inputNumber, setInputNumber] = useState(number);

  const handleDelete = (id) => {
    dispatch(deleteContacts(id));
    toast.info('Contact removed!');
  };


  const handleUpdate = (e) => {
    e.preventDefault()

    // console.log(e.target.value);

    // console.log(id, inputName, inputNumber);
    dispatch(updateContacts({ id, name: inputName, number: inputNumber }));
  };

  return (
    <>
      <ListItem key={id} disablePadding>
        <Grid container spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
          <Grid item xs={6}>
            <Typography>{name}</Typography>
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
      <form>
        <input
          type='text'
          name={'name'}
          value={inputName}
          onChange={({ target }) => setInputName(target.value)}
        />

        <input
          type='text'
          name={'number'}
          value={inputNumber}
          onChange={({ target }) => setInputNumber(target.value)}
        />
        <button type='submit' onClick={handleUpdate}>
          X
        </button>
      </form>
    </>
  );
};
