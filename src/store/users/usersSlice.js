import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (rejectWithValue) => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=5');
    return response.json();
  } catch (error) {
    return rejectWithValue('Failed to fetch users');
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
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
