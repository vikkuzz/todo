import Task from "../Task";

const TaskList = ({ todos }) => {
  const elem = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id}>
        <Task {...itemProps} />
      </li>
    );
  });
  return <ul className="todo-list">{elem}</ul>;
};

export default TaskList;
