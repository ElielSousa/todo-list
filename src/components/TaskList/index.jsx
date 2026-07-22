import { useContext, useState } from "react";
import { TaskContext } from "../../providers/TaskContext";
import TaskItem from "./TaskItem";
import TaskFilters from "../TaskFilters";
import List from "./styles";

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
    <List>
      <div className="filters">
        <TaskFilters filter={filter} onChangeFilter={setFilter} />
      </div>
      {filteredTasks.length ? (
        <ul>
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <p>Nenhuma tarefa aqui...</p>
      )}
    </List>
  );
};

export default TaskList;
