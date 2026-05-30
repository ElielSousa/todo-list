import { useContext, useState } from "react";
import { TaskContext } from "../../providers/TaskContext";

const TaskInput = () => {
  const { addTask } = useContext(TaskContext);
  const [taskName, setTaskName] = useState("");
  const task = {
    id: Date.now(),
    name: taskName,
    done: false
  };

  const handleSubmit = () => {
    if (taskName.trim()) {
      addTask(task);
      setTaskName("");
    }
  };

  return (
    <>
      <input placeholder="Escreva o nome da tarefa" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      <button onClick={handleSubmit}>Criar</button>
    </>
  );
};

export default TaskInput;