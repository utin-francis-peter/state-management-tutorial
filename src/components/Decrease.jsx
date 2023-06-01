import { useDispatch } from "react-redux";
import { decrease } from "../redux/counter.slice";

const Decrease = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(decrease())}>Decrease</button>;
};

export default Decrease;
