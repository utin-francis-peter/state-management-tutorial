const Decrease = ({ dispatch }) => {
  return (
    <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
  );
};

export default Decrease;
