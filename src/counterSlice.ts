// counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state for the counter
const initialState: { value: number } = {
  value: 0,
};

// Create a Redux Toolkit slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Reducer function to increment the counter
    increment: (state) => {
      state.value += 1;
    },

    // Reducer function to decrement the counter
    decrement: (state) => {
      state.value -= 1;
    },

    // Reducer function to set a specific value
    set: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Export the reducer and actions
export const { increment, decrement, set } = counterSlice.actions;

// Export the reducer function itself
export default counterSlice.reducer;
