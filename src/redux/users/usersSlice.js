import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const res = await axios.get('https://randomuser.me/api/?results=5');
    return res.data.result;
  } catch(error) {
    throw Error(error);
  }
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  },
  extraReducers: {

  },
})

export default usersSlice.reducer;

