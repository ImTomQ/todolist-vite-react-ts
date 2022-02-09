import React from "react";
import { Todo } from "../../models/models";
import "./styles.css";

interface Props {
  todo: Todo;
}

function SingleTodo(props: Props) {
  const { todo } = props;

  return (
    <div className="single">
      {todo.isDone ? (
        <div className="done">{todo.name}</div>
      ) : (
        <div className="failure">{todo.name}</div>
      )}
    </div>
  );
}

export default SingleTodo;
