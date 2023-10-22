import { createAsyncThunk } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, singUp } from '../service/api-request';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (dataUser, thunkAPI) => {
    try {
      return singUp(dataUser);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (dataUser, thunkAPI) => {
    try {
      return logIn(dataUser);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      logOut();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      return refreshUser();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

