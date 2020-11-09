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
          <button className={classNames}>Все</button>
        </li>
        <li>
          <button>Актив</button>
        </li>
        <li>
          <button>Завершен</button>
        </li>
      </ul>
    );
  }
}
