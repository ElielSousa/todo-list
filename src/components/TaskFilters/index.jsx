import Button from "./styles";

const TaskFilters = ({ filter, onChangeFilter }) => {
  const filters = [
    { value: "all", label: "Todas" },
    { value: "pending", label: "Pendentes" },
    { value: "completed", label: "Concluídas" },
  ];

  return (
    <>
      {filters.map((item) => (
        <Button
          $active={filter === item.value}
          onClick={() => onChangeFilter(item.value)}
          key={item.value}
        >
          {item.label}
        </Button>
      ))}
    </>
  );
};

export default TaskFilters;
