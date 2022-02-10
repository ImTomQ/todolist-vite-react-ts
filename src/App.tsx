import React, { useEffect, useState } from "react";
import "./App.css";
import InputFields from "./components/InputFields/InputFields";
import TodoList from "./components/TodoList/TodoList";
import { Todo } from "./models/models";

const App: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const inputEditRef = React.useRef<HTMLInputElement>(null);
  const [todoList, setTodoList] = useState<Array<Todo>>([]);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (inputRef.current) {
      setTodoList([
        ...todoList,
        { id: Date.now(), name: inputRef.current.value, isDone: false },
      ]);
    }
    e.currentTarget.reset();
    inputRef?.current?.blur();
  };

  const handleEditTodo = (id: number): void => {
    setTodoList(todoList.map(todo => todo.id === id ? {...todo, name: inputEditRef.current?.value || ''} : todo))
  }

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <div className="app">
      <InputFields ref={inputRef} handleAddTodo={handleAddTodo} />
      <TodoList ref={inputEditRef} todoList={todoList} handleEditTodo={handleEditTodo} />
    </div>
  );
};

export default App;
