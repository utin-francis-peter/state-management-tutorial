import { useReducer } from "react";
import Decrease from "../components/Decrease";
import Increase from "../components/Increase";
import Reset from "../components/Reset";

const Counter = () => {
  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return { ...state, count: state.count + 1 };
      case "decrease":
        return { ...state, count: state.count - 1 };

      default:
        return { ...state, count: 0 };
    }
  };

  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <section className="counter-app">
      <div className="counter-app_inner">
        <h2 className="display">{counter.count}</h2>
        <div className="controls">
          <Increase dispatch={dispatch} />
          <Decrease dispatch={dispatch} />
          <Reset dispatch={dispatch} />
        </div>
      </div>
    </section>
  );
};

export default Counter;
