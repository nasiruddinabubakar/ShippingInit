import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  socket: '',
  onlineUsers: [],
  newNotification: {},
  companyChats: [],
};

export const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    addSocket: (state, action) => {
      state.socket = action.payload;
    },
    addOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
    addNewNotification: (state, action) => {
      state.newNotification = action.payload;
    },
    addChats: (state, action) => {
      state.companyChats = action.payload;
    },
  },
});

export const { addSocket, addOnlineUsers, addNewNotification, addChats } =
  socketSlice.actions;

export default socketSlice.reducer;
