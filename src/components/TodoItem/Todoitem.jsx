import PropTypes from 'prop-types';
import Done from '../../assets/done.png'
import Delete from '../../assets/delete.png'
import Edit from '../../assets/edit.png'
import Save from '../../assets/save.png'
import { useState } from 'react';


const Todoitem = ({ todo, index, markComplete, deleteTodo, editTodo }) => {
  const [isEditing, setEditing] = useState(false); // track if this editing
  const [newText, setNewText] = useState(todo.text) // store the new text when editing
  
  // handle saving the editing text
  const handleSave = () =>{
    if(newText.trim()){
      editTodo(index, newText) // update the todo text
    }
    setEditing(false) // exit edit mode
  };

  return (
      <div className="toto-item">
          {/* if isEditing is true, show input; otherwise, show span  */}
          {
              isEditing ? (
                <input 
                  className='todo-input'
                  value={newText}
                  type="text"
                  onChange={(e) => setNewText(e.target.value)} />
              ) : (
                <span className={`todo-text ${todo.isComplete ? 'complete': ''}`}>
                    {todo.text}
                </span>
              )}

             {/* Display Due time   */}
             <div className='due-time'>
                <p>{todo.dueTime}</p>
             </div>   


            <div className="todo-actions">
                {
                  isEditing ? (
                    <button onClick={handleSave}>
                        <img src={Save} alt="Save" />
                    </button>
                  ) : (
                    <button onClick={() => setEditing(true)}>
                      <img src={Edit} alt="Edit todo" />
                    </button>
                  )}

                <button onClick={() => markComplete(index)}>
                  <img src={Done} alt="Mark Complete" />
                </button>
                <button onClick={() => deleteTodo(index)}>
                 <img src={Delete} alt="Delete Todo" />
                 </button>
            </div>
      </div>
    );
  };

Todoitem.propTypes = {
    todo: PropTypes.array.isRequired,
    index: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default Todoitem;