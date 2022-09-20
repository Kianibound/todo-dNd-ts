import React from "react";
import "./todoItem.css";
import { Todo } from "../../../model";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form className="todoItem">
      <span className="todo__text">{todo.todo}</span>
    </form>
  );
};

export default TodoItem;
