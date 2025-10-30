import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) state.value -= 1;
    },
    resetCount: (state) => {
      state.value = 0;
    },
    addValue: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});

export const { increment, decrement, resetCount, addValue } =
  counterSlice.actions;

export default counterSlice.reducer;
