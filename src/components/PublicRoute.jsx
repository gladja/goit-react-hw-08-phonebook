import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLogIn } from '../redux/auth/selectors';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectLogIn);
  const location = useLocation();

  return (
    <>
      {!isLoggedIn ? children : <Navigate to='/contacts' state={location} />}
    </>
  );
};

//<Navigate to='/login' state={location}
//<Navigate to={location.state ?? '/'}/>
