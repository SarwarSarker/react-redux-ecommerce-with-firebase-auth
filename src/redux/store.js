import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartReducer from "./features/cartSlice";
import productReducer from "./features/productSlice";
import userReducer from "./features/userSlice";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
