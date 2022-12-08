import React from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const todoList = [
    {
      id: 1,
      title: "Code",
    },
    {
      id: 2,
      title: "Study",
    },
  ];
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default TodoFeature;
