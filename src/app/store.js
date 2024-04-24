import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../features/orders/orderSlice";
import userReducer from "../features/user/userSlice";
const store = configureStore({
    reducer: {
        order: orderReducer,
        user: userReducer,
    },
    
});


export default store;