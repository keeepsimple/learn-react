import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const init = [
    {
      id: 1,
      title: "Code",
      status: "new",
    },
    {
      id: 2,
      title: "Study",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(init);
  const handleTodoClick = (index) => {
    //clone cur array
    const newTodoList = [...todoList];
    //toggle state
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    //update todo list
    setTodoList(newTodoList);
  };

  const handleFormSubmit = (formValues) =>{
    const newTodoList = [...todoList];
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    }
    newTodoList.push(newTodo)

    setTodoList(newTodoList)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSubmit={handleFormSubmit}/>
      <TodoList todoList={todoList} onTodoClick={handleTodoClick}/>
    </div>
  );
}

export default TodoFeature;
