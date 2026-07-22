import TaskInput from "../TaskInput";
import TaskList from "../TaskList";
import Container from "./styles";

const Layout = () => {
  return (
    <Container>
      <div className="contentLimit">
        <h1 className="title">Lista de Tarefas</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Container>
  );
};

export default Layout;
