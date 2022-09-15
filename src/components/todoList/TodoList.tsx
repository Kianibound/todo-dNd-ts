import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Todo } from "../../model";
import "./todoList.css";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todosList">
      {todos.map((todo) => (
        <li>{todo.todo}</li>
      ))}
    </div>
  );
};

export default TodoList;
