import { useContext, useEffect, useRef, useState } from "react";
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

  const isEditing = editingId === task.id;

  const handleCancel = () => {
    setEditingValue(task.name);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  }, [isEditing]);

  return (
    <>
      {isEditing ? (
        <div onSubmit={updateTask}>
          <form>
            <input
              ref={inputRef}
              value={editingValue}
              onChange={(e) => setEditingValue(e.target.value)}
            />
            <button type="submit">Salvar</button>
          </form>
          <button onClick={() => setEditingId(null)}>Cancelar</button>
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
