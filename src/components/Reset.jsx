import { useDispatch } from "react-redux";
import { reset } from "../redux/counter.slice";

const Reset = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(reset())}>Reset</button>;
};

export default Reset;
