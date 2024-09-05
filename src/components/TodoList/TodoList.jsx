import Todoitem from "../TodoItem/Todoitem";
import PropTypes from 'prop-types';

const TodoList = ({ todos, markComplete, deleteTodo }) => {
    return (
      <div>
        {todos.map((todo, index) => (
          <Todoitem
            key={index}
            index={index}
            todo={todo}
            markComplete={markComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    );
  };

TodoList.propTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired 
}

export default TodoList;