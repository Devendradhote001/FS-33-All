import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
  name: "music",
  initialState: {
    currentMusic: null,
    isPlaying: false,
  },
  reducers: {
    playSong: (state, action) => {
      if (state.isPlaying && state.currentMusic.id === action.payload.id) {
        console.log(state.isPlaying);
        state.isPlaying = false;
      } else {
        console.log("else part", state.isPlaying);

        state.currentMusic = action.payload;
        state.isPlaying = true;
      }
    },
    playAndPause: (state) => {
      if (state.isPlaying) {
        state.isPlaying = false;
      } else {
        state.isPlaying = true;
      }
    },
  },
});

export const { playSong, playAndPause } = musicSlice.actions;
export default musicSlice.reducer;
