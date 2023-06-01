import Decrease from "../components/Decrease";
import Increase from "../components/Increase";
import Reset from "../components/Reset";

const Counter = () => {
  return (
    <section className="counter-app">
      <div className="counter-app_inner">
        <h2 className="display">Display</h2>
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
