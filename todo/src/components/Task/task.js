const Task = (props) => {
  return (
    <div className="view">
      <input className="toggle" type="checkbox"></input>
      <label>
        <span className="description">{props.description}</span>
        <span className="created">created 5 minutes ago</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
  );
};

export default Task;
