import React, { Component } from "react";
import { formatDistanceToNowStrict } from "date-fns";

export default class Task extends Component {
  interval = () => setInterval(this.updateTime, 1000);

  updateTime = (id) => {
    this.props.startTimer(id);
  };

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

    let timeCreate = formatDistanceToNowStrict(time);

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

    if (totalInSec === 0) {
      console.log("foo");
      clearInterval(this.interval);
    }

    let minutes = Math.floor(totalInSec / 60);
    let seconds = totalInSec % 60;

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
            <span className="description">
              <button
                className="icon icon-play"
                onClick={this.interval}
              ></button>
              <button className="icon icon-pause"></button>
              {`${minutes}:${seconds}`}
            </span>
            <span className="created">создано {timeCreate} назад</span>
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
