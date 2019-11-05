import React, { createContext, useReducer } from "react";

export const ctx = createContext({});

export const UPDATE_PAPERS = "UPDATE_PAPERS";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PAPERS:
      return action.n;
    default:
      return state;
  }
};

export const Wraper = props => {
  const [n, dispatch] = useReducer(reducer, 10);
  return (
    <ctx.Provider value={{ hhh: n, mmm: 40, xxx: 90, dispatch }}>
      {props.children}
    </ctx.Provider>
  );
};
