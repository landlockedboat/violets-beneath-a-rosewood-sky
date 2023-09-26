import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import gameTextReducer from "../slices/gameTextSlice";

// Create the Redux store
const store = configureStore({
  reducer: {
    counter: counterReducer, // Add the counter reducer to the store
    gameText: gameTextReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Define the root state type
export type AppDispatch = typeof store.dispatch; // Define the dispatch type

export default store;
