import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { refresh } from '../redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

//* lazy
const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const User = lazy(() => import('../pages/User'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));

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
          <Route path='/contacts' element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>} />

          <Route path='/user' element={
            <PrivateRoute>
              <User />
            </PrivateRoute>} />

          <Route path='/register' element={
            <PublicRoute>
              <Register />
            </PublicRoute>} />
          <Route path='/login' element={
            <PublicRoute>
              <Login />
            </PublicRoute>} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} theme='colored' position='top-right' />
    </>
  );
};

