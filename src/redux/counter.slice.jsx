import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // contain methods that handle state updates based on specified action type
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

// export actions separately so each action type can be used to trigger any of the reducers to update counter state.
export const { increase, decrease, reset } = counterSlice.actions;
// export slice reducer so it can be imported and added to the global store's reducer object
export default counterSlice.reducer;
