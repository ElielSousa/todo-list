const TaskItem = ({ task }) => {
  return (
    <li>
      <p>{task.name}</p>
      <button>Editar</button>
      <button>Excluir</button>
    </li>
  );
};

export default TaskItem;