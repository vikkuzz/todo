import Task from "../Task";

const TaskList = ({
  todos,

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
    let filterArr = todos.filter((item) => {
      if (!item.done) {
        return item;
      }
    });
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
    let filterArr = todos.filter((item) => {
      if (item.done) {
        return item;
      }
    });
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

  return <ul className="todo-list">{elem}</ul>;
};

export default TaskList;
