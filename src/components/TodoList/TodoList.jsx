import Todoitem from "../TodoItem/Todoitem";

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

export default TodoList;