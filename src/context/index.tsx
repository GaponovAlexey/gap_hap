import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
const CounterContext = createContext([{ count: 1 }, {}]);

export const Provide = (props: any) => {
  const [state, setState] = createStore<any>({ count:  0 }),
    store = [
      state,
      {
        increment() {
          setState("count", (c: any) => c + 1);
        },
        decrement() {
          setState("count", (c: any) => c - 1);
        },
      },
    ];

  return (
    <CounterContext.Provider value={store}>
      {props.children}
    </CounterContext.Provider>
  );
};

export function useCounter() {
  return useContext(CounterContext);
}

