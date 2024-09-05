import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import './styles/App.css'
import TodoFilter from './components/TodoFilter/TodoFilter'


// Helper function to format the current time
const formatDateTime = () =>{
  const now = new Date();
  const options = {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
  };
  return now.toLocaleString('en-US', options).replace(/,/, '');
};


function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');


  const addTodo = text => {
    const currentDueTime = formatDateTime(); // generate time
    const newTodos = [...todos, {text, isComplete: false, dueTime: currentDueTime}]
    setTodos(newTodos)
  }

  const markComplete = index =>{
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos)
  }

  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
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

          <TodoList todos={filteredTodos} 
              markComplete={markComplete} 
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              ></TodoList>
      </div>
    </>
  )
}

export default App
