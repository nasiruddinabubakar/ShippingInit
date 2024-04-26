import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    socket:"",
    onlineUsers:[],
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
},
  });
  
  export const { addSocket,addOnlineUsers } = socketSlice.actions;
  
  export default socketSlice.reducer;
  