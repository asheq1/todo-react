import PropTypes from 'prop-types';
import { useState } from 'react';

const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        
        if(!todo.trim()){
            setError('Todo cannot be empty or only spaces!')
            return;
        }

        // clear the error and add the todo
        setError('')
        addTodo(todo)
        setTodo('') // clear the input

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={todo}
                    onChange ={(e)=> setTodo(e.target.value)}
                    placeholder='Add a new task...'
                    />
                <button type="submit">Add</button>
            </form>

            {/* Display error message if come  */}
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    );
};


TodoForm.proptypes = {
    

}


export default TodoForm;