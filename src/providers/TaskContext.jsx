import { createContext, useState } from "react";

export const TaskContext = createContext({});

export const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [updatingTask, setUpdatingTask] = useState({});

  const addTask = (newTask) => {
    setTaskList(prev => [...prev, newTask]);
  };

  const removeTask = (removingId) => {
    const newList = taskList.filter(task => task.id !== removingId);
    setTaskList(newList);
  };

  const updateTask = (updatingId) => {
    const newList = taskList.map(task => task.id === updatingId ? updateTask : task);
  };

  return (
    <TaskContext.Provider value={{ taskList, addTask, removeTask, setUpdatingTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};