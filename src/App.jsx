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

  const markComplete = index =>{
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos)
  }

  const deleteTodo = index => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos)
  }

  return (
    <>
        <h1>Todo App</h1>
      <div className='App'>
          <TodoForm addTodo={addTodo}></TodoForm>
          <TodoList todos={todos} markComplete={markComplete} deleteTodo={deleteTodo}></TodoList>
      </div>
    </>
  )
}

export default App
