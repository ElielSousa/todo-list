import { useContext, useState } from "react";
import { TaskContext } from "../../../providers/TaskContext";

const TaskItem = ({ task }) => {
  const { removeTask, updateTask, setUpdatingTask } = useContext(TaskContext);
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [newTaskName, setNewTaskName] = useState(task.name);

  const handleSubmit = () => {
    if (newTaskName.trim()) {
      task.name = newTaskName;
      setUpdatingTask(task);
      updateTask(task.id);
      setShowUpdateInput(false);
    }
  };

  const handleCancel = () => {
    setNewTaskName(task.name);
    setShowUpdateInput(false);
  };

  return (
    <>
      {showUpdateInput ? (
        <div>
          <input value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} />
          <button onClick={handleSubmit}>Salvar</button>
          <button onClick={handleCancel}>Cancelar</button>
        </div>
      ) : (
        <li>
          <p>{task.name}</p>
          <button onClick={() => setShowUpdateInput(true)}>Editar</button>
          <button onClick={() => removeTask(task.id)}>Excluir</button>
        </li>
      )}
    </>
  );
};

export default TaskItem;