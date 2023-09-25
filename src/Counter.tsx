// Counter.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  RootState } from './store';
import { increment, decrement, set } from './counterSlice';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(set(0))}>Reset</button>
    </div>
  );
};

export default Counter;
