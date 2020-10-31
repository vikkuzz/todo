import React, { Component } from "react";

export default class Task extends Component {
  editItem = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };
  completeTask = () => {
    this.setState({
      done: !this.state.done,
    });
  };

  state = {
    done: false,
    edit: false,
  };

  render() {
    const { description, onDeleted, id } = this.props;
    const { done, edit } = this.state;

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
            onClick={this.completeTask}
          ></input>
          <label>
            <span className="description">{description}</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button className="icon icon-edit" onClick={this.editItem}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <input type="text" className="edit" defaultValue="Editing task"></input>
      </li>
    );
  }
}
