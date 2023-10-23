import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

const text = {
  px: 2,
  py: 0.5,
  background: 'white',
  borderRadius: 2,
  color: '#1976d2',
  fontWeight: 'bold',
  transition: 'all 300ms cubic-bezier(.23, 1, 0.32, 1)',

  '&:hover': {
    color: '#4f4e4e',
    opacity: 0.9,
    boxShadow: 'rgba(0, 0, 0, 0.3) 0 8px 15px',
  },
};

export const UserAuth = () => {
  return (
    <>
      <NavLink to={'/login'}>
        <Typography component='span' sx={text}>
          Login
        </Typography>
      </NavLink>
      <NavLink to={'/register'}>
        <Typography component='span' sx={text} >
          Register
        </Typography>
      </NavLink>
    </>
  );
};
