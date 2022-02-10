import React from "react";
import { Todo } from "../../models/models";
import SingleTodo from "../SingleTodo/SingleTodo";
import "./styles.css";

interface Props {
  todoList: Array<Todo>;
  handleEditTodo: (id: number) => void
  ref: React.RefObject<HTMLInputElement>
}

const TodoList = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { todoList, handleEditTodo } = props;
  return (
    <div className="form">
      {todoList?.map((todo, key) => (
        <SingleTodo ref={ref} key={key} todo={todo} handleEditTodo={handleEditTodo} />
      ))}
    </div>
  );
});

export default TodoList;
