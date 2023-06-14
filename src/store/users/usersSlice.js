import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
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
