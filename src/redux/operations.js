import { createAsyncThunk } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, singUp } from '../service/api-request';
import { toast } from 'react-toastify';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (dataUser, thunkAPI) => {
    try {
      console.log(dataUser);
      const data = singUp(dataUser);
      toast.success('Register success!');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (dataUser, thunkAPI) => {
    try {
      const data = logIn(dataUser);
      toast.success('Login success!');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      // const data =
        logOut();
      // toast.success('Login success!');
      // return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const data = refreshUser();
      // toast.success('Login success!');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

