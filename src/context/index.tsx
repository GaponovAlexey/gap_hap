import { parseCookies } from "nookies";
import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const CounterContext = createContext();

const t = parseCookies();

export const Provide = (props: any) => {
  const [state, setState] = createStore<any>({
      user: Boolean(t.email) || false,
    }),
    store = [
      state,
      {
        sigIn() {
          setState("user", (c: any) => (c = true));
        },
        logOut() {
          setState("user", (c: any) => (c = false));
        },
      },
    ];

  return (
    <CounterContext.Provider value={store}>
      {props.children}
    </CounterContext.Provider>
  );
};

export function useContextUser() {
  return useContext(CounterContext);
}
