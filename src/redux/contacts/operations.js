import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, allContacts, deleteContact, updateContact } from '../../service/api-request';

export const getAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      return allContacts()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (dataUser, thunkAPI) => {
    try {
      return addContact(dataUser)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      return deleteContact(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

export const updateContacts = createAsyncThunk(
  'contacts/updateContact',
  async (oneUser, thunkAPI) => {
    try {
      return updateContact(oneUser)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
