import TaskInput from "../TaskInput";
import TaskList from "../TaskList";

const Layout = () => {
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Layout;
