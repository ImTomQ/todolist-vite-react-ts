import React, { useEffect, useState } from 'react'
import './App.css'
import InputFields from './components/InputFields/InputFields'
import TodoList from './components/TodoList/TodoList'
import { Todo } from './models/models'

const App: React.FC = () => {

  const inputRef = React.createRef<HTMLInputElement>()
  const [todoList, setTodoList] = useState<Array<Todo>>([])

  
  const handleAddTodo = (): void => {
//     e.preventDefault;
// console.log(e.target.value);
//     if(e.target.value) {
  //       setTodoList([...todoList, {id: Date.now(), name: e.target.value, isDone: false}])
  //     }
  inputRef.current?.focus()
  console.log(inputRef);
  }

  return (
    <div className="app">
      <InputFields inputRef={inputRef} handleAddTodo={handleAddTodo}/>
      <TodoList todoList={todoList}/>
    </div>
  )
}

export default App
