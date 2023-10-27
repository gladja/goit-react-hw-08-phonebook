import { createSlice } from '@reduxjs/toolkit';
import { addContacts, getAllContacts, deleteContacts, updateContacts } from './operations';

export const initialState = {
  items: [],
  isLoading: false,
  error: false,
  filter: '',
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
};

const handleRejected = (state, { error }) => { // (state, {payload, error })
  state.isLoading = false;
  state.error = error.message;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        const deleteItem = state.items.filter(el => el.id !== payload.id);
        state.items = deleteItem;
      })
      .addCase(updateContacts.fulfilled, (state, { payload }) => {
        const { id, name, number } = payload
        const updateItem = state.items.map(itm => {
          return itm.id === id ? {...itm, name, number} : itm;
        });
        state.items = updateItem;
      })
      .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher((action) => action.type.endsWith('/fulfilled'), handleFulfilled);
  },

  reducers: {
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContacts } = contactsSlice.actions;
