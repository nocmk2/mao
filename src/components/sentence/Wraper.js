import React, { createContext, useReducer } from "react";

export const ctx = createContext({});

export const UPDATE_PAPERS = "UPDATE_PAPERS";
export const UPDATE_GREET = "UPDATE_GREET";
export const UPDATE_NAME = "UPDATE_NAME";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PAPERS:
      return action.n;
    case UPDATE_GREET:
      return action.mmm;
    case UPDATE_NAME:
      return action.xxx;
    default:
      return state;
  }
};

export const Wraper = props => {
  const [hhh, dispatch] = useReducer(reducer, 10);

  return (
    <ctx.Provider value={{ hhh: hhh, mmm: "mmm", xxx: "xxx", dispatch }}>
      {props.children}
    </ctx.Provider>
  );
};
