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
      let product = action.payload;

      let exists = state.cartItems.find((elem) => elem.id === product.id);

      if (exists) {
        if (exists.quantity === 1) {
          let updatedArr = state.cartItems.filter(
            (val) => val.id !== product.id
          );

          state.cartItems = updatedArr;
        } else {
          exists.quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
