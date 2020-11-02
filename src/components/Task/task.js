import React, { Component } from "react";

export default class Task extends Component {
  editItem = () => {
    this.setState({
      edit: !this.state.edit,
      finish: false,
    });
  };

  completeTask = () => {
    this.setState({
      done: !this.state.done,
      finish: false,
    });
  };

  finishEditItem = (e) => {
    if (e.key === "Enter") {
      this.setState({
        finish: !this.state.finish,
        edit: false,
        text: e.target.value,
      });
    }
  };

  state = {
    done: false,
    edit: false,
    finish: false,
    text: this.props.description,
  };

  render() {
    let { description, onDeleted, id } = this.props;
    let { done, edit, finish, text } = this.state;

    let classNames = "";

    if (edit) {
      classNames = "editing";
    }
    if (done) {
      classNames = "completed";
    }
    if (finish) {
      console.log("wtf?");
      classNames = "";
      description = text;
    }

    return (
      <li key={id} className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={this.completeTask}
          ></input>
          <label>
            <span className="description">{text}</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button
            className="icon icon-edit"
            onClick={() => this.editItem({ id })}
          ></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <input
          type="text"
          className="edit"
          defaultValue={this.state.text}
          onKeyDown={this.finishEditItem}
        ></input>
      </li>
    );
  }
}
