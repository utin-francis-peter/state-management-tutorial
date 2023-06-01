import { useDispatch } from "react-redux";
import { increase } from "../redux/counter.slice";

const Increase = () => {
  // subscribe dispatch to component
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(increase())}>Increase</button>;
};

export default Increase;
