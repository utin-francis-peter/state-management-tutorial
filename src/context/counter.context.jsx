import { createContext, useContext, useReducer } from "react";

// create context
const CounterContext = createContext();
// export context as custom hook
export const useCounterContext = () => useContext(CounterContext);
// create context provider
const CounterContextProvider = ({ children }) => {
  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return { ...state, count: state.count + 1 };
      case "decrease":
        return { ...state, count: state.count - 1 };

      default:
        return { ...state, count: 0 };
    }
  };

  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ counter, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
