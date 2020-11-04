import Task from "../Task";

const TaskList = ({
  todos,
  onDeleted,
  onToggleDone,
  onToggleEdit,
  onEditTask,
}) => {
  const elem = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <Task
        key={id}
        {...itemProps}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
        onToggleEdit={() => onToggleEdit(id)}
        onEditTask={(e) => onEditTask(id, e)}
      />
    );
  });
  return <ul className="todo-list">{elem}</ul>;
};

export default TaskList;
