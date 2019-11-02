import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import App from "./components/App";

const store = createStore(rootReducer);
// const data = [
//   { id: 1, completed: true, text: "a plane", remained: 2399 },
//   { id: 2, completed: false, text: "a cat", remained: 333 },
//   { id: 3, completed: false, text: "a cat", remained: 7 },
//   {
//     id: 4,
//     completed: false,
//     text: "明天晚上去看电影，买好电影票买个爆米花和可乐",
//     remained: 333
//   },
//   { id: 5, completed: false, text: "a cat", remained: 333 },
//   { id: 6, completed: false, text: "a plane cat", remained: 333 },
//   { id: 7, completed: false, text: "a cat", remained: 9 }
// ];

// const aaa = index => {
//   console.log(index);
// };

render(
  // <TodoList todos={data} onTodoClick={aaa}></TodoList>,
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
