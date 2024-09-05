import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import './styles/App.css'


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isComplete: false}]
    setTodos(newTodos)
  }


  return (
    <>
      <div className='App'>
          <h1>Todo App</h1>
          <TodoForm addTodo={addTodo}></TodoForm>
          <TodoList></TodoList>
      </div>
    </>
  )
}

export default App
