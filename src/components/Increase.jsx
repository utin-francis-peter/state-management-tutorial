const Increase = ({ dispatch }) => {
  return (
    <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
  );
};

export default Increase;
