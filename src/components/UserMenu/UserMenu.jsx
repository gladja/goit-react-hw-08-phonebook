import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/auth/operations';
import { selectUserMail, selectUserName } from '../../redux/auth/selectors';
import { toast } from 'react-toastify';
import { Box, Button, Typography } from '@mui/material';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userMail = useSelector(selectUserMail);
  const userName = useSelector(selectUserName);

  const handleLogOut = () => {
    dispatch(logoutUser());
    navigate('/login');
    toast.info('Log out success!');
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography component='p' sx={{ px: 2, borderRadius: 2, display: 'inline' }}>
          Welcome {userName}, email:{userMail}</Typography>

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
