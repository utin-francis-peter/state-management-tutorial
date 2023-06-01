import Counter from "./app/Counter";
import CounterContextProvider from "./context/counter.context";
import "./styles.scss";

const App = () => {
  return (
    <>
      <CounterContextProvider>
        <Counter />
      </CounterContextProvider>
    </>
  );
};

export default App;
