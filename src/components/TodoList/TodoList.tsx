import React from "react";
import { Todo } from "../../models/models";
import SingleTodo from "../SingleTodo/SingleTodo";
import "./styles.css";

interface Props {
  todoList: Array<Todo>;
  handleEditTodo: (id: number) => void;
  handleDoneTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
  ref: React.RefObject<HTMLInputElement>;
}

const TodoList = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { todoList, handleEditTodo, handleDoneTodo, handleDeleteTodo } = props;
  return (
    <div className="form">
      {todoList?.map((todo, key) => (
        <SingleTodo
          ref={ref}
          key={key}
          todo={todo}
          handleEditTodo={handleEditTodo}
          handleDoneTodo={handleDoneTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </div>
  );
});

export default TodoList;
