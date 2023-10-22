import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refresh } from '../redux/operations';
import { SharedLayout } from './SharedLayout/SharedLayout';

// import { Home } from '../pages/Home';
// import { Contacts } from '../pages/Contacts';
// import { Register } from '../pages/Register';
// import { Login } from '../pages/Login';


//* lazy
const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
// const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Route>
      </Routes>

      <ToastContainer autoClose={3000} theme='colored' position='top-right' />
    </>
  );
};
