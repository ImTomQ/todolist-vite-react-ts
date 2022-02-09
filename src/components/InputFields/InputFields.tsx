import React from "react";
import "./styles.css";

interface Props {
  handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  ref: React.MutableRefObject<HTMLInputElement | null>;
}

const InputFields = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { handleAddTodo } = props;

  return (
    <form className="form" onSubmit={handleAddTodo}>
      <input type="text" ref={ref} className="input" />
      <button type="submit" className="button">
        add
      </button>
    </form>
  );
});

export default InputFields;
