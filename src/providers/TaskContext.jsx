import { createContext, useState } from "react";

export const TaskContext = createContext({});

export const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (newTask) => {
    setTaskList(prev => [...prev, newTask]);
  };

  return (
    <TaskContext.Provider value={{ taskList, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};