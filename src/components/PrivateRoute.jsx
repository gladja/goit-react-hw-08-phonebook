import { useSelector } from 'react-redux';
import { selectLogIn } from '../redux/auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectLogIn);
  const location = useLocation();

  return (
    <>
      {isLoggedIn ? children : <Navigate to='/login' state={location} />}
    </>
  );
};
