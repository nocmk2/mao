import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          color={todo.remained < 10 ? "red" : "blue"}
          {...todo}
          onClick={() => onTodoClick(index)}
        />
      ))}
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      remained: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
