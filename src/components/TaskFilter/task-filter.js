import React, { Component } from "react";

export default class TaskFilter extends Component {
  render() {
    const { showActiveTask, showCompletedTask, showAllTask } = this.props;

    let classNames = "selected";

    return (
      <ul className="filters">
        <li>
          <button className={classNames} onClick={showAllTask}>
            All
          </button>
        </li>
        <li>
          <button onClick={showActiveTask}>Active</button>
        </li>
        <li>
          <button onClick={showCompletedTask}>Completed</button>
        </li>
      </ul>
    );
  }
}

/*
const TaskFilter = () => {
  return (
    <ul className="filters">
      <li>
        <button className="selected">All</button>
      </li>
      <li>
        <button>Active</button>
      </li>
      <li>
        <button>Completed</button>
      </li>
    </ul>
  );
};

*/
