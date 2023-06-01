const Reset = ({ dispatch }) => {
  return <button onClick={() => dispatch({ type: "reset" })}>Reset</button>;
};

export default Reset;
