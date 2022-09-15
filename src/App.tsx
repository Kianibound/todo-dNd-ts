import React, { useState } from "react";
import "./App.css";
import InputFields from "./components/Input/InputFields";
import { Todo } from "./model";
import TodoList from "./components/todoList/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      const newTodo: Todo = {
        id: Date.now(),
        todo: todo,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      setTodo("");
    }
  };

  console.log(todos);
  return (
    <div className="App">
      <header>
        <h1 className="heading">Testify</h1>
      </header>
      <InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
