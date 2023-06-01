import { useCounterContext } from "../context/counter.context";

const Increase = () => {
  const { dispatch } = useCounterContext();
  return (
    <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
  );
};

export default Increase;
