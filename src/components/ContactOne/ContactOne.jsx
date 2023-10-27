import { Grid, IconButton, ListItem, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from 'react';
import { deleteContacts, updateContacts } from '../../redux/contacts/operations';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

export const ContactOne = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState(name);
  const [inputNumber, setInputNumber] = useState(number);
  const [onInput, setOnInput] = useState(true);

  const handleDelete = (id) => {
    dispatch(deleteContacts(id));
    toast.info('Contact removed!');
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setOnInput(true);
    dispatch(updateContacts({ id, name: inputName, number: inputNumber }));
  };

  return (

      <ListItem disablePadding>
        <Grid container spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
          <Grid item xs={6}>
            {onInput && <Typography>{name}</Typography>}
            {!onInput &&
              <TextField
              type='text'
              name={'name'}
              size='small'
              value={inputName}
              onChange={({ target }) => setInputName(target.value)}
            />}
          </Grid>
          <Grid item xs={4}>
            {onInput && <Typography>{number}</Typography>}
            {!onInput &&
              <TextField
              type='text'
              name={'number'}
              size='small'
              fullWidth
              value={inputNumber}
              onChange={({ target }) => setInputNumber(target.value)}
            />}
          </Grid>
          <Grid item xs={1}>
            {onInput && <IconButton sx={{ "&:hover": { color: "#1565c0" } }} aria-label="edit contact" size="small" onClick={() => setOnInput(false)}>
              <EditIcon />
            </IconButton>}
            {!onInput && <IconButton sx={{ "&:hover": { color: "#1565c0" } }} aria-label="save contact" size="small" onClick={handleUpdate}>
            <SaveIcon/>
            </IconButton>}
          </Grid>
          <Grid item xs={1}>
            <IconButton sx={{ "&:hover": { color: "#7b1fa2" } }} aria-label="del contact" size="small" onClick={() => handleDelete(id)}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </ListItem>
  );
};
