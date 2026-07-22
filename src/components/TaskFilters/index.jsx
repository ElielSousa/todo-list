import Button from "./styles";

const TaskFilters = ({ filter, onChangeFilter }) => {
  const filters = [
    { value: "all", label: "Todas" },
    { value: "pending", label: "Pendentes" },
    { value: "completed", label: "Concluídas" },
  ];

  return (
    <>
      {filters.map((filter) => (
        <Button
          $active={filter === filter.value}
          onClick={() => onChangeFilter(filter.value)}
        >
          {filter.label}
        </Button>
      ))}
    </>
  );
};

export default TaskFilters;
