import React from 'react';
import { Todo } from '../../models/models';

interface Props {
  todoList: Array<Todo>
}

const TodoList: React.FC<Props> = (props) => {
  const {todoList} = props
  return (
    <div>
      {todoList?.map(todo => <div>
        {todo.name}
      </div>)}
    </div>
  )
}

export default TodoList