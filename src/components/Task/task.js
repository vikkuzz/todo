import React, { Component } from "react";

import Timer from "../timer";
import SetTimer from "../SetTimer";

export default class Task extends Component {
  render() {
    let {
      description,
      totalInSec,
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
            defaultChecked={checked}
          ></input>
          <label>
            <span className="title">{description}</span>
            <SetTimer totalInSec={totalInSec} />
            <span className="created">
              создано <Timer time={time} /> назад
            </span>
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
