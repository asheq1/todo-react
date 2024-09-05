
const Todoitem = ({ todo, index, markComplete, deleteTodo }) => {
    return (
      <div className="toto-item">
            <span className={`todo-text ${todo.isComplete ? 'complete': ''}`}>
                {todo.text}
            </span>
            <div className="todo-actions">
                <button onClick={() => markComplete(index)}>Complete</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
      </div>
    );
  };
  

export default Todoitem;