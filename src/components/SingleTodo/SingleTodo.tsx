import React from "react";
import { Todo } from "../../models/models";
import "./styles.css";

interface Props {
  todo: Todo;
  handleEditTodo: (id: number) => void
  ref: React.RefObject<HTMLInputElement>
}

const SingleTodo = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { todo, handleEditTodo } = props;

  const [isEdit, setIsEdit] = React.useState<boolean>(false);

  const handleEdit = (): void => {
    setIsEdit(!isEdit)
  }

  const handleCancel = (): void => {
    if (isEdit) {
      setIsEdit(false)
    }
  }

  const handleOk = (id: number): void => {
    if (isEdit) {
      handleEditTodo(id)
    }
  }

  return (
    <div className="single">
      {todo.isDone ? (
        <div className="done frame">Demo</div>
      ) : (
        <div className="failure frame">
          <div className="text_input">
            {isEdit ? <input ref={ref} type="text" className="edit_input" defaultValue={todo.name} /> : todo.name}
          </div>
          <div className="gourp_button">
            <button onClick={() => handleOk(todo.id)} className="edit_btn"><img style={{height: '15px'}} src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"/></button>
            {!isEdit&&<button onClick={handleEdit} className="edit_btn"><img style={{height: '15px'}} src="https://img.icons8.com/ios-glyphs/30/000000/edit--v2.png"/></button>}
            <button onClick={handleCancel} className="edit_btn"><img style={{height: '15px'}} src="https://img.icons8.com/fluency-systems-filled/48/000000/x.png"/></button>
          </div>
        </div>
      )}
      <div className="done frame">Demo</div>
    </div>
  );
});

export default SingleTodo;
