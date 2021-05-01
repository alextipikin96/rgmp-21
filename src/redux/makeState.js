import { useMemo } from "react";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";

let store;

export default function makeState() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}

export const initializeStore = () => {
  let _store = store ?? makeState();

  if (store) {
    _store = makeState(store.getState());
    store = undefined;
  }

  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore() {
  const store = useMemo(() => initializeStore(), []);
  return store;
}
