import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existedProduct = state.cartItems.find(
        (val) => val.id === product.id
      );

      if (existedProduct) {
        existedProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
