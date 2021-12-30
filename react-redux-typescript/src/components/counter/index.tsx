import React from "react";
import {
  decrement,
  increment,
  incrementAmount,
  selectCount,
} from "../../features/counterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

const Counter: React.FC = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementAmount(2))}>+2</button>
    </div>
  );
};

export default Counter;
