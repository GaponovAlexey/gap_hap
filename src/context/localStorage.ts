import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";

//localStorage
export const createLocalStore = (initState: any) => {
  const [state, setState] = createStore(initState);

  if (localStorage.application) setState(JSON.parse(localStorage.application));

  createEffect(() => (localStorage.application = JSON.stringify(state)));
  return [state, setState];
};
