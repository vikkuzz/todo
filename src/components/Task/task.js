import React, { Component } from "react";
import { formatDistanceToNowStrict } from "date-fns";

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
      time,
      checked,
    } = this.props;

    let timer = formatDistanceToNowStrict(time);

    let classNames = "";

    if (edit) {
      classNames = "editing";
    }
    if (done) {
      classNames = "completed";
    }
    if (!done) {
      checked = false;
    }

    return (
      <li key={id} className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={onToggleDone}
            checked={checked}
          ></input>
          <label>
            <span className="description">{description}</span>
            <span className="created">создано {timer} назад</span>
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
