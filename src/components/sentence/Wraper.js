import React, { createContext, useReducer } from "react";

export const ctx = createContext({});

export const UPDATE_PAPERS = "UPDATE_PAPERS";
export const UPDATE_GREET = "UPDATE_GREET";
export const UPDATE_NAME = "UPDATE_NAME";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PAPERS:
      return { ...state, ...{ papers: action.papers } };
    case UPDATE_GREET:
      return { ...state, ...{ greet: action.greet } };
    case UPDATE_NAME:
      return { ...state, ...{ name: action.name } };
    default:
      return state;
  }
};

export const Wraper = props => {
  const [state, dispatch] = useReducer(reducer, {
    papers: 10,
    greet: "hi",
    name: "mk"
  });

  return (
    <ctx.Provider
      value={{
        papers: state.papers,
        greet: state.greet,
        name: state.name,
        dispatch
      }}
    >
      {props.children}
    </ctx.Provider>
  );
};
