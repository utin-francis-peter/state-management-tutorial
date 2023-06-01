import { useCounterContext } from "../context/counter.context";

const Decrease = () => {
  const { dispatch } = useCounterContext();
  return (
    <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
  );
};

export default Decrease;
