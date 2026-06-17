import { useContext, useEffect, useRef, useState } from "react";
import { TaskContext } from "../../providers/TaskContext";

const TaskInput = () => {
  const { addTask } = useContext(TaskContext);
  const [taskName, setTaskName] = useState("");
  const task = {
    id: Date.now(),
    name: taskName,
    done: false,
  };
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim()) {
      addTask(task);
      setTaskName("");
      inputRef.current.focus();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          placeholder="Escreva o nome da tarefa"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">Criar</button>
      </form>
    </>
  );
};

export default TaskInput;
