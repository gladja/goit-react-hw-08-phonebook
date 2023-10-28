import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLogIn } from '../../redux/auth/selectors';
import { UserMenu } from '../UserMenu/UserMenu';
import { UserAuth } from '../UserAuth/UserAuth';
import { Suspense } from 'react';

import { AppBar, Box, Toolbar, Container, Button } from '@mui/material';

const boxWrap = {
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const boxNav = {
  p: 1,
  display: 'flex',
  gap: 2,
  textDecoration: 'none',
  '& a': { textDecoration: 'none' },
};

export const Btn = {
  background: 'white',
  color: '#1976d2',
  fontWeight: 'bold',
  '&:hover': { color: 'white' },
};

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectLogIn);
  isLoggedIn ? boxWrap.flexDirection = { xs: 'column', md: 'row' } : boxWrap.flexDirection = '';

  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='lg'>
          <Toolbar component='nav'>
            <Box sx={boxWrap}>
              <Box sx={boxNav}>
                <NavLink to={'/'}>
                  <Button color='info' size='small' variant='contained' sx={Btn}>
                    Home
                  </Button>
                </NavLink>
                {isLoggedIn && <NavLink to={'/contacts'}>
                  <Button color='info' size='small' variant='contained' sx={Btn}>
                    Contacts
                  </Button>
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
