import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../features/orders/orderSlice";
import userReducer from "../features/user/userSlice";
import socketReducer from "../features/chat/socketSlice";
const store = configureStore({
    reducer: {
        order: orderReducer,
        user: userReducer,
        socket:socketReducer
    },
    
});


export default store;