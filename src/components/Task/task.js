import React, { Component } from "react";

export default class Task extends Component {
  render() {
    let {
      description,
      onDeleted,
      id,
      onToggleDone,
      onToggleEdit,
      done,
      onEditTask,
      edit,
    } = this.props;

    let classNames = "";

    if (edit) {
      classNames = "editing";
    }
    if (done) {
      classNames = "completed";
    }

    return (
      <li key={id} className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={onToggleDone}
          ></input>
          <label>
            <span className="description">{description}</span>
            <span className="created">создано 5 минут назад</span>
          </label>
          <button className="icon icon-edit" onClick={onToggleEdit}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <input
          type="text"
          className="edit"
          defaultValue={description}
          onKeyDown={onEditTask}
        ></input>
      </li>
    );
  }
}
