import { useState } from 'react';
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

const todoData = [
  {
    id: 1,
    title: 'Setup development environment',
    completed: true,
  },
  {
    id: 2,
    title: 'Develop website and content',
    completed: false,
  },
  {
    id: 3,
    title: 'Deploy to live server',
    completed: false,
  },
]

const TodosLogic = () => {
  const [data, setData] = useState(todoData);

  const handleChange = (id) => {
    setData((prevState) => {
      return (prevState.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }));
    });
  };

  const delTodo = (id) => {
    setData((prevState) => {
      return (prevState.filter((task) => {
        return task.id !== id;
      }));
    });
  };
  return (
    <div id='todos-ctr'>
      <InputTodo data={data} setData={setData} />
      <TodoList todos={data} handleChange={handleChange} delTodo={delTodo} />
    </div>
  );
};

export default TodosLogic;