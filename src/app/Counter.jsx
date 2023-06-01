import { useState } from "react";
import Decrease from "../components/Decrease";
import Increase from "../components/Increase";
import Reset from "../components/Reset";

const Counter = () => {
  const initialState = {
    count: 0,
  };
  const [counter, setCounter] = useState(initialState);

  // defining reducers or handlers to update the counter state when invoked
  // multiple handlers are used so either of them can get invoked based on predicted action
  const handleIncrease = () =>
    setCounter({ ...counter, count: (counter.count += 1) });
  const handleDecrease = () =>
    setCounter({ ...counter, count: (counter.count -= 1) });
  const handleReset = () => setCounter({ ...counter, count: 0 });

  return (
    <section className="counter-app">
      <div className="counter-app_inner">
        <h2 className="display">{counter.count}</h2>
        <div className="controls">
          <Increase handleIncrease={handleIncrease} />
          <Decrease handleDecrease={handleDecrease} />
          <Reset handleReset={handleReset} />
        </div>
      </div>
    </section>
  );
};

export default Counter;
