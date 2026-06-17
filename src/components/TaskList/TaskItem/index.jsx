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
    completeTask,
  } = useContext(TaskContext);

  const handleCancel = () => {
    setEditingValue(task.name);
  };

  return (
    <>
      {editingId === task.id ? (
        <div onSubmit={updateTask}>
          <form>
            <input
              value={editingValue}
              onChange={(e) => setEditingValue(e.target.value)}
              checked={true}
            />
            <button type="submit">Salvar</button>
            <button onClick={() => setEditingId(null)}>Cancelar</button>
          </form>
        </div>
      ) : (
        <li>
          <input
            type="checkbox"
            onChange={() => completeTask(task.id)}
            checked={task.done}
          />
          <p>{task.name}</p>
          <button onClick={() => startUpdatingTask(task)}>Editar</button>
          <button onClick={() => removeTask(task.id)}>Excluir</button>
        </li>
      )}
    </>
  );
};

export default TaskItem;
