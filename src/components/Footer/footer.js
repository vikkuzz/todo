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
      deleteCompletedTask,
    } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">сделано: {doneCount}</span>
        <span className="todo-count"> осталось: {todoCount}</span>
        <TaskFilter
          showActiveTask={() => showActiveTask("done")}
          showCompletedTask={() => showCompletedTask("done")}
          //showAllTask={() => showAllTask()}
          onFilterTarget={(e) => onFilterTarget(e)}
        />
        <button className="clear-completed" onClick={deleteCompletedTask}>
          Удалить завершенные
        </button>
      </footer>
    );
  }
}
