import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user_id: '',
  user_name:'',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user_id = action.payload;
    },
    addUserName: (state, action) => {
      state.user_name = action.payload;
    },
  },
});

export const { addUser,addUserName } = userSlice.actions;

export default userSlice.reducer;
