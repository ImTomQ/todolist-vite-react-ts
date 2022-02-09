import React from 'react';
import './styles.css';

interface Props {
  handleAddTodo: () => void
  inputRef: React.RefObject<HTMLInputElement>
}

const InputFields: React.FC<Props> = React.forwardRef<HTMLInputElement, Props>((props, inputRef) => {
  const { handleAddTodo } = props

  return (
    <div className="form">
      <input type="text" ref={inputRef} className="input" />
      <button type="button" onClick={handleAddTodo} className="button">add</button>
    </div>
  )
});

export default InputFields