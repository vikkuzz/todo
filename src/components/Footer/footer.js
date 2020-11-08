import React, { Component } from "react";

import TaskFilter from "../TaskFilter";

export default class Footer extends Component {
  render() {
    const {
      doneCount,
      todoCount,
      showActiveTask,
      showCompletedTask,
      //showAllTask,
      onFilterTarget,
    } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{doneCount} task completed</span>
        <span className="todo-count">{todoCount} task left</span>
        <TaskFilter
          showActiveTask={() => showActiveTask("done")}
          showCompletedTask={() => showCompletedTask("done")}
          //showAllTask={() => showAllTask()}
          onFilterTarget={(e) => onFilterTarget(e)}
        />
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}
