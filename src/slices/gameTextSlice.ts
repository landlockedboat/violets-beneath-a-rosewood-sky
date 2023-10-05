import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface TextLine {
  value: string;
  id: number;
}

export enum Direction {
  North,
  East,
  South,
  West,
}

export interface ILocation {
  title: string;
  description: string;

  exits: {
    [Direction.North]: number | null;
    [Direction.East]: number | null;
    [Direction.South]: number | null;
    [Direction.West]: number | null;
  };
}

const initialState: {
  value: TextLine[];
  locations: ILocation[];
  currentLocationIndex: number;
} = {
  value: [],

  locations: [
    {
      title: "Arid shrubland",
      description:
        "Beneath an expansive rosewood sky, the Arid Shrubland unveils its poetic tableau—a canvas of muted hues and stoic rocks, where sands, like the grains of time, sift through the fingers of resilient shrubs.",
      exits: {
        [Direction.North]: 1,
        [Direction.East]: null,
        [Direction.South]: null,
        [Direction.West]: null,
      },
    },
    {
      title: "Arid shrubland but sillier",
      description:
        "Picture this: under a sky that can't decide if it's hot or just a touch of rosewood sass, the Arid Shrubland is like nature's version of a quirky art project. The sands down below are the earth's very own glitter, tossed around by rocks that are basically cosmic party crashers. Resilient shrubs stand there like the cool kids at a desert disco, whispering tales of sun-kissed escapades.",
      exits: {
        [Direction.North]: null,
        [Direction.East]: null,
        [Direction.South]: 0,
        [Direction.West]: null,
      },
    },
  ],

  currentLocationIndex: 0,
};

const gameTextSlice = createSlice({
  name: "gameText",
  initialState,
  reducers: {
    addText: (state, action: PayloadAction<TextLine>) => {
      state.value = state.value.concat(action.payload);
    },
    move: (state, action: PayloadAction<Direction>) => {
      const currentLocation = state.locations[state.currentLocationIndex];
      const newLocationIndex = currentLocation.exits[action.payload];
      if (newLocationIndex === null) {
        console.error(
          `No location found for "${action.payload}" in "${state.currentLocationIndex}"`
        );
        return;
      }

      state.currentLocationIndex = newLocationIndex;
      const newLocation = state.locations[newLocationIndex];

      state.value = state.value.concat({
        value: newLocation.title,
        id: new Date().getMilliseconds(),
      });

      state.value = state.value.concat({
        value: newLocation.description,
        id: new Date().getMilliseconds() + 1,
      })
    },
  },
});

export const { addText, move } = gameTextSlice.actions;

export default gameTextSlice.reducer;
