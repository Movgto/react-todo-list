import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleChange, delTodo }) => {
  return (
    <ul>
      {todos.map((task) => {
        return (
          <TodoItem key={task.id} todo={task} handleChange={handleChange} delTodo={delTodo} />
        ); 
      })}
    </ul>      
  );
};

export default TodoList;