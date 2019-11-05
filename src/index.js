import React from "react";
import { render } from "react-dom";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import rootReducer from "./reducers";
// import App from "./components/App";
import App from "./app";
// const store = createStore(rootReducer);
import Sentence from "./components/sentence/Sentence";

render(
  // <TodoList todos={data} onTodoClick={aaa}></TodoList>,
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  // <App />,
  <Sentence></Sentence>,
  document.getElementById("root")
);
