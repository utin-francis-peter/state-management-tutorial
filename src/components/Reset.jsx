import { useCounterContext } from "../context/counter.context";

const Reset = () => {
  const { dispatch } = useCounterContext();
  return <button onClick={() => dispatch({ type: "reset" })}>Reset</button>;
};

export default Reset;
