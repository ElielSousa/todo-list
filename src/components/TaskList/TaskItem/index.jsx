import { useContext, useState } from "react";
import { TaskContext } from "../../../providers/TaskContext";

const TaskItem = ({ task }) => {
  const {
    removeTask,
    updateTask,
    editingId,
    setEditingId,
    editingValue,
    setEditingValue,
    startUpdatingTask,
  } = useContext(TaskContext);

  const handleCancel = () => {
    setEditingValue(task.name);
  };

  return (
    <>
      {editingId === task.id ? (
        <div>
          <input
            value={editingValue}
            onChange={(e) => setEditingValue(e.target.value)}
          />
          <button onClick={updateTask}>Salvar</button>
          <button onClick={() => setEditingId(null)}>Cancelar</button>
        </div>
      ) : (
        <li>
          <p>{task.name}</p>
          <button onClick={() => startUpdatingTask(task)}>Editar</button>
          <button onClick={() => removeTask(task.id)}>Excluir</button>
        </li>
      )}
    </>
  );
};

export default TaskItem;
