import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser, refresh } from '../../redux/auth/operations';
import { selectUserMail } from '../../redux/auth/selectors';
import { toast } from 'react-toastify';
import { Box, Button, Typography } from '@mui/material';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userMail = useSelector(selectUserMail);

  const handleLogOut = () => {
    dispatch(logoutUser());
    navigate('/login');
    toast.info('Log out success!');
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography component='p' sx={{ px: 2, borderRadius: 2, display: 'inline' }}>
          {userMail}</Typography>

        <Button
          type='submit'
          onClick={handleLogOut}
          variant={'contained'}
          color='secondary'
          size='small'
        >
          Log out
        </Button>
      </Box>
    </>
  );
};
