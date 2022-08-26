import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cart from "../redux/cartSlice";

export const store = configureStore({
  reducer: {
    productReducer,
    cart,
  },
});

