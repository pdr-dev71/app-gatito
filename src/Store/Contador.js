import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "contador",
  initialState: {
    value: 0
  },
  reducers: {
    plus(state, action){
      state.value += 1;
    },
  }
});

export const actions = counterSlice.actions;
export default counterSlice.reducer