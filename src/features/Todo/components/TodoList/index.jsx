import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null
};

function TodoList(props) {
  const { todoList, onTodoClick } = props;
  
  const handleTodoClick = (index) => {
    if (!onTodoClick) return;

    onTodoClick(index);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <li
          className={classnames({
            "todo-item":true,
            completed: todo.status === "completed",
          })}
          key={todo.id}
          onClick={() => handleTodoClick(index)}
        >
          {todo.title}
        </li>
        
      ))}
    </ul>
  );
}

export default TodoList;
