import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext({});

export const TaskProvider = ({ children }) => {
  const getItems = () => JSON.parse(localStorage.getItem("tasks")) || [];

  const setItems = () => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  };

  const [taskList, setTaskList] = useState(getItems());

  useEffect(() => {
    setItems();
  }, [taskList]);

  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const addTask = (newTask) => {
    setTaskList((prev) => [...prev, newTask]);
  };

  const removeTask = (removingId) => {
    const newList = taskList.filter((task) => task.id !== removingId);
    setTaskList(newList);
  };

  const startUpdatingTask = (task) => {
    setEditingId(task.id);
    setEditingValue(task.name);
  };

  const updateTask = (event) => {
    event.preventDefault();
    if (!editingValue.trim()) return;
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === editingId ? { ...task, name: editingValue } : task,
      ),
    );
    setEditingId(null);
    setEditingValue("");
  };

  const completeTask = (completingId) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === completingId ? { ...task, done: !task.done } : task,
      ),
    );
  };

  return (
    <TaskContext.Provider
      value={{
        taskList,
        addTask,
        removeTask,
        editingId,
        setEditingId,
        editingValue,
        setEditingValue,
        startUpdatingTask,
        updateTask,
        completeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
