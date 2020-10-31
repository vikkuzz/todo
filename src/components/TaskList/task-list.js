import Task from "../Task";

const TaskList = ({ todos, onDeleted }) => {
  const elem = todos.map((item) => {
    const { id, ...itemProps } = item;
    return <Task key={id} {...itemProps} onDeleted={() => onDeleted(id)} />;
  });
  return <ul className="todo-list">{elem}</ul>;
};

export default TaskList;
