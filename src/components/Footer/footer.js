import React, { Component } from "react";

import TaskFilter from "../TaskFilter";

export default class Footer extends Component {
  render() {
    const { doneCount } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{doneCount} task completed</span>
        <TaskFilter />
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}
