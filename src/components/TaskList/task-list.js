import Task from "../Task";

const TaskList = ({
  todos,
  all,
  active,
  completed,
  filter,
  onDeleted,
  onToggleDone,
  onToggleEdit,
  onEditTask,
}) => {
  let elem = null;
  if (filter.all) {
    elem = todos.map((item) => {
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
  }
  if (filter.active) {
    elem = active.map((item) => {
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
  }
  if (filter.completed) {
    elem = completed.map((item) => {
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
  }

  return <ul className="todo-list">{elem}</ul>;
};

export default TaskList;
