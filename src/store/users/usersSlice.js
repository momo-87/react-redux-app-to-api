import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=5');
    return response.json();
  } catch (error) {
    const rejectWithValue = error.message;
    return rejectWithValue;
  }
});

const initialState = {
  userItems: [],
  isLoading: true,
  error: undefined,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  addUser: {
    reducer: {},
  },
  extraReducers: {},
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
