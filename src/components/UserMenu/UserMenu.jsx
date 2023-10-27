import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/auth/operations';
import { selectUserMail, selectUserName } from '../../redux/auth/selectors';
import { toast } from 'react-toastify';
import { Box, Button, Typography } from '@mui/material';

const userInfoStyle = {
  px: 2,
  // py: 0.5,
  // border: '1px solid white',
  // background: '#4074dc',
  borderRadius: 2,
  display: 'inline',
}

const box = {
  display: 'flex',
  alignItems: 'center',
  // justifyContent: 'space-beatween',
  // gap: 1,
  // textDecoration: 'none',
  // '& a': { textDecoration: 'none' },
}

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const userName = useSelector(selectUserName);
  const userMail = useSelector(selectUserMail);

  const handleLogOut = () => {
    dispatch(logoutUser());
    navigate('/login');
    toast.info('Log out success!');
  };

  return (
    <>
      <Box sx={box} >
      <Typography component='p' sx={userInfoStyle}>
        {userMail}</Typography>

        <Button
          type='submit'
          onClick={handleLogOut}
          variant={'contained'}
          color="secondary"
          size="small"
        >
          Log out
        </Button>
      </Box>
    </>
  );
};
