import React from "react";
import { iconCancel, iconEdit, iconOk } from "../../constans/constants";
import { Todo } from "../../models/models";
import "./styles.css";

interface Props {
  todo: Todo;
  handleEditTodo: (id: number) => void;
  handleDoneTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
  ref: React.RefObject<HTMLInputElement>;
}

const SingleTodo = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { todo, handleEditTodo, handleDoneTodo, handleDeleteTodo } = props;

  const [isEdit, setIsEdit] = React.useState<boolean>(false);

  const handleEdit = (): void => {
    setIsEdit(!isEdit);
  };

  const handleCancel = (id: number): void => {
    if (isEdit) {
      setIsEdit(false);
    } else {
      handleDeleteTodo(id);
    }
  };

  const handleOk = (id: number): void => {
    if (isEdit) {
      handleEditTodo(id);
      setIsEdit(false);
    } else {
      handleDoneTodo(id);
    }
  };

  return (
    <div className="single">
      {todo.isDone ? (
        <div className="done frame">{todo.name}</div>
      ) : (
        <div className="failure frame">
          <div className="text_input">
            {isEdit ? (
              <input
                ref={ref}
                type="text"
                className="edit_input"
                defaultValue={todo.name}
              />
            ) : (
              todo.name
            )}
          </div>
          <div className="gourp_button">
            <button onClick={() => handleOk(todo.id)} className="edit_btn">
              <img style={{ height: "15px" }} src={iconOk} />
            </button>
            {!isEdit && (
              <button onClick={handleEdit} className="edit_btn">
                <img style={{ height: "15px" }} src={iconEdit} />
              </button>
            )}
            <button onClick={() => handleCancel(todo.id)} className="edit_btn">
              <img style={{ height: "15px" }} src={iconCancel} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

export default SingleTodo;
