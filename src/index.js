import React from "react";
import ReactDOM from "react-dom";
// import App from "./app";
// import Button from "@material-ui/core/Button";
import TodoList from "./components/TodoList";

const data = [
  { id: 1, completed: true, text: "a plane", remained: 2399 },
  { id: 2, completed: false, text: "a cat", remained: 333 },
  { id: 3, completed: false, text: "a cat", remained: 7 },
  {
    id: 4,
    completed: false,
    text: "aaiillop  klls;llddddkj ",
    remained: 333
  },
  { id: 5, completed: false, text: "a cat", remained: 333 },
  { id: 6, completed: false, text: "a plane cat", remained: 333 },
  { id: 7, completed: false, text: "a cat", remained: 9 }
];

const aaa = index => {
  console.log(index);
};

ReactDOM.render(
  <TodoList todos={data} onTodoClick={aaa}></TodoList>,
  document.getElementById("root")
);
