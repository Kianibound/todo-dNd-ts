import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Todo } from "../../model";
import TodoItem from "./todoItem/TodoItem";
import "./todoList.css";
type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todoListContainer">
      <div className="listContainer">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
