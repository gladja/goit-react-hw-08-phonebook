import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLogIn } from '../../redux/selectors';
import { UserMenu } from '../UserMenu/UserMenu';
import { UserAuth } from '../UserAuth/UserAuth';
import { Suspense } from 'react';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectLogIn);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            {isLoggedIn && <li><NavLink to={'/contacts'}>Contacts</NavLink></li>}
            {isLoggedIn ? <UserMenu /> : <UserAuth />}
          </ul>
        </nav>
      </header>
      <Suspense fallback={''}>
        <Outlet />
      </Suspense>
    </>
  );
};
