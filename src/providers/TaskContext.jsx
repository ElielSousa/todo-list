import { createContext, useState } from "react";

export const TaskContext = createContext({});

export const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (newTask) => {
    setTaskList(prev => [...prev, newTask]);
  };

  const removeTask = (removingId) => {
    const newList = taskList.filter(task => task.id !== removingId);
    setTaskList(newList);
  };

  return (
    <TaskContext.Provider value={{ taskList, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};