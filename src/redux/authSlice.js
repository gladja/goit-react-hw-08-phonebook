import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser, refresh, logoutUser } from './operations';

const initialState = {
  token: '',
  profile: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'register',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.profile = payload;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.profile = payload;
        state.isLoggedIn = true;
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.token = ''
        state.profile = null;
        state.isLoggedIn = false;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.profile = payload;
        state.isLoggedIn = true;
      });
  },

});

export const registerReducer = authSlice.reducer;
