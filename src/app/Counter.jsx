import { useSelector } from "react-redux";
import Decrease from "../components/Decrease";
import Increase from "../components/Increase";
import Reset from "../components/Reset";

const Counter = () => {
  // subscribe component to needed store state
  const counter = useSelector((state) => state.counter);

  return (
    <section className="counter-app">
      <div className="counter-app_inner">
        <h2 className="display">{counter.count}</h2>
        <div className="controls">
          <Increase />
          <Decrease />
          <Reset />
        </div>
      </div>
    </section>
  );
};

export default Counter;
