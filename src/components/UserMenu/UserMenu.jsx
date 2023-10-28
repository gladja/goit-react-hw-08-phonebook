import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Box, Button, Typography } from '@mui/material';
import { logoutUser } from '../../redux/auth/operations';
import { selectUserName } from '../../redux/auth/selectors';

export const Btn = {
  background: '#84A5E5',
  color: 'white',
  fontWeight: 'bold',
  textTransform: 'none',
  ml: 1,
  '&:hover': {
    color: '#1976d2',
    background: 'white',
  },
};

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);

  const handleLogOut = () => {
    dispatch(logoutUser());
    navigate('/login');
    toast.info('Log out success!');
  };

  return (
    <>
      <Box sx={{
        display: 'flex', alignItems: 'center', fontWeight: 'bold', gap: 2,
        flexDirection: { xs: 'column', md: 'row' },
      }}>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography variant="button" >
            User
          </Typography>
          <NavLink to={'/user'}>
            <Button color='info' size='small' variant='contained' sx={Btn}>
              {userName}
            </Button>
          </NavLink>
        </Box>

        <Button
          type='submit'
          onClick={handleLogOut}
          variant={'contained'}
          color='secondary'
          size='small'
          sx={{ fontWeight: 'bold' }}
        >
          Log out
        </Button>
      </Box>
    </>
  );
};
