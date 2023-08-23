import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const res = await axios.get('https://randomuser.me/api/?results=5');
    return res.data.result;
  } catch (error) {
    throw Error(error);
  }
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;