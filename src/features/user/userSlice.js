import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user_id: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user_id = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
