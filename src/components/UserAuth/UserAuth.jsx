import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { Btn } from '../SharedLayout/SharedLayout';

export const UserAuth = () => {
  return (
    <>
      <NavLink to={'/login'}>
        <Button color='info' size='small' variant='contained' sx={Btn}>
          Login
        </Button>
      </NavLink>
      <NavLink to={'/register'}>
        <Button color='info' size='small' variant='contained' sx={Btn}>
          Register
        </Button>
      </NavLink>
    </>
  );
};
