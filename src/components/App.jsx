import { NavLink, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser, refresh } from '../redux/operations';

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

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
          <button type='submit' onClick={()=>{dispatch(logoutUser())}}>Logout</button>
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
