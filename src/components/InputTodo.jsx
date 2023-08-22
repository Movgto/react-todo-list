import { useState } from "react";

const InputTodo = ({ data, setData }) => {
  const [title, setTitle] = useState('');

  const newTask = (title) => {
    console.log(title);
    if (title.length <= 0) {
      console.log('The title is empty');
      return;
    }
    setData([
      ...data,
      {
        id: data.length + 1,
        title: title,
        completed: false,
      }
    ]);
    setTitle('');
  };

  return (
    <div>
      <input type='text' placeholder="New task" onChange={(e) => setTitle(e.target.value)} value={title} />
      <button type='button' onClick={() => newTask(title)}>Add new task</button>
    </div>
  );
}

export default InputTodo;