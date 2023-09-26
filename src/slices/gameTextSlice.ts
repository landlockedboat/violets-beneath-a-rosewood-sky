import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface TextLine {
  value: string,
  time: number,
}

const initialState: { value: TextLine[] } = {
  value: [],
};

const gameTextSlice = createSlice({
  name: "gameText",
  initialState,
  reducers: {
    addText: (state, action: PayloadAction<TextLine>) => {
      state.value = state.value.concat(action.payload);
    },
  },
});

export const { addText } = gameTextSlice.actions;

export default gameTextSlice.reducer;
