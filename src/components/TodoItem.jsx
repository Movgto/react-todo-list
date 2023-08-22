const TodoItem = ( { todo, handleChange, delTodo} ) => {

  return (
    <li className='todo-item'>
      <input type='checkbox' checked={todo.completed} onChange={() => handleChange(todo.id)} />
      {todo.title}
      <button type='button' onClick={() => delTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;