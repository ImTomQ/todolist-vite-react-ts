import React from "react";
import { Todo } from "../../models/models";
import SingleTodo from "../SingleTodo/SingleTodo";
import "./styles.css";

interface Props {
  todoList: Array<Todo>;
}

const TodoList: React.FC<Props> = (props) => {
  const { todoList } = props;
  return (
    <div className="form">
      {todoList?.map((todo, key) => (
        <SingleTodo key={key} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
