import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import errorReducer from "../features/errorSlice";
import responseReducer from "../features/responseSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    error: errorReducer,
    response: responseReducer,
    cart: cartReducer,
  },
});
