import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import './styles/App.css'
import TodoFilter from './components/TodoFilter/TodoFilter'


function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

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

  // filtering logic
  const filteredTodos = todos.filter((todo) => {
      if(filter === 'Completed'){
        return todo.isComplete
      } else if(filter === 'Incomplete'){
        return !todo.isComplete
      }
      return true; // All
  })

  return (
    <>
      <h1>Todo App</h1>
      <div className='App'>
          <TodoForm addTodo={addTodo}></TodoForm>
          {/* conditionally render the filter btns  */}
          {todos.length > 0 && <TodoFilter
            filter={filter} setFilter={setFilter}></TodoFilter>}
          <TodoList todos={filteredTodos} markComplete={markComplete} deleteTodo={deleteTodo}></TodoList>
      </div>
    </>
  )
}

export default App
