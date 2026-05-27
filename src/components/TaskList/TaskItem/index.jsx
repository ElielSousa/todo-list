import { useContext } from "react";
import { TaskContext } from "../../../providers/TaskContext";

const TaskItem = ({ task }) => {
  const { removeTask } = useContext(TaskContext);

  return (
    <li>
      <p>{task.name}</p>
      <button>Editar</button>
      <button onClick={() => removeTask(task.id)}>Excluir</button>
    </li>
  );
};

export default TaskItem;