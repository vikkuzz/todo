import Task from "../Task";

const TaskList = ({
  todos,
  filter,
  onDeleted,
  onToggleDone,
  onToggleEdit,
  onEditTask,
  startTimer,
}) => {
  const checked = true;

  let elem = null;
  let filterArr = todos;

  if (filter === "Все") {
    filterArr = todos.filter((item) => item);
  } else if (filter === "Актив") {
    filterArr = todos.filter((item) => !item.done);
  } else if (filter === "Завершен") {
    filterArr = todos.filter((item) => item.done);
  }

  elem = filterArr.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <Task
        key={id}
        {...itemProps}
        startTimer={() => startTimer(id)}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
        onToggleEdit={() => onToggleEdit(id)}
        onEditTask={(e) => onEditTask(id, e)}
        checked={checked}
      />
    );
  });

  return <ul className="todo-list">{elem}</ul>;
};

export default TaskList;
