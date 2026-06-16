import { useContext, useState } from "react";
import { TaskContext } from "../../providers/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { taskList } = useContext(TaskContext);
  const [filter, setFilter] = useState("all");

  const filteredTasks = taskList.filter((task) => {
    switch (filter) {
      case "pending":
        return !task.done;
      case "completed":
        return task.done;
      default:
        return true;
    }
  });

  return (
    <>
      <button onClick={() => setFilter("all")}>Todas</button>
      <button onClick={() => setFilter("pending")}>Pendentes</button>
      <button onClick={() => setFilter("completed")}>Concluídas</button>
      {filteredTasks.length ? (
        <ul>
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <p>Nenhuma tarefa aqui...</p>
      )}
    </>
  );
};

export default TaskList;
