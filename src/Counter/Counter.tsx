import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, counterSlice, RootState } from "../slices";

export function Counter() {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <h1>Global client state</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>
        -
      </button>
      <button onClick={() => dispatch(counterSlice.actions.increment(5))}>
        +
      </button>
    </>
  );
}
