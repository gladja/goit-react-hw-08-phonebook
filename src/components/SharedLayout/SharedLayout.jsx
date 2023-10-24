import {  NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLogIn } from '../../redux/selectors';
import { UserMenu } from '../UserMenu/UserMenu';
import { UserAuth } from '../UserAuth/UserAuth';
import { Suspense } from 'react';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
} from '@mui/material';

const boxWrap = {
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}

const boxNav = {
  display: 'flex',
  gap: 2,
  textDecoration: 'none',
  '& a': { textDecoration: 'none' },
};

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


export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectLogIn);

  return (
    <>
      <AppBar position='static'>
        <Container maxWidth="lg">
        <Toolbar component='nav'>
          <Box sx={boxWrap}>
            <Box sx={boxNav}>
              <NavLink to={'/'}>
                <Typography component='span' sx={text}>
                  Home
                </Typography>
              </NavLink>
              {isLoggedIn && <NavLink to={'/contacts'}>
                <Typography component='span' sx={text}>
                  Contacts
                </Typography>
              </NavLink>}
            </Box>

            <Box sx={boxNav}>
              {isLoggedIn ? <UserMenu /> : <UserAuth />}
            </Box>
          </Box>
        </Toolbar>
            </Container>
      </AppBar>

      <Suspense fallback={''}>
        <Outlet />
      </Suspense>
    </>
  )
    ;
};
