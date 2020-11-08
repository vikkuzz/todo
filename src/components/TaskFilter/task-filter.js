import React, { Component } from "react";

export default class TaskFilter extends Component {
  state = {
    all: true,
    active: false,
    completed: false,
  };

  render() {
    const {
      // showActiveTask,
      // showCompletedTask,
      // showAllTask,
      onFilterTarget,
    } = this.props;

    let classNames = "selected";

    return (
      <ul className="filters" onClick={onFilterTarget}>
        <li>
          <button className={classNames}>All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
    );
  }
}
