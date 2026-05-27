import { useContext } from "react";
import { TaskContext } from "../../providers/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { taskList } = useContext(TaskContext);
  return (
    <>
      {taskList.length ? (
        <ul>
          {taskList.map(task => <TaskItem key={task.id} task={task} />)}
        </ul>
      ) : (
        <p>Nenhuma tarefa adicionada</p>
      )}

    </>
  );
};

export default TaskList;