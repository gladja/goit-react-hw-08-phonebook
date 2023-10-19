import { NavLink, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';

export const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/register'}>Register</NavLink>
        </li>
        <li>
          <NavLink to={'/login'}>Login</NavLink>
        </li>
        <li>
          <NavLink to={'/contacts'}>Contacts</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contacts' element={'Contacts'} />
      </Routes>

      <ToastContainer autoClose={3000} theme='colored' position='top-center' />
    </>
  );
};
