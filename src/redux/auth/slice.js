import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser, refresh, logoutUser } from './operations';

const initialState = {
  token: '',
  profile: null,
  isLoggedIn: false,
  isLoading: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state) => {
  state.isLoading = false
}

const handleRejected = (state, { error }) => {
  state.isLoading = false;
};


const slice = createSlice({
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
        // console.log(payload);
        state.profile = payload;
        state.isLoggedIn = true;
      })
      .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher((action) => action.type.endsWith('/fulfilled'), handleFulfilled);
  },

});

export const registerReducer = slice.reducer;
