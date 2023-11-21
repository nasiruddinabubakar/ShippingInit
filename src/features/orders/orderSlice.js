import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  order: {
    consigneeName: "", // String
    orderWeight: 0, // Number (assuming it's a weight value)
    orderType: "", // String
    orderDescription: "",
    fragile: false, // Boolean (assuming it's a flag)
  }, // String
  route: {
    shipId: "", // Stringw
    pickup: "", // String
    dropoff: "", // String
  },
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.order = action.payload;
    },
    addPickup: (state, action) => {
      state.route.pickup = action.payload.pickUp;
      
    },
    addDropoff:(state,action)=>{
      state.route.dropoff = action.payload.dropOff;
    },
    addShip: (state, action) => {
      state.route.shipId = action.payload.shipId;
      
    },
  },
});

export const { addOrder, addPickup, addDropoff, addShip } = orderSlice.actions;

export default orderSlice.reducer;
