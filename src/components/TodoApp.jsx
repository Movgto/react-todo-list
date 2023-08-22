import Header from "./Header";
import '@/stylesheets/TodoApp.scss';
import TodosLogic from "./TodosLogic";
const TodoApp = () => {
  return (
    <>
      <Header />
      <TodosLogic />
    </>
  );
};

export default TodoApp;