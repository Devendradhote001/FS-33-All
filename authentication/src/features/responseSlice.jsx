import { createSlice } from "@reduxjs/toolkit";

const responseSlice = createSlice({
  name: "response",
  initialState: {
    message: null,
  },
  reducers: {
    setResponse: (state, action) => {
      state.message = action.payload;
    },
    removeResponse: (state) => {
      state.message = null;
    },
  },
});

export const { setResponse, removeResponse } = responseSlice.actions;
export default responseSlice.reducer;
