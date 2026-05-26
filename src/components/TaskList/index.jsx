import { useContext } from "react";
import { TaskContext } from "../../providers/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { taskList } = useContext(TaskContext);
  return (
    <ul>
      {taskList.map(task => <TaskItem key={task.id} task={task} />)}
    </ul>
  );
};

export default TaskList;