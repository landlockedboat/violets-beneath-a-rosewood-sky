import { useDispatch, useSelector } from "react-redux";
import { Direction, addText, move } from "../../slices";
import { useEffect } from "react";
import { RootState } from "../../store";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const ActionMenu = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(move(Direction.North))}>North</button>
      <button onClick={() => dispatch(move(Direction.East))}>East</button>
      <button onClick={() => dispatch(move(Direction.South))}>South</button>
      <button onClick={() => dispatch(move(Direction.West))}>West</button>
    </div>
  );
};
