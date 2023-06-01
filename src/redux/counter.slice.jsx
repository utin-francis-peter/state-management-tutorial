import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      return { ...state, count: state.count + 1 };
    },
    decrease: (state) => {
      return { ...state, count: state.count - 1 };
    },
    reset: (state) => {
      return { ...state, count: 0 };
    },
  },
});

// export individual dispatch/actions
export const { increase, decrease, reset } = counterSlice.actions;
// export slice reducer
export default counterSlice.reducer;
