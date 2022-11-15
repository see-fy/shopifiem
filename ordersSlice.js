import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addToOrders: (state, action) => {
      state.orders = [...state.orders, action.payload];
    },
    removeFromOrders: (state, action) => {
      const index = state.orders.findIndex((basketItem) => basketItem.id === action.payload.id )
      let newBasket = [...state.orders];
      if(index >= 0) {
        newBasket.splice(index, 1);
      }else{
        console.warn(`Cannot remove product (id: ${action.payload.id}) as it is not in the Basket...`)
      }
      state.orders = newBasket;
    },
  },
});

export const { addToOrders, removeFromOrders } = ordersSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectOrders = (state) => state.orders.orders;
export const selectTotal = (state) => state.orders.orders.reduce((total, order, i) => total + order.price, 0);

export default ordersSlice.reducer;
