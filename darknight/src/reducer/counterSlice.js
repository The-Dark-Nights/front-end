import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
  name: "cnt",
  initialState: { value: 0 },
  reducers: {
    up: (state, actions) => {
      state.value = state.value + 1;
    },
    down: (state, actions) => {
      state.value = state.value - 1;
    },
    want: (state, actions) => {
      state.value = state.value + actions.payload;
    },
  },
});

export const {up,down,want}=counterSlice.actions;
export default counterSlice.reducer