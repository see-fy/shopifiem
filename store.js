import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import userReducer from "../slices/userSlice";
import ordersReducer from "../slices/ordersSlice";

//THE GLOBAL STORE************************

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    user: userReducer,
    orders: ordersReducer,
  },
});
