import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  profile: null,
}

const registerSlice = createSlice({
  name: 'register',
  initialState,
  extraReducers: (builder) => {

  },

})
