import Task from "../Task";

const TaskList = ({
  todos,

  filter,
  onDeleted,
  onToggleDone,
  onToggleEdit,
  onEditTask,
}) => {
  const checked = true;

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
          checked={checked}
        />
      );
    });
  }
  if (filter.active) {
    let filterArr = todos.filter((item) => !item.done);
    elem = filterArr.map((item) => {
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
    let filterArr = todos.filter((item) => item.done);
    elem = filterArr.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <Task
          key={id}
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleEdit={() => onToggleEdit(id)}
          onEditTask={(e) => onEditTask(id, e)}
          checked={checked}
        />
      );
    });
  }

  return <ul className="todo-list">{elem}</ul>;
};

export default TaskList;
