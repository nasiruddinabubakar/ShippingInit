import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  order: {
    consigneeName: "", // String
    orderWeight: 0, // Number (assuming it's a weight value)
    orderType: "", // String
    fragile: false, // Boolean (assuming it's a flag)
    orderDescription: "",
  }, // String
  shipId: "", // String
  companyName: "", // String
  pickup: "", // String
  dropoff: "", // String
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.order = action.payload;
    },
    addRoutes: (state, action) => {
      state.pickup = action.payload.pickUp;
      state.dropoff = action.payload.dropOff;
      console.log(state.pickup);
    },
    addShip: (state, action) => {
      state.shipId = action.payload.id;
      state.companyName = action.payload.name;

      
    },
  },
});

export const { addOrder, addRoutes } = orderSlice.actions;

export default orderSlice.reducer;
